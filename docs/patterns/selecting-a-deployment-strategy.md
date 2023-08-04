---
layout: pattern
order: 1
title: Selecting a deployment strategy
date: 2023-07-25
tags:
- Build, release and deploy
- Deployment
- CI/CD

---

A deployment strategy defines the process that takes place when deploying from one version to another. You should select a consistent deployment strategy suitable for team and business needs. This reduces risk and increases repeatability between deployments.

---

## Solution

Strategies help with your teams and business needs. With a good deployment strategy, the whole team is on the same page, and can work together to get code deployed quicker and more often.

Having a good deployment strategy decreases risk of prolonged downtime which will impact users, having a knock-on impact on the business or the public.

Having a repeatable deployment method encourages consistency between release versions and reduces the potential for human error.

Different deployment strategies may be suitable for different product maturity (e.g. beta/live), however it's important to think about the requirements for live early on, as this can impact system design.

---

## Considerations

### Consult with stakeholders to understand the business requirements.

- How business critical is the system and how available does it need to be? For example, some services need to be available 100% of the time, some 99.95%, some 99.0%
- Are there less critical time periods e.g. out of hours, where downtime or reduced performance and availability would be acceptable?
- Are there financial restrictions, e.g. taking into account the additional cost of a deployment?

### Understand any technical limitations.

- Do you need to align to a database migration strategy or capability?
- Are there integration requirements with other systems - can they be deployed completely independently? Is a solid API versioning strategy in place?
- Can the host infrastructure (e.g. Lambda, Kubernetes, EC2) support the desired deployment strategy?
- Are there any code-specific requirements, e.g. feature flags?

### Understand team ways of working

- Is feature switching required?
- Is A/B testing required?

---

## Examples of deployment strategies

- [Canary Deployments](#canary-deployments) - The practice of making staged releases to a small portion of users as a test group. The "canary" group act as an early warning system

- [Blue/Green (or Red/Black or Light/Dark)](#blue-green) - Switch between instances running the current working version, to instances running the new version, using a load balancer

- [Rolling deployments](#rolling-deployments) - Gradually replace the instances running an old version of your service with the new version

- [Downtime](#downtime) - The system is shut down, upgraded, then started up again. **This is not suitable to be used for production systems**

### Canary Deployments

#### When it is used:

- When you want to test changes and get early feedback, potentially rolling back
- When users are easily grouped or a subset of target deployment servers can be identified

#### Considerations

- More difficult to use with vanilla Kubernetes
- Can be problematic when issues are found in the test group, especially with data
- There may potentially be some downtime for the test group depending on the infrastructure setup

### Blue Green 
(or Red/Black or Light/Dark)

#### When it is used:

- Quick to switch your application between versions
- You want every request to be handled by the same version at any one point in time
- Data migrations won't affect the running application (if separate DBs are used on blue & green environments)
  
#### Considerations

- You have to run 2 versions of the service at one time, which increases cost
- Can require additional setup/maintenance with some types of host infrastructure e.g. Kubernetes

### Rolling Deployments

#### When it is used:

- When your application has multiple instances (at least 3 recommended)
- When your application can support running different versions side-by-side
- When you can make database changes backwards-compatible
- When you want to make changes available quicker than blue-green deployments
  
#### Considerations

- No environment isolation between old and new versions which can complicate deployments and increase risk of incompatibility between components
- Session persistence can be a problem if users are directed to nodes that are running different versions
- Data migrations need to be carefully planned to ensure backwards/forwards compatibility with the old and new versions.
- If swapping instances, load needs to be considered

### Downtime

#### When is it used:

- Significant downtime is acceptable
- Early in development cycle, for example during prototype or alpha phases, where there are less performance considerations
- Legacy (typically single-instance/monolithic) systems which require it
- Lower infrastructure costs
- Easier to make significant changes to database and infrastructure

#### Considerations:

- If there is a problem during upgrade, the system will be unavailable until successfully rolled back
- Ability to make small changes is diminished
- Need for negotiated change windows on production systems
- May need to deploy at unsociable hours

---
