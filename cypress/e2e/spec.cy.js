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
    cy.get('.app-prose-scope').contains('Standards').click() // this is the "tag" link
    cy.title().should('include', 'Pages tagged with \"Standards\"')
    cy.contains('h1', 'Pages tagged with “Standards”') // page renders with “ ” chars
    cy.contains('li', 'Writing a principle')
    cy.contains('See all tags')
  })
})

describe('All tags page loaded test', () => {
  it('finds the tag page listing all pages with the "standards" tag', () => {
    cy.visit(testing_params.TEST_URL + ":" + testing_params.TEST_PORT)
    cy.contains('Learn about standards').click() 
    cy.contains('Writing a principle').click()
    cy.get('.app-prose-scope').contains('Standards').click() // this is the "tag" link
    cy.title().should('include', 'Pages tagged with \"Standards\"')
    cy.contains('h1', 'Pages tagged with “Standards”') // page renders with “ ” chars
    cy.contains('See all tags')
    
    // Assert all tags link is functional
    cy.contains('a', 'all tags').click();
    cy.title().should('include', 'All page tags currently in use')
    cy.contains('h1', 'All page tags currently in use')
  })
})

describe('Writing a principle link from all pages tagged with standards loaded test', () => {
  it('finds the tag page listing all pages with the "standards" tag', () => {
    cy.visit(testing_params.TEST_URL + ":" + testing_params.TEST_PORT)
    cy.contains('Learn about standards').click() 
    cy.contains('Writing a principle').click()
    cy.get('.app-prose-scope').contains('Standards').click() // this is the "tag" link
    cy.title().should('include', 'Pages tagged with \"Standards\"')
    cy.contains('h1', 'Pages tagged with “Standards”') // page renders with “ ” chars
    cy.contains('See all tags')
    
    // Assert listing page link is functional
    cy.contains('li a', 'Writing a principle').click()
    // Assert page has loaded as expected
    cy.title().should('include', 'Writing a principle')
    cy.contains('h1', 'Writing a principle');
  })
})
