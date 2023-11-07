module.exports = {
  eleventyExcludeFromCollections: ({page, eleventyExcludeFromCollections}) => {
    return eleventyExcludeFromCollections || page.templateSyntax === 'scss';
  }
}

