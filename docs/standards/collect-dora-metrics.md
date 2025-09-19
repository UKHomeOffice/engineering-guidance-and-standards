---
layout: standard
order: 1
title: Collect DORA metrics
date: 2025-09-19
id: SEGAS-00018
tags:
  - Build, release and deploy
  - Infrastructure
related: # remove this section if you do not need related links on your page
  sections:
    - title: Related links
      items:
        - text: 'DORA’s software delivery metrics: the four keys'
          href: https://dora.dev/guides/dora-metrics-four-keys/
---

Collecting metrics is an important part of any project, metrics can be the first line in seeing any issues and help with reporting of a project's health. DORA (DevOps research and assessment team, part of Google Cloud) metrics have 4 key aspects to them. Change lead time, Deployment frequency, change fail percentage, failed deployment recovery time. The DORA site has a [guide on the DORA metrics](https://dora.dev/guides/dora-metrics-four-keys/).

## Requirements

- [You MUST collect the four key DORA metrics](#you-must-collect-the-four-key-dora-metrics)
- [You MUST monitor these metrics overtime](#you-must-monitor-these-metrics-over-time)

### You MUST collect the four key DORA metrics

The 4 metrics that must be collected are as follows:

* **Change lead time** - measuring the time it takes for a code commit or change to be successfully deployed to production.
* **Deployment frequency** - measuring how often application changes are deployed to production.
* **Change fail percentage** - measuring the percentage of deployments that cause failures in production, requiring hotfixes or rollbacks.
* **Failed deployment recovery time** - measuring the time it takes to recover from a failed deployment.

To begin to understand the strengths and pitfalls of a project we must collect these metrics first.

### You MUST monitor these metrics over time

---
