---
layout: standard
order: 1
title: Use AI
date: 2026-03-20
id: SEGAS-00020
tags:
  - Generative AI
  - Artificial intelligence (AI)
  - Secure development
  - Ways of working
  - Developed with assistance from Copilot
---

Teams should use AI where it demonstrably improves developer productivity, code quality, accessibility, or service outcomes. AI can be used to support good engineering practices, such as writing documentation, increasing test coverage, refactoring legacy code, and addressing defects.

The Home Office has departmental policies and guidance on the use of AI and AI tooling. They set out the key responsibilities and guardrails for people working at the Home Office to follow.
This standard sets the specific expectations for the safe, responsible and consistent use of AI coding assistants engineers at the Home Office. It ensures that AI‑assisted work remains subject to appropriate human oversight, aligns with existing engineering, security and quality standards, and supports teams to realise the benefits of AI without compromising trust, maintainability or accountability.

References to “teams” in this standard mean human teams responsible for the design, development, and operation of software; AI systems are treated as tools and are not considered to be team members.

Developed with assistance from Copilot

---

## Requirement(s)

- [AI‑assisted outputs MUST have a human in the loop to approve before reaching production](#aiassisted-outputs-must-have-a-human-in-the-loop-to-approve-before-reaching-production)
- [AI‑assisted changes MUST be traceable through engineering processes](#aiassisted-changes-must-be-traceable-through-engineering-processes)
- [You MUST test your code](#you-must-test-your-code)
- [You MUST follow the guardrails](#you-must-follow-the-guardrails)
- [You MUST plan for the worst](#you-must-plan-for-the-worst)
- [Teams MUST ensure that sensitive, personal, classified, or otherwise restricted data is not exposed to AI tools unless explicitly approved](#teams-must-ensure-that-sensitive-personal-classified-or-otherwise-restricted-data-is-not-exposed-to-ai-tools-unless-explicitly-approved)
- [AI‑assisted code MUST meet the same security expectations as human‑written code](#aiassisted-code-must-meet-the-same-security-expectations-as-humanwritten-code)
- [Teams MUST understand and manage the risks of AI‑introduced dependencies, libraries, or code patterns](#teams-must-understand-and-manage-the-risks-of-aiintroduced-dependencies-libraries-or-code-patterns)
- [AI usage MUST evolve in line with updated guidance, standards, and organisational guardrails](#ai-usage-must-evolve-in-line-with-updated-guidance-standards-and-organisational-guardrails)

### AI‑assisted outputs MUST have a human in the loop to approve before reaching production

Teams must always be in the loop before deploying any AI-assisted code, usually this would be done through a code review.

Teams will retain full accountability for all AI‑assisted outputs. AI tools cannot replace human judgement, ownership, or responsibility for decisions, designs, or changes made to systems.

### AI‑assisted changes MUST be traceable through engineering processes

AI‑assisted changes must be marked as such, made visible, and be auditable through standard engineering practices (e.g. commits, pull requests, reviews). Teams should be able to demonstrate how AI‑generated outputs were reviewed, validated, and approved through existing processes.

An example of how this could be done:

In a commit message using a marker such as:

```
Add input validation for email field [AI-assisted]
```

And in a pull request description this states:

```
Parts of this change were generated with the assistance of an AI coding tool and have been reviewed and amended by the author.
```

### You MUST test your code

All AI‑assisted changes must be tested in line with existing engineering standards such as the Office [Developer Testing standard](https://engineering.homeoffice.gov.uk/standards/developer-testing/) and the [QAT principles](https://engineering.homeoffice.gov.uk/principles/quality-assurance-and-testing/) before being merged or deployed. This ensures that AI‑generated code behaves as expected, does not introduce defects or regressions, and continues to meet quality, security and reliability expectations.

### You MUST follow the guardrails

Teams must follow all approved organisational and technical guardrails when using AI tools. Guardrails exist to ensure AI is used safely, securely and responsibly, and to prevent outcomes such as data leakage, insecure code, biased or inappropriate outputs, or erosion of established engineering standards.

AI‑assisted work must comply with Home Office security policies, engineering standards, legal and ethical obligations, and any service or programme‑specific controls that apply. Where guardrails restrict or prohibit certain uses of AI, teams mustn’t bypass or weaken those controls or attempt to do so.

### You MUST plan for the worst

Teams must plan for worst‑case outcomes when using AI tools. This includes assuming that AI‑generated outputs may be incorrect, insecure, biased, misleading, or inappropriate, and that failures may not be obvious at the point they are introduced.

Designs and delivery approaches should account for the impact of AI‑related failures, including how issues will be detected, mitigated, and recovered from. AI use shouldn’t create single points of failure, remove meaningful human oversight, or reduce the ability to respond effectively to defects, security incidents, or misuse.

### Teams MUST ensure that sensitive, personal, classified, or otherwise restricted data is not exposed to AI tools unless explicitly approved

Teams must ensure that AI tools are used in accordance with Home Office data handling, security, and information assurance policies. Sensitive or restricted information must not be shared with AI tools unless explicit approval has been granted through appropriate governance and assurance processes.

### AI‑assisted code MUST meet the same security expectations as human‑written code

All AI‑assisted code must be subject to the same security standards, reviews, and controls as code written without AI assistance. The use of AI shouldn’t reduce the level of security scrutiny applied to any change.

### Teams MUST understand and manage the risks of AI‑introduced dependencies, libraries, or code patterns

Teams must assess and manage risks introduced by AI‑suggested dependencies, libraries, or implementation patterns in line with the [Managing the security of software dependencies](https://engineering.homeoffice.gov.uk/standards/managing-security-software-dependencies/) standard. This includes considering security vulnerabilities, licensing, maintainability, and alignment with existing architectural and engineering standards.

### AI usage MUST evolve in line with updated guidance, standards, and organisational guardrails

Teams must regularly review and adapt their use of AI as guidance, standards, risks, and organisational guardrails change. AI usage should not remain static where expectations or controls have been updated.

---
