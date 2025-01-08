---
layout: principle
order: 1
title: Keep it simple
date: 2025-01-08
tags:
  - Ways of working
  - Software design
  - Maintainability
  - Reusability
related:
  sections:
    - title: Related links
      items:
        - text: Write maintainable, reusable and evolutionary code
          href: /principles/write-maintainable-reusable-and-evolutionary-code/
---

Keeping your code and piplines simple, makes them easier to read, self documenting and it enables incidents to be more quickly analysed and changes made.

---

## Rationale

Code should be legible by a developer at any level, creating complex and hard to read code makes it more difficult to understand, work on and, ulitimately fix issues. Readbility is important, to help others understand what the code is meant to do, asking team members to explain may mean the code is too complicated. If a developer with project experience leaves the team, the code should still be understanable to be iterated on.

---

## Applications and Implications

- Simple code enables better async communication, enabling pull requests to be read with ease, and to understand the intent of the actions it performs.
- Don't overthink the future of your code, to avoid premature optimisation, don't write code until it's needed. Though extendability should still considered.
- Follow the theme and practices within a project already, to help the existing team understand more easily.
- Third party libraries can be useful to reuse code that someone else has already written.
- Multiple lines of comments, could mean the code is too complicated to understand and should be refactored.
- Clear variable and function names helps to keep your code self documenting.
- Looking at whether large functions be refactored to break out key logic can help understand a functions intent, as well as enabling reusability in the future. For further details the [Write maintainable, reusable and evolutionary code priciple](/principles/write-maintainable-reusable-and-evolutionary-code/) goes into greater depth.

---
