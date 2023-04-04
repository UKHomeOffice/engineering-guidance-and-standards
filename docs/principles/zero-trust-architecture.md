---
layout: side-navigation
order: 3
title: Follow zero trust architecture principles
date: git Last Modified
tags:
- Security
- Software design
- Observability
---

Last updated: {{ page.date | postDate }}
Tags: {{ tags | join(', ') }}

Build access policies into the layers of interaction across your systems. 
Don't assume the trustworthiness of users, agents or networks.

---

## Rationale

Zero trust architecture replaces implicit network-based trust, instead 
monitoring, authenticating and authorising across all access requests. When 
implemented well this provides layered defence and greater visibility of 
behaviour and potential compromise.

Following principles of zero trust will reduce reliance on perimeter network 
security, mitigate lateral movement and improve Home Office cyber security.

---

## Applications and Implications

The [NCSC zero trust design principles](https://www.ncsc.gov.uk/collection/zero-trust-architecture) are a great start. Teams should work with
these in mind and pay particular attention to:

- Encryption of all data at rest and in transit
- Designing access policies for all interactions, based on principle of least privilege
- Authentication and authorisation of all connections
- Monitoring user and agent behaviour
---
