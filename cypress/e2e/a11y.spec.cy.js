import {testing_params} from "../support/testing_params";

import pages from "../../_site/search.json"

function terminalLog(violations) {
  const totalNodes = violations.reduce((acc, v) => acc + v.nodes.length, 0);

  cy.task(
    'log',
    `${totalNodes} accessibility violation${totalNodes === 1 ? '' : 's'} ${
      totalNodes === 1 ? 'was' : 'were'} detected.`
  )

  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      count: nodes.length,
      exampleSelector: nodes[0].target
    })
  )

  cy.task('table', violationData)
}

describe('All pages pass axe-core accessibility checks', () => {
  const titles = {};

  for(const page of pages) {
    it(`${page.title} (${page.url}) is accessible`, () => {
      cy.visit(testing_params.TEST_ROOT_URL + page.url)
      cy.injectAxe()
      // Prevent intermittent colour contrast failures
      cy.wait(10)
      cy.checkA11y({exclude: '[data-axe-exclude]'}, null, terminalLog);
    })

    titles[page.title] = [
      ...(titles[page.title] ?? []),
      page.url
    ];
  }

  it('All pages have a unique title', () => {
    const duplicateTitles = Object.entries(titles).filter(([_, urls]) => urls.length > 1);

    const message = "Expect there to be no duplicate titles";

    if(duplicateTitles.length > 0) {
      const tableData = duplicateTitles.map(([title, urls]) => ({
        "Title": title,
        "URLs with this title": urls.join("\n")
      }));

      // Task doesn't run if top-level expect fails
      cy.task('table', tableData).then(() => {
        expect(duplicateTitles, message).to.be.empty
      })
    } else {
      // Log that the check passed
      expect(duplicateTitles, message).to.be.empty
    }
  })
})

describe('Tag pages pass axe-core accessibility checks', () => {
  it('Tag page is accessible', () => {
    cy.visit(testing_params.TEST_ROOT_URL)
    cy.contains('Read our standards').click()
    cy.contains('Minimal documentation set for a product').click()
    cy.get('.tags').contains('Documentation').click()
    cy.injectAxe()
    cy.checkA11y({exclude: '[data-axe-exclude]'}, null, terminalLog);
  })

  it('All tags page is accessible', () => {
    cy.visit(testing_params.TEST_ROOT_URL)
    cy.contains('Read our standards').click()
    cy.contains('Minimal documentation set for a product').click()
    cy.get('.tags').contains('Documentation').click()
    cy.contains('all tags').click()
    cy.injectAxe()
    cy.checkA11y({exclude: '[data-axe-exclude]'}, null, terminalLog);
  })
})
