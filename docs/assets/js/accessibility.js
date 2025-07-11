
// Accessibility Enhancements
class AccessibilityManager {
  constructor() {
    this.init();
  }

  init() {
    this.setupSkipLinks();
    this.enhanceKeyboardNavigation();
    this.setupFocusManagement();
    this.addScreenReaderSupport();
    this.setupHighContrastMode();
  }

  setupSkipLinks() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'govuk-skip-link';
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.focus();
        mainContent.scrollIntoView();
      }
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  enhanceKeyboardNavigation() {
    // Improve focus visibility
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });

    // Escape key support for modals/dropdowns
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.is-active');
        if (activeModal) {
          this.closeModal(activeModal);
        }
      }
    });
  }

  setupFocusManagement() {
    // Focus management for dynamic content
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1 && node.hasAttribute('data-focus-on-insert')) {
              node.focus();
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  addScreenReaderSupport() {
    // Add live region for dynamic content updates
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);

    // Announce search results
    const searchResults = document.querySelector('[data-search-results]');
    if (searchResults) {
      const observer = new MutationObserver(() => {
        const resultsCount = searchResults.children.length;
        this.announceToScreenReader(`${resultsCount} search results found`);
      });
      
      observer.observe(searchResults, { childList: true });
    }
  }

  setupHighContrastMode() {
    // Detect high contrast mode preference
    if (window.matchMedia) {
      const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
      this.applyHighContrastMode(highContrastQuery.matches);
      
      highContrastQuery.addListener((e) => {
        this.applyHighContrastMode(e.matches);
      });
    }
  }

  applyHighContrastMode(enable) {
    if (enable) {
      document.body.classList.add('high-contrast-mode');
    } else {
      document.body.classList.remove('high-contrast-mode');
    }
  }

  announceToScreenReader(message) {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
      liveRegion.textContent = message;
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }

  closeModal(modal) {
    modal.classList.remove('is-active');
    const trigger = document.querySelector(`[data-modal-trigger="${modal.id}"]`);
    if (trigger) {
      trigger.focus();
    }
  }
}

// Initialize accessibility enhancements
document.addEventListener('DOMContentLoaded', () => {
  new AccessibilityManager();
});
