---
layout: standard
order: 1
title: Documenting an API
date: 2025-03-21
id: SEGAS-00016
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
        - text: Designing and Maintaining an API
          href: /standards/designing-and-maintaining-an-api/
---

Documenting an API is an important part of the software design lifecycle. It helps consumers of your API, the wider community and even your own team understand the purpose of endpoints, what and how they work, inputs and outputs, what the requirements are to access it etc.

---

## Requirement(s)

- [You MUST include your API on the relevant registers if your API is public](#you-must-include-your-api-on-the-relevant-registers-if-your-api-is-public)
- [You MUST have documentation on requests and responses of all endpoints](#you-must-have-documentation-on-requests-and-responses-of-all-endpoints)
- [You MUST provide specific feedback in error responses](#you-must-provide-specific-feedback-in-error-responses)
- [You MUST document how to connect to your API](#you-must-document-how-to-connect-to-your-api)
- [You MUST document how to raise an issue with your API if your API has external consumers](#you-must-document-how-to-raise-an-issue-with-your-api-if-your-api-has-external-consumers)
- [You MUST document information on rate limits](#you-must-document-information-on-rate-limits)
- [You MUST document different versions of your API](#you-must-document-different-versions-of-your-api)

### You MUST include your API on the relevant registers if your API is public

Listing our APIs contributes to the government community as well as other organisations and wider industry. Listing our APIs here will also help inter-departmental data exchanges, as well as sharing best practice in API development.

Public API's must be on the [UK public sector API Catalogue](https://www.api.gov.uk/ho/#home-office).

### You MUST have documentation on requests and responses of all endpoints

Documenting the requests and responses of endpoints makes it easy for consumers to understand what is required and how to use the given responses from an endpoint.

It should include all of the following that apply to a request:

- Request method
- URI query parameters
- Request headers
- Requirements for the request body

For each possible response, including error responses, you should document the following:

- Response status code
- Response headers
- The format of the response body

This can be achieved for a RESTful API by using [OpenAPI (Swagger v3)](https://www.openapis.org/what-is-openapi).

### You MUST provide specific feedback in error responses

It's important that response is clear and gives a brief overview of what has happened when called an endpoint. For example. Access Denied or Not Found. Your documentation should also state what each status code represents.

This can make it easier to debug for any consumers.

A response should not include any information about the technologies used or any internal information for example internal server addresses etc.

### You MUST document how to connect to your API

You must have documentation in place explaining how you onboard users to your API, if your API requires authorisation or authentication, you must document how to gain access to the API.

If you have multiple versions of your API you need document each supported version.

### You MUST document how to raise an issue with your API if your API has external consumers

It's important to document how to raise an issue with your API, this not only helps your consumers with debugging or raising concerns, but enables a feedback loop with your users.

### You MUST document information on rate limits

Rate limiting is important to secure your API and consumers may want to query your API often, so documenting the rate limits helps consumers build their software around these limits. These limits may not be set by your application, but instead your WAF etc. but understanding limits help consumers when querying your API.

### You MUST document different versions of your API

Documentation is important, especially if you have downstream consumers of your API. This documentation should include a list of changes between versions and ways to migrate to the next version.

If releasing a version with depreciated properties or breaking changes, this should be clearly documented and, if possible include any updated endpoints/parameters etc.

---
