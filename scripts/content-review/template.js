import fsSync from "node:fs";
import path from "node:path";
import { stripFrontMatter, toPosixPath, createReviewKey, toPagePath } from "./helpers.js";

const REVIEW_CONTENT_TEMPLATE_PATH = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  "../../.github/ISSUE_TEMPLATE/review-content.md"
);

export function loadReviewContentTemplate() {
  const templateFile = fsSync.readFileSync(REVIEW_CONTENT_TEMPLATE_PATH, "utf8");
  return stripFrontMatter(templateFile).trim();
}

export function buildPageUrl(siteRoot, pagePath) {
  const rootWithoutTrailingSlash = siteRoot.replace(/\/$/, "");
  return `${rootWithoutTrailingSlash}${pagePath}`;
}

export function populateReviewContentTemplate({ pageUrl, dateIso, ageDays, repoRelativePath, reviewKey, reviewContentTemplate }) {
  return reviewContentTemplate
    .replace("<!-- CONTENT_REVIEW_PAGE_URL -->", pageUrl)
    .replace(
      "<!-- CONTENT_REVIEW_REASON -->",
      `Automated review cycle alert. Last reviewed/updated on ${dateIso} (${ageDays} days ago).`
    )
    .replace("<!-- CONTENT_REVIEW_SOURCE_FILE -->", `Source file: ${toPosixPath(repoRelativePath)}`)
    .replace("<!-- CONTENT_REVIEW_KEY -->", `<!-- ${reviewKey} -->`);
}

export function buildIssuePayloadFactory(reviewContentTemplate) {
  return function buildIssuePayload({ repoRelativePath, title, dateIso, ageDays, siteRoot, labels }) {
    const pagePath = toPagePath(repoRelativePath);
    const pageUrl = buildPageUrl(siteRoot, pagePath);
    const reviewKey = createReviewKey(repoRelativePath);
    const safeTitle = title || path.basename(repoRelativePath, ".md");
    return {
      title: `[Content review] ${safeTitle}`,
      labels,
      body: populateReviewContentTemplate({
        pageUrl,
        dateIso,
        ageDays,
        repoRelativePath,
        reviewKey,
        reviewContentTemplate
      }),
      reviewKey,
      pageUrl
    };
  };
}
