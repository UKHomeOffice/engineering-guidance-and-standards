import {testing_params} from "../support/testing_params";

import pages from "../../_site/search.json"

describe('Check for invalid links on all pages', () => {
  for(const page of pages) {
    it(`${page.title} (${page.url}) contains valid links`, () => {
      cy.visit(testing_params.TEST_ROOT_URL + page.url)
      checkAllLinks()
    })
  }
})

it('Check for invalid header links', () => {
  cy.visit(testing_params.TEST_ROOT_URL)
  cy.get("header a").each(page => {
    cy.request(page.prop('href'))
  })
})

it('Check for invalid footer links', () => {
  cy.visit(testing_params.TEST_ROOT_URL)
  cy.get("footer a").each(page => {
    cy.request(page.prop('href'))
  })
})

function checkAllLinks() {
  // Exclude mailto links and exclude survey link -- there is rate limiting for the survey page
  cy.get("main a:not([href*='mailto:']):not([href*='homeofficesurveys']").each(page => {
    checkUrl(page.prop('href'))
  })
}

function checkUrl(url) {
  cy.request({
    url : url,
    failOnStatusCode:false,
  }).then((resp) => {
    // Ignoring 401/403 as we may include links with restrictions applied in pages
    expect(resp.status).to.not.eq(400)
    expect(resp.status).to.not.eq(404)
    expect(resp.status).to.not.gt(405)
  })
}
