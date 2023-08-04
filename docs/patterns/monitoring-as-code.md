---
layout: pattern
order: 1
title: Monitoring-as-code (MaC)
date: 2023-05-31
tags:
- Observability
- Monitoring
- Alerting
- SRE
---

At the Home Office we follow the [GDS Service Manual guidance on how to monitor the status of services](https://www.gov.uk/service-manual/technology/monitoring-the-status-of-your-service) and set performance metrics.

Teams should follow [SRE best practices](https://sre.google/sre-book/table-of-contents/) to manage the reliability of services, by using service level indicators (SLIs), service level objectives (SLOs) and error budgets. 

---

## Solution

The Home Office Monitoring-as-Code (MaC) is a monitoring and alerting framework. It's a Jsonnet Mixin implementation of Service Level Indicators (SLIs), Service Level Objectives (SLOs) and Error Budgets. It uses Prometheus and Grafana, which are open-source monitoring and alerting systems.

Monitoring-as-code allows platform teams to:
- create consistent Grafana dashboards and Prometheus rules across the entire service portfolio
- monitor defined SLOs targets
- measure service reliability

[MaC is an open sourced framework available on Github](https://ho-cto.github.io/sre-monitoring-as-code/).

## Considerations

If you are only charting CPU and memory usage then you won't see the full benefits of this framework, it is better suited to teams that have identified SLI(s) and SLO(s) ahead of time. MaC provides some sensible defaults - it is worth looking through the accompanying [adopting SRE with Service Level Objectives guidance](https://ho-cto.github.io/sre-monitoring-as-code/learn-mac/sre-with-slo/).

---
