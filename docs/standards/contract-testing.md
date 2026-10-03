---
layout: standard
order: 1
title: Contract testing
date: 2026-02-02
id: SEGAS-00023
tags:
  - Quality engineering
  - Infrastructure
  - CI/CD
---

Contract testing is a software testing methodology that focuses on verifying interactions between different services, particularly in microservices architectures. It ensures that services can communicate with each other as expected by validating that they adhere to a predefined "contract." This contract defines the structure and format of the data exchanged between the consumer - the service that makes the request - and the provider(producer) - the service that responds and is reponsible for maintaining compatability.

The core idea behind contract testing is to prevent integration issues by verifying that changes to one service do not break the compatibility with other dependent services.

Instead of testing the entire integration flow, contract testing isolates the communication layer and focuses on the agreement between the consumer and provider. This approach allows for faster and more reliable testing, especially in complex, distributed systems. This type of testing operates between unit and integration testing, having the speed of unit tests with assurances of service compatability. Consumer Driven Contract Testing is commonly adopted but effective contract testing requires share responsbility between both producers and consumers.

---

## Consumer Driven Contract Testing (CDCT)

In CDCT consumers express expectations through contracts that are agreed upon with the service producer. Once validated by the producer, the contract details request information and expected outcome. These requests are considered "consumer expectations" and transformed into automated tests. The tests are then transformed into machine-readable contracts and published to a contract server like a Pact Broker. When the provider runs his pipeline he will run the provider verification tests and replay the requests and make sure they meet the expected output of the contracts. Any mismatch results in pipeline failure, requiring the producer to fix the breaking change.

Pact Brokers version and store contracts across environments and serve as system of record for all service interactions. The contracts are versioned, allowing consumers/clients and service providers to advance on their own terms. Importantly, consumers may have to adopt new functionality on a version by version basis and so, service providers may update their services on a version by version basis, without breaking functionality for consumers already using the service. As part of the providers CI testing, the provider will fetch the relevant consumer contracts and use them to run verification tests on the provider by simulating the requests the consumers would issue.

The tests not only ensure that the provider's API outputs the expected values based on the contract provided by the consumer to the provider, but they also ensure that the provider's system returned the correct values expected by the consumer for the use case scenario being tested. This system ensures that all consumers have their contracts fulfilled, since the provider cannot omit support for any consumer contracts, unless a breaking change policy has been negotiated.

---

## Producer responsibility

Though consumers define the expectations for how a service is used, producers remain responsible for verifying contracts and backward compatability of their API's. CDCT is not primarily consumer driven. Producers should verify contracts within their CI/CD pipelines and ensure that changes do not break supported consumers.

---

## Requirements

- [You MUST define clear contracts](#you-must-define-clear-contracts)
- [You MUST automate contract validation](#you-must-automate-contract-validation)
- [You MUST embed contract testing into CI/CD pipelines](#you-must-embed-contract-testing-into-cicd-pipelines)
- [You MUST implement mock dependencies](#you-must-implement-mock-dependencies)
- [You MUST implement effective contract sharing and versioning](#you-must-implement-effective-contract-sharing-and-versioning)

### You MUST define clear contracts

This is the foundation of effective Contract Testing. You absolutely must have clear, well-documented contracts that define the expected interactions between services. This includes specifying the data structures, formats, and communication protocols. Use a standardised format (like OpenAPI or Pact) to make the contracts machine-readable and easily shareable.

### You MUST automate contract validation

Use tools like Pact or Spring Cloud Contract to automate the validation of contracts. This ensures that any changes in the service do not break the agreed-upon contract.

### You MUST embed Contract Testing into CI/CD pipelines

Integrate contract testing into your CI/CD pipelines. This allows for continuous validation of contracts with every code change, ensuring compatibility and preventing integration issues.

### You MUST implement mock dependencies

Implement mock contracts to simulate interactions between services during testing. This helps in isolating and testing individual components without relying on actual service dependencies.

### You MUST implement effective contract sharing and versioning

Contracts must be shared and versioned effectively. Use a contract repository or broker to store and manage contracts. Implement a versioning system to track changes and ensure that both the consumer and provider are using the correct contract version.

---
