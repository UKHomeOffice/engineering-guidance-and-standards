/**
 * Should this page get a clean Markdown twin (see docs/markdown-pages.njk)?
 *
 * It should if it's just Markdown but not if there's weird templating stuff,
 * so this filters out *.njk pages and directory listings (whose bodies are
 * empty, so the body check below catches them).
 */
export default function hasMarkdownTwin(item) {
    const page = item?.page ?? {};

    const isMarkdownSource = typeof page.inputPath === "string" && page.inputPath.endsWith(".md");
    const hasBody = typeof item?.rawInput === "string" && item.rawInput.trim().length > 0;

    return isMarkdownSource && hasBody;
}
