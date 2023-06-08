import {testing_params} from "../support/testing_params";

import pages from "../../_site/search.json"

describe('All pages pass axe-core accessibility checks', () => {
  for(const page of pages) {
    it(`${page.title} (${page.url}) is accessible`, () => {
      cy.visit(testing_params.TEST_URL + ":" + testing_params.TEST_PORT + page.url)
      cy.injectAxe()
      cy.checkA11y();
    })
  }
})
