import { test, expect } from '@playwright/test';
import { testing_params } from '../support/testing_params';
import { Validator } from '@cfworker/json-schema';

function getTestRootUrl() {
    if(testing_params.TEST_ROOT_URL.startsWith('http')) {
        return testing_params.TEST_ROOT_URL;
    }

    return `http://${testing_params.TEST_ROOT_URL}`;
}

test.describe("JSON exports validate against their schemas", () => {
    test("standards.json is valid", async ({ page }) => {
        const urlToRun = getTestRootUrl();
        const schemaUri = `${urlToRun}/standards.schema.json`;

        const schemaResponse = await page.request.get(schemaUri);
        const schema = await schemaResponse.json();
        const validator = new Validator(schema);

        const jsonResponse = await page.request.get(`${urlToRun}/standards.json`);
        const json = await jsonResponse.json();

        const result = validator.validate(json);

        if (result.errors.length > 0) {
            const tableData = result.errors.map(error => ({
                "Schema Location": error.keywordLocation,
                "Instance Location": error.instanceLocation,
                "Error": error.error,
            }));

            console.table(tableData);
        }

        expect(result.valid, "standards.json does not conform to standards.schema.json").toBe(true);
    });
});

test.describe("XML exports are generated", () => {
    test("sitemap.xml lists published content pages", async ({ page }) => {
        const urlToRun = getTestRootUrl();
        const siteRoot = process.env.SITE_ROOT || urlToRun;
        const sitemapResponse = await page.request.get(`${urlToRun}/sitemap.xml`);

        expect(sitemapResponse.ok()).toBe(true);

        const sitemap = await sitemapResponse.text();
        const absoluteUrl = (path) => new URL(path, siteRoot).toString();

        expect(sitemap).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
        expect(sitemap).toContain(`<loc>${absoluteUrl('/')}</loc>`);
        expect(sitemap).toContain(`<loc>${absoluteUrl('/principles/')}</loc>`);
        expect(sitemap).toContain(`<loc>${absoluteUrl('/principles/design-for-success/')}</loc>`);
        expect(sitemap).toContain(`<loc>${absoluteUrl('/standards/')}</loc>`);
        expect(sitemap).toContain(`<loc>${absoluteUrl('/standards/developer-testing/')}</loc>`);
        expect(sitemap).toContain('<lastmod>2024-01-05</lastmod>');
        expect(sitemap).toContain(`<loc>${absoluteUrl('/patterns/')}</loc>`);
        expect(sitemap).toContain(`<loc>${absoluteUrl('/patterns/monitoring-as-code/')}</loc>`);
        expect(sitemap).not.toContain('/standards.json');
        expect(sitemap).not.toContain('/search-index.json');
        expect(sitemap).not.toContain('/standards/standard.template/');
        expect(sitemap).not.toContain('/principles/principle.template/');
        expect(sitemap).not.toContain('/patterns/pattern.template/');
    });
});
