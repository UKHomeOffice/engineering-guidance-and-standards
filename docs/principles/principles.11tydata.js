module.exports = {
    tags: ['principles'],
    eleventyComputed: {
        viewSource: data => `./docs${data.page.filePathStem}.md?plain=1`
    },
    eleventyNavigation: {
        parent: 'Principles'
    }
}