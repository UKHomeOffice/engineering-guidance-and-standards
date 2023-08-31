import {testing_params} from "../support/testing_params";

import pages from "../../_site/search.json"
import linkExceptionList from "../support/link-exception-list.json"

describe('Check pages contain valid links', () => {
  for(const page of pages) {
    it(`${page.title} (${page.url}) contains valid links`, () => {
      cy.visit(testing_params.TEST_ROOT_URL + page.url)
      checkAllLinks()
    })
  }
})

function checkAllLinks() {
  // Exclude mailto links
  cy.get("a:not([href*='mailto:'])").each(page => {
    checkUrl(page.prop('href'))
  })
}

function checkUrl(url) {
  if (linkExceptionList.includes(url)) {
    return;
  }
  cy.request(url)
}
