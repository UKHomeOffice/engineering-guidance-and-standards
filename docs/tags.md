---
eleventyExcludeFromCollections: true
layout: sub-navigation
pagination:
  data: collections
  size: 1
  alias: tag
  # excluding other auto generated tag pages - if included, page x of y appears in the head title of the page
  filter:
    - homepage
    - all
    - ordered
    - sitemap
    - tagPages
    - tags
eleventyComputed:
  title: Pages tagged with "{{ tag }}"
permalink: /tags/{{ tag | slugify }}/
---

{% set postsWithTag = collections[ tag ] %}
{% for post in postsWithTag | reverse %}
- [{{post.data.title}}]({{post.url | url}})
{% endfor %}

See [all tags]({{"/tags/" | url}})