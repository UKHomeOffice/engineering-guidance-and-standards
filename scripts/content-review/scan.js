import fs from "node:fs/promises";
import path from "node:path";
import { toPosixPath, isScannableContentFile, parsePageHeaderMetadata, calculateAgeDays, toPagePath, createReviewKey, mapTagsToGuildLabels } from "./helpers.js";

export async function findMarkdownFiles(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findMarkdownFiles(fullPath)));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }
  return files;
}

export async function scanRepository({
  repoRoot = process.cwd(),
  reviewWindowDays = 180,
  siteRoot = "https://engineering.homeoffice.gov.uk",
  now = new Date(),
  buildIssuePayload
} = {}) {
  const roots = [
    path.join(repoRoot, "docs", "standards"),
    path.join(repoRoot, "docs", "principles"),
    path.join(repoRoot, "docs", "patterns")
  ];
  const absoluteFiles = [];
  for (const root of roots) {
    absoluteFiles.push(...(await findMarkdownFiles(root)));
  }
  const overdue = [];
  const skipped = [];
  for (const absolutePath of absoluteFiles) {
    const repoRelativePath = toPosixPath(path.relative(repoRoot, absolutePath));
    if (!isScannableContentFile(repoRelativePath)) continue;
    const content = await fs.readFile(absolutePath, "utf8");
    const pageHeaderMetadata = parsePageHeaderMetadata(content);
    if (!pageHeaderMetadata.date || !/^\d{4}-\d{2}-\d{2}$/.test(pageHeaderMetadata.date)) {
      skipped.push({ filePath: repoRelativePath, reason: "missing-or-invalid-date" });
      continue;
    }
    const ageDays = calculateAgeDays(pageHeaderMetadata.date, now);
    if (ageDays === null || ageDays < reviewWindowDays) continue;
    // Capture tags and map to guild labels
    const tags = Array.isArray(pageHeaderMetadata.tags)
      ? pageHeaderMetadata.tags
      : typeof pageHeaderMetadata.tags === "string"
        ? pageHeaderMetadata.tags.split(",").map(t => t.trim()).filter(Boolean)
        : [];
    const guildLabels = mapTagsToGuildLabels(tags);
    overdue.push({
      filePath: repoRelativePath,
      dateIso: pageHeaderMetadata.date,
      ageDays,
      issue: buildIssuePayload({
        repoRelativePath,
        title: pageHeaderMetadata.title,
        dateIso: pageHeaderMetadata.date,
        ageDays,
        siteRoot,
        labels: guildLabels
      })
    });
  }
  return {
    scannedCount: absoluteFiles.length,
    overdue,
    skipped
  };
}
