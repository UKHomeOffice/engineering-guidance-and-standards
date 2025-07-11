
---
layout: page
title: Contribution Wizard
description: Step-by-step guide to contributing to engineering guidance
---

# Contribution Wizard

Welcome! This wizard will help you contribute effectively to our engineering guidance and standards.

<div id="contribution-wizard">
  <div class="wizard-step" id="step-1">
    <h2>What would you like to contribute?</h2>
    <div class="govuk-radios govuk-radios--small">
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="contribute-principle" name="contribution-type" type="radio" value="principle">
        <label class="govuk-radios__label" for="contribute-principle">
          <strong>Principle</strong> - A fundamental belief or rule that guides engineering decisions
        </label>
      </div>
      
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="contribute-standard" name="contribution-type" type="radio" value="standard">
        <label class="govuk-radios__label" for="contribute-standard">
          <strong>Standard</strong> - A mandatory requirement that must be followed
        </label>
      </div>
      
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="contribute-pattern" name="contribution-type" type="radio" value="pattern">
        <label class="govuk-radios__label" for="contribute-pattern">
          <strong>Pattern</strong> - A reusable solution to a common problem
        </label>
      </div>
      
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="contribute-improvement" name="contribution-type" type="radio" value="improvement">
        <label class="govuk-radios__label" for="contribute-improvement">
          <strong>Improvement</strong> - Update or enhance existing content
        </label>
      </div>
    </div>
    
    <button class="govuk-button" onclick="nextStep(2)">Continue</button>
  </div>

  <div class="wizard-step" id="step-2" style="display: none;">
    <h2>Tell us about your contribution</h2>
    
    <div class="govuk-form-group">
      <label class="govuk-label govuk-label--m" for="contribution-title">
        Title
      </label>
      <input class="govuk-input" id="contribution-title" type="text" placeholder="e.g., API Rate Limiting">
    </div>
    
    <div class="govuk-form-group">
      <label class="govuk-label govuk-label--m" for="contribution-description">
        Brief Description
      </label>
      <textarea class="govuk-textarea" id="contribution-description" rows="3" placeholder="Explain what this addresses and why it's important"></textarea>
    </div>
    
    <div class="govuk-form-group">
      <label class="govuk-label govuk-label--m" for="contribution-rationale">
        Rationale
      </label>
      <textarea class="govuk-textarea" id="contribution-rationale" rows="4" placeholder="Why is this needed? What problem does it solve?"></textarea>
    </div>
    
    <button class="govuk-button govuk-button--secondary" onclick="previousStep(1)">Back</button>
    <button class="govuk-button" onclick="nextStep(3)">Continue</button>
  </div>

  <div class="wizard-step" id="step-3" style="display: none;">
    <h2>Implementation Details</h2>
    
    <div class="govuk-form-group">
      <fieldset class="govuk-fieldset">
        <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
          Which areas does this apply to?
        </legend>
        <div class="govuk-checkboxes govuk-checkboxes--small">
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="area-security" name="areas" type="checkbox" value="security">
            <label class="govuk-checkboxes__label" for="area-security">Security</label>
          </div>
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="area-deployment" name="areas" type="checkbox" value="deployment">
            <label class="govuk-checkboxes__label" for="area-deployment">Build, release and deploy</label>
          </div>
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="area-testing" name="areas" type="checkbox" value="testing">
            <label class="govuk-checkboxes__label" for="area-testing">Quality engineering</label>
          </div>
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="area-ways" name="areas" type="checkbox" value="ways-of-working">
            <label class="govuk-checkboxes__label" for="area-ways">Ways of working</label>
          </div>
        </div>
      </fieldset>
    </div>
    
    <div class="govuk-form-group">
      <label class="govuk-label govuk-label--m" for="contribution-solution">
        Solution/Implementation
      </label>
      <textarea class="govuk-textarea" id="contribution-solution" rows="6" placeholder="Describe the solution, steps to implement, or specific requirements"></textarea>
    </div>
    
    <button class="govuk-button govuk-button--secondary" onclick="previousStep(2)">Back</button>
    <button class="govuk-button" onclick="generateContribution()">Generate Template</button>
  </div>

  <div class="wizard-step" id="step-4" style="display: none;">
    <h2>Your Contribution Template</h2>
    
    <div class="govuk-inset-text">
      Copy the template below and use it to create your contribution. You can submit it as a GitHub issue or create a pull request.
    </div>
    
    <div class="contribution-template">
      <pre><code id="generated-template"></code></pre>
    </div>
    
    <div class="govuk-button-group">
      <button class="govuk-button" onclick="copyTemplate()">Copy Template</button>
      <a class="govuk-button govuk-button--secondary" href="https://github.com/UKHomeOffice/engineering-guidance-and-standards/issues/new" target="_blank">Create GitHub Issue</a>
      <button class="govuk-button govuk-button--secondary" onclick="restart()">Start Over</button>
    </div>
  </div>
</div>

<script>
function nextStep(stepNumber) {
  document.querySelectorAll('.wizard-step').forEach(step => step.style.display = 'none');
  document.getElementById(`step-${stepNumber}`).style.display = 'block';
}

function previousStep(stepNumber) {
  document.querySelectorAll('.wizard-step').forEach(step => step.style.display = 'none');
  document.getElementById(`step-${stepNumber}`).style.display = 'block';
}

function generateContribution() {
  const type = document.querySelector('input[name="contribution-type"]:checked')?.value;
  const title = document.getElementById('contribution-title').value;
  const description = document.getElementById('contribution-description').value;
  const rationale = document.getElementById('contribution-rationale').value;
  const solution = document.getElementById('contribution-solution').value;
  const areas = Array.from(document.querySelectorAll('input[name="areas"]:checked')).map(cb => cb.value);
  
  const template = generateTemplate(type, title, description, rationale, solution, areas);
  document.getElementById('generated-template').textContent = template;
  nextStep(4);
}

function generateTemplate(type, title, description, rationale, solution, areas) {
  const date = new Date().toISOString().split('T')[0];
  const tags = areas.map(area => `  - ${area.replace('-', ' ')}`).join('\n');
  
  return `---
layout: ${type}
title: ${title}
date: ${date}
tags:
${tags}
---

${description}

---

## Rationale

${rationale}

---

## Solution

${solution}

---

## Considerations

[Add any important considerations, limitations, or exceptions here]
`;
}

function copyTemplate() {
  const template = document.getElementById('generated-template').textContent;
  navigator.clipboard.writeText(template).then(() => {
    alert('Template copied to clipboard!');
  });
}

function restart() {
  document.querySelectorAll('input').forEach(input => {
    if (input.type === 'radio' || input.type === 'checkbox') {
      input.checked = false;
    } else {
      input.value = '';
    }
  });
  nextStep(1);
}
</script>
---
layout: page
title: Contribution Wizard
description: Get help with contributing to the engineering guidance and standards
---

# Contribution Wizard

This wizard will help you determine the best way to contribute to the Home Office Engineering Guidance and Standards.

<div class="contribution-wizard" data-step="1">
  
  <!-- Step 1: Type of contribution -->
  <div class="wizard-step" data-step="1">
    <h2 class="govuk-heading-l">What would you like to contribute?</h2>
    <p class="govuk-body">Select the type of contribution you'd like to make:</p>
    
    <div class="govuk-form-group">
      <fieldset class="govuk-fieldset">
        <div class="govuk-radios govuk-radios--small" data-module="govuk-radios">
          <div class="govuk-radios__item">
            <input class="govuk-radios__input" id="contribution-principle" name="contribution-type" type="radio" value="principle">
            <label class="govuk-label govuk-radios__label" for="contribution-principle">
              <strong>Principle</strong> - A fundamental rule or belief that guides engineering decisions
            </label>
          </div>
          <div class="govuk-radios__item">
            <input class="govuk-radios__input" id="contribution-standard" name="contribution-type" type="radio" value="standard">
            <label class="govuk-label govuk-radios__label" for="contribution-standard">
              <strong>Standard</strong> - A mandatory requirement or specification
            </label>
          </div>
          <div class="govuk-radios__item">
            <input class="govuk-radios__input" id="contribution-pattern" name="contribution-type" type="radio" value="pattern">
            <label class="govuk-label govuk-radios__label" for="contribution-pattern">
              <strong>Pattern</strong> - A reusable solution to a common problem
            </label>
          </div>
          <div class="govuk-radios__item">
            <input class="govuk-radios__input" id="contribution-improvement" name="contribution-type" type="radio" value="improvement">
            <label class="govuk-label govuk-radios__label" for="contribution-improvement">
              <strong>Improvement</strong> - Update or enhance existing content
            </label>
          </div>
          <div class="govuk-radios__item">
            <input class="govuk-radios__input" id="contribution-bug" name="contribution-type" type="radio" value="bug">
            <label class="govuk-label govuk-radios__label" for="contribution-bug">
              <strong>Bug Report</strong> - Report an issue with the site or content
            </label>
          </div>
        </div>
      </fieldset>
    </div>
    
    <button class="govuk-button" onclick="nextStep(2)">Continue</button>
  </div>

  <!-- Step 2: Topic selection -->
  <div class="wizard-step" data-step="2" style="display: none;">
    <h2 class="govuk-heading-l">What topic does this relate to?</h2>
    <p class="govuk-body">Select the most relevant topic area:</p>
    
    <div class="govuk-form-group">
      <fieldset class="govuk-fieldset">
        <div class="govuk-checkboxes govuk-checkboxes--small" data-module="govuk-checkboxes">
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="topic-observability" name="topics" type="checkbox" value="observability">
            <label class="govuk-label govuk-checkboxes__label" for="topic-observability">
              Observability
            </label>
          </div>
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="topic-software-design" name="topics" type="checkbox" value="software-design">
            <label class="govuk-label govuk-checkboxes__label" for="topic-software-design">
              Software Design
            </label>
          </div>
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="topic-security" name="topics" type="checkbox" value="security">
            <label class="govuk-label govuk-checkboxes__label" for="topic-security">
              Security
            </label>
          </div>
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="topic-ways-of-working" name="topics" type="checkbox" value="ways-of-working">
            <label class="govuk-label govuk-checkboxes__label" for="topic-ways-of-working">
              Ways of Working
            </label>
          </div>
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="topic-build-release-deploy" name="topics" type="checkbox" value="build-release-deploy">
            <label class="govuk-label govuk-checkboxes__label" for="topic-build-release-deploy">
              Build, Release and Deploy
            </label>
          </div>
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="topic-source-control" name="topics" type="checkbox" value="source-control">
            <label class="govuk-label govuk-checkboxes__label" for="topic-source-control">
              Source Control
            </label>
          </div>
        </div>
      </fieldset>
    </div>
    
    <button class="govuk-button govuk-button--secondary" onclick="previousStep(1)">Back</button>
    <button class="govuk-button" onclick="nextStep(3)">Continue</button>
  </div>

  <!-- Step 3: Details -->
  <div class="wizard-step" data-step="3" style="display: none;">
    <h2 class="govuk-heading-l">Tell us more</h2>
    <p class="govuk-body">Provide some details about your contribution:</p>
    
    <div class="govuk-form-group">
      <label class="govuk-label govuk-label--s" for="contribution-title">
        Title
      </label>
      <input class="govuk-input" id="contribution-title" name="title" type="text" placeholder="Brief, descriptive title">
    </div>
    
    <div class="govuk-form-group">
      <label class="govuk-label govuk-label--s" for="contribution-description">
        Description
      </label>
      <textarea class="govuk-textarea" id="contribution-description" name="description" rows="5" placeholder="Describe your contribution in detail..."></textarea>
    </div>
    
    <div class="govuk-form-group">
      <label class="govuk-label govuk-label--s" for="contribution-rationale">
        Rationale (why is this important?)
      </label>
      <textarea class="govuk-textarea" id="contribution-rationale" name="rationale" rows="3" placeholder="Explain why this contribution is needed..."></textarea>
    </div>
    
    <button class="govuk-button govuk-button--secondary" onclick="previousStep(2)">Back</button>
    <button class="govuk-button" onclick="generateIssue()">Generate Issue</button>
  </div>

  <!-- Step 4: Results -->
  <div class="wizard-step" data-step="4" style="display: none;">
    <h2 class="govuk-heading-l">Ready to contribute!</h2>
    <p class="govuk-body">Here's what we've prepared for you:</p>
    
    <div class="govuk-panel govuk-panel--confirmation">
      <h3 class="govuk-panel__title">Issue ready to create</h3>
      <div class="govuk-panel__body">
        Your GitHub issue has been prepared with all the details
      </div>
    </div>
    
    <div id="issue-preview" class="govuk-details__text">
      <!-- Issue content will be populated by JavaScript -->
    </div>
    
    <div class="govuk-button-group">
      <a href="#" id="create-issue-link" class="govuk-button" role="button">Create Issue on GitHub</a>
      <button class="govuk-button govuk-button--secondary" onclick="resetWizard()">Start Over</button>
    </div>
  </div>

</div>

<script>
class ContributionWizard {
  constructor() {
    this.currentStep = 1;
    this.data = {};
    this.init();
  }

  init() {
    window.nextStep = (step) => this.nextStep(step);
    window.previousStep = (step) => this.previousStep(step);
    window.generateIssue = () => this.generateIssue();
    window.resetWizard = () => this.resetWizard();
  }

  nextStep(step) {
    if (this.validateCurrentStep()) {
      this.collectData();
      this.showStep(step);
    }
  }

  previousStep(step) {
    this.showStep(step);
  }

  showStep(step) {
    document.querySelectorAll('.wizard-step').forEach(el => {
      el.style.display = 'none';
    });
    document.querySelector(`[data-step="${step}"]`).style.display = 'block';
    this.currentStep = step;
  }

  validateCurrentStep() {
    const currentStepEl = document.querySelector(`[data-step="${this.currentStep}"]`);
    const requiredInputs = currentStepEl.querySelectorAll('input[required], textarea[required]');
    
    for (let input of requiredInputs) {
      if (!input.value.trim()) {
        input.focus();
        return false;
      }
    }
    
    // Check if at least one radio is selected in step 1
    if (this.currentStep === 1) {
      const radioChecked = currentStepEl.querySelector('input[type="radio"]:checked');
      if (!radioChecked) {
        alert('Please select a contribution type');
        return false;
      }
    }
    
    return true;
  }

  collectData() {
    const currentStepEl = document.querySelector(`[data-step="${this.currentStep}"]`);
    
    // Collect radio button values
    const radios = currentStepEl.querySelectorAll('input[type="radio"]:checked');
    radios.forEach(radio => {
      this.data[radio.name] = radio.value;
    });
    
    // Collect checkbox values
    const checkboxes = currentStepEl.querySelectorAll('input[type="checkbox"]:checked');
    const checkboxValues = Array.from(checkboxes).map(cb => cb.value);
    if (checkboxValues.length > 0) {
      this.data.topics = checkboxValues;
    }
    
    // Collect text inputs
    const textInputs = currentStepEl.querySelectorAll('input[type="text"], textarea');
    textInputs.forEach(input => {
      if (input.value.trim()) {
        this.data[input.name] = input.value.trim();
      }
    });
  }

  generateIssue() {
    if (!this.validateCurrentStep()) return;
    
    this.collectData();
    
    const issueTemplate = this.createIssueTemplate();
    const issueUrl = this.createGitHubIssueUrl(issueTemplate);
    
    document.getElementById('issue-preview').innerHTML = `
      <h4 class="govuk-heading-s">Issue Preview:</h4>
      <pre class="govuk-body-s">${issueTemplate.body}</pre>
    `;
    
    document.getElementById('create-issue-link').href = issueUrl;
    
    this.showStep(4);
  }

  createIssueTemplate() {
    const type = this.data['contribution-type'] || 'improvement';
    const title = this.data.title || 'New contribution';
    const description = this.data.description || '';
    const rationale = this.data.rationale || '';
    const topics = this.data.topics || [];
    
    return {
      title: `${type.charAt(0).toUpperCase() + type.slice(1)}: ${title}`,
      body: `## Description
${description}

## Rationale
${rationale}

## Topics
${topics.map(topic => `- ${topic}`).join('\n')}

## Type
${type}

## Checklist
- [ ] I have read the contributing guidelines
- [ ] I have checked that this contribution doesn't already exist
- [ ] I have provided sufficient detail for review
- [ ] I have considered the impact on existing content

---
*Generated by the contribution wizard*`
    };
  }

  createGitHubIssueUrl(template) {
    const baseUrl = 'https://github.com/UKHomeOffice/engineering-guidance-and-standards/issues/new';
    const params = new URLSearchParams({
      title: template.title,
      body: template.body,
      labels: this.data['contribution-type'] || 'enhancement'
    });
    
    return `${baseUrl}?${params.toString()}`;
  }

  resetWizard() {
    this.currentStep = 1;
    this.data = {};
    document.querySelectorAll('input, textarea').forEach(el => {
      el.value = '';
      el.checked = false;
    });
    this.showStep(1);
  }
}

// Initialize the wizard
document.addEventListener('DOMContentLoaded', () => {
  new ContributionWizard();
});
</script>

<style>
.contribution-wizard {
  max-width: 600px;
}

.wizard-step {
  margin-bottom: 2rem;
}

.govuk-button-group {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

#issue-preview {
  background: #f3f2f1;
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem 0;
}

#issue-preview pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
