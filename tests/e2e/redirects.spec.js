import { test, expect } from '@playwright/test';
import { testing_params } from '../support/testing_params';

test.describe('Redirects', () => {
  test('redirect page includes canonical and meta refresh fallback', async ({ page }) => {
    const response = await page.request.get(
      `${testing_params.TEST_ROOT_URL}/principles/write-maintainable-reusable-and-evolutionary-code/`
    );
    const body = await response.text();

    expect(response.status()).toBe(200);
    expect(body).toContain('<link rel="canonical" href="/principles/continuously-maintain-and-evolve/">');
    expect(body).toContain('<meta http-equiv="refresh" content="0; url=/principles/continuously-maintain-and-evolve/">');
    expect(body).toContain('window.location.replace("/principles/continuously-maintain-and-evolve/");');
    expect(body).toContain('continue to the new page');
  });

  test('deprecated principle URL redirects to replacement principle', async ({ page }) => {
    await page.goto(`${testing_params.TEST_ROOT_URL}/principles/write-maintainable-reusable-and-evolutionary-code/`);

    await expect(page).toHaveURL(
      `${testing_params.TEST_ROOT_URL}/principles/continuously-maintain-and-evolve/`
    );
    await expect(page.locator('h1')).toContainText('Continuously maintain and evolve');
  });

  test('archived deprecated principle remains available with deprecation notice', async ({ page }) => {
    await page.goto(`${testing_params.TEST_ROOT_URL}/principles/write-maintainable-reusable-and-evolutionary-code-archived/`);

    await expect(page.locator('h1')).toContainText('Write maintainable, reusable and evolutionary code');
    await expect(page.locator('.govuk-inset-text')).toContainText('This page has been deprecated');
    await expect(page.locator('.govuk-inset-text a')).toHaveAttribute(
      'href',
      '/principles/continuously-maintain-and-evolve/'
    );
  });
});
