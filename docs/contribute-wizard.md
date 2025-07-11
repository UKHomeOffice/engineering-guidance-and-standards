
---
layout: post
title: Contribution Wizard
description: Interactive tool to help you contribute new content
eleventyExcludeFromCollections: true
---

<div id="contribution-wizard">
  <h2>What would you like to contribute?</h2>
  
  <div class="wizard-step" id="step-1">
    <div class="option-cards">
      <div class="option-card" data-type="principle">
        <h3>Principle</h3>
        <p>A fundamental belief or rule that guides engineering decisions</p>
      </div>
      <div class="option-card" data-type="standard">
        <h3>Standard</h3>
        <p>A specific requirement or guideline that must be followed</p>
      </div>
      <div class="option-card" data-type="pattern">
        <h3>Pattern</h3>
        <p>A reusable solution to a common engineering problem</p>
      </div>
    </div>
  </div>

  <div class="wizard-step hidden" id="step-2">
    <h3>Great! Let's help you create your <span id="selected-type"></span></h3>
    <div id="guidance-content"></div>
    <div class="wizard-actions">
      <button id="create-issue">Create GitHub Issue</button>
      <button id="use-template">Use Template</button>
    </div>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const wizard = {
    selectedType: null,
    
    init() {
      this.setupEventListeners();
    },
    
    setupEventListeners() {
      document.querySelectorAll('.option-card').forEach(card => {
        card.addEventListener('click', (e) => {
          this.selectType(e.currentTarget.dataset.type);
        });
      });
      
      document.getElementById('create-issue').addEventListener('click', () => {
        this.createGitHubIssue();
      });
      
      document.getElementById('use-template').addEventListener('click', () => {
        this.showTemplate();
      });
    },
    
    selectType(type) {
      this.selectedType = type;
      document.getElementById('selected-type').textContent = type;
      document.getElementById('step-1').classList.add('hidden');
      document.getElementById('step-2').classList.remove('hidden');
      this.showGuidance(type);
    },
    
    showGuidance(type) {
      const guidance = {
        principle: `
          <h4>Before creating a principle:</h4>
          <ul>
            <li>Ensure it's a fundamental belief that guides decisions</li>
            <li>Check it doesn't duplicate existing principles</li>
            <li>Consider its applications and implications</li>
          </ul>
        `,
        standard: `
          <h4>Before creating a standard:</h4>
          <ul>
            <li>Ensure it's measurable and actionable</li>
            <li>Consider compliance requirements</li>
            <li>Think about implementation challenges</li>
          </ul>
        `,
        pattern: `
          <h4>Before creating a pattern:</h4>
          <ul>
            <li>Ensure it solves a recurring problem</li>
            <li>Consider when it should and shouldn't be used</li>
            <li>Think about implementation examples</li>
          </ul>
        `
      };
      
      document.getElementById('guidance-content').innerHTML = guidance[type];
    },
    
    createGitHubIssue() {
      const issueTemplates = {
        principle: 'propose-a-new-principle.md',
        standard: 'propose-a-new-standard.md',
        pattern: 'propose-a-new-pattern.md'
      };
      
      const url = `https://github.com/UKHomeOffice/engineering-guidance-and-standards/issues/new?template=${issueTemplates[this.selectedType]}`;
      window.open(url, '_blank');
    },
    
    showTemplate() {
      const templateUrls = {
        principle: '/principles/principle.template.md',
        standard: '/standards/standard.template.md',
        pattern: '/patterns/pattern.template.md'
      };
      
      window.open(`https://github.com/UKHomeOffice/engineering-guidance-and-standards/blob/main/docs${templateUrls[this.selectedType]}`, '_blank');
    }
  };
  
  wizard.init();
});
</script>

<style>
.wizard-step { margin: 2rem 0; }
.hidden { display: none; }
.option-cards { 
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  gap: 1rem; 
  margin: 2rem 0; 
}
.option-card { 
  border: 2px solid #b1b4b6; 
  padding: 1.5rem; 
  cursor: pointer; 
  transition: all 0.2s; 
}
.option-card:hover { 
  border-color: #1d70b8; 
  background-color: #f3f2f1; 
}
.wizard-actions { 
  display: flex; 
  gap: 1rem; 
  margin-top: 2rem; 
}
.wizard-actions button { 
  background: #00703c; 
  color: white; 
  border: none; 
  padding: 0.75rem 1.5rem; 
  cursor: pointer; 
}
</style>
