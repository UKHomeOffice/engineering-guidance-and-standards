module.exports = {
  tags: [],
  category: 'Standard',
  eleventyComputed: {
    viewSource: data => `./docs${data.page.filePathStem}.md?plain=1`
  },
  eleventyNavigation: {
    parent: 'Standards'
  }
}
