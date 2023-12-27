---
eleventyExcludeFromCollections: true
layout: tag
pagination:
  data: collections
  # removes (page 1 of n) from title (where n is total number of tags in use)
  pages: 0 
  size: 1
  alias: tag
  filter:
    - homepage
    - all
    - ordered
    - sitemap
    - tagPages
    - tags
    - Standards
    - Principles
    - Patterns
eleventyComputed:
  title: Pages tagged with "{{ tag }}"
permalink: /tags/{{ tag | slugify }}/
---

See [all tags](/tags/)
