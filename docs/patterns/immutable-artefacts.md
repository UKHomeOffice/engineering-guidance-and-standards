---
layout: sub-navigation
order: 1
title: Immutable Artefacts
date: git Last Modified
tags:
- BRD
---

{% import "_includes/macros/tags.njk" as pageTag %}

Last updated: {{ page.date | postDate }}
{{ pageTag.tags(tags)  }}

An artefact is the deployable unit of code, for instance a Docker image, serverless package, or virtual machine image. Build artefacts once that you never modify, and use them across all environments. In other words, if you need to make changes, a new artefact should be created. This helps with assurance and debugging incidents.

---

## Solution

Immutable artefacts help us to know what we are running. They aid us in accurately reproducing environments and so help with:

- debugging incidents
- assurance over promotions
- roll-back of failed changes
- disaster recovery (consider rebuilding an environment from scratch)
With proper versioning of your artefacts, you will be able to tie your environments back to a specific commit in your code-base, which is useful for investigation of incidents.

Without immutable artefacts you may have hidden state and/or subtle differences between environments, that make it very hard to understand the behaviour your are observing and undermine your confidence that something will continue to work when moved to another environment. You will also find it hard to recover from a future disaster, as you will need to rebuild your artefact first, and your build pipeline may be broken.

## Considerations

You should:

- Produce an immutable artefact early in your build pipeline and store it with a unique version in a repository. This should be automated where possible.
  - For example: ${semver}-${build-number}-${commit-hash-fragment}
  - If you are using GitHub to host your repositories, these GitHub actions are available to help provide versioning SemVer Calculate Action and SemVer Tag Action.
- Promote this artefact through each assurance step and link the results to the artefact to provide an audit record.
- Keep configuration out of the artefact. This should be provided using environment variables or similar external methods. See also Store Infrastructure and Configuration as Code.
- Sign

## Working Notes

- What is "the" artefact? How do projects decide this? E.g. Jar, Docker image, etc.
  - Doesn't matter as long as it is self-contained and immutable?
- tie back to exact state of code

- reproducible environments
  - idempotent

- 12 factor apps? https://12factor.net/

  - DM: Did I write this? I wonder if is a reference to configuration, which in a 12-factor app should be done via env-vars.

- Technical restrictions, e.g. policies on Docker registries to deny overwriting
  - Seems useful, but sometimes it can also be good to have tags like 'latest' that can be re-pointed to a new image.
- Include examples
  - Docker
  - Severless packages
  - Helm?
  - VM images (e.g. EC2 AMIs)
- versioning
  - include git commit hashes
  - sem-ver? https://semver.org/
    - https://github.com/UKHomeOffice/semver-calculate-action
    - https://github.com/UKHomeOffice/semver-tag-action
- Provide some mitigation from attacks via upsteam dependenies?
  - DM: Can someone expand on this? Is it related to SCA / dependency scanning?
- When do we build it
  - First?
  - After linting, static analysis, unit testing as appropriate for the technologies used?
    - DM: And unit tests?
    - JH: That is more tech dependent e.g. maven runs unit tests during build
    - DM: I'd say after a push to master. BUT that probably assumes GitHub flow rather than Trunk-based. (Presumably with trunk-based you might rely on Git tags?)
- Debug images?
  - Images with extra stuff in them.
  - Do we need these?
    - DM: Can be useful if you need to take a shell and dig around. We should avoid that in prod. Could be useful in Dev environments though.
    - DM: Might be worth calling out that non-debug images should contain as little in them as possible. (Specifically recommend alpine? JH: multi stage builds?)
  - If we do, build at same time as prod image


---
