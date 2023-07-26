---
layout: sub-navigation
order: 1
title: Immutable artefacts
date: git Last Modified
tags:
- Build, release and deploy
- Deployment
- Artefacts
---

{% import "macros/tags.njk" as pageTag %}

Last updated: {{ page.date | postDate }}
{{ pageTag.tags(tags)  }}

An artefact is the deployable unit of code, for instance a Docker image, serverless package, or virtual machine image. You should build artefacts once, that you never modify, and use them across all environments. In other words, if you need to make changes, a new artefact should be created. This helps with assurance and debugging incidents.

With proper versioning of your artefacts, you will be able to tie your environments back to a specific commit in your code-base, which is useful for investigation of incidents. Without immutable artefacts you may have hidden state and/or subtle differences between environments, that make it very hard to understand the behaviour your are observing and undermine your confidence that something will continue to work when moved to another environment. You will also find it hard to recover from a future disaster, as you will need to rebuild your artefact first, and your build pipeline may be broken.

---

## Solution

Immutable artefacts help us to know what we are running. They aid us in accurately reproducing environments and so help with:

- debugging incidents
- assurance over promotions
- roll-back of failed changes
- disaster recovery (consider rebuilding an environment from scratch)

You should:

- Produce an immutable artefact early in your build pipeline and store it with a unique version in a repository. This should be automated where possible. For example:
```
${semver}-${build-number}-${commit-hash-fragment}
```
- Promote this artefact through each assurance step and link the results to the artefact to provide an audit record.
- Keep configuration out of the artefact. This should be provided using environment variables or similar external methods. See also Store Infrastructure and Configuration as Code.

---
