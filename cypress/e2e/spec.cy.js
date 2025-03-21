import { testing_params } from "../support/testing_params";

describe("Front page loaded test", () => {
  it("finds the front page describing the sections of the site", () => {
    cy.visit(testing_params.TEST_ROOT_URL);
    cy.contains("h1", "Engineering Guidance and Standards");
    cy.contains("Principles");
    cy.contains("Standards");
    cy.contains("Patterns");
  });
});

describe("Standards page loaded test", () => {
  it("finds the page listing all standards", () => {
    cy.visit(testing_params.TEST_ROOT_URL);
    cy.contains("Read our standards").click();
    cy.title().should("include", "Standards");
    cy.contains(".x-govuk-masthead h1", "Standards");
    cy.contains(
      ".x-govuk-masthead",
      "Explicitly stated expectations for engineering teams"
    );
  });
});

describe("Principles page loaded test", () => {
  it("finds the page listing all principles", () => {
    cy.visit(testing_params.TEST_ROOT_URL);
    cy.contains("Read our principles").click();
    cy.contains(".x-govuk-masthead h1", "Principles");
    cy.contains(
      ".x-govuk-masthead",
      "To guide the behaviour and decisions of engineering teams"
    );
  });
});

describe("Standards page loaded test when clicked from breadcrumb", () => {
  it("finds the breadcrumb link for standards and checks we go to the Standards collection page", () => {
    cy.visit(testing_params.TEST_ROOT_URL);
    cy.contains("Read our standards").click();
    cy.contains("Accessibility").click();
    cy.get(".govuk-breadcrumbs__list").contains("Standards").click(); // this is the "breadcrumb" link
    cy.title().should("include", "Standards");
    cy.contains(".x-govuk-masthead h1", "Standards");
    cy.contains(
      ".x-govuk-masthead",
      "Explicitly stated expectations for engineering teams"
    );
  });
});

describe("Tag page loaded test", () => {
  it('finds the tag page listing all pages with the "Documentation" tag', () => {
    cy.visit(testing_params.TEST_ROOT_URL);
    cy.contains("Read our standards").click();
    cy.contains("Accessibility").click();
    cy.get(".tags").contains("Accessibility").click(); // this is the "tag" link
    cy.title().should("include", 'Pages tagged with "Accessibility"');
    cy.contains("h1", "Pages tagged with “Accessibility”"); // page renders with “ ” chars

    cy.contains("li", "Write effective documentation");
    cy.contains("li", "Accessibility");
  });
});

describe("All tags page loaded test", () => {
  it('finds the tag page listing all pages with the "standards" tag', () => {
    cy.visit(testing_params.TEST_ROOT_URL);
    cy.contains("Read our standards").click();
    cy.contains("Accessibility").click();
    cy.get(".tags").contains("Accessibility").click(); // this is the "tag" link
    cy.title().should("include", 'Pages tagged with "Accessibility"');
    cy.contains("h1", "Pages tagged with “Accessibility”"); // page renders with “ ” chars
    cy.contains("See all tags");

    // Assert all tags link is functional
    cy.contains("a", "all tags").click();
    cy.title().should("include", "All page tags currently in use");
    cy.contains("h1", "All page tags currently in use");
  });
});

describe("Sidebar link to other standards loaded test", () => {
  it("finds a sidebar link to another standard when viewing a standard", () => {
    cy.visit(testing_params.TEST_ROOT_URL);
    cy.contains("Read our standards").click();
    cy.contains("Accessibility").click();
    // reach the first standard page
    cy.contains("h1", "Accessibility");
    // click sidebar link
    cy.contains("nav.x-govuk-sub-navigation h2", "Standards");
    cy.contains(
      "nav.x-govuk-sub-navigation li",
      "SEGAS-00004 - Open source licensing"
    ).click();
    // check we reach the other standard page
    cy.contains("h1", "Open source licensing");
  });
});

describe("About page links from index page start button test", () => {
  it("finds the about page describing the aims of the site", () => {
    cy.visit(testing_params.TEST_ROOT_URL);
    // Click on first el containing the about page text
    cy.contains("Find out more about what we are doing").click();
    cy.contains("h2", "Why we are doing it");
  });
});

describe("About page links from footer test", () => {
  it("finds the about page describing the aims of the site", () => {
    cy.visit(testing_params.TEST_ROOT_URL);
    // Click on first li a containing 'About' page text
    cy.contains("li a", "About").click();
    cy.contains("h2", "Why we are doing it");
  });
});

describe("Cookies page links from footer test", () => {
  it("finds the cookies page giving a summary of cookie usage on the site", () => {
    cy.visit(testing_params.TEST_ROOT_URL);
    // Click on first li a containing 'About' page text
    cy.contains("li a", "Cookies").click();
    cy.contains("h1", "How we use cookies");
  });
});

describe("Related links", () => {
  it("finds the correct related link and follows it to a valid page", () => {
    cy.visit(testing_params.TEST_ROOT_URL);
    // Click through to standard page that has a related link
    cy.contains("Read our standards").click();
    cy.contains("Infrastructure utilisation monitoring").click();
    // Use the related link
    cy.contains(
      ".x-govuk-related-navigation a",
      "Monitor and measure proactively"
    ).click();
    cy.contains("h1", "Monitor and measure proactively");
  });
});

describe("Pagination links", () => {
  it("finds the pagination links and follows them to valid pages", () => {
    cy.visit(testing_params.TEST_ROOT_URL);
    // Click to standards page that has a related link
    cy.contains("Read our principles").click();
    // Use the related link
    cy.contains(".govuk-pagination__next a", "Next").click();
    cy.contains("h1", "Principles");

    cy.contains(".govuk-pagination__prev a", "Previous").click();
    cy.contains("h1", "Principles");
  });
});

describe("Content category displays in correct listing pages", () => {
  it("finds the content category in tag page", () => {
    cy.visit(testing_params.TEST_ROOT_URL + "/tags/ways-of-working/");
    cy.get("ol.app-document-list")
      .find(".document-category")
      .its("length")
      .should("be.gte", 5);
  });

  it("does not find the content category in principles page", () => {
    cy.visit(testing_params.TEST_ROOT_URL);
    cy.contains("Read our principles").click();
    // No .document-category listed in this page
    cy.get("ol.app-document-list")
      .find(".document-category")
      .should("have.length", 0);
  });

  it("does not find the content category in standards page", () => {
    cy.visit(testing_params.TEST_ROOT_URL);
    cy.contains("Read our standards").click();
    // No .document-category listed in this page
    cy.get("ol.app-document-list")
      .find(".document-category")
      .should("have.length", 0);
  });

  it("does not find the content category in patterns page", () => {
    cy.visit(testing_params.TEST_ROOT_URL);
    cy.contains("Read our patterns").click();
    // No .document-category listed in this page
    cy.get("ol.app-document-list")
      .find(".document-category")
      .should("have.length", 0);
  });
});
