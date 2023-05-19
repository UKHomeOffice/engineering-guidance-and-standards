---
layout: sub-navigation
order: 1
title: Open source licensing
date: git Last Modified
id: SEGAS-00004
tags:
- Source management
---

Last updated: {{ page.date | postDate }}
Tags: {{ tags | join(', ') }}

Open source code repositories maintained by the Home Office must be given an appropriate licence, this explains to users the terms under which that code can be used or modified.

This standard is broadly similar to the [GDS Licensing Guidelines](https://gds-way.cloudapps.digital/manuals/licensing.html#licensing) - it is in part based on that content and follows the same convention on usage of the words 'license' and 'licence'.

---

## Requirement(s)

- [Open source repositories MUST contain a licence file](#open-source-repositories-must-contain-a-licence-file)
- [Open source repositories MUST have a licence that adheres to the Open Source Definition](#open-source-repositories-must-have-a-licence-that-adheres-to-the-open-source-definition)
- [Open source repositories MUST state Crown Copyright](#open-source-repositories-must-state-crown-copyright)

### Open source repositories MUST contain a licence file

Ensure that there is a LICENCE or LICENCE.md file in the root of your repository. This should be included in the repository as early as possible. The LICENCE file should contain minimal or no other information beyond the licence itself and the copyright notice. See the [LICENCE file for this site](https://github.com/HO-CTO/engineering-guidance-and-standards/blob/main/LICENCE) for an example.

### Open source repositories MUST have a licence that adheres to the Open Source Definition

At the Home Office, you should in most cases use [the MIT License](https://opensource.org/license/mit/) for open source code.

If your code or project is incompatible with the MIT License, you can select a different licence, provided it adheres to the Open Source Definition. The Open Source Initiative (OSI) maintains a [list of approved licences that meet the definition](https://opensource.org/licenses/).

#### Open documentation

Where repositories produce websites serving documentation, you should make it clear the documentation is licensed under the [Open Government Licence (OGL)](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/). This is in addition to the LICENCE file, and should be visible on the website, for example contained in the footer.

### Open source repositories MUST state Crown Copyright

The Home Office's copyright is Crown Copyright. The copyright notice contained in your LICENCE file should read "Copyright (c) 2022 Crown Copyright (Home Office)".

The year should be the year the code was first published. If the code is continually and substantially updated across several years, you can put the years between the first and its most recent update; for example, "2019-2021".

---
