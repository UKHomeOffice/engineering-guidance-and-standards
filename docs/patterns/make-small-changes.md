---
layout: pattern
order: 1
title: Make small changes
date: 2023-08-09
tags:
- Build, release and deploy
- Ways of working
---

Make smaller incremental changes in your service, rather than storing up changes and deploying them in bulk. Making lots of small changes has a number of benefits:

- Frequent delivery of change into production increases confidence in the team's ability to deliver value
- Find issues quicker. If something has failed testing, it is more than likely that is due to a recent change
- Makes deployments more predictable and reliable, reducing risk
- When untested failures do occur (even in production), rolling back or fixing is much easier, as only a small part of the system has changed
- Delivers value to users quicker, shortening feedback loops and release cycles in line with a [DevOps culture](https://learn.microsoft.com/en-us/devops/what-is-devops#adopt-a-devops-culture)
- Smaller changes will have less impact (for example) on end users who have to use a GUI/web interface

>**Example**:
>
>To complete a new feature, 10 changes are required. If the changes made in all 10 changes are deployed at once, and a problem occurs, it is difficult to know where the problem was introduced. Whereas, if each change was deployed separately, it is much easier to see where the problem occurred.

---

## Solution

- Each change should be the smallest possible change, that keeps your default branch in a deployable state
- Every time a change is made, this should be automatically tested, delivered to an artefact repository, and deployed all the way to production, using CI/CD
- Use feature flags when you need to make changes without making them immediately available to users
- Make use of agile change management processes when integrating with live service teams
---
