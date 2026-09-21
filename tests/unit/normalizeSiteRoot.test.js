import test from "node:test";
import assert from "node:assert/strict";

import normalizeSiteRoot from "../../lib/normalizeSiteRoot.js";

test("adds a trailing slash when missing", () => {
  assert.equal(
    normalizeSiteRoot("https://engineering.homeoffice.gov.uk"),
    "https://engineering.homeoffice.gov.uk/"
  );
});

test("keeps exactly one trailing slash", () => {
  assert.equal(
    normalizeSiteRoot("https://engineering.homeoffice.gov.uk///"),
    "https://engineering.homeoffice.gov.uk/"
  );
});