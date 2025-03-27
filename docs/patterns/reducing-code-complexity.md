---
layout: pattern
order: 1
title: Reducing Code Complexity
date: 2024-07-23
tags:
  - Software design
  - Ways of working
  - Quality engineering
---

Complex code can make code difficult to maintain and hard to understand errors. There are various tools that can analyse your code to reduce or bring code complexity to your attention as well as different techniques you can use to help to reduce code complexity.

---

## Solution

### Measure code complexity

Measuring code complexity can spot issues early, allowing correction with smaller changes earlier in the Software Lifecycle, as well as highlighting overarching issues such as where code hasn't been reused.

#### Using tools to measure code complexity

Using static code analysis to help you understand where your code is complex can help you reduce complexity within your code. These tools can use different techniques such as Cyclomatic Complexity or Cognitive Complexity. Tools will usually make recommendations at to where you need to make changes (for instance, reusing a function or reducing the lines within a function).

Some examples might be SonarQube or Code Climate.

#### Using pre-commit hooks

Using a git pre-commit hook can also encourage developers to make changes to their code before it gets committed to your repository. Tools such as ESLint for JS can help with this.

### Reducing code complexity

There are different techniques you can follow to reduce complexity, which should in turn make your code more readable, easier to understand and maintain.

#### Splitting files and functions

Keeping code succinct, easy to manage files and functions makes it easier to maintain with simpler functions and allows for further reuse.

Designing functions to be modular from the outset can also help reduce complexity, as well as enable reuse in the future.

#### Naming conventions

Setting good functions and variable names helps other developers understand what a function or variable represents.

In function names it can also help reduce complexity by describing 'what' the function does, not 'how' it does it.

#### Regularly refactoring code

Using refactoring can help reduce complexity, by splitting functions, reusing components etc.

#### Balance coupling vs DRY

DRY (Don't repeat yourself) is a software development principle that aims to reduce repetitive code by refactoring it into a shared function that can be called wherever needed. This reduces immediate code complexity, but introduces coupling between the pieces of code that call the shared function. Check when merging repeated code that the complexity reduction justifies the maintenance cost of coupling.

#### Documentation

Documentation is important for reducing complexity and providers insights into what code does and how it works. Documentation should include the team's standards and patterns allowing future modification in a consistent style with minimal extra complexity.

Documentation is especially useful for new team members, enabling them to understand the previous structural and architectural decisions made.

---

## Considerations

- Teams should agree their own standards for code, set some rules and document them. Following this, the same standards can be used across code reviews, rules set in tools (for instance, setting a high complexity allowed, allowing high LOC's etc.).
- Code complexity is form of tech debt, by letting it increase it can make your code harder to maintain over time.
- Code complexity is everyone's responsibility within the team

---
