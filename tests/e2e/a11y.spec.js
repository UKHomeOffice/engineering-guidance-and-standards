import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'fs/promises';
import { testing_params } from '../support/testing_params';


// Read pages data from JSON file
let pages = [];
const data_pages = await fs.readFile('./_site/search-index.json', 'utf8');
pages = JSON.parse(data_pages);

function reportViolations(violations) {
  const totalNodes = violations.reduce((acc, v) => acc + v.nodes.length, 0);
  console.log(
    `${totalNodes} accessibility violation${totalNodes === 1 ? '' : 's'} ${totalNodes === 1 ? 'was' : 'were'
    } detected.`
  );
  const violationData = violations.map(({ id, impact, description, nodes }) => ({
    id,
    impact,
    description,
    count: nodes.length,
    exampleSelector: nodes[0]?.target,
  }));
  if (totalNodes > 0) console.table(violationData);
}


test.describe('All pages pass axe-core accessibility checks', () => {
  let titles = {};

  test.beforeAll(async () => {
    // Already loaded in beforeAll above
    titles = {};
    for (const page_data of pages) {
      titles[page_data.title] = [...(titles[page_data.title] ?? []), page_data.url];
    }
  });

  for (const page_data of pages) {
    test(`${page_data.title} (${page_data.url}) is accessible`, async ({ page }) => {
      await page.goto(testing_params.TEST_ROOT_URL + page_data.url);
      const results = await new AxeBuilder({ page })
        .withTags(['wcag21aaa'])
        .analyze();
      reportViolations(results.violations);
      expect(results.violations.length, 'No accessibility violations').toBe(0);
    });
  }

  test('All pages have a unique title', async () => {
    const duplicateTitles = Object.entries(titles).filter(
      ([_, urls]) => urls.length > 1
    );
    const message = 'Expect there to be no duplicate titles';
    if (duplicateTitles.length > 0) {
      const tableData = duplicateTitles.map(([title, urls]) => ({
        Title: title,
        'URLs with this title': urls.join('\n'),
      }));
      console.table(tableData);
      expect(duplicateTitles, message).toHaveLength(0);
    } else {
      expect(duplicateTitles, message).toHaveLength(0);
    }
  });
});


test.describe('Tag pages pass axe-core accessibility checks', () => {
  test('Tag page is accessible', async ({ page }) => {
    await page.goto(testing_params.TEST_ROOT_URL);
    await page.getByText('Read our standards').click();
    await page.getByText('Accessibility').nth(0).click();
    await page.locator('.tags').getByText('Accessibility').click();
    const results = await new AxeBuilder({ page })
      .withTags(['wcag21aaa'])
      .analyze();
    reportViolations(results.violations);
    expect(results.violations.length, 'No accessibility violations').toBe(0);
  });

  test('All tags page is accessible', async ({ page }) => {
    await page.goto(testing_params.TEST_ROOT_URL);
    await page.getByText('Read our standards').click();
    await page.getByText('Accessibility').nth(0).click();
    await page.locator('.tags').getByText('Accessibility').click();
    await page.getByText('all tags').click();
    const results = await new AxeBuilder({ page })
      .withTags(['wcag21aaa'])
      .analyze();
    reportViolations(results.violations);
    expect(results.violations.length, 'No accessibility violations').toBe(0);
  });
});
