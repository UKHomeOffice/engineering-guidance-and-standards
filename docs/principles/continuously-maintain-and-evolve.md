---
layout: principle
order: 1
title: Continuously maintain and evolve
date: 2025-03-07
tags:
  - Ways of working
  - Infrastructure
  - Dependencies
  - Security
  - SRE
related:
  sections:
    - title: Related links
      items:
        - text: Write maintainable, reusable and evolutionary code
          href: /principles/write-maintainable-reusable-and-evolutionary-code/
        - text: Well managed code
          href: /principles/well-managed-code/
        - text: GOV.UK Service Standard - Iterate and improve frequently
          href: https://www.gov.uk/service-manual/service-standard/point-8-iterate-and-improve-frequently
---

Building great products isn't just about writing good code initially - it's about continuously maintaining and evolving them. Regularly update codebases, dependencies, pipelines, infrastructure, and processes to ensure they remain secure, performant, and aligned with current standards. Avoid allowing systems to stagnate by scheduling maintenance and improvements as a regular part of the delivery lifecycle.

---

## Rationale

Outdated systems are harder to support and integrate with modern components, leading to increased technical debt over time. Regular updates are essential to reduce exposure to known vulnerabilities, enhancing the security of the system. Keeping tools and libraries up to date also sustains efficiency by leveraging improved performance and new features. Neglecting regular maintenance often results in costly big bang upgrades, making continuous updates a more cost-effective approach.

---

## Applications and Implications

- Schedule time dedicated to updating dependencies, refactoring code, and maintaining pipelines. This proactive approach ensures that systems remain current and reduces the risk of accumulating technical debt
- Continuously observe and assess updates in the technology ecosystem, such as new library versions or framework releases. Staying informed enables timely adoption of improvements and ensures compatibility with external systems
- Regularly review the [Home Office Engineering Guidance and Standards](/) to ensure that products remaining aligned with standards and best practices
- Automatically detect outdated dependencies and facilitate testing processes. Automation streamlines maintenance tasks, minimises human error, and accelerates the integration of necessary updates
- Incorporate planned and measurable maintenance activities into team roadmaps. By formally recognising maintenance as a critical component of the development lifecycle, teams can allocate resources effectively and maintain system integrity over time
