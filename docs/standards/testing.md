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

Testing code forms part of the core of developing code. Testing your changes is necessary to gain assurance that they can be deployed safely to production and that the service will still function as expected.

The intent of any test should be clear as they can provide a form of documentation to the overall solution.

The tests should be relatively easy to understand with a track of the overall testing coverage kept. Strong test coverage of a code base contributes towards overall quality of application code, although depending on your application context, it may not necessarily be the only definitive marker of quality code.

A good test should be clear on the intent of the test, have one test case, be readable and should pass every time without changes to the underlying code.

Testing can come in different forms, unit/integration/mutation/property based, but all must adhere to the requirements as the following benefits can be achieved:

- Easy to correct failures in code from failed tests.
- Security & confidence when continously integrating code
- Easy to understand intent and functionality of code
- Tests are owned by the same team who owns the code and not within a silo external to the team.

---

## Requirement(s)

- [You MUST test early and often](#you-must-test-early-and-often)
- [You MUST automate tests](#you-must-automate-tests)
- [You MUST make tests repeatable](#you-must-make-tests-repeatable)
- [You MUST have a way of measuring the effectiveness of testing](#you-must-have-a-way-of-measuring-the-effectiveness-of-testing)
- [Tests MUST have a purpose and explicit result](#tests-must-have-a-purpose-and-explicit-result)
- [You MUST think about the edge cases](#you-must-think-about-the-edge-cases)

### You MUST test early and often

The earlier testing happens in the development process, the less time is spent debugging, the better quality of the code through more tests, and the different paths are considered more. Using TDD can help here, as you can test the logic before writing it, which can help develop logic and sets the foundations of what you expect your code to do.

### You MUST automate tests

Automating tests enables the tests to be run consistently and often. Automated tests can be run as part of a build pipeline, and block the pipeline if they fail. It also means code is tested often, making sure that everything is working as expected.

### You MUST make tests repeatable

The ability to repeat the same tests, gives confidence that if there is a failure, something has changed to affect that failure. The values shouldn't change based on enviroments and unit tests should not depend on other external factors to run.

### You MUST have a way of measuring the effectiveness of testing

You need to know whether your test effectiveness has changed over the course of your development and that you haven't had any regressions on your changes. Tracking this effectiveness over time helps to understand the landscape of your testing moving forward.

One way of doing this is through monitoring test coverage, Test coverage helps a team understand the amount of code that is tested within a codebase. Setting a minimum threshold (such as 80%) ensures that any new code is tested. Another example is mutation testing.

### Tests MUST have a purpose and explicit result

Tests must indicate why they are failing, showing expected and actual responses and the name of the test.

An example is through making sure pipelines fail when tests fail, and you're able to see more information about why.

A test failing due to a regression often exposes an engineer to functionality they are not familiar with. The information logged along with the test implementation should provide enough context that they can understand what is being tested and what has gone wrong, and be able to reason about how they can resolve it.

### You MUST think about the edge cases

Testing for all eventualities helps to write code that can handle errors in a better way. This should include things like testing for illegal arguements, or no arguements to be passed.

---
