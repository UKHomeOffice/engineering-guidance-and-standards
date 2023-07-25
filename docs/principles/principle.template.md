---
layout: sub-navigation
order: 1
title: Page title
date: git Last Modified
tags:
  - TAG 1
  - TAG 2
---

{% import "macros/tags.njk" as pageTag %}

Last updated: {{ page.date | postDate }}
{{ pageTag.tags(tags)  }}

<!-- Principle description content goes here -->

---

## Rationale

<!-- Rational content goes here -->

---

## Applications and Implications

<!-- Applications and implications content goes here -->
