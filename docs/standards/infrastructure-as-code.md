---
layout: standard
order: 1
title: Infrastructure as code
date: 2023-08-03
id: SEGAS-00005
tags:
- Source management
- Build, release and deploy
- Infrastructure
- CI/CD
---

Infrastructure should be defined as code and treated in the same way as application code. Storing infrastructure definitions in a source code repository protects them as an asset and means we can apply many of our best practices for managing code. This ensures you know how you are running your applications, allows changes to be traced and audited, and allows rolling back to a previous state. Other benefits include:

- Assists testing, peer review and other assurance of changes
- Avoids hidden state, as infrastructure definitions are visible in a repository
- Improves the speed and reliability of disaster recovery processes
- Infrastructure definitions are versioned and stable, and can be consistently promoted across deployment environments using automated CI/CD pipelines

---

## Requirements

- [Infrastructure definitions MUST be stored as code](#infrastructure-definitions-must-be-stored-as-code)
- [Infrastructure definitions MUST be validated](#infrastructure-definitions-must-be-validated)
- [Secrets MUST NOT be stored in infrastructure definitions](#secrets-must-not-be-stored-in-infrastructure-definitions)
- [Source management best practices MUST be followed for infrastructure definitions](#source-management-best-practices-must-be-followed-for-infrastructure-definitions)

### Infrastructure definitions MUST be stored as code

You must store your [Infrastructure as Code (IaC)](https://www.ibm.com/topics/infrastructure-as-code), and store it in a source code repository. Specifically, you should:

- define your cloud resources (e.g. [AWS](https://aws.amazon.com/)) in [Terraform](https://www.terraform.io/)
- define your Kubernetes resources in [k8s YAML](https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/) or [Helm charts](https://helm.sh/).

You should deploy your infrastructure via a Continuous Deployment (CD) pipeline. Avoid making changes through CLI and cloud consoles (e.g. [AWS console](https://aws.amazon.com/console/) or [kubectl](https://kubernetes.io/docs/reference/kubectl/)).

You should aim to ensure consistency across deployment environments, for instance by using the same infrastructure definitions and by managing environment-specific values in separate configuration.

### Infrastructure definitions MUST be validated 

At a minimum, syntax must be validated, either through a tool-specific checker, or a generic language (e.g. JSON/YAML) linter.

Additional checks should be done wherever possible, such as:

- Security scanning (to check for poor security practices such as hard-coding passwords)
- Dry running (to check validity and test that the required actions can be performed OK)

It is important to validate infrastructure definitions before deployment in order to catch things early. This should be done as early as possible, for instance on a commit to a feature branch. 

### Secrets MUST NOT be stored in infrastructure definitions

Secrets (for instance passwords, tokens, private keys) must not be stored in infrastructure code, otherwise anyone with access to the code will be able to impersonate the system.

An appropriate secrets management tool must be used, such as Vault, AWS Secrets Manager or Kubernetes secrets (with appropriate [security practices](https://kubernetes.io/docs/concepts/security/secrets-good-practices/)). Your platform engineering team will be able to assist you to locate the right tool.

### Source management best practices MUST be followed for infrastructure definitions

As with all code, you should strive to make your infrastructure definitions understandable, and carefully manage any change to that code. You should:

- Use comments where appropriate to make it clear what code does
- Practice good git hygiene, e.g. engineers should be able to understand the change history through good commit messages
- Use branching strategies and pull request processes to ensure change is reviewed and sequenced in a managed way
- Use versioning, and tagging, to help to give a clearer understanding of which code was live at a given point 

---
