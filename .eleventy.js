const govukEleventyPlugin  = require('@x-govuk/govuk-eleventy-plugin')
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    // Set custom variable to decide the path prefix as it is used in a couple of places.
    const _customPathPrefix = process.env.PATH_PREFIX ?? '';
    // Pass assets through to final build directory
    eleventyConfig.addPassthroughCopy({ "docs/assets/logos": "assets/logos"});
    // Register the plugins
    eleventyConfig.addPlugin(govukEleventyPlugin, {
        brandColour: '#8f23b3',
        fontFamily: 'roboto, system-ui, sans-serif',
        icons: {
            mask: '/assets/logos/ho-mask-icon.svg',
            shortcut: '/assets/logos/ho-favicon.ico',
            touch: '/assets/logos/ho-apple-touch-icon.png'
        },
        opengraphImageUrl: '/assets/logos/ho-opengraph-image.png',
        homeKey: 'Home',
        header: {
            organisationLogo: '<img src="'+ _customPathPrefix +'assets/logos/ho_logo.svg" width="150px" height="36px" alt="Home Office"/>',
            organisationName: '',
            search: {
                label: 'Search site',
                indexPath: '/search.json',
                sitemapPath: '/sitemap'
            }
        },
        footer: {
            copyright: {
                text: '© Home Office'
            },
            contentLicence: {
                text: 'Licensed under the MIT License except where otherwise stated.'
            }
        },
        stylesheets: ['/styles/base.css'],
    })
    
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
    });

    return {
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        dir: {
            // Use layouts from the plugin
            layouts: 'node_modules/@x-govuk/govuk-eleventy-plugin/layouts'
        },
        pathPrefix: _customPathPrefix
    }
};