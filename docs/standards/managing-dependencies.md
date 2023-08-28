---
layout: standard
order: 1
title: Managing dependencies
date: 2023-08-28
id: SEGAS-00007
tags:
  - Secure development
  - Source management
related:
  sections:
    - title: Related links
      items:
        - text: Well managed code
          href: /principles/well-managed-code/
        - text: Write maintainable, reusable and evolutionary code
          href: /principles/write-maintainable-reusable-and-evolutionary-code/
---
<!-- Standard description -->

The risk of poorly managed software dependencies remains significant across industries, as recognised by continuing [inclusion in the OWASP Top 10 application security risks](https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/).

The [Log4Shell zero-day vulnerability in Log4j](https://www.ncsc.gov.uk/news/apache-log4j-vulnerability) is a recent example of how software dependencies can introduce credible and serious risk of exploitation of services.

Home Office engineering teams are required to manage software dependencies proactively, to mitigate the risks of software supply chain attacks.

<!-- 
# Notes on using links

Internal links need to follow this format:
[link text to internal page]({{ '/standards/writing-a-standard/' | url }})
Note the use of the `url` filter. This ensures the link is appended to the base URL of the webpage correctly.

External links follow standard markdown formatting:
[link text to external page](https://example.com)
-->

---

## Requirement(s)

- [You MUST assess the security of external components before introducing them into software designs](#you-must-assess-the-security-of-external-components-before-introducing-them-into-software-designs)
- [You MUST maintain a discoverable dependency tree for your systems](#you-must-maintain-a-discoverable-dependency-tree-for-your-systems)

### You MUST assess the security of external components before introducing them into software designs

You must understand how well developed and maintained your software components are. The [Open Source Security Foundation (OSSF) has a framework for assessing the security of open source projects](https://github.com/ossf/scorecard#scorecard-checks). You should use the [OSSF Scorecard](https://github.com/ossf/scorecard) as part of your assessment of open source dependencies, and use similar criteria to assess the security of other dependencies. Key questions to answer include:

- Who maintains and supports that component?
- Does that maintenance follow best practices for vulnerability identification, and are vulnerabilities rectified in a timely manner?
- What protections are in place to prevent the incorporation of malicious code into that component?

### You MUST maintain a discoverable dependency tree for your systems

POMs and package.json are examples of files that include the specification of dependencies required to build a piece of software. However they do not always provide a full picture of the dependency tree of a built application, this because they do not always specify precisely which version of a dependency is to be used, and they do not always elaborate on nested dependencies.

Engineers must be able to fully understand which dependencies are running or included in an application, and be able to tie artefacts to a precise dependency tree and versioned code. Teams should generate Software Bills of Materials (SBOMs) in the build process, and share them with operations teams, so that vulnerabilities in applications can be accurately identified and appropriately remediated.

### You MUST use a scanning tool to identify dependencies with vulnerabilities

Part of the pipeline at buildtime, as minimum. Also possible to do pre-commit scans with T
Continuous scanning of what is running
Also scan artefacts

Scanning tools are good for identifying potential vulnerabilities in your dependencies. Teams must then triage those vulnerabilities to understand the applicability in their case, document the risks to the product and instigate the appropriate course of action to mitigate them.

### You MUST be prepared to update, replace and remove dependencies

Un-patchable systems are a recognised anti-pattern - https://www.ncsc.gov.uk/whitepaper/security-architecture-anti-patterns#section_8

Reference deployment strategies
You must test the compatibility 

Using a package manager will help

So will good software design - dependent on behaviour not the thing

---
