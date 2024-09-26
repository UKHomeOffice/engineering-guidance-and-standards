---
layout: principle
order: 1
title: Deploy little and often
date: 2024-09-26
tags:
- Ways of working
- Build, release and deploy
---

Deploying little and often is the practice of when we have a "completed" change deploying that through 
our pipeline stages all the way to production often, no matter the size of the change. This reduces risk, enables the team to fix issues faster and iterate faster, while maintaining high product quality
---

## Rationale

Deploying little and often strategy will enable users to see changes faster and then provide feedback.

The cost of fixing potential issues is also smaller due to the fact that the little and often approach allows us to quickly adapt and release or rollback to a stable state, also
the smaller the change being pushed out the smaller the chance of merge conflicts

With this approach it builds confidence in the product to stakeholders by the means of more successful incremental builds, allowing there to be less pressure around a release.
Big sizeable releases that fail can cause a lot of pain not just for stakeholders but for others such as customers that rely on the system.

---

## Applications and Implications

- We have tests that reinforce the confidence in our builds so that we can deploy often, therefore we must make sure our tests are of good quality
- We have CI/CD pipelines that are quick and efficient, automating repetitive tasks so that we can deploy little and often  

---
