---
layout: standard
order: 1
title: Logging for services with centralised logging aggregation
date: 2024-01-05 # this should be the date that the content was most recently amended or formally reviewed
id: SEGAS-00015 # Set unique ID for standard
# use `tags: []` for no tags
# Check https://ho-cto.github.io/engineering-guidance-and-standards/tags/ for existing tags
# Note: tags must use sentence case capitalisation
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

<!-- Standard description -->

Logging tools are one of the primary ways of debugging application problems and identifying the root cause of incidents. However, logs need to be in a standard and useful format so that they are not only useful for the application's original developers, but also support engineers down the line. However, logs are sometimes relied on to heavily for problem detection, over purpose chosen monitoring tooling. Therefore these standards provide guidance on the proper utilsation of application logs, as well as their format.

<!-- 

# Notes on line breaks

Please see https://x-govuk.github.io/govuk-eleventy-plugin/markdown/#line-breaks for notes on usage of line breaks.

# Notes on using links

Internal links need to follow this format:
[link text to internal page]({{ '/standards/writing-a-standard/' | url }})
Note the use of the `url` filter. This ensures the link is appended to the base URL of the webpage correctly.

Anchor tags, such as those used when listing the requirements at the top of the 'Requirements' section, should use HTML URL Encoding. This ensures links to headers with punctuation will work as expected. You can obtain the HTML URL Encodeded link by running the site locally, inspecting the appropriate <h3> element in the browser's developer tools and copying the value from the 'id' attribute.

External links follow standard markdown formatting:
[link text to external page](https://example.com)
-->

---

## Requirement(s)

<!-- Populate list for each requirement (there can be more than 2) -->

<!--

# Notes on anchor links

Use HTML URL encoding as in the 'Notes on links' above, to ensure that links to headers with punctuation works as expected. For example:

[Product documentation MUST include build, release and deployment processes](#product-documentation-must-include-build%2C-release-and-deployment-processes)

-->

- [Service logs must have the minimum required field](#service-logs-must-have-the-minimum-required-fields)
- [Service logs must be forwarded to log aggregators](#service-logs-must-be-forwarded-to-log-aggregators)
- [Service logs must be rotated daily and no more than 100 MB of logs to be retained](#service-logs-must-be-rotated-daily-and-no-more-than-100-mb-of-logs-to-be-retained) <!-- Some overlap -->
- [ervice logs must have an identifiable source in the log aggregator](#service-logs-must-have-an-identifiable-source-in-the-log-aggregator)
- [Service log messages must be consistent per log source](#service-log-messages-must-be-consistent-per-log-source)
- [Service log messages must have a consistent time source](#service-log-messages-must-have-a-consistent-time-source)
- [Service log messages must not reveal any person identifiable information](#service-log-messages-must-not-reveal-any-person-identifiable-information) <!-- overlap -->
- [Service log messages must not reveal any sensitive information.](#service-log-messages-must-not-reveal-any-sensitive-information) <!-- overlap -->
- [Service log messages should only be used for metrics, dashboarding and alerting as a last resort](#service-log-messages-should-only-be-used-for-metrics-dashboarding-and-alerting-as-a-last-resort)
- [There must be no DEBUG / TRACE level debug messages in Production environments.](#there-must-be-no-debug--trace-level-debug-messages-in-production-environments) <!-- overlap -->
- [Any HTTP request can be traced from start to finish (within system boundaries)](#any-http-request-can-be-traced-from-start-to-finish-within-system-boundaries)
- [The time any HTTP request spends on each individual action can be measured](#the-time-any-http-request-spends-on-each-individual-action-can-be-measured)
- [Any HTTP request must return an appropriate HTTP response code](#any-http-request-must-return-an-appropriate-http-response-code)

### Service logs must have the minimum required fields

<table><thead><tr><th>INFORMATION</th><th>DESCRIPTION</th></tr></thead><tbody><tr><td>Date / Time</td><td>Each log message must include date and time (millisecond accuracy) (UTC).</td></tr><tr><td>Service</td><td>Each log message must be attributed to an service (i.e. hostname).</td></tr><tr><td>Log level</td><td>Each log message must have an appropriate log level (INFO, WARN, ERROR, etc.)</td></tr><tr><td>Log message</td><td>Each log message must have a log message</td></tr></tbody></table>

The time source for all service logs must be consistent so that messages can be viewed & sorted easily.

### Service logs must be forwarded to log aggregators

Service logs must be forwarded to the supported log aggregation tooling for centralised and persistent storage, and ease of querying log information across distributed applications and services.

### Service logs must be rotated daily and no more than 100 MB of logs to be retained

Where log files are persisted locally, log files must be rotated to prevent filling up local disk space. Furthermore, no more than 100 MB of logs are to be persisted should your service generate lots of logs.

### Service logs must have an identifiable source in the log aggregator

Services can have a variety of logs, including application, error, and access logs; so it must be possible to identify the source of the log data in the log aggregation tooling.

### Service log messages should only be used for metrics, dashboarding and alerting as a last resort
Although acceptable in some cases, it is strongly recommended that you do not use information contained in log messages as the primary method by which you report on application health, performance and business metrics. Information in logs can be difficult to parse, aggregate and quite brittle.

The use of your approved tooling for service monitoring and alerting should always be prioritised over the use of log-based monitoring.

### There must be no DEBUG / TRACE level messages in Production environments

Refer to our [managing secrets]({{ '/patterns/securing-application-logging/' | url }}) pattern for more details.

### Service log messages must not reveal any sensitive information or person identifiable information

Refer to our [managing secrets]({{ '/patterns/securing-application-logging/' | url }}) pattern for more details.

---
