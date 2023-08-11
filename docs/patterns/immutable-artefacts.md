---
layout: pattern
order: 1
title: Immutable artefacts
date: 2023-08-03
tags:
- Build, release and deploy
- Deployment
- Artefacts
---

An artefact is the deployable unit of code, for instance a Docker image, serverless package, or virtual machine image. 

When artefacts are changed, or rebuilt at different stages in a pipeline, this may introduce hidden state, or subtle differences between environments. This makes it hard to understand the behaviour you are observing and undermines confidence that something will continue to work when moved to another environment. This also makes it hard to recover from future incidents, as you will need to rebuild your artefact first, and your build pipeline may be broken.

Immutable artefacts are artefacts that are not modified after they are built. They enable idempotent and repeatable deployment. They help us to know what we are running, and they aid us in accurately and consistently reproducing environments. With proper versioning of your artefacts, you will be able to tie your environments back to a specific commit in your code-base. This helps with:

- Investigating incidents and debugging
- Assurance when promoting code
- Roll-back of failed changes
- Disaster recovery
  
---

## Solution

You should follow a '[build once, deploy many](https://www.mikemcgarr.com/blog/build-once-deploy-many.html)' approach. Specifically, you should:

- Build your application only once for each version, and package it into an artefact along with its dependencies
- Store artefacts in a suitable artefact repository with a unique version identifier. Versioning should follow a common pattern, and be automated where possible, for example using [Semantic Versioning](https://semver.org/) or simply the build number.
- Once built, artefacts should not be modified. If you need to make changes, a new artefact should be created with its own unique identifier
- Promote artefacts through each assurance step and environment, and link the results to the artefact to provide an audit record
- Keep configuration out of the artefact. This should be provided using environment variables or similar external methods

---
