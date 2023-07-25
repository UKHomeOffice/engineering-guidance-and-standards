---
layout: sub-navigation
order: 1
title: Principle title
date: git Last Modified
tags:
  - TAG 1
  - TAG 2
---

{% import "macros/tags.njk" as pageTag %}

Last updated: {{ page.date | postDate }}
{{ pageTag.tags(tags)  }}

<!-- Principle description -->

---

## Rationale

<!-- Rational text -->

---

## Applications and Implications

<!-- Applications and implications text -->
