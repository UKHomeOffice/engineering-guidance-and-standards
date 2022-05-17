const govukEleventyPlugin = require('govuk-eleventy-plugin')

module.exports = function(eleventyConfig) {
    // Register the plugin
    eleventyConfig.addPassthroughCopy({ "docs/assets/logos": "assets/logos"});
    eleventyConfig.addPlugin(govukEleventyPlugin, {
        brandColour: '#8f23b3',
        fontFamily: 'roboto, system-ui, sans-serif',
        icons: {
            mask: '/assets/logos/ho-mask-icon.svg',
            shortcut: '/assets/logos/ho-favicon.ico',
            touch: '/assets/logos/ho-apple-touch-icon.png'
        },
        ogImage: '/assets/logos/ho-opengraph-image.png',
        homeKey: 'Home',
        header: {
            organisationLogo: 'royal-arms',
            organisationName: 'Home Office',
            search: {
                label: 'Search SEGAS',
                indexPath: '/search.json',
                sitemapPath: '/sitemap'
            }
        },
        footer: {
            copyright: '© Home Office',
            licence: 'Licensed under the MIT License except where otherwise stated.'
        }
    })

    return {
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        dir: {
            // Use layouts from the plugin
            layouts: 'node_modules/govuk-eleventy-plugin/layouts'
        }
    }
};