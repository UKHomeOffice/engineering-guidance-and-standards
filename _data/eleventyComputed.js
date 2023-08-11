// noinspection JSUnusedGlobalSymbols
const { applyBaseToUrl } = require('@11ty/eleventy/src/Plugins/HtmlBasePlugin')

function mapRelatedSections(sections, pathPrefix) {
  return sections.map(
    section => ({
      ...section,
      items: (section.items ?? []).map(item => ({
        ...item,
        href: applyBaseToUrl(item.href, pathPrefix, {pathPrefix}),
      })),
      subsections: mapRelatedSections(section.subsections ?? [], pathPrefix),
    })
  );
}

module.exports = {
  eleventyExcludeFromCollections: ({page, eleventyExcludeFromCollections}) => {
    return eleventyExcludeFromCollections || page.templateSyntax === 'scss';
  },
  // the path prefix isn't applied to related link urls by xGovukRelatedNavigation - so map them here
  pagination: ({pagination, pathPrefix}) => {
    if (!pagination || Object.keys(pagination).length === 0) {
      return pagination;
    }
    if (pagination.href.previous) {
      pagination.href.previous = applyBaseToUrl(pagination.href.previous, pathPrefix, {pathPrefix});
    }
    if (pagination.href.next) {
      pagination.href.next = applyBaseToUrl(pagination.href.next, pathPrefix, {pathPrefix});
    }
    return pagination;
  },
  related: ({related, pathPrefix}) => {
    if (!related) {
      return related;
    }

    related.sections = mapRelatedSections(related.sections ?? [related], pathPrefix);

    return related;
  }
}

