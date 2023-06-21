---
layout: sub-navigation
order: 1
title: Selecting a Deployment Strategy
date: git Last Modified
tags:
- BRD

---

{% import "_includes/macros/tags.njk" as pageTag %}

Last updated: {{ page.date | postDate }}
{{ pageTag.tags(tags)  }}

A deployment strategy defines the process that takes place when deploying from one version to another. You should select a consistent deployment strategy suitable for team and business needs. This reduces risk and increases repeatability between deployments.

---

## Solution

### Why this is important
Strategies help with your teams and business needs. With a good deployment strategy, the whole team is on the same page, and can work together to get code deployed quicker and more often.

Having a good deployment strategy decreases risk of prolonged downtime which will impact users, having a knock-on impact on the business or the public.

Having a repeatable deployment method encourages consistency between release versions and reduces the potential for human error.

## Considerations


+ Consult with stakeholders to understand the business requirements.
  + Is the system business critical and needs to be available 100% of the time?
  + Are there less critical time periods e.g. out of hours where downtime or reduced performance/availability would be acceptable?
  + Financial restrictions, e.g. additional cost of a deployment
+ Understand any technical limitations.
  + Needs to align to database migration strategy/ability.
  + Integration requirements with other systems - can they be deployed completely independently? Is a solid API versioning strategy in place?
  + Whether the host infrastructure (e.g. Lambda, Kubernetes, EC2) can support the desired deployment strategy.
  + Any code-specific requirements e.g. feature flags.
+ Different deployment strategies may be suitable for different product maturity (e.g. beta/live), however it's important to think about the requirements for live early on, as this can impact system design.
+ Understand team ways of working
  + Is feature switching required?
  + Is A/B testing required?

## Examples of deployment strategies

- [Downtime](#downtime)
The system is shut down, upgraded, then started up. **This is not suitable to be used for production systems.**

- [Rolling deployments](#rolling-deployments)
  Gradually replace an old version of your service with a new version
  
- [Blue/Green (or Red/Black or Light/Dark)](#blue-green)
  Replace the current working version, with the new version using the load balancer
  
- [Canary Deployments](#canary-deployments)
  The practice of making staged releases to a small portion of users as a test group. The "canary" group act as an early warning system.


### Downtime
#### When is it used:
+ Significant downtime is acceptable
+ Early in development cycle
+ Legacy (typically single-instance/monolithic) systems which require it
+ Less considerations during prototype/alpha.
+ Lowest infrastructure cost
+ Easier to make significant changes to database and infrastructure.

#### Considerations:
+ If there is a problem during upgrade, the system will be unavailable until successfully rolled back
+ Ability to make small changes is diminished
+ Need for negotiated change windows on production systems
+ May need to deploy at unsociable hours


### Rolling Deployments

#### When it is used:
+ When your application has multiple instances (at least 3 recommended)
+ When your application can support running different versions side-by-side
+ When you can make database changes backwards-compatible
+ When you want to make changes available quicker than blue-green deployments
#### Considerations
+ No environment isolation between old and new versions which can complicate deployments and increase risk of incompatibility between components
+ Session persistence can be a problem if users are directed to nodes that are running different versions
+ Data migrations need to be carefully planned to ensure backwards/forwards compatibility with the old and new versions.
+ If swapping instances, load needs to be considered

### Blue Green 
(or Red/Black or Light/Dark)

#### When it is used:
+ Quick to switch your application between versions
+ You want every request to be handled by the same version at any one point in time
+ Data migrations won't affect the running application (if separate DBs are used on blue & green environments)
#### Considerations
+ You have to run 2 versions of the service at one time, which increases cost
+ Can require additional setup/maintenance with some types of host infrastructure e.g. Kubernetes

### Canary Deployments

#### When it is used:
+ When you want to test changes and get early feedback, potentially rolling back
+ When users are easily grouped or a subset of target deployment servers can be identified
#### Considerations
+ More difficult to use with vanilla Kubernetes.
+ Can be problematic when issues are found in the test group, especially with data.
+ There may potentially be some downtime for the test group depending on the infrastructure setup

---
