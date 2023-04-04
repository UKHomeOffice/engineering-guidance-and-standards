---
layout: side-navigation
order: 4
title: Proportionate security
date: git Last Modified
tags:
- Security
- Software design
---

Last updated: {{ page.date | postDate }}
Tags: {{ tags | join(', ') }}

Understand your context and implement security controls to mitigate specific 
risks or threats. Be free to challenge security decisions to make sure that 
controls are being implemented for appropriate reasons.

---

## Rationale

At the Home Office we build and operate systems in our own threat landscape, 
with particular threat actors and vectors to consider. Security features cost 
time and effort to implement so they should be focused on delivering valuable 
counters to threats.

Security controls that are designed to mitigate understood risks are easier 
to test and measure for their effectiveness. Overly restrictive security 
controls can drive unintended and unwanted behaviour. Proportionate security 
enables both usable and secure services.

---

## Applications and Implications

- Use threat modelling techniques to identify threats and risks
- Test security features with users to minimise potential negative impacts on user experience
- Consider the cost vs benefit of proposed controls
- Implement, challenge and contribute to the Home Office engineering security standards

---
