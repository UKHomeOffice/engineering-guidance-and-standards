// noinspection JSUnusedGlobalSymbols included dynamically
export default {
  eleventyExcludeFromCollections: ({page, eleventyExcludeFromCollections}) => {
    return eleventyExcludeFromCollections || page.templateSyntax === 'scss';
  }
};

