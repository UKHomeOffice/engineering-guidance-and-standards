module.exports = {
  tags: [],
  category: 'Pattern',
  eleventyComputed: {
    viewSource: data => `./docs${data.page.filePathStem}.md?plain=1`
  },
  eleventyNavigation: {
    parent: 'Patterns'
  }
}
