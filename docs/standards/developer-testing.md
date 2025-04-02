---
layout: standard
order: 1
title: Developer Testing
date: 2024-01-05
id: SEGAS-00013
tags:
  - Software design
  - Ways of working
  - Quality engineering
related:
  sections:
    - title: Related links
      items:
        - text: Write maintainable, reusable and evolutionary code
          href: /principles/write-maintainable-reusable-and-evolutionary-code/
---

Testing code forms part of the core of developing code. Testing your changes is necessary to gain assurance that they can be deployed safely to production and that the service will still function as expected.

The intent of any test should be clear as they can provide a form of documentation to the overall solution.

Tests must be easy to understand with a way of measuring test effectiveness (for example coverage). Strong test coverage of a code base contributes towards overall quality of application code, although depending on your application context, it may not necessarily be the only definitive marker of quality code.

A good test should be clear on the intent of the test, have one test case, be readable and should pass every time without changes to the underlying code.

Testing can come in different forms, for example unit/integration/mutation/property based, but all must adhere to the requirements as the following benefits can be achieved:

- Easy to correct failures in code from failed tests
- Security & confidence when continously integrating code
- Easy to understand intent and functionality of code
- Tests are owned by the same team who owns the code and not within a silo external to the team

---

## Requirement(s)

- [You MUST test early and often](#you-must-test-early-and-often)
- [You MUST automate tests](#you-must-automate-tests)
- [You MUST make tests repeatable](#you-must-make-tests-repeatable)
- [You MUST have a way of measuring the effectiveness of testing](#you-must-have-a-way-of-measuring-the-effectiveness-of-testing)
- [Tests MUST have a purpose and explicit result](#tests-must-have-a-purpose-and-explicit-result)
- [You MUST think about the edge cases](#you-must-think-about-the-edge-cases)

### You MUST test early and often

Writing tests early and often in a software development process reduces the amount of time spent debugging. Good tests written early helps improve the overall assurance and design quality of your application.

Test Driven Development (TDD) is a valuable development approach that can help towards achieving this. This development approach encourages you to think ahead on how your requirements can be met by thinking on how your solution can be tested first at unit level. Once a test is written first albeit failing due to non-existing solution, you can implement your solution to pass the test, and then refactor. "Testing early and often" in this case leads to "refactoring early and often", which continuously improves the quality of your application code and design. This is more commonly referred to as the Red, Green, Refactor approach.

### You MUST automate tests

Automating tests enables the tests to be run consistently and often. Automated tests can be run as part of a build pipeline, and block the pipeline if they fail. It also means code is tested often, making sure that everything is working as expected.

### You MUST make tests repeatable

The ability to repeat the same tests gives confidence that if there is a failure, something has changed to affect that failure. The values that a test rely on shouldn't change based on environments, and tests such as unit tests should not depend on other external factors and dependencies (for example third party APIs) to run.

### You MUST have a way of measuring the effectiveness of testing

You need to know whether your test effectiveness has changed over the course of your development and that you haven't had any regressions on your changes. Tracking this effectiveness over time helps to understand the landscape of your testing moving forward.

One way of doing this is through monitoring test coverage. Test coverage helps a team understand the amount of code that is tested within a codebase. Setting a minimum threshold (such as 80%) ensures that any new code is tested. Another example is mutation testing.

### Tests MUST have a purpose and explicit result

Tests must indicate why they are failing, showing expected and actual responses and the name of the test.

An example is through making sure pipelines fail when tests fail, and you're able to see more information about why.

A test failing due to a regression often implies that a functionality has been added that contradict existing (and previous expectations), this should be reviewed to understand why this happened and what needs to be done to fix the regression issue. Although the area of concern may be unfamiliar, the information logged along with the test implementation should provide enough context to help with this review - in understanding what is being tested, what has gone wrong, and hence be able to reason about how the issue can be resolved.

### You MUST think about the edge cases

Testing for all eventualities helps to write code that can handle errors and exceptions. This should include things like testing for illegal or no arguments, dependencies' edge cases (which can often be simulated through mocking dependencies as appropriate).

---
