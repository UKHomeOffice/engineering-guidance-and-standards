---
layout: principle
order: 1
title: Quality assurance and testing
date: 2024-11-25
tags:
- Quality engineering
---

These principles represent the minimum set of considerations for any QAT activity.

---

## Rationale

Embedding these principles is part of continuously evolving our professional, technical and quality standards, and helps us to achieve a consistent approach to quality assurance and testing.

Implementation of this approach will always be context-dependent, tailored and aligned with the needs of your product team and users, but you must use these principles to make important decisions about how you will ensure quality in the product and delivery process.  The principles can be fully applied in some teams, whilst in others it is something to work towards.

---

## Applications and Implications

### 1. Provide fast feedback so things can be iterated quickly
The primary goal of QA is to provide feedback about quality: Quality in the product, quality in the delivery, and quality in the process. If you aren't doing this fast, then you probably aren't doing it right, either. Consider practical techniques like pushing tests as far down the test pyramid as you can, and parallelisation of tests to achieve faster results in the field.

### 2. Establish the quality goals for your product, and test the product’s performance against them
You need to make sure that there are clear quality goals for the product, service or platform so that you can more easily identify problems or risks. The goals could be in any form but typically include quality standards, acceptance criteria or requirements. The team can do this when user stories or requirements are first written or later on in the form of acceptance tests when your team starts development work.

### 3. Aim to automate as much of your testing as possible (and automate the boring stuff)
You should aim to automate as much of your testing as possible. Automate feature checking. Automate everything else if you can. Build trust in automation. You should expect an effective test automation approach for your project to call for automating tests at different levels combined across development and test effort, including a solid foundation of unit tests, some service level tests and very few larger UI or acceptance tests when everything is joined up end-to-end.

### 4. Run your test suite as part of continuous integration
If you're using Continuous Integration (CI) or Continuous Delivery (CD), you'll need to have a pipeline that runs automated tests every time you make a change to your software and enables continuous testing. In this way you can spot bugs before they develop into bigger problems that are more complicated and expensive to fix. Running tests as part of CI/CD also means the team need to have a clear branching and release strategy with relevant stages, jobs and infrastructure.

### 5. Test the code automatically every time you make a change
By testing your code automatically every time you make a change, you’ll be able to find bugs more quickly and write tests to mitigate them. When teams “shift left” they bring testing into their code development processes early. Instead of sending multiple changes to a separate test or QA team, a variety of tests are performed throughout the coding process so that developers can fix bugs or improve code quality while they work on the relevant section of the codebase.

### 6. Test that the code works the way you expect it to
You need to carry out tests on individual programs to demonstrate that the code executes as expected, validating the design and technical quality. These tests are usually automated by the developer but can sometimes be manually executed. For some tests, components can be replaced with stubs or simulators to simulate the behaviour of interfacing modules whilst allowing the inputs and outputs to be examined.

### 7. Test that the product is accessible, secure and performant
You must test that your product can be used by everyone who needs to use it, this includes users with a range of access needs and the most commonly used assistive technologies and browsers. This helps to ensure that the product can meet The Home Office Accessibility Standard and 2.2 AA of the Web Content Accessibility Guidelines as a minimum. You must also test for common vulnerabilities and security threats, and test that your product continues to work correctly with typical and unexpected or peak levels of traffic.

### 8. Test that the product is resilient (including contingency, continuity and recovery)
You should ensure that your product is resilient, so it continues to perform its core functions even when presented with challenges or disruption. You should also test any functions for recovery from disruptions in your software and test fail-safe capacities which avoid loss of data in case of crashes. Testing must be an integral and ongoing part of the product's 2C2R (Contingency, Continuity, Recovery, Resilience) approach.

### 9. Test that things work when they are joined up, including integration of components, APIs and services
You need to understand how things work when they are integrated with other components and internal or external services. This is especially important if your product has adopted something like a micro-service architecture which is dependent on well-defined APIs. You'll need to think about testing APIs with approaches that maximise efficiency like contract or consumer-based contract testing.

### 10. Test that iterating the code doesn’t break your product
As well as helping to maintain the overall quality of the source code, running a regression test suite ensures that no new bugs have been introduced after changes to the system. Changes that require regression testing include bug fixes, enhancements and changes to configuration or infrastructure. You should try to automate as much of the regression testing as you can, so you can run the tests frequently and add to the regression suite when new bugs are found.

### 11. Test that the product meets service, technical and quality standards
You should use the QAT standards as a starting point for good practice, but you need to avoid trying to apply these as a rigid framework. The best testing approaches will adapt the standards to help you meet the needs of the product team whilst remaining consistent with the aims of quality assurance and testing. 

### 12. Define your approach for testing and assurance in production, in accordance with a risk assessment
Just because you've pushed a new release into production doesn't mean testing has to be finished. You should agree with your stakeholders what level of assurance, test and risk assessment is required to produce an appropriate test approach, which ensures that tests in production are only conducted where they are necessary. This could include some important early live proving checks with users, for example.

### 13. Help to instrument the code so you can understand what's going on in production (even when you're not looking)
Observability helps the product team find out what’s slow, what’s broken, and what can be done to improve performance and stability. Your testing approach should include how to work with engineers to identify and interpret data from metrics, traces, logs and user experience whilst helping to identify which code or custom events need to be instrumented to achieve the right level of feedback.

### 14. Take useful measurements that help predict failures, improve decision-making and enhance the quality of the testing process
You should be measuring things against quality goals which will help to identify problems or risks with how things are going. Some measurements will also help you to understand your testing progress and determine the effectiveness of your approach. Measurement is essential for success in some environments where software is developed, tested and deployed very quickly as part of a continuous deployment pipeline. The minimum set of measurements will include:
- where bugs are captured, including production.
- ‘failed’ builds or releases.
- test efficiency, number of tests and execution time
- functional code coverage of user stories/requirements.
Whilst measurements are a guide to overall quality, their collection should not obscure the primary goal of delivering working software.

### 15. Test the product with real users whenever you can
Understanding user needs and as much of the context as possible gives you the best chance of meeting their needs in a simple and cost-effective way. Whilst many user needs will have been turned into stories you should make sure that the product is tested by users during all delivery phases, from Discovery, through Alpha, Beta and Live to Close down.

### 16. Don’t rely only on automated testing processes; use knowledge, experience and intuition where you need to
Whilst you'll be aiming to automate much of the testing process, you should use QAs to perform functions that push an application in different directions. Reliance solely on code based testing will fail because it does not consider the human factor and your product will likely be used by real people in the end. QAs can use exploratory test techniques based on their knowledge and experience of the product. They can fully investigate edge cases, which may not have been foreseen during the design phase and may not have been thought possible during normal use of the product. 
Furthermore, QA testers should tackle the bugs in customer workflows or in the full spectrum of application functionality that can be missed with developer-based code testing. Exploratory testing will also help you write new automated tests to ensure that problems aren’t repeated.
