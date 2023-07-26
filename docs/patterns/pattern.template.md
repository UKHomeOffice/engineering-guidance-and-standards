---
layout: sub-navigation
order: 1
title: Pattern title
date: git Last Modified
tags: <!-- use tags: [] for no tags, note "Pattern" tag included automatically -->
  - TAG 1
  - TAG 2
---

{% import "macros/tags.njk" as pageTag %}

Last updated: {{ page.date | postDate }}
{{ pageTag.tags(tags)  }}

<!-- Pattern description -->

---

## Description

<!-- Description text -->

---

## Solution

<!-- Solution text -->

---

## Description

<!-- Description text -->

---

## Considerations (optional)

<!-- Considerations text -->

---

## Examples (optional)

<!-- Examples text -->

---