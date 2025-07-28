---
layout: principle
order: 1
title: Quality assurance and testing
date: 2025-07-25
tags:
- Quality engineering
---

These principles represent the minimum set of considerations for any QAT activity.

---

## Rationale

Embedding these principles is part of continuously evolving our professional, technical and quality standards, and helps us to achieve a consistent approach to quality assurance and testing.

Implementation of this approach will always be context-dependent, tailored and aligned with the needs of your product team and users, but you must use these principles to make important decisions about how you will ensure quality in the product and delivery process.  The principles can be fully applied in some teams, whilst in others it is something to work towards.

---

## Applications and implications

### 1. Establish quality goals for your product that include the quality assurance and testing standards

Use the quality assurance and testing (QAT) standards as a starting point for good practice, but don’t try to apply these as a rigid framework. The best quality approaches will adapt the standards to help meet the needs of the product team whilst remaining consistent with the aims of quality assurance and testing. Make sure that there are clear quality goals established for the product, service or platform, so that you can more easily identify problems or risks. The goals could be in any form but typically include quality standards, acceptance criteria or requirements.

### 2. Implement quality engineering standards throughout the test pyramid

When working with modern tech stacks and architecture, plan to automate tests at all levels of the [test pyramid](/standards/test-pyramid/). You should use the test pyramid to inform your approach to testing, weighting your testing effort to optimise the balance between cost and benefit. Component integration and API integration tests should be weighted more than UI driven E2E tests and in that order. 

Aim to measure code coverage, both technical and functional, while avoiding duplication of coverage across different levels of the pyramid. The test pyramid within the continuous integration (CI) / continuous delivery (CD) pipeline should include other test types including automated accessibility tests and baseline performance tests. 

It may not be possible to follow all quality engineering practices whilst working on legacy systems or older technology – you will need to explore approved tools and processes that enable test automation of user journeys and evaluate them in the context of the return on investment they can bring.

### 3. Update regression tests regularly

Optimise your regression test suite to ensure that no new bugs have been introduced by changes to the system. Your regression suite should be modular, updated following each production release and take a risk-based approach to changes. Automate as much of your regression testing as possible, so tests are run frequently and added to the regression suite when new bugs are found. All quality engineering approaches should be consistent with these standards and DDaT initiatives of technology convergence.

### 4. Test that the product is accessible

Test that your product can be used by everyone who needs to use it. This means checks against standards and with the target users commonly used assistive technologies and browsers. This helps to ensure that people with a range of access needs really can effectively use the product as well as legal compliance. You must also ensure the quality of a published accessibility statement for your product.

### 5. Test that the product is resilient

Ensure that your product is resilient, including contingency, continuity and recovery, so it continues to perform its core functions even when presented with challenges or disruption. Ensure you include operational acceptance testing (OAT) to test functions for recovery from disruptions in your software and test fail-safe capacities which avoid loss of data in case of crashes. Testing must be an integral and ongoing part of the product's contingency, continuity, recovery and resilience (2C2R) approach. If your project uses infrastructure as code to define the underlying infrastructure needed for a project, you must ensure your test pyramid includes automated testing (both static and dynamic testing) of this infrastructure. You should test your system and infrastructure at scale (both horizontal and vertical). You must also test that your system is observable and that it is built to support good DevOps and site reliability engineering (SRE) practices (where applicable).

### 6. Test that the product is secure

Ensure that your product implements and is compliant with secure By design policy via the implementation of the Home Office security testing standard, and the related security testing frameworks set out by the QAT HOST team. You should endeavour to:

 - Reduce vulnerabilities: through early identification and remediation of security flaws
 - Enhance system security by proactive testing and monitoring
 - Improve compliance with alignment to industry best practices and regulatory requirements
 - Minimise risk by reduced exposure to cyber threats and data breaches
 - Lower cost using proactive security measures that can prevent costly incidents, reduce downtime, ensure efficient use of resources and reducing risk information technology health checks (ITHCs).

### 7. Ensure that your product/project area implements the quality assurance strategy
You must support the design and implementation of 1st Line assurance, in-line with the QA Strategy independently from testing. This will involve:

 - Identifying and managing risks and issues early
 - Eliminating waste and avoiding rework cost
 - Ensuring that quality is everyones' responsibility
   
Focus on product delivery and outcomes with collaborative working across teams (including third party products/projects) to build in quality early in the lifecycle. Build in quality controls and measure them to ensure that local DDaT policies, standards and wider legal compliance requirements (such as accessibility and legal compliance, e.g. GDPR) are implemented. Actively monitor and measure quality goals and metrics, ensuring corrective actions are in place to address risk areas.

### 8. Include end-to-end integration testing

You should understand how things work when they are integrated with other components and internal or external services. You should however limit the use of end-to-end tests for test coverage in favour of lower order tests like contract and component Integration tests, where the system architecture and tech stack allows for this.

### 9. Employ your knowledge and experience – test the product with real users

Understanding user needs and as much of the context as possible gives you the best chance of meeting them. Whilst many user needs will have been turned into stories you should make sure that the product is tested by users during all delivery phases. You should agree with your stakeholders what level of assurance, test and risk assessment is required to produce an appropriate test approach, which ensures that tests in production are only conducted where they are necessary. Reliance solely on code-based testing will fail because it does not consider the human factor, and your product will likely be used by real people in the end. Quality engineers can use exploratory test techniques based on their knowledge and experience of the product to fully investigate edge cases and help you write new automated tests to ensure that problems aren’t repeated.

### 10. Take useful measurements

You should be taking measurements that help predict failures, improve decision-making, and enhance the quality of the testing process against quality goals. This will help to identify problems or risks. Some measurements will also help you to understand your testing progress and determine the effectiveness of your approach. Measurement is essential in a CI/CD pipeline. The minimum set of measurements will include:

 - where bugs are captured, including production
 - failed builds or releases
 - test efficiency, number of tests and execution time
 - functional code coverage of user stories/requirements
   
Whilst measurements are a guide to overall quality, their collection should not obscure the primary goal of delivering working software.

### 11. Ensure risk management is embedded in your product

You should have a defined risk management approach for your product/project area that involves identifying, evaluating and prioritising risks. You must ensure that risk is built into everyday quality assurance and is not just an additional activity. You must follow local risk management processes, ensuring that entries to local risk registers are accurate using the red/amber/green (RAG) scores and are reviewed regularly. Risks should be regularly discussed with stakeholders (project delivery managers, product owners etc) and principal delivery owners ensuring that they are controlled and mitigating actions are being completed. Where necessary, processes in the QAT risk handbook and QAT risk and assurance policy should be followed to ensure risks are escalated and managed on the correct register.
