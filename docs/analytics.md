
---
layout: post
title: Content Analytics
description: Track engagement with engineering guidance
eleventyExcludeFromCollections: true
---

<div id="analytics-dashboard">
  <h2>Content Engagement Overview</h2>
  
  <div class="stats-grid">
    <div class="stat-card">
      <h3 id="total-principles">{{ collections.principles.length }}</h3>
      <p>Total Principles</p>
    </div>
    <div class="stat-card">
      <h3 id="total-standards">{{ collections.standards.length }}</h3>
      <p>Total Standards</p>
    </div>
    <div class="stat-card">
      <h3 id="total-patterns">{{ collections.patterns.length }}</h3>
      <p>Total Patterns</p>
    </div>
  </div>

  <div class="content-breakdown">
    <h3>Content by Topic</h3>
    <div id="topic-chart"></div>
  </div>

  <div class="recent-updates">
    <h3>Recently Updated Content</h3>
    <div id="recent-content"></div>
  </div>
</div>

<style>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}
.stat-card {
  background: #f3f2f1;
  padding: 1.5rem;
  text-align: center;
  border-left: 4px solid #1d70b8;
}
.stat-card h3 {
  font-size: 2.5rem;
  margin: 0;
  color: #1d70b8;
}
.content-breakdown, .recent-updates {
  margin: 3rem 0;
}
</style>
