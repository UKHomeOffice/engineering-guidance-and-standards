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

## Running Playwright tests

Look at readme for [running tests](./tests/README.md)

NOTE: the cypressIO tests are replaced with playwright due to the tool being deprecated on Tech registar

> **Note**
> The site must be running on localhost for the tests to work. See [Preview your changes locally](#preview-your-changes-locally).

## Automated content review alerts

This repository includes a scheduled workflow to detect stale content and raise review issues:

- Workflow: `.github/workflows/content-review-alerts.yml`
- Triggered weekly (Monday 08:00 UTC), and manually using `workflow_dispatch`
- Scans content under `docs/standards`, `docs/principles`, and `docs/patterns`
- Uses page header metadata `date` to determine if a page is overdue for review

### Manual workflow inputs

- `dry_run`: `true` or `false`
  - `true` logs what would be created without opening issues
- `review_window_days`: minimum age before content is considered overdue (default `180`)
- `max_issues_per_run`: safety cap on issue creation per run (default `10`, set `0` for no cap)

### Automated run defaults

- Scheduled runs default to `dry_run=true`.
- To explicitly enable issue creation for automated runs, set repository variable `CONTENT_REVIEW_DRY_RUN` to `false`.

### Local testing

You can run the scanner locally before using the workflow:

```bash
DRY_RUN=true REVIEW_WINDOW_DAYS=180 npm run content-review:scan
```

### Safe rollout sequence

1. Run manual workflow with `dry_run=true`.
2. Confirm the candidate list and tune `review_window_days` if needed.
3. Run manual workflow with `dry_run=false` and a low `max_issues_per_run` (for example `5` or `10`).
4. Allow the weekly schedule to continue with the default safety cap.

## Contributing

See the [contributing page](https://github.com/UKHomeOffice/engineering-guidance-and-standards/blob/main/CONTRIBUTING.md) for details on how to contribute.
