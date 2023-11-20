---
layout: standard
order: 1
title: Standard title
date: 2023-12-31 # this should be the date that the content was most recently amended or formally reviewed
id: SEGAS-00000 # Set unique ID for standard
# use `tags: []` for no tags
# Check https://ho-cto.github.io/engineering-guidance-and-standards/tags/ for existing tags
# Note: tags must use sentence case capitalisation
tags:
  - Tag one
  - Tag two
related: # remove this section if you do not need related links on your page
  sections:
    - title: Related links
      items:
        - text: Writing a standard
          href: /standards/writing-a-standard/ # Note: use an absolute link from the site home page
---

<!-- Standard description -->

<!-- 

# Notes on line breaks

Please see https://x-govuk.github.io/govuk-eleventy-plugin/markdown/#line-breaks for notes on usage of line breaks.

# Notes on using links

Internal links need to follow this format:
[link text to internal page]({{ '/standards/writing-a-standard/' | url }})
Note the use of the `url` filter. This ensures the link is appended to the base URL of the webpage correctly.

Anchor tags, such as those used when listing the requirements at the top of the 'Requirements' section, should use HTML URL Encoding. This ensures links to headers with punctuation will work as expected. You can obtain the HTML URL Encodeded link by running the site locally, inspecting the appropriate <h3> element in the browser's developer tools and copying the value from the 'id' attribute.

External links follow standard markdown formatting:
[link text to external page](https://example.com)
-->

---

## Requirement(s)

<!-- Populate list for each requirement (there can be more than 2) -->

<!--

# Notes on anchor links

Use HTML URL encoding as in the 'Notes on links' above, to ensure that links to headers with punctuation works as expected. For example:

[Product documentation MUST include build, release and deployment processes](#product-documentation-must-include-build%2C-release-and-deployment-processes)

-->

- [Requirement 1](#requirement-1)
- [Requirement 2](#requirement-2)

### Requirement 1

<!-- Requirement description text -->

### Requirement 2

<!-- Requirement description text -->

---
