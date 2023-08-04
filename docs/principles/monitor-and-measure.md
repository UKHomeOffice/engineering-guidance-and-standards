---
layout: principle
order: 1
title: Monitor and measure proactively
date: 2023-07-28
tags:
- Ways of working
- Build, release and deploy
- Observability
- SRE
---

Proactive and effective monitoring is the key to observable systems. Ensure consistent deployment, user experience and delivery across our systems by defining metrics and monitoring according to observability principles, and acting on those insights to instigate improvements.

---

## Rationale

> Observability is the ability to measure the internal states of a system by examining its outputs… (it) is important in software development because it gives you greater control over complex systems

[Splunk - What is observability?](https://www.splunk.com/en_us/data-insider/what-is-observability.html)

At the Home Office we follow the [GDS Service Manual guidance on how to measure and monitor](https://www.gov.uk/service-manual/technology/monitoring-the-status-of-your-service) the status of all aspects of the services we provide, including user experience, security, accounting, reliability and performance. We do this by building observability into our estate, which is highly complex and distributed. Using telemetry to provide deep visibility into systems enables our teams to cut through complexity to identify and resolve issues, and improve performance. In addition to this, high observability has other benefits:

- More insightful incident reviews
- Faster problem solving and shorter Mean Time to Recovery (MTTR)
- Improves reliability by enabling [SRE approaches based on pillars of service-level objectives, service level indicators and error budgets](https://sre.google/sre-book/introduction/)
- Smarter planning for code releases and application capacity
- Improved pipelines and developer velocity
- Monitoring and alerting aligned with [FinOps practices](https://www.finops.org/introduction/what-is-finops/) helps to drive down infrastructure costs and the Home Office carbon footprint

---

## Applications and Implications

- Implement infrastructure monitoring to determine the health and performance of the containers, environments and managed services your applications run on
- Investigate the behaviour of your application at the service level with Application Performance Monitoring (APM)
- When you can, use Real User Monitoring (RUM) to understand the real experience of users by collecting data from browsers about how your site performs and looks. This helps to isolate issues between the frontend or backend
- Synthetic monitoring allows you to test and measure the experience of your web application by simulating traffic with set test variables
- Log capture, aggregation and viewer tools help you to monitor and, importantly, analyse the logs generated from your applications and infrastructure. This helps troubleshooting and remediation
- Use [DORA metrics](https://cloud.google.com/blog/products/devops-sre/announcing-dora-2021-accelerate-state-of-devops-report) to understand software delivery performance

---
