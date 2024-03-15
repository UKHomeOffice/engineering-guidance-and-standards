---
layout: standard
order: 1
title: Minimal documentation set for a product
date: 2024-03-14
id: SEGAS-00003
tags:
- Documentation
- Ways of working
---

A product should be documented to a minimum standard so that new engineers can be easily onboarded, and knowledge is not siloed within the team.

---

## Requirements

- [Product documentation MUST include a description of the product and what it is for](#product-documentation-must-include-a-description-of-the-product-and-what-it-is-for)
- [Product documentation MUST include key architectural views](#product-documentation-must-include-key-architectural-views)
- [Product documentation MUST include a decision log](#product-documentation-must-include-a-decision-log)
- [Product documentation MUST include runbooks for expected tasks](#product-documentation-must-include-runbooks-for-expected-tasks)
- [Product documentation MUST include information about observability](#product-documentation-must-include-information-about-observability)
- [Product documentation MUST include build, release and deployment processes](#product-documentation-must-include-build%2C-release-and-deployment-processes)

### Product documentation MUST include a description of the product and what it is for

The description should provide domain context to an engineer and link to product documentation, including:

- Information about the team
- Key stakeholders
    - Include contacts in case of a technical incident with the product
- Who the [Senior Responsible Owner (SRO)](https://www.gov.uk/government/publications/the-role-of-the-senior-responsible-owner/the-role-of-the-senior-responsible-owner) is
- User research findings
- Product roadmap
- Business analysis findings
- Governance and assurance documentation
    - IT health check reports
    - Security audits
    - Service design package which MUST include the incident management process

### Product documentation MUST include key architectural views

The architectural views may contain architecture diagrams, security models, entity-relationship models. The views should allow an engineer to understand how the components interact at a high and low level.

### Product documentation MUST include a decision log

A decision log should record key design decisions in context. A pattern should be selected to complement the team ways of working, and may include for example [Architecture Decision Records](https://adr.github.io/). 

### Product documentation MUST include runbooks for expected tasks

Document any incident support, disaster recovery, and maintenance tasks that are the responsibility of the product team. 

Where a task can't be automated, provide a runbook detailing how to carry out that task.

### Product documentation MUST include information about observability

Documentation should include details of logging, alerting and monitoring designs, and links to alerting and monitoring dashboards.

### Product documentation MUST include build, release and deployment processes

Documentation should enable an engineer to create builds, find artefacts, package releases, deploy services, and manage environments.

---
