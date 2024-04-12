---
homepage: true
layout: product
title: Engineering Guidance and Standards
description: Build better applications by working to agreed Home Office engineering principles and standards
startButton:
  href: "/about/"
  text: Find out more about what we are doing
# hide duplicate title in page title
options:
  header:
    productName: ''
---
<div class="govuk-grid-row">
{% for item in collections.homepageLinks %}
  <section class="govuk-grid-column-one-third-from-desktop govuk-!-margin-bottom-8">
    <h2 class="govuk-heading-m govuk-!-font-size-27">{{ item.data.title }}</h2>
    <p class="govuk-body">{{ item.data.description | markdown("inline") }}</p>
    <p class="govuk-body">
      <a class="govuk-link govuk-!-font-weight-bold" href="{{ item.url }}">
        Read our {{ item.data.title | lower }}
      </a>
    </p>
  </section>
{% endfor %}
</div>
