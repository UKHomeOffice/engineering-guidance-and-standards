---
layout: principle
order: 1
title: Well managed code
date: 2023-07-14
tags:
- Source management
- Ways of working
---

Have consistent and understood approaches within your teams so that you manage code well.

---

## Rationale

Well managed code is easier to understand, fix, run, reuse and ultimately, deprecate. Good review and promotion processes improve code quality and make it much easier to manage changes.

Code can outlive supporting information. There should be enough information in the repository for engineers to understand what the code does, what changes have been made and why. This increases the maintainability of the Home Office source code estate.

---

## Applications and Implications

Teams may approach these things in different ways depending on their size, make-up and what they are working on, but it invariably helps to follow code management best practices such as:

- Make it easy for people to understand your code by practising good git hygiene - write meaningful commit messages, give context to your changes
- Have a well-understood and communicated branching strategy, be prepared for this to change over time
- Define how you protect branches, and review the quality of changes that progress through to production - you can use branch protection rules, and CI/CD to formalise and manage this
- Use Git for version control and use version control widely, for documentation and configuration as well as code
- [Be collaborative](/principles/be-collaborative/) and [work in the open](/principles/work-in-the-open/) - manage user access to your repositories appropriately, make sure to share your code as openly as you can unless you have a good reason not to
- Provide documentation in your repositories, for example: what the repository contains, what it does, how to run it and how to improve it

---
