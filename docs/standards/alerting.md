---
layout: standard
order: 1
title: Alert on service impacting issues
date: 2026-09-14
id: SEGAS-00021
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
An alert exists to prompt someone to act. Where alerts are duplicated, too sensitive or have no action attached to them, teams stop trusting them and real failures get missed.

This standard applies to alerts raised by any part of a service, including applications, infrastructre, platforms and support tooling.

---

## Requirement

- [Alerts MUST be actionable](#alerts-must-be-actionable)
- [Alerts that need an incident response MUST be raised in an incident management system](#alerts-that-need-an-incident-response-MUST-be-raised-in-an-incident-management-system)
- [Teams communication channels MUST NOT be used as the primary method to manage or record incidents](#team-communication-channels-must-not-be-used-as-the-primary-method-to-manage-or-record-incidents)
- [Alerts must be reviewed regularly](#alerts-must-be-reviewed-regularly)
- [Alerts that are not acted on MUST be removed, rerouted or retuned](#alerts-that-are-not-acted-on-must-be-removed-rerouted-or-retuned)

### Alerts must be actionable

An alert must tell the recipient what is wrong, why it matters and where to find the action to take, linking to a runbook where one exists.

Alerts on the symptoms that affect users, as described by your service level objectives (SLO's), rather than on every underlying cause. Where there is no action for a recipient to take, the signal belongs on a dashboard or in a report, not in an alert.

### Alerts that need an incident response MUST be raised in an incident management system

Where an alert indicates an incident, it must create or update a record in the incident management system used by your service. This keeps ownership, severity, timeline, escalation and resolution in one auditable place. This means incidents are still picked up outside working hours if required.

Routing must be automated, relying on a person to notice an alert and re-enter it somewhere else can only introduce delay and loss of detail.

When an alert is routed to an incident management system, the service impact of the alert should be clearly described.


### Instant Messaging channels MUST NOT be used as the primary method to manage or record incidents

Chat and collaboration channels are not a reliable record for incidents. Ownership is unclear, history is hard to search and report on, messages scroll out of view and nothing escalates if no one is watching. They must not be the system of record for incidents nor the only destination for alerts that need an incident response.

They can still be useful alongside an incident management system, for example to:
- Receive lower priority or informational alerts, that do not warrant an incident
- Help operation teams spot patterns and correlate behaviour across services
- Collaborate during an incident, provided timelines and decisions are still recorded in the incident management system
- For business continuity reasons such as a backup alerting mechanism 

### Alerts must be reviewed regularly

Teams must review their alerts at an agreed frequency, and after any incident (as part of the post incident review) and in response to any material changes to the service. Noting where alerts helped, hindered or were absent from the incident response. Record the outcome of the review so changes are traceable.

A review should consider the following for each alert:
- How often it fired, and how often it led to action. If it is firing often without action, or resolving on its own, the thresholds and sample periods should be reviewed
- Where it fires alongside other alerts for the same underlying cause it should be considered if consolidation is possible
- Whether it is routinely acknowledged and closed without investigation
- Whether it still reflects how the service works


### Alerts that are not acted on MUST be removed, rerouted or retuned

Where a review finds an alert is not earning its place, take one of the following actions:
- Remove it where it duplicates another alert or no longer reflects the services health
- Reroute it to a lower priority destination such as a dashboard or a team channel, where it has value for spotting trends but needs no incident response
- Retune it by adjusting thresholds and reviewing the durations/sample periods, etc

Leaving a known noisy alert in place as is, is not an acceptable outcome of a review.

---