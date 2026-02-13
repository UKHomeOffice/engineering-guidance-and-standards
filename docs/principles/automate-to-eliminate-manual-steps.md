---
layout: principle
order: 1
title: Automate to eliminate manual steps
date: 2026-02-13
tags:
- Automation
- Ways of working
- Operations
- Sre
- Quality engineering
related:
- /standards/writing-a-principle/
---
 
## Description
Manual processes increase operational cost, introduce human error and slow teams down. Designing for automation from the outset results in more reliable, maintainable and scalable systems. This principle encourages teams to minimise toil by removing manual steps in the design, build and operation of services, tooling and platforms.
 
By making automation an expected part of delivery, services become easier to run and support, enabling engineering teams to focus on delivering value rather than performing repetitive tasks.
 
## Rationale
Services often reach live service without the necessary administration tooling, creating avoidable burdens on engineers. This results in time-consuming manual work, higher error rates and increased long‑term costs.
 
Eliminating toil is a core concept of Site Reliability Engineering, enabling more sustainable and higher‑quality operations. Automating operational tasks improves repeatability, reduces risk and helps teams scale effectively.
 
## Applications and implications
 
### Applications
- Automate repeatable operational tasks wherever possible.
- Consider operational cost and required automation early in architecture and design, not after go‑live.
- Ensure new services include necessary administration or operational tooling as part of initial delivery.
- Apply automation consistently across external‑facing services, internal tooling, infrastructure and platforms.
- Evaluate automation maturity when onboarding services from third‑party suppliers.
- Refer to SRE *Eliminating Toil* guidance when identifying suitable automation candidates.
 
### Implications
- Teams may need to make upfront investments in automation to reduce longer‑term operational costs.
- Some services may require improved tooling or refactoring to minimise manual administration.
**- Automation should be treated as a core requirement, not an optional enhancement.**orking, Operations, SRE, Quality engineering
