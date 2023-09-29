# Checking the accessibility of a content addition or change

When content is added to the site, or later updated it should be checked for accessibility issues as part of the 
review process. 

## Automated checks

Most content checks are context specific and can't be assessed by automated tools. [The accessibility cypress tests](
../../cypress/e2e/a11y.spec.cy.js) will run [axe-core](https://github.com/dequelabs/axe-core) tests against each page
in the site. This will check for issues like empty links, skipped heading levels. As part of checking every page it will
also verfiy that page titles are not repeated on multiple pages.

## Manual checks

Read through the page content. This is best done by checking out the repository and [reviewing the changes locally](
../../README.md#preview-your-changes-locally). You should be checking the following.

- [ ] The page uses plain language and avoids figures of speech, idioms, and complicated metaphors.
- [ ] Any images have an alt tag with an accessible description of the image. This can be achieved in markdown using
  `![Alt text](/path/to/image.png)`. If the image is decorative the alt text should be present but empty. This is
  the default behaviour in markdown if nothing is entered between the square braces, i.e. 
  `![](/path/to/decorative-image.png)`.
- [ ] Any links that open a new tab or window are identified as doing so.
- [ ] Where there is a list of things, an ordered list, unordered list, or definition list is used as appropriate. 
  Tabular data is displayed in a table. The markdown syntax for these can be found in the Gov.uk eleventy plugin
  documentation:
    - [Ordered and unordered lists](https://x-govuk.github.io/govuk-eleventy-plugin/markdown/#lists)
    - [Definition lists](https://x-govuk.github.io/govuk-eleventy-plugin/markdown-advanced/#definition-lists)
    - [Tables](https://x-govuk.github.io/govuk-eleventy-plugin/markdown-advanced/#tables)
- [ ] If any video or audio has been embedded in the page, these should have transcripts or captions, and should not 
  automatically play when a user accesses the page.

Open the page in an accessibility testing tool such as [WebAIM's WAVE browser plugins](https://wave.webaim.org/):

- Check the focus ordering:
    - [ ] The order should match the visible order on the page.
    - [ ] Check through the links included in the list - does the accessible name make it clear what is being linked to.
- Check the page structure:
    - [ ] The order should match the visible order on the page.
    - [ ] Check through the headings - does the accessible name make it clear what that section is about.
