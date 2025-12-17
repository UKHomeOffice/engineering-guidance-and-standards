---
layout: standard
order: 1
title: Collect DORA metrics
date: 2025-11-14
id: SEGAS-00018
tags:
  - Build, release and deploy
  - Infrastructure
related: # remove this section if you do not need related links on your page
  sections:
    - title: Related links
      items:
        - text: "DORA’s software delivery metrics: the four keys"
          href: https://dora.dev/guides/dora-metrics-four-keys/
---

Collecting metrics is an important part of any project, metrics can be the first line in seeing any issues and help with reporting of a project's health. DORA (DevOps research and assessment team, part of Google Cloud) metrics have 4 key aspects to them. Change lead time, Deployment frequency, change fail percentage, failed deployment recovery time. The DORA site has a [guide on the DORA metrics](https://dora.dev/guides/dora-metrics-four-keys/).

## Requirements

- [You MUST collect these metrics](#you-must-collect-these-metrics)
- [You MUST continuously monitor these metrics overtime](#You-must-continuously-monitor-these-metrics-overtime)

### You MUST collect these metrics

The 4 metrics that must be collected are as follows:

- **Change lead time** - measuring the time it takes for a code commit or change to be successfully deployed to production.
- **Deployment frequency** - measuring how often application changes are deployed to production.
- **Change fail percentage** - measuring the percentage of deployments that cause failures in production, requiring hotfixes or rollbacks.
- **Failed deployment recovery time** - measuring the time it takes to recover from a failed deployment.

To begin to understand the strengths and pitfalls of a project we must collect these metrics first.

### You MUST continuously monitor these metrics overtime

When we collect the DORA metrics we must have consistent references to check against overtime and therefore we must have a procedure in place to constantly capture the metrics.

This is done for the purpose of improving our deployment pipelines and these metrics help us understand the performance impact on the project they are relevant to.

We must then make these metrics accessible to whoever is appropriate to view them.

### You MUST understand what these metrics mean for your team

The DORA metrics come from research that indicates that these metrics correllate with team performance. To utilise these well in your own team you need to understand what is contributing negatively or positively to these metrics in context.

For example, if your deployment frequency is low, can you split large features into smaller deployable changes using feature flags? Adopting a principle like "[Deploy Little and Often](https://engineering.homeoffice.gov.uk/principles/deploy-little-and-often/)", are you also keeping your dependencies up to date?

It's ok if some of these metrics are lower than average for your team, as long as you understand why, and you can show that they are not an indication of a performance issue.

### You MUST have an action plan/procedure to improve metrics when they drop

While you will be monitoring these metrics, if they do drop to a level of concern, you must be able to react and make the appropriate changes to get back on track.

This can be as simple as flagging an issue and raising the appropriate ticket with the appropriate team to remedy the situation.

An example of this could be that your most recent deployment time has spiked, is there a reason for that? Have there been fundamental structure changes which means all your builds are expected to take slightly longer? Has there been downtime in your deployment pipelines? An action plan would cover this and set out a path to fix the situation.

---
