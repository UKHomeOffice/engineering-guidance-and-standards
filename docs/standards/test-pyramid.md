---
layout: standard
order: 1
title: test pyramid
date: 2025-10-03
id: SEGAS-00018
tags:
- Quality assurance and testing
- Testing
  
---

![image alt](https://github.com/rkoneru-hub/engineering-guidance-and-standards/blob/67dca075ff8bfd282f70d3fb04fb408bbbc82fd3/docs/standards/Testpyramid.PNG)

The Software Engineering Test Pyramid is a strategic model for software testing that emphasises a balanced approach to testing across distinct levels. Each layer represents a different type of test, and the size of the layer indicating the recommended proportion of that test type. To ensure robust software quality and efficient development, follow the structured approach outlined by the test pyramid. Prioritise a large volume of unit tests, forming the foundation, to validate individual components effectively. Implement a smaller set of integration tests to verify interactions between these components. Limit end-to-end (E2E) tests to critical user flows and high-risk areas, due to their complexity and maintenance costs.

While the test pyramid is a helpful guide - it should not be seen as a perfect fit in all situations. Complex systems, rapid prototyping, safety-critical applications, and resource limitations can all require deviations. For complex integrations or AI, more end-to-end tests might be needed. Short-lived apps may prioritise user testing over extensive unit tests. Safety-critical systems need thorough testing at all levels. Teams with limited automation might need a more practical approach. 

So, adapt the pyramid based on project needs, considering complexity, time, risk, and resources.

---

## Requirements

- [You MUST prioritise early testing](#You-MUST-prioritise-early-testing).
- [You MUST validate the integration of your components](#You-MUST-validate-the-integration-of-your-components). 
- [You MUST automate where practical to do so](#You-MUST-automate-where-practical-to-do-so).
- [You MUST avoid large numbers of end-to-end tests](#You-MUST-avoid-large-numbers-of-end-to-end-tests).

### You MUST prioritise early testing

Contract Tests (Lower Order Test):  The base of the pyramid is the widest, representing unit and contract tests. These are low-level tests that verify the smallest testable parts of an application (units or components) in isolation. They must be fast to write / automate, execute, and provide quick feedback to developers, making them crucial for early bug detection. A strong base of early testing is essential for a robust and maintainable codebase.

### You MUST validate the integration of your components

Component, Component Integration Tests (Middle Order Test): The middle layer consists of component (in isolation) and component integration tests. These tests verify the interactions between different units or components of the system. They ensure that these integrated parts work together correctly. Integration tests are more complex than unit tests but still relatively fast to write an automate and should provide valuable insights into how distinct parts of the system behave together.

### You MUST automate where practical to do so

The top of the pyramid is the smallest, representing end-to-end (E2E) tests. These tests validate the entire application flow, simulating real-world user scenarios and verifying that all components work together seamlessly from start to finish. E2E tests are the most complex, fragile (and therefore difficult to automate) and time-consuming to write and execute. The pyramid advocates for using them sparingly, focusing on critical user flows and high-risk areas, as they can be brittle and expensive to maintain.

### You MUST avoid large numbers of end-to-end tests

Quality Engineers should prioritise automation as early as possible (at the bottom of the Pyramid) to significantly enhance efficiency and speed, improve test coverage and consistency by eliminating human error and ensuring thorough validation. This will increase software reliability and stability through objective and repeatable validation; facilitate early bug detection via shift-left testing; and enable data-driven decision-making.



---
