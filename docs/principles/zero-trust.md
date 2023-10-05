---
layout: principle
order: 3
title: Zero trust
date: 2023-07-13
tags:
- Security
- Software design
- Observability
---

Zero trust architecture replaces implicit network-based trust, instead monitoring, authenticating and authorising across all access requests. Don't assume the trustworthiness of users, agents or networks. Build access policies and validation into the layers of interaction across your systems.

---

## Rationale

When implemented consistently, Zero trust architectures provide layered defence and greater visibility of behaviour and potential compromise. In large-scale, complex IT estates, where boundaries are numerous and the potential for lateral movement of attackers is increased, layered defence provides resilience and visibility is key to effective response.

Following principles of zero trust reduces reliance on individual defences like perimeter network security, mitigates lateral movement and improves Home Office cyber security.

---

## Applications and Implications

The [NCSC zero trust design principles](https://www.ncsc.gov.uk/collection/zero-trust-architecture) are a great start. Teams should work with these in mind and pay particular attention to:

- Encryption of all data at rest and in transit
- Implement access policies for interactions across your systems and components, base these on the principle of least privilege
- Assume requests against services are untrusted, use authentication and authorisation to prove otherwise
- Monitor user and agent activity against expected behaviour and health, and maintain traceability of actions

---
