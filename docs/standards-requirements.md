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
## [{{ standard.data.title }}]({{ standard.url }})
<p class="govuk-hint">
{{standard.data.id}} <br/>
Last updated: {{ standard.data.date | postDate }}
</p>

{% for requirement in standard.templateContent | extractRequirements %}
* [{{requirement.title}}]({{ standard.url }}{{requirement.id}})
{% endfor %}
{% endfor %}
