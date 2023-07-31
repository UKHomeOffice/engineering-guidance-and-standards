// noinspection JSUnusedGlobalSymbols

function mapRelatedSections(sections, pathPrefix) {
  return sections.map(
    section => ({
      ...section,
      items: (section.items ?? []).map(item => ({
        ...item,
        href: item.href?.startsWith('/') && pathPrefix ? `${pathPrefix}${item.href}` : item.href,
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
  related: ({related, pathPrefix}) => {
    console.log({related, pathPrefix})

    if (!related) {
      return related;
    }

    related.sections = mapRelatedSections(related.sections ?? [related], pathPrefix);

    return related;
  }
}

