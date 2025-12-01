import { test, expect } from '@playwright/test';
import { testing_params } from '../support/testing_params';

test.describe("Front page loaded test", () => {
  test("finds the front page describing the sections of the site", async ({ page }) => {
    await page.goto(testing_params.TEST_ROOT_URL);
    await expect(page.locator("h1")).toContainText("Engineering Guidance and Standards");
    await expect(page.getByRole('heading', { name: 'Principles', exact: true })).toHaveText(/Principles/);
    await expect(page.getByRole('heading', { name: 'Standards', exact: true })).toHaveText(/Standards/);
    await expect(page.getByRole('heading', { name: 'Patterns', exact: true })).toHaveText(/Patterns/);
  });
});

test.describe("Standards page loaded test", () => {
  test("finds the page listing all standards", async ({ page }) => {
    await page.goto(testing_params.TEST_ROOT_URL);
    await page.getByText("Read our standards").click();
    await expect(page.getByRole('heading', { name: 'Standards', exact: true })).toHaveText(/Standards/);
    await expect(page.locator(".x-govuk-masthead h1")).toContainText("Standards");
    await expect(page.locator(".x-govuk-masthead")).toContainText(
      "Explicitly stated expectations for engineering teams"
    );
  });
});

test.describe("Principles page loaded test", () => {
  test("finds the page listing all principles", async ({ page }) => {
    await page.goto(testing_params.TEST_ROOT_URL);
    await page.getByText("Read our principles").click();
    await expect(page.locator(".x-govuk-masthead h1")).toContainText("Principles");
    await expect(page.locator(".x-govuk-masthead")).toContainText(
      "To guide the behaviour and decisions of engineering teams"
    );
  });
});

test.describe("Standards page loaded test when clicked from breadcrumb", () => {
  test("finds the breadcrumb link for standards and checks we go to the Standards collection page", async ({ page }) => {
    await page.goto(testing_params.TEST_ROOT_URL);
    await page.getByText("Read our standards").click();
    await page.getByText("Accessibility").nth(0).click();
    await page.locator(".govuk-breadcrumbs__list").getByText("Standards").click();
    await expect(page).toHaveTitle(/Standards/);
    await expect(page.locator(".x-govuk-masthead h1")).toContainText("Standards");
    await expect(page.locator(".x-govuk-masthead")).toContainText(
      "Explicitly stated expectations for engineering teams"
    );
  });
});

test.describe("Tag page loaded test", () => {
  test('finds the tag page listing all pages with the "Documentation" tag', async ({ page }) => {
    await page.goto(testing_params.TEST_ROOT_URL);
    await page.getByText("Read our standards").click();
    await page.getByText("Accessibility").nth(0).click();
    await page.locator(".tags").getByText("Accessibility").click();
    await expect(page.getByRole('heading', { name: /Pages tagged with ‘/ })).toHaveText(/Pages tagged with ‘Accessibility’/);
    await expect(page.getByRole('heading', { name: 'Accessibility', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Write effective documentation', exact: true })).toBeVisible();
  });
});

test.describe("All tags page loaded test", () => {
  test('finds the tag page listing all pages with the "standards" tag', async ({ page }) => {
    await page.goto(testing_params.TEST_ROOT_URL);
    await page.getByText("Read our standards").click();
    await page.getByText("Accessibility").nth(0).click();
    await page.locator(".tags").getByText("Accessibility").click();
    await expect(page.getByRole('heading', { name: /Pages tagged with ‘/ })).toHaveText(/Pages tagged with ‘Accessibility’/);
    await expect(page.locator("h1")).toContainText("Pages tagged with ‘Accessibility’");
    await expect(page.getByText('See all tags')).toContainText("See all tags");

    // Assert all tags link is functional
    await page.getByRole("link", { name: "all tags" }).click();
    await expect(page).toHaveTitle(/All page tags currently in use/);
    await expect(page.locator("h1")).toContainText("All page tags currently in use");
  });
});

test.describe("Sidebar link to other standards loaded test", () => {
  test("finds a sidebar link to another standard when viewing a standard", async ({ page }) => {
    await page.goto(testing_params.TEST_ROOT_URL);
    await page.getByText("Read our standards").click();
    await page.getByText("Accessibility").nth(0).click();
    // reach the first standard page
    await expect(page.locator("h1")).toContainText("Accessibility");
    // verify sidebar link exists
    await expect(page.locator("nav.x-govuk-sub-navigation h2").nth(0)).toContainText("Standards");
    await page.locator("nav.x-govuk-sub-navigation li").getByText("SEGAS-00004 - Open source licensing").click();
    // check we reach the other standard page
    await expect(page.locator("h1")).toContainText("Open source licensing");
  });
});

test.describe("About page links from index page start button test", () => {
  test("finds the about page describing the aims of the site", async ({ page }) => {
    await page.goto(testing_params.TEST_ROOT_URL);
    // Click on first el containing the about page text
    await page.getByText("Find out more about what we are doing").click();
    await expect(page.locator("h2").nth(1)).toContainText("Why we are doing it");
  });
});

test.describe("About page links from footer test", () => {
  test("finds the about page describing the aims of the site", async ({ page }) => {
    await page.goto(testing_params.TEST_ROOT_URL);
    // Click on first li a containing 'About' page text
    await page.locator("li a").getByText("About").click();
    await expect(page.locator("h2").nth(1)).toContainText("Why we are doing it");
  });
});

test.describe("Cookies page links from footer test", () => {
  test("finds the cookies page giving a summary of cookie usage on the site", async ({ page }) => {
    await page.goto(testing_params.TEST_ROOT_URL);
    // Click on first li a containing 'About' page text
    await page.locator("li a").getByText("Cookies").click();
    await expect(page.locator("h1")).toContainText("How we use cookies");
  });
});

test.describe("Related links", () => {
  test("finds the correct related link and follows it to a valid page", async ({ page }) => {
    await page.goto(testing_params.TEST_ROOT_URL);
    // Click through to standard page that has a related link
    await page.getByText("Read our standards").click();
    await page.getByText("Infrastructure utilisation monitoring").click();
    // Use the related link
    await page.locator(".x-govuk-related-navigation a").getByText("Monitor and measure proactively").click();
    await expect(page.locator("h1")).toContainText("Monitor and measure proactively");
  });
});

test.describe("Pagination links", () => {
  test("finds the pagination links and follows them to valid pages", async ({ page }) => {
    await page.goto(testing_params.TEST_ROOT_URL);
    // Click to standards page that has a related link
    await page.getByText("Read our principles").click();
    // Use the pagination link
    await page.locator(".govuk-pagination__next a").click();
    await expect(page.locator("h1")).toContainText("Principles");

    await page.locator(".govuk-pagination__prev a").click();
    await expect(page.locator("h1")).toContainText("Principles");
  });
});

test.describe("Content category displays in correct listing pages", () => {
  test("finds the content category in tag page", async ({ page }) => {
    await page.goto(testing_params.TEST_ROOT_URL + "/tags/ways-of-working/");
    const elements = await page.locator("ol.app-document-list .document-category").count();
    expect(elements).toBeGreaterThanOrEqual(5);
  });

  test("does not find the content category in principles page", async ({ page }) => {
    await page.goto(testing_params.TEST_ROOT_URL);
    await page.getByText("Read our principles").click();
    // No .document-category listed in this page
    await expect(page.locator("ol.app-document-list .document-category")).toHaveCount(0);
  });

  test("does not find the content category in standards page", async ({ page }) => {
    await page.goto(testing_params.TEST_ROOT_URL);
    await page.getByText("Read our standards").click();
    // No .document-category listed in this page
    await expect(page.locator("ol.app-document-list .document-category")).toHaveCount(0);
  });

  test("does not find the content category in patterns page", async ({ page }) => {
    await page.goto(testing_params.TEST_ROOT_URL);
    await page.getByText("Read our patterns").click();
    // No .document-category listed in this page
    await expect(page.locator("ol.app-document-list .document-category")).toHaveCount(0);
  });
});

async function assertConsistentNavigationElements(page) {
  await expect(page.locator("nav[aria-labelledby='sub-navigation-heading-engineering-guidance-and-standards']"))
    .toContainText("Principles");
  await expect(page.locator("nav[aria-labelledby='sub-navigation-heading-engineering-guidance-and-standards']"))
    .toContainText("Standards");
  await expect(page.locator("nav[aria-labelledby='sub-navigation-heading-engineering-guidance-and-standards']"))
    .toContainText("Patterns");

  // Consistent nav - always has a home breadcrumb
  await expect(page.locator("nav[aria-label=Breadcrumb]")).toContainText("Home");
}

test.describe("Engineering guidance and standards navigation", () => {
  ["principles", "standards", "patterns"].forEach((category) => {
    test(`links to top level categories on ${category} page`, async ({ page }) => {
      await page.goto(testing_params.TEST_ROOT_URL);
      await page.getByText(`Read our ${category}`).click();

      await assertConsistentNavigationElements(page);
    });

    test(`${category} have links to the top level categories`, async ({ page }) => {
      await page.goto(testing_params.TEST_ROOT_URL);
      await page.getByText(`Read our ${category}`).click();

      await page.locator("ol.app-document-list h2.app-document-list__item-title a").first().click();

      await assertConsistentNavigationElements(page);
    });
  });

  [
    "about",
    "accessibility-statement",
    "cookies",
    "provide-feedback",
    "standards-requirements",
    "tags",
    "tags/accessibility" // test an example tag page
  ].forEach((page_path) => {
    const label = page_path.replace(/-/g, " ");
    test(`${label} has expected navigation elements`, async ({ page }) => {
      await page.goto(`${testing_params.TEST_ROOT_URL}/${page_path}/`);

      await assertConsistentNavigationElements(page);
    });
  })
});
