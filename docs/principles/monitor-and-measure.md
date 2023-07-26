---
layout: sub-navigation
order: 1
title: Monitor and measure proactively
date: git Last Modified
tags:
- Ways of working
- Build, release and deploy
- Observability
---

{% import "macros/tags.njk" as pageTag %}

Last updated: {{ page.date | postDate }}
{{ pageTag.tags(tags)  }}

Measure all aspects of the service from user experience, security, accounting, reliability and performance.

Meaningful monitoring of user journeys through SRE pillars of service-level objectives, service level indicators and error budgets.

---

## Rationale

To ensure conisistent deployment, and user experiance across systems.

---

## Applications and Implications

- Different focus for build vs deployment. Build/CI - speed. Deployment - more intested in success/zero downtime.
- Compare app metrics across deployments? 5xx errors?
- Measuring success of pipeline not necessarily = pipeline metrics  (XO observability)
- Need to review pipeline - does it continue to meet requirements? Acceptable limits, regression, what does "good" look like?

---
