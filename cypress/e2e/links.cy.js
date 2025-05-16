import {testing_params} from "../support/testing_params";

import pages from "../../_site/search.json"
import linkExceptionList from "../support/link-exception-list.json"

let visitedLinks = []; // allows the tests to not repeatedly test the same URLs

describe('Check pages contain valid links', () => {
  for(const page of pages) {
    it(`${page.title} (${page.url}) contains valid links`, () => {
      cy.visit(testing_params.TEST_ROOT_URL + page.url)
      checkAllLinks()
    })

    // Only check content pages for version permalink
    if ((page.url.includes("principles") && !page.url.endsWith("principles/")) ||
        (page.url.includes("standards") && !page.url.endsWith("standards/")) ||
        (page.url.includes("patterns") && !page.url.endsWith("patterns/")))
    {
      it(`${page.title} (${page.url}) contains version permalink`, () => {
        cy.visit(testing_params.TEST_ROOT_URL + page.url)
        cy.contains(".version-permalink",
          "Content version permalink (GitHub) (opens in a new tab)")
      })
    }
  }
})

function checkAllLinks() {
  // Exclude mailto links
  cy.get("a:not([href*='mailto:'])").each(page => {
    checkUrl(page.prop('href'))
  })
}

function isPermalink(url) {
  return url.match(/^https:\/\/github\.com\/UKHomeOffice\/engineering-guidance-and-standards\/blob\//)
}

function checkUrl(url) {
  console.log('checking: ', url);
  if (linkExceptionList.includes(url) || isPermalink(url)) {
    console.log('excluded: ', url);
    return
  }
  if (visitedLinks.includes(url)) {
    return
  }
  visitedLinks.push(url)
  cy.request(url)
}
