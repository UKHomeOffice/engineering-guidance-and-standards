---
layout: pattern
order: 1
title: Write effective documentation
date: 2024-11-06
tags:
- Ways of working
- Documentation
- Accessibility
---

Technical documentation explains how a product works, and its intended readers can range anywhere from software developers to non-technical users. It can take a number of forms, such as an onboarding guide or API documentation. Typically, technical writers and engineers create this type of documentation.

Well-written documentation can transform the experience for engineers and users. If it is straightforward for readers to understand how to use a product, it improves self-service, so they will not need to contact support for help as often. They can become experts at using a product on their own, reducing the amount of time and money spent on troubleshooting, and improving productivity.

Following this guidance, and the [GOV.UK guidance on how to write well for your audience, including specialists.](https://www.gov.uk/guidance/content-design/writing-for-gov-uk), will help you to write effective and accessible technical documentation for your audience.

---

## Solution

- [Start with User Needs](#start-with-user-needs)
- [Make your content accessible and inclusive](#make-your-content-accessible-and-inclusive)
- [Follow content writing best practices](#follow-content-writing-best-practices)

### Start with User Needs

"_If you don't know what the user needs are, you won't build (or write) the right thing_" - [Government Design Principles](https://www.gov.uk/guidance/government-design-principles#start-with-user-needs) (parentheses ours)

The key to successful documentation is that it meets the needs of the audience in a way that they understand. Taking a user-centred approach to how you design and write your documentation is a great way to make it effective. Engineers are often users too, identify all of the potential readers of your documentation when assessing user needs.

#### How to do this

- Write down who your users are and consider how technical they are
- Think about what they need to do with the thing you are documenting
- Break your content into conceptual, task based, and reference information
- Use [accessibility personas](https://alphagov.github.io/accessibility-personas/) to help you consider users with access needs
- Get feedback from your users so that you can verify what you write meets the identified needs

#### Examples of user needs

- Example 1 
  - **As a** Site Reliability Engineer in a product team
  - **I need** to understand the steps to set up Monitoring as Code (MaC)
  - **So that** I do not need to contact the platform team
    
- Example 2
  - **As a** System Administrator
  - **I need** to set up access levels for system users
  - **So that** the right people have the correct rights
    
- Example 3
  - **As a** Support Analyst
  - **I need** to understand what I need to do if something goes wrong
  - **So that** I can get the system back up and running quickly

#### Think about what your users know, not what you know

Avoid making assumptions about your audience's knowledge. Different users need different information. Ask yourself these questions about the users when trying to meet their needs:

- Will they know that acronym or process?
- Do I need to explain the thing?
- Do I need to provide a link to give more information?

### Make your content accessible and inclusive

Accessibility is the law. You should  [familiarise yourself with the WCAG principles](https://www.gov.uk/service-manual/helping-people-to-use-your-service/understanding-wcag) and the [Home Office Accessibility Standard](https://design.homeoffice.gov.uk/accessibility/standard).

#### Write with a digital audience in mind

A significant majority of technical documentation is consumed as digital content through web browsers. Screens are more physically taxing to read than paper. On average, users only read 20-30% of the words on a web page.

- Front-load your sentences
- Make your bullet points short
- Structure your content to prioritise key information, then the nice to have, then supporting information
- Avoid 'Frequently Asked Questions' sections (FAQs)
- Spell out acronyms in the first instance

#### Make links accessible

See the Home Office accessibility team's guidance to [learn how to write visible and descriptive links that behave in an unsurprising way](https://design.homeoffice.gov.uk/accessibility/links).

Use links to supporting documentation to avoid duplicating content, especially when referring to third-party services. It is easier to maintain if they change their processes. For example: 'See the GitHub documentation for more information on [generating an SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).'

#### Make images and diagrams accessible

Do not rely on the visual element of pictures to convey meaning, that meaning should be described with text. If you do use images or diagrams, make them simple and clear, and include alt-text so that screen readers can describe them for your readers.

The Home Office Accessibility team have published guidance on [creating accessible images](https://design.homeoffice.gov.uk/accessibility/images).

#### Use inclusive language

The Home Office accessibility team have published guidance on [how to write in a way that is compassionate and respectful](https://design.homeoffice.gov.uk/accessibility/inclusive-language). You should follow this guidance, and also remember that there are antiquated instances of technical terminology that should be deprecated, below are some examples (but the list is not exhaustive).

| Example | Use instead |
|:---|:---|
| Whitelist | Allowlist |
| Blacklist | Denylist or blocklist |
| Master | Primary or main |
| Slave | Secondary |
| Man hours | Person hours or engineer hours |
| Sanity check | Quick check or confidence check |
| Dummy value | Placeholder value |

### Follow content writing best practices

Complexity is confusing, overwhelming and can waste time. [People with specialist knowledge prefer clear content](https://gds.blog.gov.uk/2014/02/17/guest-post-clarity-is-king-the-evidence-that-reveals-the-desperate-need-to-re-think-the-way-we-write/). Using plain English and carefully structuring your documentation will reduce the cogitive load required to understand your documentation.

Not all complexity can be avoided. If you're producing documentation then there is likely some necessesary complexity arising from the subject of the document. The goal is to ensure that the writing style and structure of the document aid the reader in understanding the subject.

Follow the [GOV.UK guidance on how to write well for your audience, including specialists](https://www.gov.uk/guidance/content-design/writing-for-gov-uk), and pay particular attention to the below.

#### Write in plain English

- Use the active voice and the present tense ([NHS Digital have useful guidance on the active voice](https://digital.nhs.uk/about-nhs-digital/corporate-information-and-documents/our-style-guidelines/content-style-guide/a-to-z-of-writing#active,-passive))
- Look for a simpler word and try to convey meaning with the fewest words possible
- Break up long sentences and paragraphs
- Remove any negative contractions, like 'isn't' or 'don't'
- The [Home Office content style guide](https://design.homeoffice.gov.uk/content-style-guide) extends the [GOV.UK style guide](https://www.gov.uk/guidance/style-guide) for some specific Home Office cases. Use these guides to ensure you use consistent language

#### Structure your documentation

- Check that your title describes the content beneath it
- Use headings and subheadings
- Use bulleted and numbered lists to group and order concepts, breaking up the content where appropriate
- Say in your content who it is for

#### Iterate and improve your content alongside your product or service

- Write 'badly' and then improve
- Have content critique sessions with colleagues
- Pair write your documentation
- Test with your users
- Gather feedback on published content so that you can improve it

---
