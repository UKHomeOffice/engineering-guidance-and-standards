---
layout: pattern
order: 1
title: Catch defects early (shift quality left)
date: 2023-09-08
tags:
  - Build, release and deploy
  - Ways of working
  - Quality engineering
---

Shifting quality checks to the left of the development process means that teams can identify issues earlier, this is particularly beneficial with automated checks. Catching defects early means that:

- Any defects can be addressed more quickly
- Tighter feedback loop. Allows defects to be fixed while the change context is still fresh in the developer's head
- Reduces development and test effort to deliver a change, as issues can be caught before a formal test phase
- Defects can be caught before they can impact on your users, which will increase your users' confidence in your service
- Reduces the risk of adverse changes entering the product

Overall this allows for faster iteration and improves the quality of your service.

---

## Solution

All products and systems will have their own context, and teams should prioritise the activities they shift to the left to maximise benefits. This solution list is not exhaustive but provides a good starting point to enable catching defects early.

- Developers should be able to spin up a copy of the environment on their local machine
- Enable developers to test their changes in a local development environment
- Define staging environments, the testing to be done in those environments, and the progression criteria
- Have staging environments that match the production environment as closely as possible
- Test changes in a Continuous Integration pipeline before they reach a staging environment (for example, run unit & functional tests)
- Test changes in staging environments before they reach production (for example, run system-wide and integration tests)

---

## Considerations

- Be deliberate when moving manual tasks to the left as this can slow down delivery
- Also consider moving other activities to the left, for example secure by design activities
- Moving quality control to the left should not be considered as a substitute to observability in production - use shift right activities to catch defects quickly in production
- Shifting assurance left lets you identify things before they become an issue, but you will also need assurance throughout the development lifecycle. For example vulnerability scanning for dependencies should be considered left and right, to allow for vulnerabilities that arise in production after deployment
- Shifting security considerations left, automating security testing, and implementing policies early improves security integration in the development lifecycle and reduces risk 

---
