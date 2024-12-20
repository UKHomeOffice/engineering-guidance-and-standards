---
layout: standard
order: 1
title: Writing a principle
date: 2024-11-28
id: SEGAS-00002
tags: []
---

An engineering principle is a goal or property that is foundational to software engineering at the Home Office. Principles should be used to guide the behaviour of software engineering teams and evaluate their output.

Home Office engineering principles will be written to include each of the components described below, so that the intent and importance of the principles are clear, and so that readers will understand how to apply these principles in their work.

---

## Requirement(s)

- [A principle MUST have a title](#a-principle-must-have-a-title)
- [A principle MUST have a description](#a-principle-must-have-a-description)
- [A principle MUST have a rationale](#a-principle-must-have-a-rationale)
- [A principle MUST state expected applications and implications](#a-principle-must-include-applications-and-implications)
- [A principle MUST have tags](#a-principle-must-have-tags)
- [A principle MUST show when it was last updated](#a-principle-must-show-when-it-was-last-updated)

---

### A principle MUST have a title

State the essence of the principle and make it easy to remember. Avoid ambiguous words such as: "support", "open", "consider", and remove unnecessary adjectives and adverbs (fluff). The title must be included as part of the page metadata.

```yaml
layout: principle
order: 1
title: Writing a principle
tags:
  - Example
```

The filename must be the kebab-cased title so that the principle's url matches its title. E.g. `writing-a-principle.md`.

### A principle MUST have a description

This description should be no longer than 2 paragraphs. It will be the first paragraph in the markdown file following the metadata. The reader should readily discern the answer to the question: "How does this affect me?".

Succinctly communicate the fundamental principle. It is vital that the description of the principle is unambiguous. Avoid referencing specific technology and platforms, principles will usually span multiple technologies.

### A principle MUST have a rationale

State why the principle is important and why it has been adopted. Highlight the technical and business benefits of adhering to the principle. Do not oversimplify or overestimate the merit of the principle.

The reader should readily discern the answer to: "Why do we do this?"

### A principle MUST include applications and implications

Highlight ways to apply the principle - approaches, activities and tasks - then elaborate on the value of those things. If there are any known negative implications then you must also clearly state these. This could be a bullet point list.

You do not need to write a complete set of things to do or enumerate on all of the implications. The reader should have a list of helpful examples of "How can we do this, and what happens if we don't?".

### A principle MUST have tags

We use tags as a means to link entities in the body of standards. From principles, through standards, to patterns and guidance. Tags should be based on the relevant domain to achieve this.

Do not create tags based on other attributes of your standard, like 'Draft' or 'Important'.  All tags must be sentence case i.e. Starts with a capital and the rest lower case. These need to be defined in the page metadata and will be automatically displayed at the top of the page.

```yaml
tags:
  - Source management
  - Security
```

### A principle MUST show when it was last updated

Show the date the principle was last updated. The metadata needs to include the date in YYYY-MM-DD format (see below).

```yaml
date: 2023-12-31
```
---

## Template

You can use the [principle template](https://github.com/UKHomeOffice/engineering-guidance-and-standards/blob/main/docs/principles/principle.template.md) when creating a new principle.

---
