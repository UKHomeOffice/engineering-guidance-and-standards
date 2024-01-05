---
layout: standard
order: 1
title: Encrypting data at rest and in transit
date: 2023-09-08
id: SEGAS-00010
tags:
  - Secure development
  - Encryption
  - Security
related:
  sections:
    - title: Related links
      items:
        - text: Managing secrets
          href: /standards/managing-secrets/
        - text: Zero trust
          href: /principles/zero-trust/
---

All data in transit or at rest must be encrypted according to the Home Office Cryptography Policy and the Home Office Cryptography Standard. The nature and specification of that encryption is dependent on a number of factors, a risk assessment will identify what controls are required.

Data which is not encrypted appropriately introduces risks of unintentional exposure, theft and manipulation. Engage with Home Office Cyber Security (HOCS) architecture and assurance teams to ensure that you are implementing the right controls.

---

## Requirement(s)

- [Data at rest MUST be encrypted](#data-at-rest-must-be-encrypted)
- [Data in transit MUST be encrypted](#data-in-transit-must-be-encrypted)
- [Cryptographic keys MUST be protected](#cryptographic-keys-must-be-protected)

### Data at rest MUST be encrypted

All data at rest must be encrypted according to the Home Office Cryptography Policy and the Home Office Cryptography Standard.

Different types of data can have different requirements based on its nature. The differences and decisions can be complex, you should seek assistance from the HOCS security architecture team to define what's right for your service.

If your service is using data storage provided by a Home Office platform, a level of encryption might be provided to you transparently. Check in your platform's documentation to know what is provided.

### Data in transit MUST be encrypted

Data in transit must be encrypted, and the endpoints of that transit must be authenticated. This must be in accordance with the Home Office Cryptography Policy and the Home Office Cryptography Standard. Obsolete cryptographic protocols for transit should be retired as soon as possible.

Depending on what your service does you might need to use more than one technology or cryptographic protocol. For advice on this you should seek assistance from the HOCS security architecture team.

### Cryptographic keys MUST be protected

All encryption of data at rest and in transit requires the use of cryptographic keys. Cryptographic keys are application secrets and must be protected appropriately.

Follow the [Managing secrets standard](/standards/managing-secrets/) to ensure that your are using appropriate secret storage and processes.

---
