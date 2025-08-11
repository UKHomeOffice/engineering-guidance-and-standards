---
layout: principle
order: 1
title: Secure by design
date: 2025-08-11
tags:
  - Security
  - Software design
  - Ways of working
---

## Rationale
Ensure that security is embedded from the start. Delivery teams should work to reduce vulnerabilities and improve cyber resilience while aligning with internal policy and cross government initiatives such as [Government Security Group (GSG) Secure by Design](https://www.security.gov.uk/policy-and-guidance/secure-by-design/) and [NCSC Cyber Assessment Framework (CAF)](https://www.ncsc.gov.uk/collection/cyber-assessment-framework).

## Applications and Implications
- Establish a security culture within the team, where [everyone is responsible for security](/principles/security-is-everyones-responsibility/). Engage with Home Office Cyber Security (HOCS) and security teams early.
- Security is embedded early and continuously throughout the software development lifecycle, reducing vulnerabilities and rework.
- Apply defence-in-depth with multi-layered [proportionate security](/principles/proportionate-security/) controls to protect against a range of threats.
- Apply secure defaults, [encryption in-transit and at rest](/standards/encrypting-data-rest-transit/), enforce the principle of least privilege and [Zero Trust](/principles/zero-trust/), and [manage secrets](/standards/managing-secrets/) securely.
- Follow secure coding standards, conduct [threat modelling](/patterns/threat-modelling/), and integrate security checks into code reviews and CI/CD pipelines.
- Scan [dependencies](/standards/managing-security-software-dependencies/), maintain a clear dependency map, and understand the wider supply chain risk.

