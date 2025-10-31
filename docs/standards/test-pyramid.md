---
layout: standard
order: 1
title: Test pyramid
date: 2025-06-13
id: SEGAS-00017
tags:
- Quality engineering
  
---

![A diagram of a test pyramid showing bands getting wider from top to bottom: E2E testing, entegration testing, component integration testing,component testing, contract testing, and unit testing](/assets/images/test-pyramid.png)

The Software Engineering Test Pyramid is a strategic model for software testing that emphasises an optimised approach to testing across different levels.  Each layer represents a different type of test, and the size of the layer indicating the recommended proportion of that test type. To ensure robust software quality and efficient development, follow the structured approach outlined by the test pyramid. Prioritise a large volume of unit tests, forming the foundation, to validate individual components effectively. Implement a smaller set of integration tests to verify interactions between these components. Limit end-to-end (E2E) tests to critical user flows and high-risk areas, due to their complexity and maintenance costs.

While the test pyramid is a helpful guide - it should not be seen as a perfect fit in all situations. Complex systems, rapid prototyping, safety-critical applications, and resource limitations can all require deviations. For complex integrations or AI, more end-to-end tests might be needed. Short-lived apps may prioritise user testing over extensive unit tests. Safety-critical systems need thorough testing at all levels. Teams with limited automation might need a more practical approach.

So, adapt the pyramid based on project needs, considering complexity, time, risk, and resources

---

## Requirements

- [You MUST prioritise early testing](#you-must-prioritise-early-testing).
- [You MUST validate the integration of your components](#you-must-validate-the-integration-of-your-components). 
- [You MUST automate where practical to do so](#you-must-automate-where-practical-to-do-so).
- [You MUST avoid large numbers of end-to-end tests](#you-must-avoid-large-numbers-of-end-to-end-tests).
- [You MUST capture metrics to provide evidence of the efficiency of your tests](#you-must-capture-metrics-to-provide-evidence-of-the-efficiency-of-your-tests).

### You MUST prioritise early testing

Contract Tests (Lower Order Test):  The base of the pyramid is the widest, representing unit and contract tests.  These are low-level tests that verify the smallest testable parts of an application (units or components) in isolation. They must be fast to write / automate, execute, and provide quick feedback to developers, making them crucial for early bug detection.  A strong base of early testing is essential for a robust and maintainable codebase.

### You MUST validate the integration of your components

Component, Component Integration Tests (Middle Order Test): The middle layer consists of component (in isolation) and component integration tests. These tests verify the interactions between different units or components of the system. They ensure that these integrated parts work together correctly. Integration tests are more complex than unit tests but still relatively fast to write and automate and should provide valuable insights into how different parts of the system behave together. Use frameworks and tools that simplify the creation and automation of integration tests, ensuring they remain fast to execute without sacrificing effectiveness.

### You MUST automate where practical to do so

Quality Engineers should adopt "shift left" and prioritise automation as early as possible (at the bottom of the Pyramid) to significantly enhance efficiency and speed, improve test coverage and consistency by eliminating human error and ensuring thorough validation. This will increase software reliability and stability through objective and repeatable validation; facilitate early bug detection via shift-left testing; and enable data-driven decision-making.

### You MUST avoid large numbers of end-to-end tests

The top of the pyramid is the smallest, representing end-to-end (E2E) tests. These tests validate the entire application flow, simulating real-world user scenarios and verifying that all components work together seamlessly from start to finish. E2E tests are the most complex, fragile (and therefore difficult to automate) and time-consuming to write and execute. Automate E2E tests strategically for only critical user flows and high-risk areas where full system validation is essential, while limiting the scope to a small number of critical scenarios rather than all possible flows to reduce complexity and maintenance costs.

### You MUST capture metrics to provide evidence of the efficiency of your tests

Capturing metrics is crucial for evaluating the effectiveness of your tests, especially when considering the test pyramid, which emphasises a large number of unit tests at the base, fewer integration tests in the middle, and even fewer end-to-end tests at the top. These metrics help identify gaps, measure performance, ensure reliability, and optimise resources, ultimately maintaining a balanced and effective test strategy that ensures robust and reliable software. Although not exhaustive - the following should be captured at a minimum across the pyramid:

 - defect density
 - test execution time
 - percentage of unreliable tests
 - defect leakage across levels
 - automation coverage

---
