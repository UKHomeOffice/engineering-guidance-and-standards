# Engineering Guidance and Standards
 
This is the home of engineering guidance and standards for the Home Office. Learn more about this project on the [about page](https://engineering.homeoffice.gov.uk/about/).

It is built using Markdown, GOV.UK templates, HO styles, the [x-gov Eleventy Plugin](https://x-govuk.github.io/govuk-eleventy-plugin/) and GitHub Actions.

## Requirements

- [Node.js](https://nodejs.org)
- [Eleventy](https://www.11ty.dev)
- [x-gov Eleventy Plugin](https://x-govuk.github.io/govuk-eleventy-plugin/)
- [Nunjucks](https://mozilla.github.io/nunjucks/) for the templating language

## Installation

```
npm install
```

This will install the dependencies needed to run the site.

## Preview your changes locally

Eleventy has the ability to serve the site in a hot reload environment.  You can call this from the npm scripts:

```
npm run serve
```

This maps to Eleventy hot reload script 'serve'.

### Alternative method for previewing changes locally

Alternatively, to run the site locally you can build the static html files and then deploy the _site folder to a http server.

Firstly you can run

```
npm run build
```

Which creates the static html. Then you can use a good very light weight http server to host them.

```
npm install -g http-server
```

Installs the server globally and then navigate to a terminal/cmd prompt to the _site directory and run: 

```
http-server -p 8080
```

Now you can preview the site on http://localhost:8080

## Running Cypress tests
To run the [Cypress](https://www.cypress.io/) tests locally, run the following command:

```
npm run cypress:open
```

This will open up the Cypress UI, which you can use to run the end-to-end tests locally.

> **Note**
> The site must be running on localhost for the tests to work. See [Preview your changes locally](#preview-your-changes-locally).
## Contributing

See the [contributing page](https://github.com/UKHomeOffice/engineering-guidance-and-standards/blob/main/CONTRIBUTING.md) for details on how to contribute.
