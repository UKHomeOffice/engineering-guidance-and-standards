---
layout: sub-navigation
order: 1
title: Minimal documentation set for a product
date: git Last Modified
id: SEGAS-00003
tags: [documentation, draft]
---
A Home Office engineering project should be documented to a minimum standard so that new engineers can be easily 
onboarded, and knowledge is not siloed within the team.

## Requirements
Engineers should own the following:
- A description of the product and what it is for
- An architecture diagram showing how your components are connected
- Decision Log
- Incident management process
- Observability
- Build, release, deploy process

### A description of the product and what it is for
The description should provide domain context to an engineer and link to product documentation.

Product documentation could include, for example:
- Information about the team
- Key stakeholders
- User research findings
- Product roadmap
- Business analysis findings
- Governance and assurance documentation
    - IT health check reports
    - Security audits
    - Service design package

### Architectural views
The architectural views may contain architecture diagrams, security models, entity-relationship models. The views should allow an engineer to understand how the components interact at a high and low level.

### Decision Log
A decision log should record key design decisions in context. A pattern should be selected to compliment the team ways of working, and may include for example [Architecture Decision Records](https://adr.github.io/). 

### Incident management process
An incident management process should include technical points of contact, runbooks, and disaster recovery information.

### Observability
Documentation should include details of logging, monitoring, and alerting designs, and links to alerting and monitoring dashboards.

### Build, release, deploy process
Documentation should enable an engineer to create builds, find artefacts, package releases, deploy services, and manage environments.
