import test from "node:test";
import assert from "node:assert/strict";

import eleventyComputed from "../../_data/eleventyComputed.js";

const excludeFromCollections = eleventyComputed.eleventyExcludeFromCollections;

test("excludes contributor templates from Eleventy collections", () => {
  const page = {
    inputPath: "./docs/standards/standard.template.md",
    templateSyntax: "md"
  };

  assert.equal(excludeFromCollections({ page }), true);
});

test("includes regular Markdown pages in Eleventy collections", () => {
  const page = {
    inputPath: "./docs/standards/developer-testing.md",
    templateSyntax: "md"
  };

  assert.equal(excludeFromCollections({ page }), false);
});