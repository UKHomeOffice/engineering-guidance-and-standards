---
layout: sub-navigation
order: 1
title: Infrastructure and configuration as code
date: git Last Modified
id: SEGAS-00005
tags:
- Source management
- Build, Release and Deploy
- Configuration
- Infrastructure
- CI/CD
---

{% import "_includes/macros/tags.njk" as pageTag %}

Last updated: {{ page.date | postDate }}
{{ pageTag.tags(tags)  }}

Configuration and infrastructure should be defined as code and treated in the same way as application code. 
Storing configuration as code in a source code repository protects those definitions as an asset and means 
we can apply many of our best practices for managing code. This ensures you know how you are running your 
applications, allows changes to be traced and audited, and allows rolling back to a previous state. Other benefits include:

- Assists testing, peer review and other assurance of changes
- Avoids hidden state, as all configuration is visible in a repository
- Improves the speed and reliability of disaster recovery processes
- Configuration is versioned and stable, and can be consistently promoted across deployment environments using automated CI/CD pipelines

---

## Requirements

- [Application configuration MUST be stored as code](#application-configuration-must-be-stored-as-code)
- [Infrastructure configuration MUST be stored as code](#infrastructure-configuration-must-be-stored-as-code)
- [Configuration code MUST be validated](#configuration-code-must-be-validated)
- [Secrets MUST NOT be stored in configuration code](#secrets-must-not-be-stored-in-configuration-code)
- [Source management best practices MUST be followed for configuration code](#source-management-best-practices-must-be-followed-for-configuration-code)

### Application configuration MUST be stored as code

### Infrastructure configuration MUST be stored as code

### Configuration code MUST be validated 

### Secrets MUST NOT be stored in configuration code

### Source management best practices MUST be followed for configuration code

---
