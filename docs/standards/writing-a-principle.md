---
layout: side-navigation
order: 1
title: Writing a Principle
id: SEGAS-00002
tags:
- standard
- principle
- general
---

Home Office engineering principles will be written to include each of the 
components described below, so that their intent and importance are clear.
Readers will easily understand how to apply these principles in their work.

---

## Requirement(s)

- [A Principle MUST have a Title](#a-principle-must-have-a-title)
- [A Principle MUST have a Description](#a-principle-must-have-a-description)
- [A Principle MUST have a Rationale](#a-principle-must-have-a-rationale)
- [A Principle MUST state expected Applications and Implications](#a-principle-must-include-applications-and-implications)
- [A Principle MUST have tags](#a-principle-must-have-tags)
- [A Principle MUST show when it was Last Updated](#a-principle-must-show-when-it-was-last-updated)

---

### A Principle MUST have a Title

State the essence of the principle and make it easy to remember. Avoid ambiguous 
words such as: "support", "open", "consider", and remove unnecessary adjectives 
and adverbs (fluff). The title must be included as part of the page metadata.

```
layout: side-navigation
order: 1
title: Example Software Engineering Principle
tags:
- general
```

### A Principle MUST have a Description

This description should be no longer than 2 paragraphs. It will be the first
paragraph in the markdown file following the metadata. The reader should 
readily discern the answer to the question: "How does this affect me?".

Succinctly communicate the fundamental principle. It is vital that the 
description of the principle is unambiguous. Avoid referencing specific 
technology and platforms, principles will usually span multiple technologies.

### A Principle MUST have a Rationale

State why the principle is important and why it has been adopted. Highlight the
technical and business benefits of adhering to the principle. Do not 
oversimplify or overestimate the merit of the principle.

The reader should readily discern the answer to: "Why do we do this?"

### A Principle MUST include Applications and Implications

Highlight ways to apply the principle - approaches, activities and tasks - 
then elaborate on the value of those things. If there are any known negative 
implications then you must also clearly state these. This could be a bullet 
point list.

You do not need to write a complete set of things to do or enumerate on all of 
the implications. The reader should have a list of helpful examples of "How 
can we do this, and what happens if we don't?".

### A Principle MUST have Tags

We use tags as a means to link entities in the body of standards. From
principles, through standards, to patterns and guidance. Tags should be based
on the relevant domain to achieve this, for example:

- source-management
- security

Do not create tags based on other attributes of your principle, like 'Draft' or
'Important'.  All tags must be kebab case i.e. lower case and hyphenated
between words. These need to be defined in the page metadata and will be
automatically displayed in the tag section.

```
tags:
- principle
- example-domain
```

### A Principle MUST show when it was Last Updated

Show the date the principle was last updated.

---

## Tags

{{ tags | join(', ') }}

---

## Last Updated

14/03/2023

---
