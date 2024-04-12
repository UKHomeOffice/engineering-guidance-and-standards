---
layout: standard
order: 1
title: Infrastructure utilisation monitoring
date: 2023-09-20
id: SEGAS-00011
tags:
  - Observability
  - Monitoring
  - Infrastructure
  - SRE
related:
  sections:
    - title: Related links
      items:
        - text: Monitor and measure proactively
          href: /principles/monitor-and-measure/
        - text: Monitoring-as-code
          href: /patterns/monitoring-as-code/
---

Monitoring infrastructure utilisation enables the increased reliability and performance of Home Office services by improving:

- Automation of infrastructure scaling
- More predictable workloads
- Trend analysis and capacity planning
- Cost optimisation
- Detecting, identifying and remediating issues
- Assuring the reliability of services

Monitoring infrastructure utilisation without also monitoring other signals of service performance is not enough to ensure a high quality service. Teams should look to our patterns for monitoring (for example [Monitoring-as-code](/patterns/monitoring-as-code/)) to meet this standard and complement other service monitoring.

---

## Requirements

- [Infrastructure MUST be observable relative to defined service level expectations](#infrastructure-must-be-observable-relative-to-defined-service-level-expectations)
- [CPU utilisation MUST be observable](#cpu-utilisation-must-be-observable)
- [Memory utilisation MUST be observable](#memory-utilisation-must-be-observable)
- [Disk utilisation MUST be observable](#disk-utilisation-must-be-observable)
- [Network utilisation MUST be observable](#network-utilisation-must-be-observable)
- [Historical infrastructure monitoring metrics MUST be retained for analysis](#historical-infrastructure-monitoring-metrics-must-be-retained-for-analysis)

### Infrastructure MUST be observable relative to defined service level expectations

Infrastructure utilisation should be baselined so that Service Level Objectives (SLOs) can be defined for infrastructure measures. This enables triggers for automated proactive measures.

### CPU utilisation MUST be observable

CPU utilisation by applications, services, systems or pods are to be monitored so that effective measures such as scaling out can be triggered in periods of saturation.

### Memory utilisation MUST be observable

Memory utilisation by applications, services, systems or pods are to be monitored so that effective measures such as scaling out can be triggered in periods of saturation.

### Disk utilisation MUST be observable

Disk utilisation by applications, services, systems or pods are to be monitored so that effective measures such as scaling out can be triggered in periods of saturation.

### Network utilisation MUST be observable

Network utilisation by applications, services, systems or pods are to be monitored so that effective measures such as scaling out can be triggered in periods of saturation.

### Historical infrastructure monitoring metrics MUST be retained for analysis

In order to allow for trend analysis and capacity planning, infrastructure monitoring metrics must be retained for a time period appropriate to the usage profile of the service.

---
