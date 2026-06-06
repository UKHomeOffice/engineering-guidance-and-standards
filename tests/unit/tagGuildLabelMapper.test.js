import assert from 'node:assert/strict';
import { test } from 'node:test';
import { mapTagsToGuildLabels, TAG_TO_GUILD_LABEL_MAP } from "../../scripts/content-review/tagGuildLabelMapper.js";

test("returns correct label for a single known tag", () => {
  assert.deepEqual(mapTagsToGuildLabels(["Accessibility"]), ["accessibility"]);
});

test("returns correct labels for multiple known tags", () => {
  assert.deepEqual(mapTagsToGuildLabels(["Observability", "Quality engineering"]), [
    "Observability",
    "Quality engineering"
  ]);
});

test("ignores unknown tags", () => {
  assert.deepEqual(mapTagsToGuildLabels(["unknown", "Accessibility"]), [
    "accessibility"
  ]);
});

test("returns empty array for no tags", () => {
  assert.deepEqual(mapTagsToGuildLabels([]), []);
});

test("returns empty array for non-array input", () => {
  assert.deepEqual(mapTagsToGuildLabels(null), []);
  assert.deepEqual(mapTagsToGuildLabels(undefined), []);
  assert.deepEqual(mapTagsToGuildLabels(123), []);
});

test("trims tags and matches correctly", () => {
  assert.deepEqual(mapTagsToGuildLabels([" Accessibility ", "Observability"]), ["accessibility", "Observability"]);
});

test("filters out tags mapped to empty labels", () => {
  assert.equal(TAG_TO_GUILD_LABEL_MAP["API Design"], "");
  assert.deepEqual(mapTagsToGuildLabels(["API Design", "Accessibility"]), ["accessibility"]);
});
