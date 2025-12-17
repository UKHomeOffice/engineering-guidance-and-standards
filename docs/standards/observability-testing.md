# Observability Standard

## Description
Observability testing is a crucial practice in modern software development, particularly for complex, distributed systems. It extends traditional monitoring by focusing on understanding the internal state of a system based on its external outputs. While monitoring tells you if something is wrong, observability helps understand why!

Essentially, observability testing involves actively probing a system to understand its behaviour and identify potential issues that may not be immediately apparent. It goes beyond simply looking at metrics and logs; it's about establishing a comprehensive view of how the system operates in real-world scenarios.


## Requirements

- **You MUST focus on key metrics and logs**
  - Select a core set of metrics and logs that best describe your system's health and performance. Common metrics include error rates, response times, and resource utilisation.

- **You MUST integrate Observability into your CI/CD pipelines**
  - Ensure that observability is part of your continuous integration and continuous deployment (CI/CD) pipelines. This integration helps in detecting issues early and provides continuous feedback.

- **Quality Engineering Focus: Observability in Automation with Mocks**
  - Quality engineering teams should design automated tests that validate observability features, even when using mocks or stubs in CI/CD environments. This includes:
    - Verifying that key metrics and logs are generated during automated test runs, including those with mocked dependencies.
    - Ensuring that synthetic transactions and probes are observable in test environments, not just production.
    - Validating that incident response and alerting mechanisms are triggered appropriately during automated failure scenarios.
    - Using mocks to simulate edge cases and failures, confirming that observability tooling captures these events accurately.
    - Integrating observability checks into test pipelines so that failures in logging, metrics, or alerting are surfaced early and addressed before release.

- **You MUST create an effective incident response plan**
  - Develop and maintain a robust incident response plan. This plan should outline the steps to take when an issue is detected, including roles, responsibilities, and communication protocols.

- **You MUST develop centralised logging**
  - Implement centralized logging to collect and manage logs from all parts of your system in one place. This makes it easier to analyse and correlate data across different components.

- **You MUST define key performance indicators**
  - Establish clear KPIs to measure the success of your observability efforts. These KPIs should align with your business goals and help in tracking the effectiveness of your observability strategy.
