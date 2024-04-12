---
layout: pattern
order: 1
title: Threat modelling
date: 2023-09-13
tags:
  - Secure development
  - Security
  - Software design
related: # remove this section if you do not need related links on your page
  sections:
    - title: Related links
      items:
        - text: Proportionate security
          href: /principles/proportionate-security/
        - text: Design from evidence
          href: /principles/design-from-evidence/
---

Effectively understanding and communicating the potential attack vectors for our systems enables the Home Office to develop more secure applications and implement [proportionate security](/principles/proportionate-security/). Threat modelling is an [approach to identifying threats to a system](https://owasp.org/www-community/Threat_Modeling) so that appropriate security controls can be prioritised for implementation to mitigate risks.

There are a [number of approaches to threat modelling](https://shellsharks.com/threat-modeling) of varying scope and involvement. This pattern suggests a few ways that teams can start to incorporate threat modelling into their activities.

---

## Solution

Engineering teams should incorporate [collaborative threat modelling with a 'little and often' approach](https://martinfowler.com/articles/agile-threat-modelling.html#TakeACollaborativeApproach). Don't get bogged down with large upfront models, start by applying modelling to any changes to architecture or the introduction of new features.

- In design sessions, use architecture and design diagrams to [ask 4 key questions](https://www.threatmodelingmanifesto.org/)
  
  1. What are we working on?
  2. What can go wrong?
  3. What are we going to do about it?
  4. Did we do a good enough job?

- [STRIDE is a common approach to use when getting started with threat modelling, focussing on six main categories](https://learn.microsoft.com/en-us/previous-versions/commerce-server/ee823878(v=cs.20)). This is a light framework that helps teams to start thinking about how they identify threats

- OWASP has published a [threat modelling cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html) and other [resources for more structured threat modelling processes](https://owasp.org/www-community/Threat_Modeling). Teams can use these to inform their approaches as they mature

- Once threat modelling has been used to identify potential threats, ensure that mitigation actions are agreed, prioritised and added to backlogs, so that those actions can be progressed and their success tracked

---

## Considerations

- You do not need to be a security expert to do threat modelling, and the process does not need to be fully comprehensive to bring value, in fact attempting to build the 'perfect' threat model is often counterproductive

- [Security is everyone's responsibility](/principles/security-is-everyones-responsibility/). While it is a useful opportunity to engage security colleagues in threat modelling activities, it is not essential. Value is brought from the process when the whole team is involved

- As engineers, our instinct is to focus on the technology. It is ok to be technology driven when doing threat modelling, but don't forget to think about potential threats from people and process

- [Good architecture diagrams](https://www.ncsc.gov.uk/blog-post/drawing-good-architecture-diagrams) really help to make threat modelling a straightforward process. Keep diagrams simple ([C4 modelling](https://c4model.com/) is a good starting point)

---
