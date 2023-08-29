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
    cy.request(page.prop('href'))
  })
}

function checkAllLinksOfListedPages() {
  // Get each link in main page list (e.g. list of standards)
  cy.get("#main-content ol a").each(link => {
    cy.visit(link.prop('href'))
    checkAllLinks()
    cy.go('back')
  })

  cy.get('#main-content').then(mainContent => {
    // Check if we can locate the "next" pagination link
    if (mainContent.find(".govuk-pagination__next a").length > 0) {
      cy.get("#main-content .govuk-pagination__next a").then(link => {
        cy.visit(link.prop('href'))
        checkAllLinksOfListedPages()
      })
    }
  })
}
