---
layout: principle
order: 1
title: Deploy little and often
date: 2024-09-26
tags:
- Build, release and deploy
- Ways of working
- Deployment
- CI/CD
- Quality
---

Deploying little and often is the practice of when we have a "completed" change and deploying that through 
our pipeline stages all the way to production often, no matter the size of the change. This reduces risk, enables the team to fix issues faster and iterate faster, while maintaining high product quality.

---

## Rationale

Deploying little and often strategy will enable users to see changes faster and then provide feedback.

The cost of fixing potential issues is also smaller due to the fact that the little and often approach allows us to quickly adapt and release or rollback to a stable state, also
the smaller the change being pushed out the smaller the chance of merge conflicts.

With this approach it builds confidence in the product to stakeholders by the means of more successful incremental builds, allowing there to be less pressure around a release.
Big sizeable releases that fail can cause a lot of pain not just for stakeholders but for others such as customers that rely on the system.

---

## Applications and Implications

- This principle is reliant on good quality tests which validate the release before it gets to production, therefore tests reinforce the confidence in our builds so that we can deploy often
- We have CI/CD pipelines that are quick and efficient, automating repetitive tasks so that we can deploy little and often
- We must be aware of downstream users, fixing forward is good which is what this principle implies but not every aspect of your project may be using this principle and therefore not as flexible
- As we will be deploying more often there is the option to use feature flags as a way to better safeguard with new features continually coming through to production 

---
