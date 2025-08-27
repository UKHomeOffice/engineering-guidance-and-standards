---
layout: principle
order: 4
title: Proportionate security
date: 2023-07-13
tags:
- Security
- Software design
related: # remove this section if you do not need related links on your page
  sections:
    - title: Related links
      items:
        - text: Threat modelling
          href: /patterns/threat-modelling/
---

Proportionate security enables both usable and secure services. Understand the value of the asset you are engineering, and your threat context, and implement security to mitigate specific risks or threats. Work with security teams to make decisions so that controls are being implemented for appropriate reasons.

---

## Rationale

At the Home Office we build and operate systems in our own threat landscape, with particular vectors to consider, including motivated, well-funded and well-organised threat actors. These vectors require effective defences. Security features require effort to implement and maintain. Overly restrictive security controls incur unnecessary cost and can drive unintended and unwanted behaviour. 

Security controls that are designed to mitigate understood risks are easier to test and measure for their effectiveness. It is important to implement security features that deliver valuable counters to threats, are balanced with user needs and facilitate the ongoing operation and iteration of our services.

---

## Applications and Implications

- Use [threat modelling](/patterns/threat-modelling/) techniques to understand the landscape and actors. This will help to identify threats and risks against your architecture holistically, including shared capabilities or services
- Test security features with users to minimise potential negative impacts on user experience
- Consider the cost vs benefit of proposed controls
- Implement and contribute to the Home Office engineering security standards by collaborating with security teams

---
