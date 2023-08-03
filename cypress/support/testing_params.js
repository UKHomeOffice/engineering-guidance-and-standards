export const testing_params = {
  TEST_URL: Cypress.env('TEST_URL') ?? 'http://localhost',
  TEST_PORT: Cypress.env('TEST_PORT') ?? '8080'
}
