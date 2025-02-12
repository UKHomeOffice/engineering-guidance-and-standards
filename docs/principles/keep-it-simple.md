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

Keeping your code and pipelines simple makes them easier to read, self-documenting and enables incidents to be analysed and resolved faster.

---

## Rationale

Code should be legible by a developer at any level. Creating complex and hard to read code makes it more difficult to understand, work on and ultimately fix issues.

Readability is important to help others understand what the code is meant to do. If code needs to be explained often, this may be a sign that it is too complicated and should be simplified.

If a developer with project experience leaves the team, the remaining team members should still be able to understand and maintain the codebase.

---

## Applications and Implications

- Simple code enables better asynchronous communication, enabling pull requests to be more easily read and understood.
- To avoid premature optimisation, don't write code until it's needed, whilst considering extensibility where appropriate.
- Follow the theme and practices already established within a project, to help the existing team understand new code more easily.
- Keeping things simple can mean using third party libraries where someone else has already solved a problem, or made something simpler to implement.
- Multiple lines of comments could mean the code is too complicated to understand and should be refactored.
- Following naming conventions for variables and methods helps in self documenting your code.
- Refactoring large functions to break out key logic can improve readability as well as enabling reuse in the future. For further details, the [Write maintainable, reusable and evolutionary code principle](/principles/write-maintainable-reusable-and-evolutionary-code/) goes into greater depth.

---
