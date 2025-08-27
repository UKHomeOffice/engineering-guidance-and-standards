---
layout: principle
order: 1
title: Secure by design
date: 2025-08-27
tags:
  - Security
  - Software design
  - Ways of working
related:
  sections:
    - title: Related links
      items:
        - text: Home Office 2030 Digital Strategy
          href: https://www.gov.uk/government/publications/home-office-2030-digital-strategy/home-office-2030-digital-strategy
        - text: Government Security Group (GSG) Secure by Design
          href: https://www.security.gov.uk/policy-and-guidance/secure-by-design/
        - text: Security is everyone's responsibility
          href: /principles/security-is-everyones-responsibility/
---

Delivery teams need to incorporate effective cyber security practices when building digital services and technical infrastructure.

---

## Rationale
Ensure that security is embedded from the start. Delivery teams should work to reduce vulnerabilities and improve cyber resilience while aligning with internal policy and cross government initiatives such as the [Home Office 2030 Digital Strategy](https://www.gov.uk/government/publications/home-office-2030-digital-strategy/home-office-2030-digital-strategy#secure-our-technology-to-tackle-growing-cyber-security-threats), and the [Government Security Group (GSG) Secure by Design Framework](https://www.security.gov.uk/policy-and-guidance/secure-by-design/).

Security controls that are designed to mitigate understood risks are easier to test and measure for their effectiveness. It is important to implement security features that deliver valuable counters to threats, are balanced with user needs and facilitate the ongoing operation and iteration of our services.

## Applications and Implications
- Establish a security culture within the team, where [everyone is responsible for security](/principles/security-is-everyones-responsibility/). Engage with Home Office Cyber Security (HOCS) and security teams early
- Security is embedded early and continuously throughout the software development lifecycle, reducing vulnerabilities and rework
- Use [threat modelling](/patterns/threat-modelling/) techniques to understand the landscape and actors. This will help to identify threats and risks against your architecture holistically, including shared capabilities or services
- Test security features with users to minimise potential negative impacts on user experience
- Apply defence-in-depth with multi-layered proportionate security controls to protect against a range of threats
- Apply secure defaults, [encryption in-transit and at rest](/standards/encrypting-data-rest-transit/), enforce the principle of least privilege and [Zero Trust](/principles/zero-trust/), and [manage secrets](/standards/managing-secrets/) securely
- Follow secure coding standards, conduct [threat modelling](/patterns/threat-modelling/), and integrate security checks into code reviews and CI/CD pipelines
- Scan [dependencies](/standards/managing-security-software-dependencies/), maintain a clear dependency map, and understand the wider supply chain risk

