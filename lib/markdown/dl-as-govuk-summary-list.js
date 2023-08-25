/**
 * This hooks into `markdown-it-deflist` and adds classes to render them using GovUK summary list styles.
 *
 * Note that as the summary list wraps the `dt` and `dd`s in `div.govuk-summary-list__row` and deflist doesn't have
 * hooks for the start and end of a pair we need to track this ourselves with the rowOpened flag.
 */
module.exports = (md) => {
  const {rules} = md.renderer
  let rowOpened = false;

  rules.dl_open = () => '<dl class="govuk-summary-list">\n'
  rules.dt_open = () => {
    const maybeCloseRowDiv = rowOpened ? '</div>' : '';
    rowOpened = true;
    return maybeCloseRowDiv + '<div class="govuk-summary-list__row"><dt class="govuk-summary-list__key">\n';
  }
  rules.dd_open = () => '<dt class="govuk-summary-list__value">\n'
  rules.dl_close = () => {
    const maybeCloseRowDiv = rowOpened ? '</div>' : '';
    rowOpened = false;
    return maybeCloseRowDiv + '</dl>'
  }
}
