---
layout: sub-navigation
order: 1
title: Make-small-changes (MaC)
date: git Last Modified
tags:
- Build-Release-Deploy
- Fail-Fast
- Fail-Small
---

{% import "_includes/macros/tags.njk" as pageTag %}

Last updated: {{ page.date | postDate }}
{{ pageTag.tags(tags)  }}

Make smaller incremental changes in your production service, rather than storing up changes and deploying them in bulk. This reduces risk, aids fault-finding and delivers value to users more quickly.
---

## Why this is important
Large changes carry more risk, as more is changing at once, the chance of something breaking is greater, at the same time it will be harder to debug exactly what caused any problems. On the other hand, making lots of small changes:

+ Reduces the failure risk of deployments
+ Small changes build confidence in the release process, which helps reduce perceived risk by the business
+ Frequent delivery of change into production increases business confidence in the team's ability to deliver value
+ Find issues quicker, as if something has failed testing, it's more than likely a recent change made
+ It makes deployments more predictable and reliable
+ When untested failures do occur (even in production), rolling back or fixing is much easier, as only a small part of the system has changed.
+ Gets new features out to users more quickly, which means you can gain feedback more quickly
+ Smaller changes will have less impact (for example) on end users who have to use a GUI/web interface


>### Example:
>
>To complete a new feature, 10 changes are required. If the changes made in all 10 changes are deployed at once, and a problem occurs, it is difficult to know where the problem was introduced. Whereas, if each change was deployed separately, it is much easier to see where the problem occurred.

## Guidance
+ Each change should be the smallest possible change, that keeps your default branch in a deployable state
+ Every time a change is made, this should be automatically tested, delivered to an artefact repository, and deployed all the way to production, using CI/CD
+ As soon as you have something that can be be deployed, deploy it through all your environments!
+ Use feature flags when you need to make changes without making them immediately available to users
+ Make use of the Agile Change Management process when integrating with Live Services / ServiceNow

---
