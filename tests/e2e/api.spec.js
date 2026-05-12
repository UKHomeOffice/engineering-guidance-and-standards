import { test, expect } from '@playwright/test';
import { testing_params } from '../support/testing_params';

async function getJson(page, path) {
  const requestUrl = `${testing_params.TEST_ROOT_URL}${path}`;
  const response = await page.request.get(requestUrl);

  if (!response.ok()) {
    const body = await response.text();
    throw new Error(
      `GET ${requestUrl} failed with ${response.status()} ${response.statusText()}\n${body.slice(0, 500)}`
    );
  }

  expect(response.ok()).toBeTruthy();
  expect(response.headers()['content-type']).toContain('application/json');
  return response.json();
}

test.describe('API documentation', () => {
  test('Swagger UI loads the OpenAPI spec', async ({ page }) => {
    await page.goto(`${testing_params.TEST_ROOT_URL}/api/`);

    await expect(page).toHaveTitle(/API Reference/);
    await expect(page.locator('#swagger-ui')).toBeVisible();
    await expect(page.locator('link[href*="swagger-ui.css"]')).toHaveCount(1);
    await expect(page.locator('script[src*="swagger-ui-bundle.js"]')).toHaveCount(1);
  });

  test('OpenAPI spec includes the API endpoints', async ({ page }) => {
    const response = await page.request.get(`${testing_params.TEST_ROOT_URL}/openapi.yaml`);

    expect(response.ok()).toBeTruthy();
    const openApi = await response.text();

    expect(openApi).toContain('/standards.json');
    expect(openApi).toContain('/standards/{standardId}.json');
    expect(openApi).toContain('/principles.json');
    expect(openApi).toContain('/principles/{principleId}.json');
    expect(openApi).toContain('/patterns.json');
    expect(openApi).toContain('/patterns/{patternId}.json');
    expect(openApi).toContain('tags:');
  });
});

test.describe('API endpoints', () => {
  test('returns the standards collection and a single standard', async ({ page }) => {
    const standards = await getJson(page, '/api/standards.json');

    expect(standards.standards).toBeInstanceOf(Array);
    expect(standards.standards.length).toBeGreaterThan(0);
    expect(standards.standards[0]).toMatchObject({
      id: expect.stringMatching(/^SEGAS-\d{5}$/),
      title: expect.any(String),
      url: expect.stringMatching(/^http:\/\/localhost:8080\/standards\//),
      date: expect.any(String),
      tags: expect.any(Array),
      requirements: expect.any(Array)
    });

    const standard = await getJson(page, '/api/standards/SEGAS-00001.json');
    expect(standard.standard).toMatchObject({
      id: 'SEGAS-00001',
      title: 'Writing a standard',
      url: 'http://localhost:8080/standards/writing-a-standard/',
      date: '2023-08-04',
      tags: [],
    });
    expect(standard.standard.requirements).toHaveLength(6);
  });

  test('returns the principles collection and a single principle', async ({ page }) => {
    const principles = await getJson(page, '/api/principles.json');

    expect(principles.principles).toBeInstanceOf(Array);
    expect(principles.principles.length).toBeGreaterThan(0);
    expect(principles.principles[0]).toMatchObject({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.stringMatching(/^http:\/\/localhost:8080\/principles\//),
      date: expect.any(String),
      tags: expect.any(Array),
      requirements: []
    });

    const principle = await getJson(page, '/api/principles/be-collaborative.json');
    expect(principle.principle).toMatchObject({
      id: 'be-collaborative',
      title: 'Be collaborative',
      url: 'http://localhost:8080/principles/be-collaborative/',
      date: '2023-06-22',
      tags: ['Software design', 'Ways of working'],
      requirements: []
    });
  });

  test('returns the patterns collection and a single pattern', async ({ page }) => {
    const patterns = await getJson(page, '/api/patterns.json');

    expect(patterns.patterns).toBeInstanceOf(Array);
    expect(patterns.patterns.length).toBeGreaterThan(0);
    expect(patterns.patterns[0]).toMatchObject({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.stringMatching(/^http:\/\/localhost:8080\/patterns\//),
      date: expect.any(String),
      tags: expect.any(Array),
      requirements: []
    });

    const pattern = await getJson(page, '/api/patterns/code-reviews.json');
    expect(pattern.pattern).toMatchObject({
      id: 'code-reviews',
      title: 'Code reviews',
      url: 'http://localhost:8080/patterns/code-reviews/',
      date: '2025-04-10',
      tags: ['Software design', 'Ways of working'],
      requirements: []
    });
  });
});