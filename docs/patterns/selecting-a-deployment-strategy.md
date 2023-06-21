---
layout: sub-navigation
order: 1
title: Selecting a Deployment Strategy
date: git Last Modified
tags:
- BRD

---

{% import "_includes/macros/tags.njk" as pageTag %}

Last updated: {{ page.date | postDate }}
{{ pageTag.tags(tags)  }}

A deployment strategy defines the process that takes place when deploying from one version to another. You should select a consistent deployment strategy suitable for team and business needs. This reduces risk and increases repeatability between deployments.

---

## Solution

### Why this is important
Strategies help with your teams and business needs. With a good deployment strategy, the whole team is on the same page, and can work together to get code deployed quicker and more often.

Having a good deployment strategy decreases risk of prolonged downtime which will impact users, having a knock-on impact on the business or the public.

Having a repeatable deployment method encourages consistency between release versions and reduces the potential for human error.

## Considerations


+ Consult with stakeholders to understand the business requirements.
  + Is the system business critical and needs to be available 100% of the time?
  + Are there less critical time periods e.g. out of hours where downtime or reduced performance/availability would be acceptable?
  + Financial restrictions, e.g. additional cost of a deployment
+ Understand any technical limitations.
  + Needs to align to database migration strategy/ability.
  + Integration requirements with other systems - can they be deployed completely independently? Is a solid API versioning strategy in place?
  + Whether the host infrastructure (e.g. Lambda, Kubernetes, EC2) can support the desired deployment strategy.
  + Any code-specific requirements e.g. feature flags.
+ Different deployment strategies may be suitable for different product maturity (e.g. beta/live), however it's important to think about the requirements for live early on, as this can impact system design.
+ Understand team ways of working
  + Is feature switching required?
  + Is A/B testing required?
---
