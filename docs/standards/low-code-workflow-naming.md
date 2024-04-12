---
layout: standard
order: 1
title: Low code workflow naming
date: 2023-11-15 
id: SEGAS-00012 
tags:
  - Low code
  - Software design
---

Ensuring clean and clear naming in low-code workflow tools helps provide structure and maintainability. This covers a variety of aspects from workflow and action names to scope blocks and error handling. This standard aims to provide generic rules that can be applied across all platforms, however due to the nature of low-code technology and tooling-specific limitations, there may be exceptional circumstances where they cannot be applied.

---

## Requirement(s)

- [Naming conventions MUST be consistent](#naming-conventions-must-be-consistent)
- [Acronyms or uncommon abbreviations MUST be defined in a central or project glossary](#acronyms-or-uncommon-abbreviations-must-be-defined-in-a-central-or-project-glossary)
- [Workflow, action step and scope block names MUST be descriptive and convey the purpose or objective](#workflow%2C-action-step-and-scope-block-names-must-be-descriptive-and-convey-the-purpose-or-objective)
- [Workflow, action step and scope block names MUST begin with a verb to describe the function, followed by the subject of the verb](#workflow%2C-action-step-and-scope-block-names-must-begin-with-a-verb-to-describe-the-function%2C-followed-by-the-subject-of-the-verb)
- [Words in a workflow name MUST be separated by a space where possible](#words-in-a-workflow-name-must-be-separated-by-a-space-where-possible)
- [Scope blocks that are used for error handling MUST be prefixed with the word 'Try' or 'Catch'](#scope-blocks-that-are-used-for-error-handling-must-be-prefixed-with-the-word-%E2%80%98try%E2%80%99-or-%E2%80%98catch%E2%80%99)

### Naming conventions MUST be consistent

Naming conventions must be applied consistently across a service. Consistency helps ensure maintainability and avoids confusion where multiple conventions are used in the same environment.

### Acronyms or uncommon abbreviations MUST be defined in a central or project glossary

Acronyms or abbreviations should only be used where it's not feasible or practical to use the full expansion. They should be defined in a either a central or project glossary accessible to all engineers on the service. Names with unknown acronyms or abbreviations can be meaningless and cause confusion for new engineers working on the service.

### Workflow, action step and scope block names MUST be descriptive and convey the purpose or objective

Naming workflows according to their purpose or objective allows engineers to understand the functionality of each workflow at a high level, without having to study the individual steps contained within it. The more functionality a workflow contains, the higher level the name will have to be.

### Workflow, action step and scope block names MUST begin with a verb to describe the function, followed by the subject of the verb

The naming of workflows, action steps and scope blocks to begin with a verb, followed by the subject of the verb, ensures clarity on what the component is doing. For example, 'Get case record'; 'Set variable to true'. This makes it easier to understand the purpose without looking at specific low-level logic.

### Words in a workflow name MUST be separated by a space where possible

Separating words using spaces makes workflow names more readable. In instances where spaces are not permitted on a platform, dashes or underscores can be used as an alternative. 

### Scope blocks that are used for error handling MUST be prefixed with the word 'Try' or 'Catch'

Where a scope block is error handled, it should be prefixed with the word 'Try'. Where a scope block provides error handling, it should be prefixed with the word 'Catch'. This allows engineers to see easily, where error handling is applied within a workflow. Other naming standards should still be applied as normal.

---
