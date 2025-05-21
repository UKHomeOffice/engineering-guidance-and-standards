---
layout: pattern
order: 1
title: Docs as code
date: 2025-04-25
tags:
- Ways of working
- Source management
- Documentation
---

The Home Office [DDaT Strategy 2024 - Principle 2 - Create shared technology products](https://www.gov.uk/government/publications/home-office-digital-data-and-technology-strategy-2024/home-office-digital-data-and-technology-strategy-2024#create-shared-technology-products) provides direction for improved developer documentation.  

> "We will implement a docs as code approach to documentation to ensure it develops in tandem with products"

Teams should document their services and technology using docs as code wherever possible, preferably with the input of dedicated technical writers. 

---

## Solution

+ [Understanding the docs as code approach](#understanding-the-docs-as-code-approach)
+ [Getting started](#getting-started)

---

### Understanding the docs as code approach

The Government Digital Service (GDS) have written a blog post on [why they use a ‘docs as code’ approach for technical documentation](https://technology.blog.gov.uk/2017/08/25/why-we-use-a-docs-as-code-approach-for-technical-documentation/). Docs as code is a philosophy that treats writing documentation in a similar way to code, using familiar tools and workflows, such as:

- Issue Trackers
- Branching and Version Control (Git) - preferably storing documentation files in the same repositories as the source code
- Plain Text Markup (Markdown, reStructuredText, Asciidoc)
- Code Reviews
- Automated Tests

Using a docs as code approach means technical writers follow the same workflows as development teams, allowing better integration for them into product teams. Writers document features as developers complete them, which ensures they are accurate, and allows an extra level of user testing that can directly inform development, rather than identify issues when it is too late. This enables a culture where writers and developers work closely together to continuously maintain documentation, keeping it up to date and ensuring every aspect of a service or application is described for users, reducing the need for them to contact support for help.
 
A docs as code approach also gives you the following benefits:

- Writers integrate better with development teams
- Developers will often write a first draft of documentation, reducing the time writers spend interviewing developers for technical accuracy
- You can block merging of new features if they do not include documentation, which incentivises developers to write about features while they are fresh
- Allows for easy iteration improvement of content inline with feature changes and feedback

### Getting started

The Home Office software engineering Ways of Working guild has investigated some different technical products for implementing docs as code approaches. An outline of options is below, this site uses the x-gov Eleventy plugin.

#### Middleman and GDS Tech Docs Template

Links to documentation
: - [Middleman](https://middlemanapp.com/)
  - [Alpha-gov tech docs template](https://tdt-documentation.london.cloudapps.digital/)

Reviewed
: Yes

Comments
: Ruby based. 
  
  The original GDS sponsored effort to create a gov.uk compliant docs as code pattern.

Example of Home Office documentation using this option
: - [SRE monitoring as code](https://ho-cto.github.io/sre-monitoring-as-code/)

#### Eleventy and x-gov Eleventy plugin

Links to documentation
: - [Eleventy](https://www.11ty.dev/docs/)
  - [X-gov eleventy plugin](https://x-govuk.github.io/posts/govuk-eleventy-plugin/)

Reviewed
: Yes

Comments
: Node.js based.
  
  A newer offering that also provides gov.uk styling and easy to configure search functionality.

  The [Home Office docs-as-code template](https://github.com/UKHomeOffice/eleventy-docs-as-code-template) is a good starting point for a site with Home Office branding. It uses the base configuration and additional styles applied to this engineering guidance and standards site, resulting in a similar look and feel.

Example of Home Office documentation using this option
: - [DECS developer documentation](https://ukhomeoffice.github.io/hocs/get-started/)
  - [Developer healthcheck docs](https://ukhomeoffice.github.io/developer-healthcheck-docs/)

---
