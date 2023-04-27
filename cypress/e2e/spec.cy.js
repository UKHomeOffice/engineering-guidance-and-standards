const testing_params = {
  TEST_URL : Cypress.env('TEST_URL'),
  TEST_PORT : Cypress.env('TEST_PORT')
}

describe('Front page loaded test', () => {
  it('finds the front page describing the sections of the site', () => {
    cy.visit(testing_params.TEST_URL + ":" + testing_params.TEST_PORT)
    cy.contains('Principles')
    cy.contains('Standards')
    cy.contains('Patterns')
  })
})

describe('Principles page loaded test', () => {
  it('finds the principles page listing the current engineering principles', () => {
    cy.visit(testing_params.TEST_URL + ":" + testing_params.TEST_PORT)
    // Click on first el containing the principles text
    cy.contains('Learn about principles').click() 
    cy.contains('Principles')
    cy.contains('Select an item from the menu to read more.')
  })
})