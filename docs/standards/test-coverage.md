---
layout: standard
order: 1
title: test coverage
date: 2025-10-03
id: SEGAS-00017
tags:
- Developer Testing 

  
---

Appropriate test coverage is a fundamental practice in Quality Engineering that goes beyond simply measuring the percentage of code lines executed by tests.

It's principle is to ensure the tests provide meaningful validation, reduce the risk of defects, and contribute to higher-quality software. Focusing on the principles of effective code coverage—such as prioritising behaviour over mere lines of code, targeting critical paths and edge cases, and integrating testing seamlessly into the development workflow - teams will realise improved outcomes.

Outcomes include increased confidence in code changes, earlier detection of bugs, reduced technical debt, and improved maintainability. Effective code coverage enables Quality Engineers to build robust and reliable software, enabling a culture of quality and continuous improvement.

Code smells can be used to highlight potential issues that may be outright bugs but can also affect maintainability and extensibility. They are often subjective and can vary between programming languages example issues are Duplicate Code, Large Classes, Long Methods and excessive comments.

---

## Requirements

- [You MUST have a minimum of 80% code coverage is required](#You-MUST-have-a-minimum-of-80%-code-coverage-is-required).
- [You MUST implement static code vulnerability scans to identify security issues within the code](#You-MUST-implement-static-code-vulnerability-scans-to-identify-security-issues-within-the-code).
- [You MUST prioritise testing coverage on the expected behaviour of the code, including edge cases and boundary conditions](#You-MUST-prioritise-testing-coverage-on-the-expected-behaviour-of-the-code,-including-edge-cases-and-boundary-conditions).
- [You MUST prioritise testing critical or high-risk areas of the application](#You-MUST-prioritise-testing-critical-or-high-risk-areas-of-the-application).
- [You MUST prioritise achieving coverage target for new code changes, legacy system unit tests should be secondary](#You-MUST-prioritise-achieving-coverage-target-for-new-code-changes,-legacy-system-unit-tests-should-be-secondary).
- [You MUST implement code coverage tools integrated into CI/CD pipelines for continuous measurement](#You-MUST-implement-code-coverage-tools-integrated-into-CI/CD-pipelines-for-continuous-measurement).
- [You MUST have test coverage metrics emphasise a holistic approach to quality engineering](#You-MUST-have-test-coverage-metrics-emphasise-a-holistic-approach-to-quality-engineering).

### You MUST have a minimum of 80% code coverage is required

Maintaining a minimum of 80% code coverage ensures that a significant portion of the codebase is tested, reducing the risk of undetected defects. This threshold helps improve software reliability, maintainability, and overall quality by verifying that critical logic paths, functions, and features are covered by automated tests. while 100% coverage is not always practical, setting a standard of 80% encourages consistency testing practices without excessive overhead.

### You MUST implement static code vulnerability scans to identify security issues within the code

Implementing static code vulnerability scans is essential for proactively identifying security weakness within the codebase. These scans analyse source code, configuration files, and dependencies to detect vulnerabilities such as insecure coding practices, injection risks, and potential exploits before they reach production. By integrating static code analysis tools into the development pipeline, teams can address security issues early, enhance compliance with security standards, and reduce the risk of beaches or data exposure.

### You MUST prioritise testing coverage on the expected behaviour of the code, including edge cases and boundary conditions

Prioritising testing coverage based on the expected behaviour of the code, that tests align with real-world usage scenarios, reducing the risk of undetected issues. This approach emphasises validation functionality under normal conditions, as well as covering edge cases and boundary conditions, where software is most prone to failure. By focusing on these critical areas, teams can improve software robustness, prevent unexpected failures, and enhance user experience, leading to higher-quality and more reliable applications. 

### You MUST prioritise testing critical or high-risk areas of the application

Focussing test coverage on critical or high-risk areas of the application that the most impactful and vulnerable components are thoroughly validated. High-risk areas include core functionalities, security-sensitive features, complex logic, and components with a history of defects. By prioritising testing in these areas, teams should mitigate potential failures, reduce business risks, and enhance software reliability, leading to a more stable and resilient application.

### You MUST prioritise achieving coverage target for new code changes, legacy system unit tests should be secondary

Test coverage targets for new code changes is crucial for maintaining software quality and preventing defects from being introduced into the system. Prioritising coverage for newly developed or modified code that it meets quality standards from the outset. While legacy system unit sets remain important, they should be secondary to verifying new code, as older code may already be stable or require refactoring before effective testing. This approach balances test efficiency code maintainability, and risk mitigation, fostering a more sustainable and scalable development process. 

### You MUST implement code coverage tools integrated into CI/CD pipelines for continuous measurement

Integrating code coverage tools into CI/CD pipelines enables continuous measurement and monitoring of test coverage throughout the development lifecycle. Automated coverage analysis ensures that every code change is evaluated for test completeness, preventing untested or insufficiently tested code from being deployed. This integration promotes early defect detection, enforces quality standards, and streamlines the development workflow, leading to more reliable software releases with minimal manual intervention.

### You MUST have test coverage metrics emphasise a holistic approach to quality engineering

Test coverage metrics should reflect a holistic approach to Quality Engineering, focussing not just on percentage-based coverage but also on the effectiveness of tests in detecting defects, covering critical functionality, and addressing edge cases. By emphasising meaningful coverage rather than just numerical targets, teams can achieve higher software reliability, maintainability, and long-term quality assurance.

---
