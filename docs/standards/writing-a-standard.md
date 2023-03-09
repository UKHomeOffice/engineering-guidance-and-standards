---
layout: side-navigation
order: 1
title: Writing a Standard
id: SEGAS-00001
tags:
- general
---

To be effective, standards must explicitly state what is expected of
engineering teams. This standard prescribes how all future standards will be
written. To ensure standards are easy to understand, unambiguous, and 
maintainable, they need to follow a consistent format.

Standards are comprised of a number of parts which are listed as requirements.
You must detail each one along with a description and any supporting
information.

---

## Requirement(s)

- [A Standard MUST have an ID](#a-standard-must-have-an-id)
- [A Standard MUST have a Title](#a-standard-must-have-a-title)
- [A Standard MUST have a Description](#a-standard-must-have-a-description)
- [A Standard MUST have one or more Requirements](#a-standard-must-have-one-or-more-requirements)
- [A Standard MUST have Tags](#a-standard-must-have-tags)
- [A Standard MUST show when it was Last Updated](#a-standard-must-show-when-it-was-last-updated)

### A Standard MUST have an ID

An unambiguous and unique identifier is needed for each standard. This provides
clarity and can be helpful in communication. This must be included as part of
the page metadata.

```
layout: side-navigation
order: 1
title: Writing a Standard
id: SEGAS-00001
tags:
- general
```

### A Standard MUST have a Title

A short meaningful name is helpful to reference in conversation. Don't include
words like 'Standard', 'Principle', 'Pattern' or 'Guidance' where they are
redundant.  It must be provided in the page metadata which will form the
heading on the page.

```
title: Writing a Standard
```

### A Standard MUST have a Description

An overview for each standard must be included.  This will add high level
information about the collection of requirements that make up the standard.
This section will be used as a rationale for the standard as a whole.

It must be no longer than 2 paragraphs and make it very clear whether this
standard is relevant to the reader. It will be the first paragraph in the
markdown file following the metadata.

### A Standard MUST have one or more Requirements

The requirements are the explicit expectations of the standard. Engineers need
to know what to do to meet the standard and will clearly state what MUST apply.

There must be details on the context and justification of each requirement, as
this provides clarity and will add the spirit to the letter of the law.

When writing requirements, keep a simple list of each at the top of the page,
which will then link to the context, description and any supporting
information below.

### A Standard MUST have Tags

We use tags as a means to link entities in the body of standards. From
principles, through standards, to patterns and guidance. Tags should be based
on the relevant domain to achieve this, for example:

- source-management
- security

Do not create tags based on other attributes of your standard, like 'Draft' or
'Important'.  All tags must be kebab case i.e. lower case and hyphenated
between words. These need to be defined in the page metadata and will be
automatically displayed in the tag section.

```
tags:
- general
```

### A Standard MUST show when it was Last Updated

Products and services are built to a standard and as time goes by standards
evolve. Show the last date the standard was updated so that the evolution is
apparent.

---

## Tags

{{ tags | join(', ') }}

---

## Last Updated
19/01/2023

---