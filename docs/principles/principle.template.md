---
layout: principle
order: 1
title: Principle title
date: git Last Modified
tags: # use `tags: []` for no tags, "Principles" tag is included automatically
  - TAG 1
  - TAG 2
related: # remove this section if you do not need related links on your page
  sections:
    - title: Related links
      items:
        - text: Writing a standard
          href: /standards/writing-a-standard # Note: use an absolute link from the site home page
---

<!-- Principle description -->

### Using links
#### Internal links
Internal links need to follow this format:
[link text to internal page]({{ '/standards/writing-a-standard' | url }})

Note the use of the `url` filter. This ensures the link is appended to the base URL of the webpage correctly.

#### External links
External links follow standard markdown formatting:
[link text to external page](https://example.com)

---

## Rationale

<!-- Rationale text -->

---

## Applications and Implications

<!-- Applications and implications text, it is best if these are bullet points -->
