import { test, expect } from '@playwright/test';
import { testing_params } from '../support/testing_params';
import { Validator } from '@cfworker/json-schema';

test.describe("JSON exports validate against their schemas", () => {
    test("standards.json is valid", async ({ page }) => {
        let urlToRun = testing_params.TEST_ROOT_URL;
        if(!testing_params.TEST_ROOT_URL.startsWith('http')) {
            urlToRun = `http://${testing_params.TEST_ROOT_URL}`;
        } 
        const schemaUri = `${urlToRun}/standards.schema.json`;

        const schemaResponse = await page.request.get(schemaUri);
        const schema = await schemaResponse.json();
        const validator = new Validator(schema);

        const jsonResponse = await page.request.get(`${testing_params.TEST_ROOT_URL}/standards.json`);
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
