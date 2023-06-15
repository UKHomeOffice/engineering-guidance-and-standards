---
layout: sub-navigation
order: 1
title: Docs-as-code (DaC)
date: git Last Modified
tags:
- Observability
---

{% import "_includes/macros/tags.njk" as pageTag %}

Last updated: {{ page.date | postDate }}
{{ pageTag.tags(tags)  }}

Docs as Code is the government standard for writing technical documentation. The Government Digital Service (GDS) have written a blog post on [why they use a ‘docs as code’ approach for technical documentation](https://technology.blog.gov.uk/2017/08/25/why-we-use-a-docs-as-code-approach-for-technical-documentation/).

In the Home Office [DDaT Strategy 2024 - Principle 2 - Create shared technology products](https://www.gov.uk/government/publications/home-office-digital-data-and-technology-strategy-2024/home-office-digital-data-and-technology-strategy-2024#create-shared-technology-products) there is direction to place importance on developer documentation.  

> "We will implement a [docs as code approach](https://www.gov.uk/guidance/how-to-document-apis) to documentation to ensure it develops in tandem with products, and to integrate technical writers with development and operations teams."

Teams should document their services and technology using docs as code wherever possible, preferably with the input of dedicated technical writers.

+ [What is Docs as Code?](https://collaboration.homeoffice.gov.uk/display/SEGAS/Docs-as-code#Docsascode-WhatisDocsasCode?)
+ [Getting started](https://collaboration.homeoffice.gov.uk/display/SEGAS/Docs-as-code#Docsascode-Gettingstarted)
  + [Technical Options](https://collaboration.homeoffice.gov.uk/display/SEGAS/Docs-as-code#Docsascode-TechnicalOptions)
+ [Useful resources](https://collaboration.homeoffice.gov.uk/display/SEGAS/Docs-as-code#Docsascode-Usefulresources)
---

## What is Docs as Code?

Even in an agile environment, documentation is often left until the final stages of a release cycle, when code freezes have taken place. This leaves a wide margin for error; if technical writers discover issues with a service when writing the documentation, it is too late for developers to fix them.

Documentation as Code, commonly known as Docs as Code, is a philosophy that treats writing documentation the same way as code, using similar tools and workflows, such as:

+ Issue Trackers
+ Branching and Version Control (Git) - preferably storing documentation files in the same repositories as the source code
+ Plain Text Markup (Markdown, reStructuredText, Asciidoc)
+ Code Reviews
+ Automated Tests

Using a docs as code approach means technical writers follow the same workflows as development teams, allowing better integration for them into product teams. Writers document features as developers complete them, which ensures they are accurate, and allows an extra level of user testing that can directly inform development, rather than identify issues when it is too late. This enables a culture where writers and developers work closely together to continuously maintain documentation, keeping it up to date and ensuring every aspect of a service or application is described for users, reducing the need for them to contact support for help.

>### Diagram to be replaced?
 
A Docs as Code approach also gives you the following benefits:

+ Writers integrate better with development teams
+ Developers will often write a first draft of documentation, reducing the time writers spend interviewing developers for technical accuracy
+ You can block merging of new features if they do not include documentation, which incentivises developers to write about features while they are fresh
+ Allows for easy iteration improvement of content inline with feature changes and feedback

## Getting started

The SEGAS Ways of Working Guild has investigated the different technical options for implementing docs as code approaches. An outline of options is below.

### Technical Options

| Option and links to documentations | Assessed | Recommended for use? | Comments | Examples of HO Documentation using this option |
|---|---|---|---|---|
| Middle man and GDS Tech Docs Template <br><br> https://middlemanapp.com/ <br><br> https://tdt-documentation.london.cloudapps.digital/ <br><br> https://github.com/alphagov/tech-docs-template | YES | YES | Ruby based. <br> The original GDS sponsored effort to create a gov.uk compliant docs-as-code pattern. <br>This is a good option to use as works out of the box and is (currently) well supported by colleagues across government. The future direction of this is currently under review by technical writers at GDS. | https://ho-cto.github.io/sre-monitoring-as-code/ |
| X-gov Eleventy Plugin <br><br> https://x-govuk.github.io/govuk-eleventy-plugin/ <br><br> https://x-govuk.github.io/posts/govuk-eleventy-plugin/ | YES | YES | Node.js based but works with multiple template languages. <br><br> A newer offering that also provides gov.uk styling and general compliance. Easy to use with search functionality and more available out of the box. <br><br> While currently supported by the xGov Software Engineering community this option is slightly less mature than the GDS sponsored Tech Docs Template. | https://ukhomeoffice.github.io/hocs/get-started/ |
| Hugo <br><br> https://gohugo.io/getting-started/quick-start/ | YES | NO | Go based. <br> Perfectly good static site generator, but lacks any existing pattern for creating gov.uk or Home Office styled pages. | N/A |


## Useful resources
+ Technical Writing channel in x-gov Slack
+ How to [write clear technical documentation](https://ho-cto.github.io/engineering-guidance-and-standards/docs/standards/write-clear-documentation)

---
