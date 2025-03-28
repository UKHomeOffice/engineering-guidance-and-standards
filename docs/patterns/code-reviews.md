---
layout: pattern
order: 1
title: Code reviews
date: 2025-03-21
tags:
  - Software design
  - Ways of working
---

Code reviews are a vital part of the software lifecycle. They can keep code quality to a high standard as well as share knowledge between team members.

---

## Solution

### Code reviews should be part of your teams workflow

Time should be allocated as part of your sprint to review code, as it's important to keep high coding standards.

### Code reviews should be constructive and friendly

When reviewing code, you should focus on the code, not the author. Remember that every developer has different ideas and solutions to problems. Using reasons to explain why something needs changing is much more valuable than expressing your feelings.

### Point out the good things as well as bad

Positive feedback can help build a positive culture within your team and it's always nice to hear positive feedback.

### Have a pull request template

A pull request template can help you create a check list of what to do before/while creating a pull request, it can also be useful for the person reviewing the code too.

### Support your code reviews with automation

Automate as much as possible to help relive the code review burdon, things like testing and linters can be automated. Tools like ESLint and Prettier can help with this.

---

## Considerations

### Some of the things that should be checked for

This is not an exaustive list, just some recommendations, but your team should have their own standards, a pull request template can help with this too by creating a checklist of what to look for.

#### Does it work as attended?

Does the code look like it would work like the author intended? Does it work as users would expect?

#### Is it tested?

Are the tests well designed? Is there enough coverage? Are the tests automated?

#### Is it easy to read?

Are variables, functions etc. names descriptive? Is the code too complex? Are comments useful and clear? Are the comments needed?

#### Is the software well designed and bug free?

Is the code bug free? Is there good error handling? Does it fit with the rest of the code in the project? Have they thought about edge cases? Can you see any obvious security flaws?

#### Is the code documented?

Should there be more documentation around this code? Would you need more information before working on it?

#### Does it follow standards?

Does it follow the teams standards? Does it follow SEGAS standards? Does it follow service manual standards?

#### Do the automated tests pass?

Does it pass automated testing? Does it pass linting checks?

#### Do regular expessions make sense?

Does a regex work as expected? Does it include all edge cases?

---
