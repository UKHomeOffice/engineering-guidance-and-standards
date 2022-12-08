---
eleventyExcludeFromCollections: true
---

# How to contribute

This is the contribution guide for the Home Office Software Engineering Guidance and Standards, we commonly refer to as SEGAS. This guide will cover the primary way we
expect contributions to be made, which is adding new principles, standards, guidance and patterns.

To contact the team you can get us at [segas@digital.homeoffice.gov.uk](mailto:segas@digital.homeoffice.gov.uk)

## New to open source

Please find some helpful links to guide you in starting your journey with open source.

- To get an overview of our project please see our [README](README.md).
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)
- [See the benefits of Open Source](https://opensource.guide/)

<br>
<br>

# Getting Started

We will now look at the process we expect contributors to take when suggesting fixes or new content.  

## Issues

### Create an issue

- If you spot a problem then please head over to the issues page and raise a new issue.
[Create an Issue](https://github.com/HO-CTO/engineering-guidance-and-standards/issues/new)

### Solve an issue

- Have a look at our [existing issues](https://github.com/HO-CTO/engineering-guidance-and-standards/issues), and you might find something you would like to help us on!

## Make changes

To start the process of making changes to an issue you have raised, firstly you should [fork our repo](https://github.com/HO-CTO/engineering-guidance-and-standards/fork). This is so you can make changes without affecting the original project until you're ready.

### Create a branch

Please create a branch using the default GitHub branch naming strategy which is based off the issue you are working on.

### Make changes in the UI

If you are updating a small piece of text, a typo or broken link, then you can edit the file directly from GitHub.  Click the make a contribution button which will open the file in the GitHub user interface.  If you haven't already, when starting this, GitHub will automatically create a fork of our project into your account.

### Make changes locally

If the change is more substantial, then you may want to get the code and run it locally.  If you take a look at our [README](README.md), there are instruction on how to do this.

Make sure you pull your fork and switch to your new branch to do these changes.

### Commit your update

Don't forget to commit and push your changes to your forked repo ready for the contribution!

## Pull Requests

When you're finished with your changes you should create a pull request, commonly known as a PR.

### How to create a PR

Find some helpful information on how to create [GitHub Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

### Who can merge your PR

Any 2 of the maintainers on this repo are needed to accept your change.

## Your PR is merged!

Congratulations, your contribution is now merged into the project and you have improved and added value to an on-going open source project.  Thank you!

<br>
<br>

# Additional Info for Maintainers

## Testing

### E2E Tests

Currently we are using Cypress to do end to end tests. As this is a static site, these are lightweight and check that any changes continue to build front page links correctly.

Please add to these where you feel necessary.

### Integration Tests

There are no integration tests currently being used in this repo.  As the site is built using the Cross Government Eleventy plugin and mark down files, there is limit scope to do this.  

However, if you feel that some changes are becoming more complex, then you may want to consider adding these in.

## Branching

### Branching strategy

We are using a simple trunk based strategy.  There is only a single environment being used, as GitHub pages does not support more than 1 active site.

### Review

You can tag any of the maintainers of this repo to get pre-pull request reviews and start discussions.  We are a friendly team so please feel free to tag us!

<br>
<br>

# Organisation of Content

## Grouped by Area

We are using a separation of concern style structure which cross cuts through software engineering.  These areas we identify are:

- Observability - the process of monitoring applications, services and reliability.
- Software Design - how our applicatons, services and software is architected at the software level.
- Security - helping our applications, systems and services resistant to cyber attacks.
- Ways of Working - engineering teams patterns for approaching work
- Build, Release & Deploy - all things pipelines, building and platform engineering
- Source Control - storing and managing the source code

Your content may cross cut many of these areas, and that is ok!  Have a go at finding a home for it at first.  It can always be moved.  

We are going to be using meta data to eventually make the content more discoverable. We will be looking to implement a tagging system so that content can be identified by multiple areas.

## Look at the standard for the content

No matter if you are creating content for a new pattern, principle or standard, take a quick look at the standard for that content, to make sure we are all creating content correctly.

- [Standard for a Principle](https://didactic-winner-0a268fdc.pages.github.io/docs/standards/standard-principle/)
- Standard for a Standard (tbc)
- Standard for a Pattern (tbc)