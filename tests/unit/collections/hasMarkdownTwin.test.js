import test from "node:test";
import assert from "node:assert/strict";

import hasMarkdownTwin from "../../../lib/collections/hasMarkdownTwin.js";

const makeItem = ({ inputPath = "./docs/standards/accessibility.md", rawInput = "Some prose.", data = {} } = {}) => ({
  page: { inputPath },
  rawInput,
  data,
});

test("includes a Markdown-authored content page with a body", () => {
  assert.equal(hasMarkdownTwin(makeItem()), true);
});

test("includes loose Markdown content pages", () => {
  assert.equal(hasMarkdownTwin(makeItem({ inputPath: "./docs/about.md" })), true);
});

test("excludes non-Markdown (*.njk) sources", () => {
  assert.equal(hasMarkdownTwin(makeItem({ inputPath: "./docs/standards-requirements.njk" })), false);
});


test("excludes directory listing pages", () => {
  // the /standards/ (etc) pages don't have any body content so shouldn't render
  const item = makeItem({
    inputPath: "./docs/standards.md",
    rawInput: "",
    data: { pagination: { data: "collections.getAllStandardsOrderedByTitle" } },
  });
  assert.equal(hasMarkdownTwin(item), false);
});

test("excludes a Markdown page with an empty body", () => {
  assert.equal(hasMarkdownTwin(makeItem({ rawInput: "" })), false);
});

test("excludes a Markdown page whose body is only whitespace", () => {
  assert.equal(hasMarkdownTwin(makeItem({ rawInput: "   \n\t  " })), false);
});

test("excludes a Markdown page if missing page/data/rawInput", () => {
  assert.equal(hasMarkdownTwin({}), false);
  assert.equal(hasMarkdownTwin(undefined), false);
  assert.equal(hasMarkdownTwin({ page: { inputPath: "./docs/x.md" } }), false);
});
