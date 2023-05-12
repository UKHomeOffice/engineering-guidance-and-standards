---
# ensures the tag page does not show in nav bar
eleventyExcludeFromCollections: true
title: Tags
permalink: /tags/
layout: sub-navigation
---

{% for tag in collections.all | getAllTags | filterTagList %}
{%- set tagUrl %}{{ "/tags/" | url }}{{ tag | slugify | title }}/{% endset %}
- [{{ tag }}]({{ tagUrl }})
{% endfor %}