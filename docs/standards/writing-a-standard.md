---
layout: sub-navigation
order: 1
title: Writing a standard
date: git Last Modified
id: SEGAS-00001
tags: []
---

{% import "macros/tags.njk" as pageTag %}

Last updated: {{ page.date | postDate }}
{{ pageTag.tags(tags)  }}

To be effective, standards must explicitly state what is expected of
engineering teams. This standard prescribes how all future standards will be
written. To ensure standards are easy to understand, unambiguous, and 
maintainable, they need to follow a consistent format.

Standards are comprised of a number of parts which are listed as requirements.
You must detail each one along with a description and any supporting
information.

---

## Requirement(s)

- [A standard MUST have an ID](#a-standard-must-have-an-id)
- [A standard MUST have a Title](#a-standard-must-have-a-title)
- [A standard MUST have a Description](#a-standard-must-have-a-description)
- [A standard MUST have one or more Requirements](#a-standard-must-have-one-or-more-requirements)
- [A standard MUST have Tags](#a-standard-must-have-tags)
- [A standard MUST show when it was Last Updated](#a-standard-must-show-when-it-was-last-updated)

### A standard MUST have an ID

An unambiguous and unique identifier is needed for each standard. This provides
clarity and can be helpful in communication. This must be included as part of
the page metadata.

```
layout: side-navigation
order: 1
title: Writing a standard
id: SEGAS-00001
tags:
- example
```

### A standard MUST have a title

A short meaningful name is helpful to reference in conversation. Don't include
words like 'Standard', 'Principle', 'Pattern' or 'Guidance' where they are
redundant.  It must be provided in the page metadata which will form the
heading on the page.

```
title: Writing a standard
```

### A standard MUST have a description

An overview for each standard must be included.  This will add high level
information about the collection of requirements that make up the standard.
This section will be used as a rationale for the standard as a whole.

It must be no longer than 2 paragraphs and make it very clear whether this
standard is relevant to the reader. It will be the first paragraph in the
markdown file following the metadata.

### A standard MUST have one or more requirements

The requirements are the explicit expectations of the standard. Engineers need
to know what to do to meet the standard and will clearly state what MUST apply.

There must be details on the context and justification of each requirement, as
this provides clarity and will add the spirit to the letter of the law.

When writing requirements, keep a simple list of each at the top of the page,
which will then link to the context, description and any supporting
information below.

### A standard MUST have tags

We use tags as a means to link entities in the body of standards. From
principles, through standards, to patterns and guidance. Tags should be based
on the relevant domain to achieve this.

Do not create tags based on other attributes of your standard, like 'Draft' or
'Important'.  All tags must be sentence case i.e. Starts with a capital and
the rest lower case. These need to be defined in the page metadata and will be
automatically displayed at the top of the page.

```
tags:
- Source management
- Security
```

### A standard MUST show when it was last updated

Products and services are built to a standard and as time goes by standards
evolve. This will automatically be generated from the git commit time and
shown at the top of the page.  The metadata needs to be set as the following.

```
date: git Last Modified
```
---

## Template

You can use the [standard template](https://github.com/HO-CTO/engineering-guidance-and-standards/blob/main/docs/standards/standard.template.md) when creating a new standard.
---
