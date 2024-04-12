---
layout: principle
order: 1
title: Design from evidence
date: 2023-08-09
tags:
- Software design
- Documentation
---

Evidence-based decisions improve our ability to meet user needs. Without evidence of why we do things and their impact, it is hard to know what problems there are, what features should be implemented and how best to maintain our products.

---

## Rationale

Successfully meeting user needs requires a proven understanding of user experience.  We must ensure that the evidence we base our decisions on is up to date, valid and transparent.  This allows us to iterate with short feedback loops and provide value back to our users more quickly.   This applies across the whole lifecycle of a product. Evidence can be drawn from user research and other non-functional elements, for example legal, security, performance and other compliance requirements.

Designing from evidence, and documenting that effectively, allows people to understand the intent behind design choices. This can help to reduce cost by only meeting valid requirements. This also aids in the future maintainability of products because it is clearer why things were done, and the potential for regression of functionality is reduced. Designing test approaches based on good evidence of the correct requirements gives assurance and greater confidence in the product.

---

## Applications and Implications

- Be product centric. Understand user needs and provide evidence for the successful delivery of functionality. User research is a great way to do this, especially as part of short, continuous, agile feedback loops
- All needs and requirements - whether functional or non-functional - should be documented, pointing back to the evidence base and rationale for the requirement
- Tests should be used to provide evidence that requirements have been met. This should be understandable to stakeholders so that they have confidence in the software
- Provide evidence for design decisions in documentation and adhere to the [minimal documentation standard]( /standards/minimal-documentation-set-for-a-product/) - technical decision logs and other useful design artefacts make assurance, future maintenance and development easier

---
