import {testing_params} from "../support/testing_params";

import pages from "../../_site/search.json"

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
