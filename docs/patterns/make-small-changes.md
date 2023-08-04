---
layout: pattern
order: 1
title: Make small changes
date: 2023-08-04
tags:
- Build, release and deploy
---

Make smaller incremental changes in your service, rather than storing up changes and deploying them in bulk. Large changes carry more risk. As more is changing at once, the chance of something breaking is greater, at the same time it will be harder to debug exactly what caused any problems. Making lots of small changes has a number of benefits:

- Reduces the failure risk of deployments
- Small changes build confidence in the release process, which helps reduce perceived risk by the business
- Frequent delivery of change into production increases business confidence in the team's ability to deliver value
- Find issues quicker, as if something has failed testing, it's more than likely a recent change made
- Makes deployments more predictable and reliable
- When untested failures do occur (even in production), rolling back or fixing is much easier, as only a small part of the system has changed
- Gets new features out to users more quickly, which means you can deliver value and gain feedback more quickly
- Smaller changes will have less impact (for example) on end users who have to use a GUI/web interface

>### Example:
>
>To complete a new feature, 10 changes are required. If the changes made in all 10 changes are deployed at once, and a problem occurs, it is difficult to know where the problem was introduced. Whereas, if each change was deployed separately, it is much easier to see where the problem occurred.

---

## Solution

- Each change should be the smallest possible change, that keeps your default branch in a deployable state
- Every time a change is made, this should be automatically tested, delivered to an artefact repository, and deployed all the way to production, using CI/CD
- As soon as you have something that can be be deployed, deploy it through all your environments
- Use feature flags when you need to make changes without making them immediately available to users
- Make use of the Agile Change Management process when integrating with Live Services / ServiceNow

---
