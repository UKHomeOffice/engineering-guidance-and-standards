import test from "node:test";
import assert from "node:assert/strict";

import escapeXml from "../../../lib/filters/escapeXml.js";

test("returns original text when no escaping is needed", () => {
  assert.equal(escapeXml("https://example.com/standards/"), "https://example.com/standards/");
});

test("escapes XML special characters", () => {
  assert.equal(
    escapeXml(`&<>"'`),
    "&amp;&lt;&gt;&quot;&apos;"
  );
});

test("escapes ampersands in URL query strings", () => {
  assert.equal(
    escapeXml("https://example.com/search?type=standard&status=published"),
    "https://example.com/search?type=standard&amp;status=published"
  );
});

test("converts non-string values before escaping", () => {
  assert.equal(escapeXml(123), "123");
});