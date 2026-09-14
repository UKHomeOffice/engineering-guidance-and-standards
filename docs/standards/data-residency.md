---
layout: standard
order: 1
title: Data residency
date: 2026-07-01
id: SEGAS-00021
tags:
- Cloud hosting
- Data management
- Security
---

Home Office systems must be hosted in approved geographic locations that are appropriate for the classification, sensitivity and legal jurisdiction of the data being processed.

This standard defines the preferred and restricted hosting geographies for Home Office Digital services. It applies to production services, non-production services that process live data, backups, disaster recovery locations, analytics platforms, observability platforms and managed services where Home Office data is stored, processed or transmitted.

---

## Requirement(s)

- [You MUST use UK regions as the default hosting location](#you-must-use-uk-regions-as-the-default-hosting-location)
- [You MUST use approved Western European regions where UK hosting is not available or not required](#you-must-use-approved-western-european-regions-where-uk-hosting-is-not-available-or-not-required)
- [You MUST NOT use North American regions where a UK or Western European equivalent is available](#you-must-not-use-north-american-regions-where-a-uk-or-western-european-equivalent-is-available)
- [You MUST NOT use restricted geographies without explicit approval](#you-must-not-use-restricted-geographies-without-explicit-approval)
- [You MUST assess data classification, sensitivity and legal jurisdiction](#you-must-assess-data-classification-sensitivity-and-legal-jurisdiction)
- [You MUST document control plane, telemetry and supplier access locations](#you-must-document-control-plane-telemetry-and-supplier-access-locations)
- [You MUST document exceptions and review them regularly](#you-must-document-exceptions-and-review-them-regularly)

### You MUST use UK regions as the default hosting location

Production services must use UK cloud regions by default.

UK regions are the preferred location for Home Office systems because they reduce legal jurisdiction, data residency and operational access risk. They also provide the clearest alignment with Home Office security expectations for systems processing government information.

Examples of UK cloud regions include:

- AWS London (`eu-west-2`)
- Azure UK South
- Azure UK West

UK regions are acceptable for all Home Office workloads supported by public cloud, subject to the normal security assessment, accreditation and architectural governance process.

### You MUST use approved Western European regions where UK hosting is not available or not required

Approved Western European cloud regions may be used where there is no legal, contractual, operational or security requirement for UK-only hosting.

Approved Western European locations include:

- Ireland
- France
- Germany
- Netherlands
- Belgium
- Luxembourg

These locations are considered low risk and are acceptable for most Home Office workloads. Teams must still assess the classification and sensitivity of the data being processed before selecting a region.

A UK-only hosting requirement may be needed where:

- legislation or contractual terms require UK processing
- the Information Asset Owner requires UK-only residency
- the data has a higher operational sensitivity
- national security considerations apply
- the service risk assessment identifies unacceptable risk outside the UK

AWS Ireland (`eu-west-1`) has previously been approved for use by some Migration and Borders immigration systems. This must not be treated as automatic approval for all systems. Teams must still complete the required security, data and architecture assessment for their own service.

### You MUST NOT use North American regions where a UK or Western European equivalent is available

North American cloud regions are restricted.

Production services, production data and non-production environments containing live data must not be hosted in North American regions where an equivalent service or capability is available in an approved UK or Western European region.

Approval will normally not be granted where the reason for using a North American region is only:

- earlier access to a new cloud service or feature
- additional service functionality
- lower cost
- developer preference
- existing team familiarity
- shorter cloud provider release cycles
- operational convenience

Use of North American regions may only be considered where there is a valid business reason and there is no technically or operationally equivalent option available in an approved UK or Western European region.

Any request to use a North American region must be supported by:

- a documented business case
- a documented assessment of UK and Western European alternatives
- legal review where required
- cyber security review
- approval from the Product Owner
- approval from the Information Asset Owner or Data Owner
- approval from Portfolio Cyber Security
- approval from the Portfolio Design Authority
- approval from the Home Office Digital Design Authority where required

The design must explain why the workload cannot reasonably be hosted in the UK or Western Europe.

### You MUST NOT use restricted geographies without explicit approval

The following geographies are restricted and must not be used for Home Office systems unless explicit approval has been granted on a case-by-case basis:

- Middle East
- Asia Pacific
- Oceania
- South America
- Africa
- any other geography not listed as UK or approved Western Europe

These geographies present higher legal, operational, geopolitical or data protection risk. They must not be selected for production hosting, disaster recovery, backups, analytics, observability or managed services unless there is a documented business requirement and formal approval.

Approval must include:

- Product Owner
- Information Asset Owner or Data Owner
- Portfolio Cyber Security
- Portfolio Design Authority
- Home Office Digital Design Authority where required

The design must demonstrate why the service cannot reasonably use a UK or approved Western European region.

Some jurisdictions may present unacceptable legal, security or geopolitical risk. These must not be used unless an exceptional executive risk acceptance has been agreed with the appropriate Home Office authority.

### You MUST assess data classification, sensitivity and legal jurisdiction

Teams must assess the classification, sensitivity and legal jurisdiction of the data before selecting a hosting region.

The assessment must consider:

- security classification
- whether the data is OFFICIAL or OFFICIAL-SENSITIVE
- whether the data includes personal data
- whether the data includes special category data
- whether the data includes law enforcement data
- whether the data has operational sensitivity
- whether the data is subject to contractual or legislative restrictions
- whether the data owner requires UK-only residency
- whether supplier or cloud provider access may occur from another jurisdiction

OFFICIAL and OFFICIAL-SENSITIVE data does not automatically require UK-only hosting. The selected region must be justified by the nature of the data, the service risk assessment, legal requirements and the Information Asset Owner's risk position.

### You MUST document control plane, telemetry and supplier access locations

Teams must document where cloud control plane data, telemetry, logs, traces, metrics, support data and supplier administrative access may be processed.

Cloud providers and managed service providers may process some operational metadata outside the selected hosting region. This may be acceptable where it is necessary for the service to operate and has been documented within the security assessment.

The design must document:

- hosting region
- disaster recovery region
- backup region
- data storage location
- data processing location
- control plane location where known
- telemetry and observability destinations
- supplier support locations
- administrative access locations
- cross-border data transfers
- encryption controls
- retention controls

Teams must ensure that logs, traces, metrics and support bundles do not contain sensitive data unless the destination has been assessed and approved for that data.

### You MUST document exceptions and review them regularly

Any exception to this standard must be documented and approved before the service is deployed.

Exceptions must include:

- the region or geography being requested
- the data classification and sensitivity
- the reason UK regions cannot be used
- the reason approved Western European regions cannot be used
- the business justification
- the legal and cyber security assessment
- the risk owner
- the agreed compensating controls
- the exit plan
- the review date

Exceptions must be reviewed regularly. Where an equivalent service later becomes available in a UK or approved Western European region, teams must reassess the exception and plan migration unless there is a continued approved reason not to do so.

---