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
- Quality engineering
related:
  sections:
    - title: Related links
      items:
        - text: Selecting a deployment strategy
          href: /patterns/selecting-a-deployment-strategy/
        - text: Make small changes
          href: /patterns/make-small-changes/
---

Deploying little and often is the practice of regularly deploying small changes, to production if possible, to avoid long intervals between deployments.

This reduces risk, enables teams to iterate and react faster, while maintaining product quality.

---

## Rationale

Deploying little and often reduces lead time from change request to release, for both new features and bug fixes. This enables users to see changes faster and provide feedback.

The cost of fixing potential issues is also smaller due to the fact that the little and often approach allows us to quickly adapt and release or rollback to a stable state. The smaller the change being pushed out the smaller the chance of merge conflicts.

Smaller, incremental deployments build confidence for stakeholders, creating less pressure around a release. Larger, infrequent releases that fail cause additional delays in new features and bug fixes, impacting the project team and users alike.

---

## Applications and Implications

- This principle is reliant on good quality tests which validate the release before it gets to production. These tests reinforce the confidence in our builds so that we can deploy often. Adding automated test coverage for example can greatly improve a team's likelihood of achieving this principle.
- We have CI/CD pipelines that are quick and efficient, automating repetitive tasks so that we can deploy little and often
- We must be aware of how frequent releases affect users, and consider whether it is applicable in each use case. For example, where a breaking change is introduced, or an in-progress operation would be affected
- Deployment strategies should be considered where appropriate. For example, feature flags can be used to allow deployments to occur without releasing new functionality to all users at once. See [Selecting a deployment strategy](/patterns/selecting-a-deployment-strategy/) for more detail

---
