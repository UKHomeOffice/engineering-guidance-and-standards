---
layout: standard
order: 1
title: Documenting an API
date: 2024-04-09
id: SEGAS-XXX
tags:
  - Software design
  - API Design
---

Documenting an API is an important part of the software design lifecycle. It helps consumers of your API, the wider community and even your own team understand the purpose of endpoints, what and how they work, inputs and outputs etc.

---

## Requirement(s)

- [You MUST include your API on the relevant registers](#you-must-include-your-api-on-the-relevant-registers)
- [You MUST have appropriate status codes returning from each endpoint](#you-must-have-appropriate-status-codes-returning-from-each-endpoint)
- [You MUST have documentation on inputs and outputs of all endpoints](#you-must-have-documentation-on-inputs-and-outputs-of-all-endpoints)
- [You MUST provide specific feedback in responses](#you-must-provide-specific-feedback-in-responses)
- [You MUST use appropriate nouns for resource names](#you-must-use-appropriate-nouns-for-resource-names)

### You MUST include your API on the relevant registers

If your API is for internal or team use only, then it should be included in the internal API register.

if your API is public, it should also be on the [cabinet offices list of API's](https://www.api.gov.uk/ho/#home-office).

Listing our API's contributes to the government community as welll as other organisations and wider industry. Listing our API's here will also help inter-departmental data exchanges, as well as sharing best practice in API development.

### You MUST have appropriate status codes returning from each endpoint 

Your API endpoints must return the relevant status code for each endpoint, for example a 403 if a user doesn't have access.

It's important that the correct status codes are used as these are recognisable codes and can make it easier to debug for any consumers.

The Mozilla Foundation has a [definitive list of status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status), and what they mean and do.

### You MUST have documentation on inputs and outputs of all endpoints

Documenting the inputs and outputs of endpoints makes it easy for consumers to understand what is required and how to use the given responses from an endpoint. It should also detail an error messages that can be returned and reason for it.

This can be achieved easily in RESTful API by using Swagger.

### You MUST provide specific feedback in responses

It's important that response is clear and gives a brief overview of what has happened when called an endpoint. For example. Access Denied or Cannot connect to database.

This can make it easier to debug for any consumers.

A response should not include any information about the technologies used or any internal information for example internal server addresses etc.

### You MUST use an appropriate method

Your API endpoints must use a relevant method for each endpoint, for example, using POST for a login endpoint.

The Mozilla Foundation has a [definitive list of methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods), and what they mean and do.

Using the appropriate methods help to keep endpoints secure as well as helping customers understand how an endpoint should be used, how things should be passed and what the end result will be.

### You MUST use appropriate nouns for resource names

Your API resources must follow RESTful resource naming standards as outlined on the restful API [resource naming page](https://restfulapi.net/resource-naming/).

---
