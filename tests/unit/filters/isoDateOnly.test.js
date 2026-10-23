import test from "node:test";
import assert from "node:assert/strict";

import isoDateOnly from "../../../lib/filters/isoDateOnly.js";

test("formats a UTC-midnight date consistently in a negative-offset timezone", () => {
  const originalTimezone = process.env.TZ;

  try {
    process.env.TZ = "America/Los_Angeles";
    assert.equal(isoDateOnly(new Date("2024-01-05")), "2024-01-05");
  } finally {
    if(originalTimezone === undefined) {
      delete process.env.TZ;
    } else {
      process.env.TZ = originalTimezone;
    }
  }
});