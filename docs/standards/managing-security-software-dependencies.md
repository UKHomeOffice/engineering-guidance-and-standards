---
layout: standard
order: 1
title: Managing the security of software dependencies
date: 2023-09-08
id: SEGAS-00007
tags:
  - Secure development
  - Software design
  - CI/CD
  - Source management
  - Build, release and deploy
  - Security
  - Dependencies
related:
  sections:
    - title: Related links
      items:
        - text: Well managed code
          href: /principles/well-managed-code/
        - text: Write maintainable, reusable and evolutionary code
          href: /principles/write-maintainable-reusable-and-evolutionary-code/
---

The risk of poorly managed software dependencies remains significant across industries, as recognised by continuing [inclusion in the OWASP Top 10 application security risks](https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/).

The [Log4Shell zero-day vulnerability in Log4j](https://www.ncsc.gov.uk/news/apache-log4j-vulnerability) is a recent example of how software dependencies can introduce credible and serious risk of exploitation of services.

Home Office engineering teams are required to manage software dependencies proactively, to mitigate the risks of software supply chain attacks.

---

## Requirement(s)

- [You MUST assess the security of external components before introducing them into software designs](#you-must-assess-the-security-of-external-components-before-introducing-them-into-software-designs)
- [You MUST maintain a discoverable dependency tree for your systems](#you-must-maintain-a-discoverable-dependency-tree-for-your-systems)
- [You MUST proactively identify vulnerabilities in dependencies with scanning and other tools](#you-must-proactively-identify-vulnerabilities-in-dependencies-with-scanning-and-other-tools)
- [You MUST regularly update, replace and remove dependencies](#you-must-regularly-update%2C-replace-and-remove-dependencies)

### You MUST assess the security of external components before introducing them into software designs

You must understand how well developed and maintained your software components are. The [Open Source Security Foundation (OSSF) has a framework for assessing the security of open source projects](https://github.com/ossf/scorecard#scorecard-checks). You should use the [OSSF Scorecard](https://github.com/ossf/scorecard) as part of your assessment of open source dependencies, and use similar criteria to assess the security of other dependencies. Key questions to answer include:

- Who maintains and supports that component?
- Does that maintenance follow best practices for vulnerability identification, and are vulnerabilities rectified in a timely manner?
- What protections are in place to prevent the incorporation of malicious code into that component?
- Are you able to verify the integrity and provenance of components, to reduce the risk of including modified or malicious components?

Assessment of software components should take in to account nested or transitive dependencies as well as direct dependencies.

### You MUST maintain a discoverable dependency tree for your systems

[POMs](https://maven.apache.org/guides/introduction/introduction-to-the-pom.html) and [package.json](https://docs.npmjs.com/cli/v9/configuring-npm/package-json) are examples of files that include the specification of dependencies required to build a piece of software. However they do not always provide a full picture of the dependency tree of a built application, this because they do not always specify precisely which version of a dependency is to be used, and they do not always elaborate on nested dependencies.

Engineers must be able to fully understand which dependencies are running or included in an application, and be able to tie built artefacts to a precise dependency tree and versioned code. Teams should generate Software Bills of Materials (SBOMs) in the build process, and share them with operations teams, so that vulnerabilities in applications can be accurately identified and appropriately remediated.

### You MUST proactively identify vulnerabilities in dependencies with scanning and other tools

Teams must identify and then triage vulnerabilities in their code and dependencies, understand and document the risks to the product, and then instigate the appropriate course of action to mitigate them. Scanning tools assist with this by providing checks for known vulnerabilities, and can increase the automation of their mitigation, for example raising pull requests. However, teams should also subscribe to security bulletins for components when scanning tools do not provide sufficient coverage.

Vulnerability scanning should be automated and implemented in multiple locations, as below. Platform teams and Home Office Cyber Security (HOCS) will advise on the appropriate tooling to use in each case.

- Source code scanning should be implemented on source code repositories, for example with Dependabot. This enables the identification of vulnerabilities during development, shifting remediation activities to the left
- In pipelines. Vulnerability scanners like Trivy should be employed to check code and dependencies as they are built, and can also scan containers. This reduces the risk of vulnerabilities being built into artefacts and allows for pipelines to be failed on set criteria
- Vulnerabilities can become known in applications that have previously been successfully built. Regular and continuous scanning of built artefacts allows teams to understand the risks to running systems in higher environments. Discoverable and accurate dependency trees assist with this

### You MUST regularly update, replace and remove dependencies

[Vulnerable and outdated components remains an OWASP Top 10 application security risk](https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/). Un-patchable systems are a [recognised anti-pattern](https://www.ncsc.gov.uk/whitepaper/security-architecture-anti-patterns#section_8) that prevent or delay the mitigation of those security risks, and introduce further risks to the timely management of technical debt. Teams must be prepared to patch systems at short notice.

Engineering teams must plan and perform updates to their software components. There are a number of things teams should do to enable this on an ongoing basis:

- [Select and define a deployment strategy](/patterns/selecting-a-deployment-strategy/) that enables the promotion of patches and dependency changes into production frequently
- Configure pipelines and test suites to allow testing for the compatibility of modified software components
- Monitor and triage the ongoing need to patch, update or change the configuration of components, over the lifecycle of the product
- Employ good software design principles to loosely couple external dependencies where possible, making it easier to replace them if required
- Use package managers and software composition analysis tools to automate patch management and identify unnecessary dependencies that can be removed

---
