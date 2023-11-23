---
layout: standard
order: 1
title: Developer Testing
date: 2023-10-26
id: SEGAS-TOBEFILLED
tags:
  - Source management
  - Secure development
  - Ways of working
  - Testing
related:
  sections:
    - title: Related links
      items:
---

Testing code forms part of the core of developing code. Testing should provide confidence to stakeholders and be proportionate to risk.

The intent of any test should be clear as they can provide as a form of documentation to the overall solution, they should be relatively easy to understand with coverage tracked, though this must be stressed coverage is not the be all end all.

A good test should be clear on the intent of the test, should only have one test case, and be readable and the test should pass everytime without changes to the underlying code.

Testing can come in different forms unit/integration/mutation/property based, but all must adhere to the requirements laid out as the following benefits can be achieved from it:

- Easy to connect failures in code from failed tests
- Security & confidence when continously integrating code
- Easy to understand intent and functionality of code

---

## Requirement(s)

- [You MUST track test coverage](#you-must-track-test-coverage)
- [It MUST be clear when and why tests fail](#it-must-be-clear-when-and-why-tests-fail)
- [You MUST test early and often](#you-must-test-early-and-often)
- [Tests MUST be repeatable](#tests-must-be-repeatable)
- [Tests MUST be included for both the happy path and unhappy path](#tests-must-be-included-for-both-the-happy-path-and-unhappy-path)
- [Tests MUST be fast](#tests-must-be-fast)
- [You MUST test for security issues as part of your pipelines](#you-must-test-for-security-issues-as-part-of-your-pipelines)

### You MUST track test coverage

Test coverage helps a team understand the amount of code that is tested within a codebase. Setting a minimum threshold (such as 80%) ensures that any new code is tested. Coverage is not always accurate, as if a test has an always truthy assertion then coverage can over estimate. However, it is a good indication overall.

### It MUST be clear when and why tests fail.

Understanding why tests are failing and been transparent about why (such as a report, or CI pipeline) can help the whole team see the value, and understand where failures are occuring. It also builds confidence within the team and business when tests wither catch something, or that they are running regularily. You shouldn't need to check manually whether a test has passed or failed.

### You MUST test early and often

The earlier testing happens in the development process, the less time is spent debugging, the better quality of the code through more tests, and the different paths are considered more. Using TDD can help here, as you can test the logic before writing it, which can help develop logic and sets the foundations of what you expect your code to do.

### Tests MUST be repeatable

The ability to repeat the same tests, gives confidence that if there is a failure, something has changed to affect that failure. The values shouldn't change based on enviroments and unit tests should not depend on other external factors to run.

### Tests MUST be included for both the happy path and unhappy path

Testing for all eventualities helps to write code that can handle errors in a better way. This should include things like testing for illegal arguements, or no arguements to be passed.

### Tests MUST be fast

A developer should be able to run tests quickly to help understand the inpact of change. The longer it takes for a suite of tests to run, the less likely a developer is going to run the entire suite, which might cause issues later on in the development cycle.

### You MUST test for security issues as part of your pipelines

Testing security issues in your pipeline is vital to help make sure your application is secure and doesn't have any vulnerabilities.

---
