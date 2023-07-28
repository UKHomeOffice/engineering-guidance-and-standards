import {testing_params} from "../support/testing_params";

describe('Front page loaded test', () => {
  it('finds the front page describing the sections of the site', () => {
    cy.visit(testing_params.TEST_URL + ":" + testing_params.TEST_PORT)
    cy.contains('h1', 'Engineering Guidance and Standards')
    cy.contains('Principles')
    cy.contains('Standards')
    cy.contains('Patterns')
  })
})

describe('Standards page loaded test', () => {
  it('finds the page listing all standards', () => {
    cy.visit(testing_params.TEST_URL + ":" + testing_params.TEST_PORT)
    cy.contains('Read our standards').click()
    cy.title().should('include', 'Standards')
    cy.contains('h1', 'Standards')
    cy.contains('div', 'Standards explicitly state what is expected of engineering teams.')
    cy.contains('h2', 'Select a standard to read more.')
  })
})

describe('Principles page loaded test', () => {
  it('finds the page listing all principles', () => {
    cy.visit(testing_params.TEST_URL + ":" + testing_params.TEST_PORT)
    cy.contains('Read our principles').click()
    cy.contains('h1', 'Principles')
    cy.contains('div', 'Principles are used to guide the behaviour of software engineering teams and evaluate their output.')
    cy.contains('h2', 'Select a principle to read more.')
  })
})

describe('Tag page loaded test', () => {
  it('finds the tag page listing all pages with the "Documentation" tag', () => {
    cy.visit(testing_params.TEST_URL + ":" + testing_params.TEST_PORT)
    cy.contains('Read our standards').click()
    cy.contains('Minimal documentation set for a product').click()
    cy.get('.tags').contains('Documentation').click() // this is the "tag" link
    cy.title().should('include', 'Pages tagged with \"Documentation\"')
    cy.contains('h1', 'Pages tagged with “Documentation”') // page renders with “ ” chars
    
    cy.contains('li', 'Write effective documentation')
    cy.contains('li', 'Minimal documentation set for a product')
  })
})

describe('All tags page loaded test', () => {
  it('finds the tag page listing all pages with the "standards" tag', () => {
    cy.visit(testing_params.TEST_URL + ":" + testing_params.TEST_PORT)
    cy.contains('Read our standards').click()
    cy.contains('Minimal documentation set for a product').click()
    cy.get('.tags').contains('Documentation').click() // this is the "tag" link
    cy.title().should('include', 'Pages tagged with \"Documentation\"')
    cy.contains('h1', 'Pages tagged with “Documentation”') // page renders with “ ” chars
    cy.contains('See all tags')

    // Assert all tags link is functional
    cy.contains('a', 'all tags').click();
    cy.title().should('include', 'All page tags currently in use')
    cy.contains('h1', 'All page tags currently in use')
  })
})

describe('Sidebar link to other standards loaded test', () => {
  it('finds a sidebar link to another standard when viewing a standard', () => {
    cy.visit(testing_params.TEST_URL + ":" + testing_params.TEST_PORT)
    cy.contains('Read our standards').click()
    cy.contains('Minimal documentation set for a product').click()
    // reach the first standard page
    cy.contains('h1', 'Minimal documentation set for a product')
    // click sidebar link
    cy.contains('nav.x-govuk-sub-navigation h2', 'Standards')
    cy.contains('nav.x-govuk-sub-navigation li', 'SEGAS-00004 - Open source licensing').click()
    // check we reach the other standard page
    cy.contains('h1', 'Open source licensing')
  })
})

describe('About page links from index page start button test', () => {
  it('finds the about page describing the aims of the site', () => {
    cy.visit(testing_params.TEST_URL + ":" + testing_params.TEST_PORT)
    // Click on first el containing the about page text
    cy.contains('Find out more about what we are doing').click()
    cy.contains('h2', 'Why we are doing it')
  })
})

describe('About page links from footer test', () => {
  it('finds the about page describing the aims of the site', () => {
    cy.visit(testing_params.TEST_URL + ":" + testing_params.TEST_PORT)
    // Click on first li a containing 'About' page text
    cy.contains('li a', 'About').click()
    cy.contains('h2', 'Why we are doing it')
  })
})

describe('Cookies page links from footer test', () => {
  it('finds the cookies page giving a summary of cookie usage on the site', () => {
    cy.visit(testing_params.TEST_URL + ":" + testing_params.TEST_PORT)
    // Click on first li a containing 'About' page text
    cy.contains('li a', 'Cookies').click()
    cy.contains('h1', 'How we use cookies')
  })
})