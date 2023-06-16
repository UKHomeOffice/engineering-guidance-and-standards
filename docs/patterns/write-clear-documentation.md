---
layout: sub-navigation
order: 1
title: Writing clear documentation
date: git Last Modified
id: SEGAS-00006
tags:
---

{% import "_includes/macros/tags.njk" as pageTag %}

Last updated: {{ page.date | postDate }}
{{ pageTag.tags(tags)  }}

Technical documentation explains how a product works to its users. It can take a number of forms, such as an onboarding guide or API documentation, and its intended readers can range anywhere from software developers to non-technical users. Typically, technical writers create this type of documentation.

The benefits of well-written documentation are often understated, but can transform user experience. If it is easy for users to understand how to use a product, it improves self-service, so they will not need to contact support for help as often. They can become experts at using a product on their own, reducing the amount of time and money spent on troubleshooting, and improving productivity.

---

## Requirement(s)

- [Start with User Needs](#start-with-user-needs)
- [Make your content inclusive](#make-your-content-inclusive)
- [Write clear content](#write-clear-content)

### Start with User Needs

"_If you don't know what the user needs are, you won't build (or write) the right thing_"

#### How to do this
+ Write down who your users are and consider how technical they are
+ Think about what they need to do with the thing you are documenting
+ Break your content into conceptual, task based, and reference information
+ Say in your content who it is for


#### Examples of user needs
|   |   |   |
|---|---|---|
|<br>**As a** Site Reliability Engineer in a platform team <br> <br> **I need** to understand the steps to set up Monitoring as Code (MaC)<br> <br>**So that** I do not need to contact the team <br> | <br>**As a** System Administrator <br> <br> **I need** to set up access levels for system users <br> <br>**So that** the right people have the correct rights <br> |**As a** Support Analyst<br><br>**I need** to understand what I need to do if something goes wrong<br><br>**So that** I can get the system back up and running quickly <br>

#### Think about what your users know, not what you know
Avoid making assumptions about your audience's knowledge. Different users need different information. Ask yourself these questions about the users when trying to meet their needs:

+ Will they know that acronym or process?
+ Do I need to explain the thing?
+ Do I need to provide a link to give more information?

>Avoid rewriting content as much as possible, especially when referring to third-party services, because if they change their processes, your content becomes obsolete.
>Where possible, link out to their documentation. For example: 'For more information on generating an SSH key, see the [GitHub documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).'

### Make your content inclusive

Accessibility is the law. You should  [familiarise yourself with the WCAG 2.1 principles](https://www.gov.uk/service-manual/helping-people-to-use-your-service/understanding-wcag). A significant majority of technical documentation is consumed as digital content through web browsers, and so you should write with a digital audience in mind.

#### Write with a digital audience in mind
Screens are more physically taxing to read from than paper, and on average users only read 20-30% of the words on a web page.

+ Front-load your sentences
+ Make your bullet points short
+ Structure your content, prioritising must have information, then the nice to have, then supporting information
+ Avoid 'Frequently Asked Questions' sections (FAQs)
+ Spell out acronyms in the first instance

#### Make links accessible
Screen reading technology reads hyperlinks in a particular way, hyperlinks should describe the action or information they point to.

|   |   |
|---|---|
| Good: | [read guidance on getting a free puppy](#make-links-accessible) |
| Bad: | [read more](#make-links-accessible) about getting a free puppy |
|Ugly: | [click](#make-links-accessible) to check if you get free puppy |

#### Make images and diagrams accessible
Do not rely on the visual element of pictures to convey meaning, that meaning should be described with text. If you do use images or diagrams, make them simple and clear, and include alt-text so that screen readers can describe them for your readers. [GDS provide guidance on how you can use images effectively and accessibly.](https://www.gov.uk/guidance/content-design/images)

#### Use inclusive language

|Before / don’t do this | After / do this|
|---|---|
| Whitelist | Allowlist |
| Blacklist | Denylist / blocklist |
| Master | Primary / main |
| Slave | Secondary |
| Gendered pronouns (for example “guys”) | People, colleagues, team |
| Man hours | Person hours / engineer hours |
| Sanity check | Quick check / confidence check |
| Dummy value | Placeholder value |



### Write clear content

Complexity is confusing, overwhelming and can waste time. [Even people with specialist knowledge prefer clear content](https://gds.blog.gov.uk/2014/02/17/guest-post-clarity-is-king-the-evidence-that-reveals-the-desperate-need-to-re-think-the-way-we-write/). Using plain English and structuring your documentation well will result in clearer content. 

#### How to write in plain English
+ Use active voice
+ Use the present tense
+ Look for a simpler word
+ Try to say it in the fewest words possible
+ Break up long sentences and paragraphs
+ Remove any negative contractions
+ Use the [Home Office Content Style Guide](https://design.homeoffice.gov.uk/content-style-guide) to use consistent language


> #### Active and Passive Voice
>Use the Active Voice to help write concise, clear content. The passive voice is sometimes useful. However, more often than not, you can find an active form that has the same meaning and is more direct and concise.
>
> + The subject of the sentence performs the action in a sentence using the active voice, for example, ‘The study shows a trend.’
> +The subject receives the action in a sentence in the passive voice, for example, ‘A trend is shown by the study.’
>
> You can also think about this as Active and Passive Verbs. Passive verbs are hard to understand as they can conceal who does an action.
>
> + Good example - active - "**you can search** for people"
> + Bad example - passive - "people **can be searched for**"
(this adapted from [NHS Digital guidance](https://digital.nhs.uk/about-nhs-digital/corporate-information-and-documents/our-style-guidelines/content-style-guide/a-to-z-of-writing#active,-passive))

#### How to structure your documentation
+ Check that your title describes the content beneath it
+ Use clear headings and subheadings
+ Use bulleted and numbered lists

#### Iterate and improve your content alongside your product or service
+ Write 'badly' and then improve
+ Have content critique sessions with colleagues
+ Pair write your documentation
+ Test with your users
+ Gather feedback on published content so that you can improve it

### Useful reference material
[GOV.UK style guide](https://www.gov.uk/guidance/style-guide)
[GOV.UK guidance on how to write well for your audience, including specialists.](https://www.gov.uk/guidance/content-design/writing-for-gov-uk)
[Accessibility personas](https://alphagov.github.io/accessibility-personas/)
[Home Office DDaT UCD - Resources and standards for Technical Writing](https://collaboration.homeoffice.gov.uk/display/STP/Resources+and+standards+for+Technical+Writing)

---
