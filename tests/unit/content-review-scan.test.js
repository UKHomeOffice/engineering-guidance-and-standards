import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import { calculateAgeDays, isScannableContentFile, parsePageHeaderMetadata, toPagePath, createReviewKey } from "../../scripts/content-review/helpers.js";
import { scanRepository } from "../../scripts/content-review/scan.js";
import { buildIssuePayloadFactory } from "../../scripts/content-review/template.js";
import { runCli } from "../../scripts/content-review-scan.mjs";

test("parsePageHeaderMetadata extracts simple key values", () => {
  const content = `---
title: Keep it simple
date: 2025-01-08
---
body`;

  assert.deepEqual(parsePageHeaderMetadata(content), {
    title: "Keep it simple",
    date: "2025-01-08"
  });
});

test("parsePageHeaderMetadata strips inline comments and quotes", () => {
  const content = `---
title: "Quoted title"
date: 2023-12-31 # reviewed date
---
body`;

  assert.deepEqual(parsePageHeaderMetadata(content), {
    title: "Quoted title",
    date: "2023-12-31"
  });
});

test("isScannableContentFile allows content pages and excludes templates/index pages", () => {
  assert.equal(isScannableContentFile("docs/principles/keep-it-simple.md"), true);
  assert.equal(isScannableContentFile("docs/patterns/index.md"), false);
  assert.equal(isScannableContentFile("docs/standards/standard.template.md"), false);
  assert.equal(isScannableContentFile("docs/about.md"), false);
});

test("toPagePath maps docs markdown paths to site paths", () => {
  assert.equal(toPagePath("docs/principles/keep-it-simple.md"), "/principles/keep-it-simple/");
  assert.equal(toPagePath("docs/patterns/index.md"), "/patterns/");
});

test("calculateAgeDays returns full day difference", () => {
  const now = new Date("2026-05-09T00:00:00.000Z");
  assert.equal(calculateAgeDays("2026-05-08", now), 1);
  assert.equal(calculateAgeDays("2026-05-09", now), 0);
});

test("createReviewKey is deterministic per file", () => {
  assert.equal(
    createReviewKey("docs/principles/keep-it-simple.md"),
    "review-key: docs/principles/keep-it-simple.md"
  );
});

test("buildIssuePayload includes marker and review template sections", () => {

  const reviewContentTemplate = "**Which content do you think should be reviewed?**\n<!-- CONTENT_REVIEW_PAGE_URL -->\n<!-- CONTENT_REVIEW_REASON -->\n<!-- CONTENT_REVIEW_SOURCE_FILE -->\n<!-- CONTENT_REVIEW_KEY -->";
  const buildIssuePayload = buildIssuePayloadFactory(reviewContentTemplate);
  const issue = buildIssuePayload({
    repoRelativePath: "docs/principles/keep-it-simple.md",
    title: "Keep it simple",
    dateIso: "2025-01-08",
    ageDays: 100,
    siteRoot: "https://engineering.homeoffice.gov.uk",
    labels: ["content"]
  });

  assert.equal(issue.title, "[Content review] Keep it simple");
  assert.equal(issue.labels[0], "content");
  assert.match(issue.body, /\*\*Which content do you think should be reviewed\?\*\*/);
  assert.match(issue.body, /https:\/\/engineering\.homeoffice\.gov\.uk\/principles\/keep-it-simple\//);
  assert.match(issue.body, /Automated review cycle alert\. Last reviewed\/updated on 2025-01-08 \(100 days ago\)\./);
  assert.match(issue.body, /Source file: docs\/principles\/keep-it-simple\.md/);
  assert.match(issue.body, /<!-- review-key: docs\/principles\/keep-it-simple\.md -->/);
});

test("scanRepository returns overdue content and skips invalid dates", async () => {
  const tempRoot = await fs.mkdtemp(path.join(os.tmpdir(), "content-review-scan-"));

  await fs.mkdir(path.join(tempRoot, "docs", "principles"), { recursive: true });
  await fs.mkdir(path.join(tempRoot, "docs", "standards"), { recursive: true });
  await fs.mkdir(path.join(tempRoot, "docs", "patterns"), { recursive: true });

  await fs.writeFile(
    path.join(tempRoot, "docs", "principles", "old-page.md"),
    `---
title: Old page
date: 2025-01-01
---
Old`
  );

  await fs.writeFile(
    path.join(tempRoot, "docs", "principles", "new-page.md"),
    `---
title: New page
date: 2026-05-01
---
New`
  );

  await fs.writeFile(
    path.join(tempRoot, "docs", "standards", "invalid-date.md"),
    `---
title: Invalid date
date: 1 Jan 2025
---
Invalid`
  );


  const reviewContentTemplate = "**Which content do you think should be reviewed?**\n<!-- CONTENT_REVIEW_PAGE_URL -->\n<!-- CONTENT_REVIEW_REASON -->\n<!-- CONTENT_REVIEW_SOURCE_FILE -->\n<!-- CONTENT_REVIEW_KEY -->";
  const buildIssuePayload = buildIssuePayloadFactory(reviewContentTemplate);
  const result = await scanRepository({
    repoRoot: tempRoot,
    reviewWindowDays: 180,
    now: new Date("2026-05-09T00:00:00.000Z"),
    buildIssuePayload
  });

  assert.equal(result.overdue.length, 1);
  assert.equal(result.overdue[0].filePath, "docs/principles/old-page.md");
  assert.equal(result.skipped.length, 1);
  assert.equal(result.skipped[0].filePath, "docs/standards/invalid-date.md");
});

test("runCli dry run outputs generated issues", async () => {
  const tempRoot = await fs.mkdtemp(path.join(os.tmpdir(), "content-review-cli-"));
  const originalCwd = process.cwd();

  await fs.mkdir(path.join(tempRoot, "docs", "principles"), { recursive: true });
  await fs.mkdir(path.join(tempRoot, "docs", "standards"), { recursive: true });
  await fs.mkdir(path.join(tempRoot, "docs", "patterns"), { recursive: true });

  await fs.writeFile(
    path.join(tempRoot, "docs", "principles", "old-page.md"),
    `---
title: Old page
date: 2025-01-01
---
Old`
  );

  const lines = [];

  process.chdir(tempRoot);

  try {
    await runCli({
      env: {
        DRY_RUN: "true",
        REVIEW_WINDOW_DAYS: "180",
        NOW: "2026-05-09T00:00:00.000Z"
      },
      stdout: (line) => lines.push(line)
    });
  } finally {
    process.chdir(originalCwd);
  }

  assert.match(lines.join("\n"), /Would create issue for docs\/principles\/old-page\.md/);
  assert.match(lines.join("\n"), /Issue title: \[Content review\] Old page/);
  assert.match(lines.join("\n"), /\*\*Which content do you think should be reviewed\?\*\*/);
  assert.match(lines.join("\n"), /https:\/\/engineering\.homeoffice\.gov\.uk\/principles\/old-page\//);
});
