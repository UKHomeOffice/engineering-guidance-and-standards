# How to contribute

This is the contribution guide for the Home Office Software Engineering Guidance and Standards, we commonly refer to as SEGAS. This guide will cover the primary way we
expect contributions to be made, which is adding new principles, standards, guidance and patterns.

To contact the team you can get us at [segas@digital.homeoffice.gov.uk](mailto:segas@digital.homeoffice.gov.uk)

Please read and follow our [Code of Conduct](https://github.com/UKHomeOffice/engineering-guidance-and-standards/blob/main/CODE_OF_CONDUCT.md).

## New to open source

Please find some helpful links to guide you in starting your journey with open source.

- To get an overview of our project please see our [README](README.md).
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)
- [See the benefits of Open Source](https://opensource.guide/)

# Getting Started

We will now look at the process we expect contributors to take when suggesting fixes, new content or a review of existing content.

## Issues

### Create an issue

- Before submitting an issue, please search the issue tracker to check the issue is not already there.
- Please [create an issue](https://github.com/UKHomeOffice/engineering-guidance-and-standards/issues/new/choose) if you wish to:
  - report a bug
  - propose a new pattern
  - propose a new principle
  - propose a new standard
  - review any existing content
  - report a security vulnerability

### Solve an issue

- Have a look at our [existing issues](https://github.com/UKHomeOffice/engineering-guidance-and-standards/issues), and you might find something you would like to help us on!

## Make changes

To start the process of making changes to an issue you have raised, firstly you should [fork our repo](https://github.com/UKHomeOffice/engineering-guidance-and-standards/fork). This is so you can make changes without affecting the original project until you're ready.

### Create a branch

Please create a branch using the default GitHub branch naming strategy which is based off the issue you are working on.

### Make changes in the UI

If you are updating a small piece of text, a typo or broken link, then you can edit the file directly from GitHub.  Click the make a contribution button which will open the file in the GitHub user interface.  If you haven't already, when starting this, GitHub will automatically create a fork of our project into your account.

### Make changes locally

If the change is more substantial, then you may want to get the code and run it locally.  If you take a look at our [README](README.md), there are instruction on how to do this.

Make sure you pull your fork and switch to your new branch to do these changes.

### Commit your update

Don't forget to commit and push your changes to your forked repo ready for the contribution!

Please make sure you have set up Git to sign your commits with a method that GitHub can verify. GitHub provides [instructions on setting up commit signing](https://docs.github.com/en/enterprise-cloud@latest/authentication/managing-commit-signature-verification/signing-commits). To help the site comply with [SEGAS-00009 - Signing code commits](https://engineering.homeoffice.gov.uk/standards/signing-code-commits/), the repository rules require a fully signed commit history when merging a pull request into the main branch. You will not be able to merge the resulting PR if any commits in the associated branch are unsigned, or if the signatures can't be verified by GitHub. If you are signing commits, and they are showing as unverified in GitHub, check you have added the relevant key to your account. When adding SSH keys in GitHub you can add the key as an authorisation key or a signing key. If you want to use the same key for both, you will need to add it twice, once for each purpose.

If you have already pushed a commit that is unsigned, you can rectify this in two ways:

1. Once commit signing is set up, rebase your work onto the main branch, then force push the changes. As with any force push, if you think others may have your branch checked out please make sure they are aware, e.g. with a comment on the pull request, so that they can update their local branches. This is usually not an issue for SEGAS contributions, as other collaborators work through the GitHub web interface rather than locally checked out versions.
2. Create a new branch from the main branch, re-apply your changes to that branch, submit a new PR, and close the old one. This is usually more work, but can be simpler to manage if there are multiple contributors, or a complex commit history.

## Pull Requests

When you're finished with your changes you should create a pull request, commonly known as a PR.

### How to create a PR

Find some helpful information on how to create [GitHub Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

When creating a PR, use the appropriate template checklists for code and content changes.

### Who can merge your PR

Any 2 of the maintainers on this repo are needed to review and accept your change and at least 1 reviewer must be a [code owner](https://github.com/UKHomeOffice/engineering-guidance-and-standards/blob/main/CODEOWNERS).

## Your PR is merged!

Congratulations, your contribution is now merged into the project and you have improved and added value to an on-going open source project.  Thank you!

# Additional Info for Maintainers

## Testing

### E2E Tests

Currently we are using Cypress to do end to end tests. As this is a static site, these are lightweight and check that any changes continue to build front page links correctly.

Please add to these where you feel necessary.

### Integration Tests

There are no integration tests currently being used in this repo.  As the site is built using the Cross Government Eleventy plugin and mark down files, there is limit scope to do this.  

However, if you feel that some changes are becoming more complex, then you may want to consider adding these in.

## Build, release, deploy

We are using [GitHub workflows](https://github.com/UKHomeOffice/engineering-guidance-and-standards/tree/main/.github/workflows) for build and deploy and automated end to end testing.

The following actions are performed for each PR before merging:

- Automated end to end testing using Cypress

PRs must only be approved after they pass the above checks.

Once merged the site is deployed.

## Branching

### Branching strategy

We are using a trunk based strategy.

### Review

You can tag any of the maintainers of this repo to get pre-pull request reviews and start discussions.  We are a friendly team so please feel free to tag us!

# Organisation of content

Patterns, principles and standards should be created in the correct subdirectory in `/docs`. We are also using a tagging and metadata approach to organise content across the site by topic and related knowledge domain.

All patterns, principles and standards content should be tagged in the frontmatter of the .md file to reference at least one of the below topic domains. Follow the guidance on tagging from the ['writing a standard' standard](https://engineering.homeoffice.gov.uk/standards/writing-a-standard/#a-standard-must-have-tags).

- Observability - the process of monitoring applications, services and reliability
- Software Design - how our applications, services and software are architected at the software level
- Security - making our applications, systems, services and ways of working resistant to cyber attacks
- Ways of Working - engineering teams patterns for approaching work
- Build, Release and Deploy - all things pipelines, building and platform engineering
- Source Control - storing and managing the source code

You can view a list of [all the topic domain tags currently in use across the site](https://engineering.homeoffice.gov.uk/tags/). Your content may cross cut many of these areas, and that is ok, tag everything that you think is relevant.

## Look at the standard for the content

When creating content please take a look at the standard for that content. This helps to make sure we are all creating content correctly.

- [Writing a principle](https://engineering.homeoffice.gov.uk/standards/writing-a-principle/)
- [Writing a standard](https://engineering.homeoffice.gov.uk/standards/writing-a-standard/)

### Templates

You can use the following templates when creating content:
- [Pattern template](https://github.com/UKHomeOffice/engineering-guidance-and-standards/blob/main/docs/patterns/pattern.template.md)
- [Principle template](https://github.com/UKHomeOffice/engineering-guidance-and-standards/blob/main/docs/principles/principle.template.md)
- [Standard template](https://github.com/UKHomeOffice/engineering-guidance-and-standards/blob/main/docs/standards/standard.template.md)
