---
layout: standard
order: 1
title: Designing and Maintaining an API
date: 2024-10-14
id: SEGAS-00015
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
        - text: Documenting an API
          href: /standards/documenting-an-api/
---

When designing an API aspects such as naming and versioning will help with not only the maintenance of the API, but also help the consumers of your API.

---

## Requirement(s)

- [You MUST include a form of versioning to your API](#you-must-include-a-form-of-versioning-to-your-api)
- [You MUST return appropriate status codes from each endpoint](#you-must-return-appropriate-status-codes-from-each-endpoint)
- [You MUST use appropriate nouns for resource names](#you-must-use-appropriate-nouns-for-resource-names)
- [You MUST include some way to observe your API](#you-must-include-some-way-to-observe-your-api)
- [You MUST apply security best practices](#you-must-apply-security-best-practices)
- [You MUST validate inputs](#you-must-validate-inputs)
- [You MUST consider authentication and authorisation](#you-must-consider-authentication-and-authorisation)
- [You MUST test your API](#you-must-test-your-api)
- [You MUST consider scalability of your API](#you-must-consider-scalability-of-your-api)
- [You MUST use an API Specification](#you-must-use-an-api-specification)

### You MUST include a form of versioning to your API

It is good practice to maintain and keep a good versioning of your API where appropriate, when using versioning it is recommended we follow the [semver standards](https://semver.org).

There are a few [different ways of versioning](https://www.xmatters.com/blog/blog-four-rest-api-versioning-strategies) an API, via the URI path, query parameters or headers. You will also need to decide a versioning strategy, whether that be per endpoint or for the whole API.

You should also consider how a version should be deprecated and communicate this to any consumers.

### You MUST return appropriate status codes from each endpoint

Your API endpoints must return the relevant status code for each endpoint, for example a 403 if a user doesn't have access.

It's important that the correct status codes are used as these are recognisable codes and can make it easier to debug for any consumers.

The Mozilla Foundation has a [definitive list of status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status), and what they mean and do.

### You MUST use appropriate nouns for resource names

Using appropriate nouns for resource names rather than actions, because nouns describe the data, and can be used hierarchically to allow a consumer to navigate an API more easily. An example may be to use /devices to list all devices and /devices/:id to list the attributes of a particular device.

Although this advice is given on the [RESTful resource naming page](https://restfulapi.net/resource-naming/) it details a recommended approach to help regardless of the type of API (RESTful, GraphQL etc.).

### You MUST include some way to observe your API

When maintaining an API we must have a way to make sure that is in good health and there is a way to trace activity.

Application logs that are sent to an aggregation service are recommended for this. Review [the securing application logging pattern](https://engineering.homeoffice.gov.uk/patterns/securing-application-logging/) if your requests or responses could contain sensitive information.

Metrics are also a good way to understand the current state of your API, as developers will be able to track and observe in real time any issues or downtime via alerts that can be set up.

There's some useful info on the [GOV.UK GDS guidance](https://www.gov.uk/guidance/gds-api-technical-and-data-standards#operate-your-api).

### You MUST apply security best practices

Considering security will help keep your API secure and up to date, things like updating dependencies, IT health checks and considering what happens to user data will help here. The [security principles and standards](https://engineering.homeoffice.gov.uk/tags/security/) should help you to understand more of what is required.

### You MUST validate inputs

Input validation is the process of verifying data entered into the API by other systems or users. The aim is to prevent invalid, malicious or malformed inputs. This increases the security of your API if you check for exploits such as [cross-site scripting (XSS)](https://owasp.org/www-community/attacks/xss/) and [injection attacks](https://owasp.org/www-community/Injection_Theory) among others.

Making sure database queries are also secure from malicious actors by using parameterised queries is also important to make your API secure.

### You MUST consider authentication and authorisation

Authentication and authorisation are really important for API, this can mean restricting certain tasks or functions to a limited number of users. A user should have the least privilege possible. Role Based Access Control (RBAC) is an example of how to implement this.

### You MUST test your API

You should test your API, there's more information on the developer testing standard.

This helps keep code to a high quality and helps gain assurance that your API is working correctly and can be deployed safely to production.

Using integration tests, checking errors and status codes can help maintain quality within your API and build confidence that all is working as expected.

Load testing is also important to make sure your API handles the projected number of users that your API will handle.

### You MUST consider scalability of your API

Knowing how your API scales helps to make sure your API is resilient and can handle peaks of traffic.

A stateless API means that the client is responsible for providing information about authentication etc. In turn, this means an application can then scale easily horizontally, as it doesn't matter which instance a client connects to.

Using techniques such as asynchronous code, multithreading or an event driven approach can help scale an API.

### You MUST use an API Specification

Using an API Specification will help define your API endpoints and is widely supported by a large community.

An example is using [OpenAPI (previously Swagger)](https://www.openapis.org/) to help build, maintain and document your API.

---
