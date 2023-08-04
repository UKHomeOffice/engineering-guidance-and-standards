const TEST_URL = Cypress.env('TEST_URL') ?? 'http://localhost';
const TEST_PORT = Cypress.env('TEST_PORT') ?? '8080';
const TEST_PATH = Cypress.env('TEST_PATH') ?? '';

export const testing_params = {
  TEST_URL: TEST_URL,
  TEST_PORT: TEST_PORT,
  TEST_PATH: TEST_PATH,
  TEST_ROOT_URL: `${TEST_URL}:${TEST_PORT}${TEST_PATH.replace(/\/$/, '')}`
}
