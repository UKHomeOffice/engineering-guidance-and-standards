
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
