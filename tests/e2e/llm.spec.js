import { test, expect } from '@playwright/test';
import { testing_params } from '../support/testing_params';

function rootUrl() {
  const url = testing_params.TEST_ROOT_URL;
  return url.startsWith('http') ? url : `http://${url}`;
}

test.describe("llms.txt", () => {
  test("is generated", async ({ page }) => {
    const response = await page.request.get(`${rootUrl()}/llms.txt`);

    expect(response.status()).toBe(200);
    expect(await response.text()).toContain("# Engineering Guidance and Standards");
  });
});
