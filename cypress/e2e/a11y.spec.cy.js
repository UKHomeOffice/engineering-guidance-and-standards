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
  for(const page of pages) {
    it(`${page.title} (${page.url}) is accessible`, () => {
      cy.visit(testing_params.TEST_URL + ":" + testing_params.TEST_PORT + page.url)
      cy.injectAxe()
      cy.checkA11y({exclude: '[data-axe-exclude]'}, null, terminalLog);
    })
  }
})
