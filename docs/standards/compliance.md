---
layout: standard  
title: Completing a .SEGAS File  
date: 2026-03-13  
id: SEGAS-00018
tags:
- Assurance
- Standards
- Ways of working
---

## Introduction

The `.SEGAS.json` file helps teams understand and clearly communicate their level of alignment with SEGAS standards. It provides a structured way to record which requirements are met, which are not, and where further work is planned or required.

For teams, the file acts as a practical self‑assessment and communication tool rather than a pass/fail exercise. It supports prioritisation, helps surface risk and technical debt early, and enables clearer conversations with delivery leads and assurance functions. The `.SEGAS.json` file should be treated as living documentation and kept up to date as the service evolves.

Teams are encouraged to use the (compliance tool)[https://engineering.homeoffice.gov.uk/compliance] to help complete and validate their `.SEGAS.json` file.

---

## Requirement(s)

- [A repository MUST include a .SEGAS.json file](#a-repository-must-include-a-segasjson-file)
- [The .SEGAS.json file MUST be in the repository root](#the-segasjson-file-must-be-in-the-repository-root)
- [The .SEGAS.json file MUST follow the published JSON structure](#the-segasjson-file-must-follow-the-published-json-structure)
- [The .SEGAS.json file MUST be based on published SEGAS standards](#the-segasjson-file-must-be-based-on-published-segas-standards)
- [Each standard MUST include all listed requirements](#each-standard-must-include-all-listed-requirements)
- [Each requirement MUST record a pass state](#each-requirement-must-record-a-pass-state)
- [No or N/A MUST include context or a plan](#no-or-na-must-include-context-or-a-plan)
- [Comments SHOULD be used to provide evidence or links](#comments-should-be-used-to-provide-evidence-or-links)
- [The compliance tool SHOULD be used](#the-compliance-tool-should-be-used)
- [A .SEGAS.json file MAY be shared across repositories](#a-segasjson-file-may-be-shared-across-repositories)

---

## A repository MUST include a `.SEGAS.json` file

Every repository in scope of SEGAS must include a `.SEGAS.json` file. This is how teams show where they meet SEGAS requirements, where they do not, and how gaps are being addressed.

---

## The `.SEGAS.json` file MUST be in the repository root

The `.SEGAS.json` file must be located in the root of the repository so it is easy to discover and can be consumed consistently by tooling.

---

## The `.SEGAS.json` file MUST follow the published JSON structure

The `.SEGAS.json` file must be valid JSON and follow the published SEGAS structure.

At a minimum, it must contain a `standards` array. Each entry must include:
- an `id`
- a `title`
- a `url`
- a `date`
- a `requirements` list

Example:

```json
{
  "standards": [
    {
      "id": "SEGAS-00004",
      "title": "Open source licensing",
      "url": "https://engineering.homeoffice.gov.uk/standards/open-source-licensing/",
      "date": "2023-05-24",
      "tags": [],
      "requirements": []
    }
  ]
}
```

## The .SEGAS.json file MUST be based on published SEGAS standards

Standards and requirements in the .SEGAS.json file must match those published on (the SEGAS website)[https://engineering.homeoffice.gov.uk/standards/]. Teams must not create, rename, or modify standard identifiers or requirement anchors.
This ensures consistency between published standards, the compliance tool, and local compliance evidence.

---

## Each standard MUST include all listed requirements

For each standard, all published requirements must be included in the .SEGAS.json file.

Requirements must not be omitted. If a requirement does not apply, this must be explicitly recorded.

---

## Each requirement MUST record a pass state

Every requirement must include a pass value using one of the following:

- "Yes"
- "No"
- "N/A"

The selected value should reflect the current state of the service.

--- 

## No or N/A MUST include context or a plan

Where pass is set to "No" or "N/A", teams must explain why.
This may include:

- a rationale for non‑applicability
- a description of planned remediation
- links to tracked work such as GitHub issues, Jira tickets, or epics

Example:

```JSON
{
  ...
  "pass": "No",
  "comment": "Architectural views exist but need expanding.
  https://github.com/org/repo/issues/609"
}
```

This makes non‑compliance visible, intentional, and manageable.

---

## Comments SHOULD be used to provide evidence or links

The comment field should be used to:
- explain how a requirement is met
- provide supporting context
- link to documentation, code, pipelines, dashboards, or tickets

Comments should be clear, concise, and proportionate.

--- 

## The compliance tool SHOULD be used

Teams should use the (compliance tool)[https://engineering.homeoffice.gov.uk/compliance] to:

- load the latest published standards
- complete or review pass states
- validate the structure of their .SEGAS.json file

Using the tool helps reduce manual effort and keeps repositories aligned as standards evolve.

---

## A .SEGAS.json file MAY be shared across repositories

Where multiple repositories represent the same system or share the same compliance posture, a single .SEGAS.json file may be reused.
Teams should ensure that any known repository‑specific differences are documented where relevant.

--- 

## Guidance
The .SEGAS.json file is not intended to be a gate or a one‑off exercise. It supports transparency, team autonomy, and continuous improvement by making compliance and risk visible and easy to discuss.
Teams should keep the file current and update it whenever there are material changes to the service, architecture, or standards landscape.
