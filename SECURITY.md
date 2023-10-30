# Security Policy

## Report a security vulnerability

You can report a vulnerability to the Home Office Engineering Guidance and Standards team using the following methods:
- Raise an issue on the [repository's security advisory page](https://github.com/UKHomeOffice/engineering-guidance-and-standards/security/advisories/new)
- Email [segas@digital.homeoffice.gov.uk](mailto:segas@digital.homeoffice.gov.uk)

Please enter as much information as possible in your report, this will help us better triage the vulnerability.

## What happens next

The below chart sets out the process once a security vulnerability is reported:

```mermaid
flowchart TD
    A["Security vulnerability reported"] -->
    B["Review of security vulnerability by Home Office Engineering Guidance and Standards team"] -->
    C{Triage}
    C -- "Assessed as a security vulnerability" --> D["We will work with you to resolve the security vulnerability"]
    C -- "Assessed as not a security vulnerability" --> E["Close security vulnerability report"]
```
