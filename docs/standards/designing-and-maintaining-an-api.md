---
layout: standard
order: 1
title: Designing and Maintaining an API
date: 2024-05-07
id: SEGAS-XXX
tags:
  - Software design
  - API Design
related:
  sections:
    - title: Related links
      items:
        - text: Minimal documentation set for a product
          href: /standards/minimal-documentation-set-for-a-product/
        - text: How to document APIs
          href: https://www.gov.uk/guidance/how-to-document-apis
        - text: Writing API Reference Documentation
          href: https://www.gov.uk/guidance/writing-api-reference-documentation
---

---

## Requirement(s)

- [You MUST include a form of versioning to your API](#you-must-include-a-form-of-versioning-to-your-api)
- [You MUST have appropriate status codes returning from each endpoint](#you-must-have-appropriate-status-codes-returning-from-each-endpoint)
- [You MUST use appropriate nouns for resource names](#you-must-use-appropriate-nouns-for-resource-names)
- [You MUST include some way to observe your API](#you-must-include-some-way-to-observe-your-api)
- [You MUST consider security](#you-must-consider-security)
- [You MUST test your API](#you-must-test-your-api)
- [You MUST consider scalability of your API](#you-must-consider-scalability-of-your-api)
- [You MUST consider using microservices](#you-must-consider-using-microservices)
- [You MUST cache responses when appropriate](#you-must-cache-responses-when-appropriate)
- [You MUST use OpenAPI Swagger](#you-must-use-openapi-swagger)

### You MUST include a form of versioning to your API 

It is good practice to maintain and keep a good versioning of your API where appropriate, when using versioning it is recommended we follow the [semver standards](https://semver.org).

There are a few [different ways of versioning](https://www.xmatters.com/blog/blog-four-rest-api-versioning-strategies) an API, via the URI path, query parameters or headers. You will also need to decide a versioning strategy, whether that be per endpoint or for the whole API.

### You MUST have appropriate status codes returning from each endpoint 

Your API endpoints must return the relevant status code for each endpoint, for example a 403 if a user doesn't have access.

It's important that the correct status codes are used as these are recognisable codes and can make it easier to debug for any consumers.

The Mozilla Foundation has a [definitive list of status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status), and what they mean and do.

### You MUST use appropriate nouns for resource names

Your API resources must follow RESTful resource naming standards as outlined on the restful API [resource naming page](https://restfulapi.net/resource-naming/).

### You MUST include some way to observe your API 

When maintaining an API we must have a way to make sure that is in good health and there is a way to trace activity.

It is recommended that logs are used however the sensitivity of the data logged must also be considered.

Metrics is also a good way to understand the current state of your API, as developers will be able to track and observe in real time any issues or downtime via alerts that can be set up.

There's some useful info on the [GOV.UK GDS guidance](https://www.gov.uk/guidance/gds-api-technical-and-data-standards#operate-your-api).

### You MUST consider security

Considering security will help keep your API secure and up to date, things like updating dependencies, IT health checks and considering what happens to user data will help here. The [security principles and standards](https://engineering.homeoffice.gov.uk/tags/security/) should help you to understand more of what is required.

### You MUST validate inputs

Input validation is the processing a verifying data entered into the API by other systems or users. The aim is to prevent invalid, malicious or malformed inputs. This increases the security of your API if you check for exploits such as [cross-site scripting (XSS)](https://owasp.org/www-community/attacks/xss/) and [injection attacks](https://owasp.org/www-community/Injection_Theory) among others.

### You MUST consider authentication and authorisation

Authentication and authorisation could be really important for your API, this can mean restricting certain tasks or functions to a limited number of users. A user should have the least privilege possible. Role Based Access Control (RBAC) is an example of how to implement this.

### You MUST test your API 

You should test your API, there's more information on the developer testing standard.

This helps keep code to a high quality and helps gain assurance that your API is working correctly and can be deployed safely to production.

Using integration tests, checking errors and status codes can help maintain quality within your API and build confidence that all is working as expected.

### You MUST consider scalability of your API

Knowing how your API scales helps to make sure your API is resilient, can handle peaks of traffic.

Often using stateless approach to designing an API can help horizontally scale an API. Using techniques such as asynchronous code, multithreading and an event driven approach can all help scale your API.

### You MUST use an API Specification

Using an API Specification will help defining an API before it's implemented, support is wide, with a wide community using it. It helps the team work to the same standards, and it can generate documentation when needed.

A good example is using OpenAPI Swagger to help build, maintain and document your API.

---
