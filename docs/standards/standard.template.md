---
layout: sub-navigation
order: 1
title: Standard title
date: git Last Modified
id: SEGAS-00000 <!-- Set unique ID for standard -->
tags: <!-- use tags: [] for no tags -->
  - TAG 1
  - TAG 2
---

{% import "macros/tags.njk" as pageTag %}

Last updated: {{ page.date | postDate }}
{{ pageTag.tags(tags)  }}

<!-- Standard description -->

---

## Requirement(s)

<!-- Populate list for each requirement -->

- [Requirement 1](#requirement-1)
- [Requirement 2](#requirement-2)

### Requirement 1

<!-- Requirement description text -->

### Requirement 2

<!-- Requirement description text -->

---
