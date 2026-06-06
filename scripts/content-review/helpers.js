import matter from "gray-matter";
import path from "node:path";
import { mapTagsToGuildLabels } from "./tagGuildLabelMapper.js";

export function parseBoolean(value, fallback = false) {
  if (value === undefined) return fallback;
  return /^true$/i.test(String(value).trim());
}

export function parseLabels(value) {
  return (value || "content")
    .split(",")
    .map((label) => label.trim())
    .filter(Boolean);
}

export function toPosixPath(filePath) {
  return filePath.split(path.sep).join("/");
}

export function stripFrontMatter(content) {
  return matter(content).content.trimStart();
}

export function parsePageHeaderMetadata(content) {
  const metadata = { ...matter(content).data };
  if (metadata.date instanceof Date && !Number.isNaN(metadata.date.getTime())) {
    metadata.date = metadata.date.toISOString().slice(0, 10);
  }
  return metadata;
}

export function isScannableContentFile(repoRelativePath) {
  const normalizedPath = toPosixPath(repoRelativePath);
  if (!/^docs\/(standards|principles|patterns)\/.+\.md$/.test(normalizedPath)) return false;
  return !normalizedPath.endsWith(".template.md") && !normalizedPath.endsWith("/index.md");
}

export function toPagePath(repoRelativePath) {
  const normalizedPath = toPosixPath(repoRelativePath);
  const withoutDocsPrefix = normalizedPath.replace(/^docs\//, "");
  const withoutExt = withoutDocsPrefix.replace(/\.md$/, "");
  if (withoutExt.endsWith("/index")) {
    return `/${withoutExt.slice(0, -"/index".length)}/`;
  }
  return `/${withoutExt}/`;
}

export function calculateAgeDays(dateIsoString, now = new Date()) {
  const reviewedAt = new Date(`${dateIsoString}T00:00:00.000Z`);
  if (Number.isNaN(reviewedAt.getTime())) return null;
  const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
  const ageMs = now.getTime() - reviewedAt.getTime();
  return Math.floor(ageMs / MILLISECONDS_PER_DAY);
}

export function createReviewKey(repoRelativePath) {
  return `review-key: ${toPosixPath(repoRelativePath)}`;
}

// Helper to map tags to guild labels (re-export for convenience)
export { mapTagsToGuildLabels };
