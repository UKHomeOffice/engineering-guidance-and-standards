---
# ensures the tag page does not show in nav bar
eleventyExcludeFromCollections: true
title: All page tags currently in use
permalink: /tags/
layout: sub-navigation
---

{% for tag in collections.all | getAllTags | filterTagList %}
{%- set tagUrl %}{{ "/tags/" | url }}{{ tag | slugify }}/{% endset %}
  {% if tag == "Patterns" %}
  - [{{tag}}]({{"/patterns" | url}})
  {% elseif tag == "Principles" %}
  - [{{tag}}]({{"/principles" | url}})
  {% elseif tag == "Standards" %}
  - [{{tag}}]({{"/standards" | url}})
  {% else %}
  - [{{tag}}]({{ tagUrl }})
  {% endif %}
{% endfor %}

