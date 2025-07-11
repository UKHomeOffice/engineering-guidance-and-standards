
---
layout: page
title: Content Analytics Dashboard
description: Monitor and track the performance of engineering guidance content
eleventyExcludeFromCollections: false
---

# Content Analytics Dashboard

This dashboard provides insights into the quality, usage, and maintenance status of our engineering guidance content.

<div class="govuk-grid-row">
  <div class="govuk-grid-column-one-third">
    <div class="govuk-panel govuk-panel--confirmation">
      <h2 class="govuk-panel__title">{{ collections.all.length }}</h2>
      <div class="govuk-panel__body">Total Documents</div>
    </div>
  </div>
  
  <div class="govuk-grid-column-one-third">
    <div class="govuk-panel govuk-panel--confirmation">
      <h2 class="govuk-panel__title">{{ collections.getAllStandardsOrderedByID.length }}</h2>
      <div class="govuk-panel__body">Standards</div>
    </div>
  </div>
  
  <div class="govuk-grid-column-one-third">
    <div class="govuk-panel govuk-panel--confirmation">
      <h2 class="govuk-panel__title">{{ collections.getAllPrinciplesOrderedByTitle.length }}</h2>
      <div class="govuk-panel__body">Principles</div>
    </div>
  </div>
</div>

## Content Quality Metrics

{% set contentReport = collections.all | generateContentReport %}

<div class="govuk-summary-list">
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">Average Quality Score</dt>
    <dd class="govuk-summary-list__value">{{ contentReport.averageScore }}/100</dd>
  </div>
  
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">Stale Content</dt>
    <dd class="govuk-summary-list__value">{{ contentReport.staleCount }} documents</dd>
  </div>
  
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">Content with Issues</dt>
    <dd class="govuk-summary-list__value">{{ contentReport.issueCount }} documents</dd>
  </div>
</div>

## Recent Updates

<div class="govuk-grid-row">
  <div class="govuk-grid-column-full">
    {% set recentlyUpdated = collections.all | sort(false, true, 'data.date') | head(5) %}
    
    <h3>Recently Updated Content</h3>
    <ul class="govuk-list">
      {% for item in recentlyUpdated %}
        <li>
          <a href="{{ item.url }}" class="govuk-link">{{ item.data.title }}</a>
          <span class="govuk-hint">Updated {{ item.data.date | postDate }}</span>
        </li>
      {% endfor %}
    </ul>
  </div>
</div>

## Content Categories

<table class="govuk-table">
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header">Category</th>
      <th scope="col" class="govuk-table__header">Count</th>
      <th scope="col" class="govuk-table__header">Quality Score</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    {% for category, stats in contentReport.categories %}
      <tr class="govuk-table__row">
        <td class="govuk-table__cell">{{ category | title }}</td>
        <td class="govuk-table__cell">{{ stats.count }}</td>
        <td class="govuk-table__cell">{{ stats.averageScore }}/100</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

<script>
// Add interactive charts here if needed
document.addEventListener('DOMContentLoaded', function() {
  // Quality score visualization
  const qualityScore = {{ contentReport.averageScore }};
  
  // You could add Chart.js or similar for visualizations
  console.log('Content analytics loaded. Quality score:', qualityScore);
});
</script>
