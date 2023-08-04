---
layout: standard
order: 1
title: Managing secrets
date: 2023-08-04
id: SEGAS-00006
tags:
- Source management
- Build, release and deploy
- Secure development
---

Protecting access credentials and secret keys is essential for securing Home Office development activity. Leaked secrets can enable attackers to access confidential environments and information, and give them intelligence on potential threat vectors. Managing secrets with a defence in depth approach therefore mitigates a wide range of security risks in accordance with our [zero trust principle]({{ '/principles/zero-trust/' | url }}).

Here are some examples of the secrets that this standard covers.

- API tokens
- AWS Access Keys
- Cryptographic keys
- Azure Client Secrets
- Database passwords
- TLS certificates

---

## Requirements

- [You MUST only store secrets in an approved secret management system](#you-must-only-store-secrets-in-an-approved-secret-management-system)
- [You MUST proactively manage access to secrets](#you-must-proactively-manage-access-to-secrets)
- [You MUST implement secret scanning](#you-must-implement-secret-scanning)
- [You MUST ensure that secrets are not exported into monitoring systems](#you-must-ensure-that-secrets-are-not-exported-into-monitoring-systems)
- [You MUST document how secrets are managed](#you-must-document-how-secrets-are-managed)
- [You MUST monitor the usage of secrets to identify suspicious behaviour](#you-must-monitor-the-usage-of-secrets-to-identify-suspicious-behaviour)
- [You MUST have a response plan ready to enact if you have an incident](#you-must-have-a-response-plan-ready-to-enact-if-you-have-an-incident)

### You MUST only store secrets in an approved secret management system

Your platform team and Home Office Cyber Security (HOCS) contacts will advise on which secret management system to use. Secrets must not be committed into source control, built into artefacts, stored otherwise, or shared via channels that have not been approved.

### You MUST proactively manage access to secrets

Configure Identity and Access Management (IAM) rules in accordance with a least privilege access model to ensure that secrets are only available to those people and services that require them, when they require them. Use Role-based Access Controls (RBAC). Secrets should only be available for a limited but appropriate length of time. Access rules should be reviewed proactively to ensure they are appropriate. Credentials that are no longer required should be revoked.

### You MUST implement secret scanning 

You must limit the potential leakage of secrets to ensure that secrets are not stored outside of your secret management system. There are a number of different ways to scan for secrets at different stages, and there are agreed tools available that can be configured to meet the need for secret scanning.

- **Pre-commit** secret scanning, for example with IDE plugins. This is a good way to catch problems early but, by nature of being decentralised, should not be relied upon for assurance
- **Pre-receive** scanning, for example with GitHub server-side hooks. When code is pushed to the origin, the hook kicks off scanning server-side. If scanning fails, the push command fails
- **Pipeline** scanning scans source code and dependencies at the stage before they are packaged or built into an artefact
- **Artefact** scanning identifies sensitive information in container images and other artefacts. This can be continuously applied over artefact repositories for ongoing assurance
- **Observability mechanisms** are a potential source of secrets that can be exploited by attackers. Scan logs, alerts and other observability related files

### You MUST ensure that secrets are not exported into monitoring systems

Be purposeful with your approach to logging, trace, metrics and alerting. Take care when configuring for observability, for example using code reviews to verify logging statements do not include sensitive information.

### You MUST document how secrets are managed

Runbooks and other supporting documentation should enable teams to understand, at minimum, how secrets are stored, generated, managed and used, so that they can diagnose failures and respond to incidents.

### You MUST monitor the usage of secrets to identify suspicious behaviour

Ensure that you can track and trace access attempts, both denied and successful. Monitor the behaviour of infrastructure and other resources to have visibility of how they are being utilised. Using approved secret management systems will get you some observability for free.

### You MUST have a response plan ready to enact if you have an incident

Preventative measures like secret scanning, key rotation and close secret management are vital. Equally vital is the ability to recover quickly in the case of a leaked secret or other security incident. Define, document and rehearse incident response plans to cover scenarios where secrets are compromised. Be clear which teams need to be involved in an incident, and be confident in key revocation processes. Understand the impacts on your systems when secrets need to be regenerated.
