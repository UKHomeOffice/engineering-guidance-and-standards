---
layout: principle
order: 1
title: Write maintainable, reusable and evolutionary code
date: 2023-07-25
tags:
  - Ways of working
  - Software design
  - Maintainability
  - Reusability
---

When writing code, keep in mind that this should be clean, reusable and descriptive. Reuse existing artefacts before delivering new ones where possible. This can enable code to be easier to understand, and cheaper to maintain, modify and reuse.

---

## Rationale

Writing code takes time and effort. Code is read more than it is modified, and modified more than it is written. It is worth spending more time and effort to write code that it is easier to understand and to extend with new functionality. 

Reusing existing code saves considerable development time and effort at the cost of additional complexity. Writing code that is understandable and modular minimises this complexity so that code can be more effectivly reused. Writing code that is easy to modify allows this complexity to only be added when it is useful.

---

## Applications and Implications

- Keep your code as simple and understandable as possible. Start with only the code needed for the task at hand. Use refactoring where needed to separate concerns, facilitate reuse, and improve readability when the need arises
- Have a comprehensive set of regression tests so that you can safely refactor and add new features. If you also practice Test Driven Development (TDD) you get this for free
- Use design patterns when appropriate and avoid using anti-patterns
- Keep code loosely coupled and highly reusable which enables future developments to extend the code more easily
- Remember code can always be refactored, so keep code simple and refactor for new use cases only when they arise
- Prioritise writing readable code. Less code doesn't always mean more efficient/sustainable, is often harder to read and harder to maintain
- Use comments sparingly when they add context or meaning that can't be expressed in the code
- Use methodologies such as SOLID Principles or Functional Programming where appropriate. Keep in mind methods already used within the project
  
---
