---
layout: standard
order: 1
title: Logging for services with centralised logging aggregation
date: 2024-01-24
id: SEGAS-00015 
tags:
  - SRE
  - Monitoring
  - Observability
  - Logging
related: 
  sections:
    - title: Securing application logging
      items:
        - text: Securing application logging
          href: /patterns/securing-application-logging/ 
---

Logging tools are one of the primary tools to debug application problems and identifying the root cause of incidents. However, logs need to be formatted in a standard way so that they are not only useful for the application's original developers, but also those supporting the application later in its life-cycle. 

However, logs are sometimes relied on too heavily for problem detection, when this role would be better suited to purpose chosen monitoring tooling. 

Therefore these standards provide guidance on both the proper format of application logs, as well as their proper usage.

---

## Requirements

- [Service logs MUST have the minimum required field](#service-logs-must-have-the-minimum-required-fields)
- [Service logs MUST be forwarded to log aggregators](#service-logs-must-be-forwarded-to-log-aggregators)
- [Service logs MUST be rotated daily and no more than 100 MB of logs to be retained](#service-logs-must-be-rotated-daily-and-no-more-than-100-mb-of-logs-to-be-retained)
- [Service logs MUST have an identifiable source in the log aggregator](#service-logs-must-have-an-identifiable-source-in-the-log-aggregator)
- [Service log messages should only be used for metrics, dashboarding and alerting as a last resort](#service-log-messages-should-only-be-used-for-metrics%2C-dashboarding-and-alerting-as-a-last-resort)
- [There MUST be no DEBUG / TRACE level messages in Production environments](#there-must-be-no-debug-%2F-trace-level-messages-in-production-environments)
- [Service log messages MUST not reveal any sensitive information or person identifiable information](#service-log-messages-must-not-reveal-any-sensitive-information-or-person-identifiable-information)


### Service logs MUST have the minimum required fields

Information | Description
------------| -----------
 Date / Time | Each log message must include date and time (millisecond accuracy) (UTC). The time source for all service logs must be consistent so that messages can be viewed & sorted easily.
Service | Each log message must be attributed to an service (i.e. hostname).
Log level | Each log message must have an appropriate log level (INFO, WARN, ERROR, etc.)
Log Message | Each log message must have a log message. Log messages must follow a consistent log messaging format for all log types to allow for easy processing and translation of logs to other formats.

### Service logs MUST be forwarded to log aggregators

Service logs must be forwarded to the supported log aggregation tooling for centralised and persistent storage, and ease of querying log information across distributed applications and services.

### Service logs MUST be rotated daily and no more than 100 MB of logs to be retained

Where log files are persisted locally, log files must be rotated to prevent filling up local disk space. Furthermore, no more than 100 MB of logs are to be persisted should your service generate lots of logs.

### Service logs MUST have an identifiable source in the log aggregator

Services can have a variety of logs, including application, error, and access logs; so it must be possible to identify the source of the log data in the log aggregation tooling.

### Service log messages should only be used for metrics, dashboarding and alerting as a last resort
Although acceptable in some cases, it is strongly recommended that you do not use information contained in log messages as the primary method by which you report on application health, performance and business metrics. Information in logs can be difficult to parse, aggregate and quite brittle.
  
The use of your approved tooling for service monitoring and alerting should always be prioritised over the use of log-based monitoring.

### There MUST be no DEBUG / TRACE level messages in Production environments

Refer to our [securing application logging]({{ '/patterns/securing-application-logging/#take-care-when-using-detailed-logging-to-support-application-debugging' | url }}) pattern for more details.

### Service log messages MUST not reveal any sensitive information or person identifiable information

Refer to our [securing application logging]({{ '/patterns/securing-application-logging/#consider-how-information-can-combine-to-form-pii' | url }}) pattern for more details.

---
