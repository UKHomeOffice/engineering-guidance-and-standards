import test from "node:test";
import assert from "node:assert/strict";

import postDate from "../../../lib/filters/postDate.js";

test("formats ISO date strings", () => {
  assert.equal(postDate("2026-06-30"), "30 June 2026");
});

test("formats Date objects", () => {
  assert.equal(postDate(new Date("2026-06-30T00:00:00.000Z")), "30 June 2026");
});

test("formats verbose JavaScript date strings", () => {
  const verboseDate = "Tue Jun 30 2026 01:00:00 GMT+0100 (British Summer Time)";
  assert.equal(postDate(verboseDate), "30 June 2026");
});

test("returns empty string for empty value", () => {
  assert.equal(postDate(undefined), "");
});

test("returns original value string when parsing fails", () => {
  assert.equal(postDate("not-a-date"), "not-a-date");
});
