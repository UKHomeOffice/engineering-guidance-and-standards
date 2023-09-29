# Checking the accessibility of a layout or template change

When changes are made to the templates that layout the pages in the site, the accessibility of the site should be 
checked as part of the review process. 

## Automated checks

[The accessibility cypress tests](../../cypress/e2e/a11y.spec.cy.js) will run 
[axe-core](https://github.com/dequelabs/axe-core) tests against each page in the site. This will check for issues like:
- The html is valid, and has a defined language.
- The page's content is contained in landmark regions, and these regions have unique roles.
- Each page has a unique title.

## Manual checks

### Prerequisites
- Check out the repository and serve the site, see 
  [reviewing the changes locally](../../README.md#preview-your-changes-locally) for instructions.
- You may need to enable keyboard navigation in your operating system's settings for keyboard navigation checks to work. 

Then open up example pages that will be affected by your layout changes. For each:

- [ ] Tab through the focusable elements of the page. Is it clear what has focus, and does focus progress in a logical 
  order?
    - By default, on macOS tab navigation doesn't reach all links. You will need to turn on the keyboard navigation in Settings -> Keyboard to perform this step on a MacBook.
- [ ] The first item before the menu should be a link to skip to the main content, which is only visible when focussed. Check this navigates to the start of the page's main content.
- [ ] Are blocks of text left-aligned?
- [ ] If standard content is included or generated as part of the template, check this against 
  [the content checklist](./content-checks.md).
- [ ] Zoom the page in to 200%. The content should fit horizontally within the page and not require any horizontal scrolling.
    - [ ] If zooming the page causes the layout to change, check that the visual order still matches the focus order
- [ ] Access the page on a small screen, or use browser tools to emulate this. If the smaller view size causes the layout to change, check that the visual order still matches the focus order.
