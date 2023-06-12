---
layout: sub-navigation
order: 1
title: Minimal documentation set for a product
date: git Last Modified
id: SEGAS-00003
tags:
- Documentation
- Ways of working
---

{% import "_includes/macros/tags.njk" as pageTag %}

Last updated: {{ page.date | postDate }}
{{ pageTag.tags(tags)  }}

A product should be documented to a minimum standard so that new engineers can be easily 
onboarded, and knowledge is not siloed within the team.

---

## Requirements

- [Product documentation MUST include a description of the product and what it is for](#product-documentation-must-include-a-description-of-the-product-and-what-it-is-for)
- [Product documentation MUST include key architectural views](#product-documentation-must-include-key-architectural-views)
- [Product documentation MUST include a decision log](#product-documentation-must-include-a-decision log)
- [Product documentation MUST include incident management information](#product-documentation-must-include-incident-management-information)
- [Product documentation MUST include information about observability](#product-documentation-must-include-information-about-observability)
- [Product documentation MUST include build, release and deployment processes](#product-documentation-must-include-build-release-and-deployment-processes)

### Product documentation MUST include a description of the product and what it is for

The description should provide domain context to an engineer and link to product documentation, for example:

- Information about the team
- Key stakeholders
- User research findings
- Product roadmap
- Business analysis findings
- Governance and assurance documentation
    - IT health check reports
    - Security audits
    - Service design package

### Product documentation MUST include key architectural views

The architectural views may contain architecture diagrams, security models, entity-relationship models. The views should allow an engineer to understand how the components interact at a high and low level.

### Product documentation MUST include a decision log

A decision log should record key design decisions in context. A pattern should be selected to compliment the team ways of working, and may include for example [Architecture Decision Records](https://adr.github.io/). 

### Product documentation MUST include incident management information

An incident management process should include technical points of contact, runbooks, and disaster recovery information.

### Product documentation MUST include information about observability

Documentation should include details of logging, monitoring, and alerting designs, and links to alerting and monitoring dashboards.

### Product documentation MUST include build, release and deployment processes

Documentation should enable an engineer to create builds, find artefacts, package releases, deploy services, and manage environments.

---
