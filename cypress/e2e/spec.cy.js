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

describe('Standards tag page loaded test', () => {
  it('finds the tag page listing all pages with the "standards" tag', () => {
    cy.visit(testing_params.TEST_URL + ":" + testing_params.TEST_PORT)
    cy.contains('Learn about standards').click() 
    cy.contains('Writing a principle').click()
    cy.get('.app-prose-scope').contains('Standards').click()
    cy.title().should('include', 'Pages tagged with \"Standards\"')
    cy.contains('li', 'Writing a principle')
    cy.contains('See all tags')
  })
})
