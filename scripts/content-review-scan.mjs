// Scan standards, principles, and patterns content for overdue review dates.
// The script reads page header metadata from markdown files, identifies pages
// outside the review window, and can create deduplicated GitHub issues for them.

import path from "node:path";
import { pathToFileURL } from "node:url";
import { scanRepository } from "./content-review/scan.js";
import { buildIssuePayloadFactory, loadReviewContentTemplate } from "./content-review/template.js";
import { findExistingOpenIssueByKey, createIssue } from "./content-review/github.js";
import { parseBoolean, parseLabels } from "./content-review/helpers.js";

export async function runCli({ env = process.env, stdout = console.log } = {}) {
  const config = parseCliConfig(env);
  const reviewContentTemplate = loadReviewContentTemplate();
  const buildIssuePayload = buildIssuePayloadFactory(reviewContentTemplate);

  const scanResult = await scanRepository({
    reviewWindowDays: config.reviewWindowDays,
    siteRoot: config.siteRoot,
    now: config.now,
    buildIssuePayload
  });

  logScanResults(scanResult, stdout);

  if (config.dryRun) {
    handleDryRun(scanResult, stdout);
  } else {
    await handleIssueCreation(scanResult, config, stdout);
  }
}

function parseCliConfig(env) {
  return {
    dryRun: parseBoolean(env.DRY_RUN, true),
    reviewWindowDays: Number(env.REVIEW_WINDOW_DAYS || "180"),
    siteRoot: env.SITE_ROOT || "https://engineering.homeoffice.gov.uk",
    repository: env.GITHUB_REPOSITORY,
    token: env.GITHUB_TOKEN,
    labels: parseLabels(env.ISSUE_LABELS),
    maxIssuesPerRun: Number(env.MAX_ISSUES_PER_RUN || "0"),
    now: env.NOW ? new Date(env.NOW) : new Date()
  };
}

function logScanResults(scanResult, stdout) {
  stdout(`Scanned ${scanResult.scannedCount} markdown files.`);
  stdout(`Found ${scanResult.overdue.length} overdue content pages.`);
  stdout(`Skipped ${scanResult.skipped.length} pages due to metadata issues.`);

  if (scanResult.skipped.length > 0) {
    for (const skipped of scanResult.skipped) {
      stdout(`Skipped ${skipped.filePath} (${skipped.reason})`);
    }
  }
}

function handleDryRun(scanResult, stdout) {
  stdout("DRY_RUN is enabled. No issues will be created.");
  for (const content of scanResult.overdue) {
    stdout(`Would create issue for ${content.filePath} (${content.issue.pageUrl})`);
    stdout(`Issue title: ${content.issue.title}`);
    stdout(`Labels: ${Array.isArray(content.issue.labels) ? content.issue.labels.join(", ") : "(none)"}`);
    stdout(content.issue.body);
  }
}

async function handleIssueCreation(scanResult, config, stdout) {
  if (!config.token || !config.repository) {
    throw new Error("GITHUB_TOKEN and GITHUB_REPOSITORY are required when DRY_RUN is false");
  }

  let createdCount = 0;
  let existingCount = 0;

  for (const content of scanResult.overdue.slice(0, config.maxIssuesPerRun || scanResult.overdue.length)) {
    const issue = {
      ...content.issue,
      labels: config.labels
    };

    const exists = await findExistingOpenIssueByKey({
      token: config.token,
      repository: config.repository,
      reviewKey: issue.reviewKey
    });

    if (exists) {
      existingCount += 1;
      stdout(`Issue already exists for ${content.filePath}`);
      continue;
    }

    const created = await createIssue({
      token: config.token,
      repository: config.repository,
      issue
    });

    createdCount += 1;
    stdout(`Created issue #${created.number} for ${content.filePath}`);
  }

  stdout(`Done. Created: ${createdCount}. Existing open: ${existingCount}.`);
}

const isMainModule = process.argv[1]
  && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url;

if (isMainModule) {
  runCli().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
