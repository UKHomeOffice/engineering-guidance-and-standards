---
eleventyExcludeFromCollections: true
layout: post
order: 5
title: Summary of engineering standards' requirements
description: An overview of the requirements of all Home Office engineering standards.
tags: []
related:
  sections:
    - title: Other formats
      description: Description  
      items:
        - text: standards.json
          href: /standards.json
---
{% for standard in collections.getAllStandardsOrderedByID %}
<h2 class="app-document-header__title govuk-heading-l">
  <span class="govuk-caption-l">{{standard.data.id}}</span>
  <a href="{{ standard.url }}" class="govuk-link">{{ standard.data.title }}</a>
</h2>
<p class="govuk-hint">Last updated: {{ standard.data.date | postDate }}</p>

{% for requirement in standard.templateContent | extractRequirements %}
* [{{requirement.title}}]({{ standard.url }}{{requirement.id}})
{% endfor %}
{% endfor %}
