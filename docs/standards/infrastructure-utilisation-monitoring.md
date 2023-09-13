---
layout: standard
order: 1
title: Infrastructure utilisation monitoring
date: 2023-09-13
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

Monitoring infrastructure utilisation without also monitoring other signals of service performance is not enough to ensure a high quality service. Teams should look to our patterns for monitoring (for example [Monitoring-as-code]({{ '/patterns/monitoring-as-code/' | url }})) to meet this standard and complement other service monitoring.

---

## Requirements

- [Infrastructure MUST be monitored relative to defined service level expectations](#infrastructure-must-be-monitored-relative-to-defined-service-level-expectations)
- [CPU utilisation MUST be monitored](#cpu-utilisation-must-be-monitored)
- [Memory utilisation MUST be monitored](#memory-utilisation-must-be-monitored)
- [Disk utilisation MUST be monitored](#disk-utilisation-must-be-monitored)
- [Network utilisation MUST be monitored](#network-utilisation-must-be-monitored)
- [Historical infrastructure monitoring metrics MUST be retained for analysis](#historical-infrastructure-monitoring-metrics-must-be-retained-for-analysis)

### Infrastructure MUST be monitored relative to defined service level expectations

Infrastructure utilisation should be baselined so that Service Level Objectives (SLOs) can be defined for infrastructure measures. This enables effective alerting, and triggers for automated proactive measures.

### CPU utilisation MUST be monitored

CPU utilisation by applications, services, systems or pods are to be monitored so that effective alerting and measures such as scaling out can be triggered in periods of saturation.

### Memory utilisation MUST be monitored

Memory utilisation by applications, services, systems or pods are to be monitored so that effective alerting and measures such as scaling out can be triggered in periods of saturation.

### Disk utilisation MUST be monitored

Disk utilisation by applications, services, systems or pods are to be monitored so that effective alerting and measures such as scaling out can be triggered in periods of saturation.

### Network utilisation MUST be monitored

Network utilisation by applications, services, systems or pods are to be monitored so that effective alerting and measures such as scaling out can be triggered in periods of saturation.

### Historical infrastructure monitoring metrics MUST be retained for analysis

In order to allow for trend analysis and capacity planning, infrastructure monitoring metrics must be retained for a time period appropriate to the usage profile of the service.

---
