import test from "node:test";
import assert from "node:assert/strict";

import RedirectPages from "../../../docs/redirects.11ty.js";

test("redirect template data config uses redirects pagination and excludes from collections", () => {
  const redirectPages = new RedirectPages();
  const data = redirectPages.data();

  assert.equal(data.pagination.data, "redirects");
  assert.equal(data.pagination.size, 1);
  assert.equal(data.pagination.alias, "redirect");
  assert.equal(data.eleventyExcludeFromCollections, true);
  assert.equal(typeof data.permalink, "function");
});

test("permalink callback normalises missing leading slash", () => {
  const redirectPages = new RedirectPages();
  const data = redirectPages.data();

  assert.equal(
    data.permalink({ redirect: { from: "principles/legacy-page/" } }),
    "/principles/legacy-page/index.html"
  );
});

test("permalink callback keeps existing leading slash", () => {
  const redirectPages = new RedirectPages();
  const data = redirectPages.data();

  assert.equal(
    data.permalink({ redirect: { from: "/principles/legacy-page/" } }),
    "/principles/legacy-page/index.html"
  );
});

test("render outputs canonical, meta refresh and javascript redirect", () => {
  const redirectPages = new RedirectPages();

  const html = redirectPages.render({
    redirect: {
      to: "/principles/new-page/",
      replacementTitle: "New page title"
    }
  });

  assert.match(html, /<link rel="canonical" href="\/principles\/new-page\/">/);
  assert.match(html, /<meta http-equiv="refresh" content="0; url=\/principles\/new-page\/">/);
  assert.match(html, /window\.location\.replace\("\/principles\/new-page\/"\);/);
  assert.match(html, />New page title<\/a>/);
});

test("render falls back to target path when replacement title is missing", () => {
  const redirectPages = new RedirectPages();

  const html = redirectPages.render({
    redirect: {
      to: "principles/new-page/"
    }
  });

  assert.match(html, />\/principles\/new-page\/<\/a>/);
  assert.match(html, /window\.location\.replace\("\/principles\/new-page\/"\);/);
});
