import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';
import { testing_params } from '../support/testing_params';
import pages from '../../_site/search-index.json';

const axeConfig = {
  // There are occasional contrast false-positives if the page isn't fully loaded
  retries: 1,
  // WCAG 2.2 isn't included by default - only the target size check is automated by axe
  rules: {
    "target-size": { enabled: true },
  },
};

function terminalLog(violations) {
  const totalNodes = violations.reduce((acc, v) => acc + v.nodes.length, 0);

  console.log(
    `${totalNodes} accessibility violation${totalNodes === 1 ? "" : "s"} ${
      totalNodes === 1 ? "was" : "were"
    } detected.`
  );

  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      count: nodes.length,
      exampleSelector: nodes[0].target,
    })
  );

  console.table(violationData);
}

test.describe("All pages pass axe-core accessibility checks", () => {
  const titles = {};

  for (const page_data of pages) {
    test(`${page_data.title} (${page_data.url}) is accessible`, async ({ page }) => {
      await page.goto(testing_params.TEST_ROOT_URL + page_data.url);
      await injectAxe(page);
      await checkA11y(page, { exclude: "[data-axe-exclude]" }, axeConfig, terminalLog);
    });

    titles[page_data.title] = [...(titles[page_data.title] ?? []), page_data.url];
  }

  test("All pages have a unique title", async () => {
    const duplicateTitles = Object.entries(titles).filter(
      ([_, urls]) => urls.length > 1
    );

    const message = "Expect there to be no duplicate titles";

    if (duplicateTitles.length > 0) {
      const tableData = duplicateTitles.map(([title, urls]) => ({
        Title: title,
        "URLs with this title": urls.join("\n"),
      }));

      console.table(tableData);
      expect(duplicateTitles, message).toHaveLength(0);
    } else {
      // Log that the check passed
      expect(duplicateTitles, message).toHaveLength(0);
    }
  });
});

test.describe("Tag pages pass axe-core accessibility checks", () => {
  test("Tag page is accessible", async ({ page }) => {
    await page.goto(testing_params.TEST_ROOT_URL);
    await page.getByText("Read our standards").click();
    await page.getByText("Accessibility").click();
    await page.locator(".tags").getByText("Accessibility").click();
    await injectAxe(page);
    await checkA11y(page, { exclude: "[data-axe-exclude]" }, axeConfig, terminalLog);
  });

  test("All tags page is accessible", async ({ page }) => {
    await page.goto(testing_params.TEST_ROOT_URL);
    await page.getByText("Read our standards").click();
    await page.getByText("Accessibility").click();
    await page.locator(".tags").getByText("Accessibility").click();
    await page.getByText("all tags").click();
    await injectAxe(page);
    await checkA11y(page, { exclude: "[data-axe-exclude]" }, axeConfig, terminalLog);
  });
});
