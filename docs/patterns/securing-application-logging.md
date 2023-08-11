---
layout: pattern
order: 1
title: Securing application logging
date: 2023-08-11
tags: 
  - Logging
  - Observability
  - Secure development
  - SRE
  - Security
  - Software design   
---

It is common to log user information from an application to assist operations or debugging. Some middleware might be configured to log full configuration, data, or request/response objects, which may contain Personally Identifiable Information (PII), authentication tokens or application secrets.

Logging any of these can make information available to people that have access to log aggregation platforms, or log storage, but are not legally allowed to view PII, or should not otherwise have access to that information. User authentication tokens and application secrets can be used to impersonate users and elevate privilege.

[Sensitive Data Exposure](https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure) has been a recognised risk to secure application development historically. And our [managing secrets]({{ '/standards/managing-secrets/' | url }}) standard has requirements on ensuring logs do not contain tokens or other secrets.

---

## Solution

### Avoid explicitly logging:

- Personal Identifiable Information (PII) of any kind
- Session tokens or API keys
- Application secrets

### Sensitive information can be accidentally logged as part of compound objects or arbitrary transmitted data. To avoid such cases:

- Avoid logging whole objects and prefer logging a selection of explicit fields instead
- Avoid logging full payloads (requests, responses, file uploads, consumed or produced asynchronous messages, etc)
- Consider where logging statements can be removed altogether

### Detailed logging might be necessary to support application debugging. If this is the case:

- Ensure detail logs are marked as DEBUG or TRACE level
- Ensure DEBUG or TRACE log level is not enabled in production under any circumstance
- Only enable detail logging for the period of time needed to carry out debugging
- When possible, restrict detail logging to application components that are relevant to the issue being debugged

---

## Considerations

### Consider whether logging statements are necessary
Sometimes logging is used for fast-feedback loops when prototyping application functionality, but eventually become redundant, or the application they provide does not provide additional operational or debugging value for an operator searching through logs.

Consider removing logging statements that do not produce value. If the logging statement is added to increase confidence in the application's correctness, consider replacing it with a unit test instead.

### Log specific fields

Accidental logging often happens when logging statements serialise a whole object. At a point in time the object might be perfectly safe to log, but further introduction of new fields can introduce leaks later on.

Logging specific fields can mitigate this issue.

### Avoid logging full payloads

Some middleware can log full payloads e.g. HTTP requests, responses, asynchronous messages and more. Especially for inbound payloads, logging anything received means that if the data received contains anything sensitive it will be logged regardless.

Logging full payloads should be avoided. However, logging full payloads can be useful to debug specific issues. When this is the case, full payload logging should:

- be clearly marked as DEBUG or TRACE
- used only in non-production environments
- limited to the application components that are under investigation (e.g. to investigate a web issue, enable HTTP payload logging but not Kafka messages logging)

## Alternative approaches

### Test when possible

Often logging is provided to increase confidence in an application's correctness, or to provide data points around edge cases of validation and data processing.

Most of these cases should be replaced with unit or integration testing instead, as appropriate.

---

For cases in which lack of confidence is caused by the data domain being broad and edge cases being unforseeable, consider using property-based testing with tooling such as QuickCheck derivatives.

---
