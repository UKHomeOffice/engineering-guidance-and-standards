---
eleventyExcludeFromCollections: true
---

# engineering-guidance-and-standards
 
This is the home of engineering guidance and standards for the Home Office

It is built using Markdown, GOV.UK templates, HO styles, the x-gov Eleventy Plugin, GitHub Actions and GitHub pages.

## Requirements

- [Node.js](https://nodejs.org) v16 or above
- [Eleventy](https://www.11ty.dev) v1.0.1
- [x-gov Eleventy Plugin](https://x-govuk.github.io/govuk-eleventy-plugin/) v2.7.2 or above
- [Nunjucks](https://mozilla.github.io/nunjucks/) for the templating language

## Installation

```
npm install @11ty/eleventy govuk-eleventy-plugin --save
```

This will install v2.7.2 of the plugin, which is the version that has been documented and more thoroughly tested.

## Preview your changes locally

Eleventy has the ability to serve the site in a hot reload environment.  You can call this from the npm scripts:

```
npm run serve
```

This maps to Eleventy hot reload script 'serve'.

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