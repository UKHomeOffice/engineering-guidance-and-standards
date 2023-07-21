---
layout: sub-navigation
order: 1
title: Infrastructure as code
date: git Last Modified
id: SEGAS-00005
tags:
- Source management
- Build, release and deploy
- Configuration
- Infrastructure
- CI/CD
---

{% import "macros/tags.njk" as pageTag %}

Last updated: {{ page.date | postDate }}
{{ pageTag.tags(tags)  }}

Infrastructure should be defined as code and treated in the same way as application code. 
Storing configuration as code in a source code repository protects those definitions as an asset and means 
we can apply many of our best practices for managing code. This ensures you know how you are running your 
applications, allows changes to be traced and audited, and allows rolling back to a previous state. Other benefits include:

- Assists testing, peer review and other assurance of changes
- Avoids hidden state, as configuration is visible in a repository
- Improves the speed and reliability of disaster recovery processes
- Configuration is versioned and stable, and can be consistently promoted across deployment environments using automated CI/CD pipelines

---

## Requirements

- [Infrastructure configuration MUST be stored as code](#infrastructure-configuration-must-be-stored-as-code)
- [Configuration code MUST be validated](#configuration-code-must-be-validated)
- [Secrets MUST NOT be stored in configuration code](#secrets-must-not-be-stored-in-configuration-code)
- [Source management best practices MUST be followed for configuration code](#source-management-best-practices-must-be-followed-for-configuration-code)

### Infrastructure configuration MUST be stored as code

You must store your [Infrastructure as Code (IaC)](https://en.wikipedia.org/wiki/Infrastructure_as_code), and store it in a source code repository. Specifically, you should:

- define your cloud resources (e.g. [AWS](https://aws.amazon.com/)) in [Terraform](https://www.terraform.io/)
- define your Kubernetes resources in [k8s YAML](https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/) and [Helm charts](https://helm.sh/).

You should define all of your environments in this way, to ensure that changes can be tested in staging environments before they reach production. Aim to ensure consistency between environments, perhaps via templating. By maintaining template variables in the same place, you can make it easy to understand the difference between your environments.

You should deploy your infrastructure via a Continuous Deployment (CD) pipeline. Avoid making changes through cloud consoles (e.g. [AWS console](https://aws.amazon.com/console/)) or through [kubectl](https://kubernetes.io/docs/reference/kubectl/), especially to production.

### Configuration code MUST be validated 

At a minimum, syntax must be validated, either through a tool-specific checker, or a generic language (e.g. JSON/YAML) linter.

Additional checks should be done wherever possible, such as:

- Security scanning (to check for poor security practices such as hard-coding passwords)
- Dry running (to check validity and test that the required actions can be performed OK)

It is important to validate infrastructure and configuration code before deployment in order to catch things early. This should be done as early as possible, for instance on a commit to a feature branch. 

### Secrets MUST NOT be stored in configuration code

Secrets (for instance passwords, tokens, private keys) must not be stored in configuration or infrastructure code, otherwise anyone with access to the code will be able to impersonate the system.

An appropriate secrets management tool must be used, such as Vault, AWS Secrets Manager or Kubernetes secrets (with appropriate [security practices](https://kubernetes.io/docs/concepts/security/secrets-good-practices/)). Your platform engineering team will be able to assist you to locate the right tool.

### Source management best practices MUST be followed for configuration code

As with all code, you should strive to make your infrastructure and configuration code understandable, and carefully manage any change to that code. You should:

- Use comments where appropriate to make it clear what code and configuration does
- Practice good git hygiene, e.g. engineers should be able to understand the change history through good commit messages
- Use branching strategies and pull request processes to ensure change is reviewed and sequenced in a managed way
- Use versioning, and tagging, to help to give a clearer understanding of which code and configuration was live at a given point 

---
