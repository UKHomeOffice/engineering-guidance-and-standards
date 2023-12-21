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
- Tests should be automated when possible
- Developers should be able to write and run tests and not silo'd to QAT

---

## Requirement(s)

- [You MUST test early and often](#you-must-test-early-and-often)
- [You MUST automate tests](#you-must-automate-tests)
- [You MUST make tests repeatable](#you-must-make-tests-repeatable)
- [You MUST have a way of measuring the effectiveness of testing](#you-must-have-a-way-of-measuring-the-effectiveness-of-testing)
- [You MUST make it clear what is being tested and what the results are](#you-must-make-it-clear-what-is-being-tested-and-what-the-results-are)
- [You MUST think about the edge cases](#you-must-think-about-the-edge-cases)

### You MUST test early and often

The earlier testing happens in the development process, the less time is spent debugging, the better quality of the code through more tests, and the different paths are considered more. Using TDD can help here, as you can test the logic before writing it, which can help develop logic and sets the foundations of what you expect your code to do.

### You MUST automate tests

Automating tests enabled the tests to be ran often, and block pipelines that fail testing. It also means code is tested often, making sure that everything is working as expected.

### You MUST make tests repeatable

The ability to repeat the same tests, gives confidence that if there is a failure, something has changed to affect that failure. The values shouldn't change based on enviroments and unit tests should not depend on other external factors to run.

### You MUST have a way of measuring the effectiveness of testing

You need to know whether your test effectiveness has changed over the course of your development and that you haven't had any regressions on your changes. Tracking this effectiveness over time helps to understand the landscape of your testing moving forward.

One way of doing this is through monitoring test coverage, Test coverage helps a team understand the amount of code that is tested within a codebase. Setting a minimum threshold (such as 80%) ensures that any new code is tested. Another example is mutation testing.

### You MUST make it clear what is being tested and what the results are

Understanding why tests are failing and been transparent about why can help the whole team see the value, and understand where failures are occurring. You shouldn't need to chesck manually that tests have failed.

An example is through making sure piplelines fail when tests fail, and you're able to see more information about why.

### You MUST think about the edge cases

Testing for all eventualities helps to write code that can handle errors in a better way. This should include things like testing for illegal arguements, or no arguements to be passed.

---
