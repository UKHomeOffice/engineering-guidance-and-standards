# Playwright End-to-End Testing

## What is Playwright?

[Playwright](https://playwright.dev/) is a modern end-to-end testing framework for web applications. It enables reliable browser automation for Chromium, Firefox, and WebKit, supporting powerful features like parallel execution, network mocking, accessibility checks, and more.

## How to Install Playwright

 To install it and its browsers, run:

```
npm ci
npx playwright install --with-deps // This install the browser dependency 
```

## How to Add New Tests

- Add new test files to `tests/e2e/`.
- Use Playwright's [test API](https://playwright.dev/docs/test-api) and best practices for writing tests.
- Example test file:

```js
import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await expect(page.getByRole('heading', { name: 'Engineering Guidance and Standards' })).toBeVisible();
});
```

## How to Run Tests Locally

Start your local server 

Get Server running (also look at project read me)
```
npm run build
npm run serve -- --port 8080
```

then run:

```
npm run playwright:run      # Run all tests headless
npm run playwright:headed   # Run all tests with browser UI
npm run playwright:debug    # Debug tests interactively
```

## How to Use Playwright Codegen

Playwright's codegen tool helps you record user actions and generate test code automatically:

```
npm run playwright:open
```

This opens the codegen UI. Interact with your site and copy the generated code into your test files.


## Test Reports and Screenshots

### Viewing Test Reports

After running tests, Playwright generates an HTML report in the `playwright-report/` folder. To view the report locally, run:

```
npx playwright show-report
```

This will open a browser window with a detailed summary of all test runs, including pass/fail status, errors, and trace information.

In CI (GitHub Actions), the HTML and JSON reports are uploaded as artifacts. 

### Screenshots/Video on Failure

Playwright is configured to automatically take screenshots of the browser when a test fails and also saves the video of failed test runs. 
These screenshots are saved in the `playwright-report/` directory and are linked from the HTML report for easy debugging.


## GitHub Actions CI & CTRF Reports

This project uses GitHub Actions to automatically run Playwright tests on every pull request and push to `main`.

- The workflow is defined in `.github/workflows/e2e-tests-on-pr.yml`.
- Tests are run in a clean environment using Node.js and Playwright browsers.
- After the tests run, Playwright generates:
  - An HTML report (downloadable from the Actions page)
  - A JSON report in CTRF format (machine-readable)
- Screenshots and traces for failed tests are also available in the HTML report artifact.

This setup ensures you get instant feedback on test results for every PR, with both human-readable and machine-readable reports.


### Test suite

The test suite includes:

- **spec.spec.js** - Navigation and page content tests
- **a11y.spec.js** - Accessibility tests using axe-core
- **links.spec.js** - Link validation tests
- **exports.spec.js** - JSON schema validation tests

## More Resources
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright Test API](https://playwright.dev/docs/test-api)
- [Playwright CLI](https://playwright.dev/docs/test-cli)

## How to migrate from Cypress to playwright 

Here are the simple steps to migrate your tests:

1. **Uninstall Cypress and related plugins:**
    ```
    npm uninstall cypress cypress-axe
    ```
2. **Install Playwright and axe-core for Playwright:**
    ```
    npm install --save-dev @playwright/test @axe-core/playwright
    npx playwright install --with-deps
    ```
3. **Update your test scripts in `package.json`:**
    Replace `cypress:open` and `cypress:run` with Playwright equivalents:
    - `playwright:run`, `playwright:headed`, `playwright:debug`, `playwright:open`
4. **Convert your test files:**
    - Change Cypress commands (`cy.visit`, `cy.get`, `cy.contains`, etc.) to Playwright equivalents (`page.goto`, `page.locator`, `page.getByRole`, etc.).
    - Update accessibility tests to use `AxeBuilder` from `@axe-core/playwright`.
5. **Update CI workflows:**
    - Replace Cypress steps with Playwright steps in your GitHub Actions workflows.
6. **Run and verify:**
    - Run your Playwright tests locally and in CI to ensure everything works.
