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

The intent of any test should be clear as they can provide a form of documentation to the overall solution, they should be relatively easy to understand with coverage tracked, although it must be stressed that coverage is not the be all end all.

A good test should be clear on the intent of the test, should only have one test case, and be readable and the test should pass everytime without changes to the underlying code.

Testing can come in different forms unit/integration/mutation/property based, but all must adhere to the requirements laid out as the following benefits can be achieved from it:

- Easy to connect failures in code from failed tests
- Security & confidence when continously integrating code
- Easy to understand intent and functionality of code

---

## Requirement(s)

- [You MUST test early and often](#you-must-test-early-and-often)
- [You MUST have a way of measuring the effectiveness of testing](#you-must-have-a-way-of-measuring-the-effectiveness-of-testing)
- [It MUST be clear what is being tested and what the results are](#it-must-be-clear-what-is-being-tested-and-what-the-results-are)
- [Tests MUST be repeatable](#tests-must-be-repeatable)
- [Tests MUST be included for both the happy path and unhappy path](#tests-must-be-included-for-both-the-happy-path-and-unhappy-path)
- [Tests that block deployments MUST complete in a reasonable time](#tests-that-block-deployments-must-complete-in-a-reasonable-time)
- [You MUST use automated security testing](#you-must-use-automated-security-testing)

### You MUST test early and often

The earlier testing happens in the development process, the less time is spent debugging, the better quality of the code through more tests, and the different paths are considered more. Using TDD can help here, as you can test the logic before writing it, which can help develop logic and sets the foundations of what you expect your code to do.

### You MUST have a way of measuring the effectiveness of testing

You need to know ehether your test effictiveness has changed over the course of your developments and that you haven't had any regressions on your changes. Tracking this effectiveness over times helps to understand the landscape of your testing moving forward.

One way of doing this is through monitoring test coverage, Test coverage helps a team understand the amount of code that is tested within a codebase. Setting a minimum threshold (such as 80%) ensures that any new code is tested. Another example is mutation testing.

### It MUST be clear what is being tested and what the results are

Understanding why tests are failing and been transparent about why can help the whole team see the value, and understand where failures are occurring. You shouldn't need to check manually that tests have failed.

An example is through making sure piplelines fail when tests fail, and you're able to see more information about why.

### Tests MUST be repeatable

The ability to repeat the same tests, gives confidence that if there is a failure, something has changed to affect that failure. The values shouldn't change based on enviroments and unit tests should not depend on other external factors to run.

### Tests MUST be included for both the happy path and unhappy path

Testing for all eventualities helps to write code that can handle errors in a better way. This should include things like testing for illegal arguements, or no arguements to be passed.

### Tests that block deployments MUST complete in a reasonable time

Tests such as unit/integration tests should complete in a reasonable time to help keep a fast path to live and help developers run tests quickly to understand the impact of their changes.

Other tests such as soak that don't block deployments can be completed in a greater length of time.

### You MUST use automated security testing

Automated security testing can help understand where your code may have any security issues. These tests should be be ran as part of your pipelines to help identify issues and block the deployment of insecure code.

Automated security testing, good peer reviews and good developer knowledge around keeping applications secure help to make sure an application stays secure.

A good example of this is using Sonarqube as part of your pipelines.

### You MUST make sure tests fail

Making sure tests fail helps to verify that your tests are doing the correct thing and that they would fail if there is an issue.

One way of achieving this is using red/green testing, when using TDD you get this for free, as you write the test first, have it fail (Red), then write the code to make the test pass (Green).

Another way of making sure tests fail is using mutation testing. Mutation testing creates small varitions of source code and subjects them to the same tests and dataset to detect any errors in the code.

---
