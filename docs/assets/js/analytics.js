
// Enhanced Analytics for Production
class AnalyticsManager {
  constructor() {
    this.config = {
      trackingId: process.env.GA_TRACKING_ID || 'UA-XXXXXXXXX-X',
      debug: process.env.NODE_ENV === 'development',
      privacyCompliant: true
    };
    this.init();
  }

  init() {
    // Initialize Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('config', this.config.trackingId, {
        page_title: document.title,
        page_location: window.location.href,
        anonymize_ip: true,
        cookie_flags: 'SameSite=Strict;Secure'
      });
    }

    // Track Core Web Vitals
    this.trackPerformance();
    
    // Track user interactions
    this.trackInteractions();
    
    // Track accessibility features usage
    this.trackAccessibility();
  }

  trackPerformance() {
    // Track Core Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            this.trackEvent('performance', 'LCP', Math.round(entry.startTime));
          }
          if (entry.entryType === 'first-input') {
            this.trackEvent('performance', 'FID', Math.round(entry.processingStart - entry.startTime));
          }
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
    }
  }

  trackInteractions() {
    // Track search usage
    const searchInput = document.querySelector('[data-search-input]');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        if (e.target.value.length > 2) {
          this.trackEvent('search', 'query', e.target.value.length);
        }
      });
    }

    // Track link clicks
    document.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        const href = e.target.getAttribute('href');
        if (href && href.startsWith('http')) {
          this.trackEvent('link', 'external_click', href);
        }
      }
    });
  }

  trackAccessibility() {
    // Track screen reader usage
    if (window.speechSynthesis) {
      this.trackEvent('accessibility', 'screen_reader_available', 'true');
    }

    // Track keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        this.trackEvent('accessibility', 'keyboard_navigation', 'tab');
      }
    });
  }

  trackEvent(category, action, label, value) {
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
    
    if (this.config.debug) {
      console.log('Analytics Event:', { category, action, label, value });
    }
  }
}

// Initialize analytics when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new AnalyticsManager();
});
