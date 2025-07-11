
// Enhanced Search Functionality
class EnhancedSearch {
  constructor() {
    this.searchData = [];
    this.searchIndex = null;
    this.init();
  }

  async init() {
    try {
      // Load search data
      const response = await fetch('/search.json');
      this.searchData = await response.json();
      
      // Initialize search interface
      this.setupSearchInterface();
      this.setupKeyboardShortcuts();
      this.setupFilters();
      
      // Load search history
      this.loadSearchHistory();
      
    } catch (error) {
      console.error('Failed to initialize search:', error);
    }
  }

  setupSearchInterface() {
    const searchContainer = document.querySelector('[data-search-container]');
    if (!searchContainer) return;

    searchContainer.innerHTML = `
      <div class="search-wrapper">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-label--s" for="search-input">
            Search guidance and standards
          </label>
          <div class="search-input-wrapper">
            <input class="govuk-input search-input" 
                   id="search-input" 
                   name="search" 
                   type="search" 
                   placeholder="Search principles, standards, patterns..."
                   autocomplete="off"
                   aria-describedby="search-help">
            <button class="search-clear" type="button" aria-label="Clear search">×</button>
          </div>
          <div id="search-help" class="govuk-hint">
            Press "/" to focus search, or use "tag:" to filter by topic
          </div>
        </div>
        
        <div class="search-filters" style="display: none;">
          <fieldset class="govuk-fieldset">
            <legend class="govuk-fieldset__legend govuk-fieldset__legend--s">
              Filter by type
            </legend>
            <div class="govuk-checkboxes govuk-checkboxes--small">
              <div class="govuk-checkboxes__item">
                <input class="govuk-checkboxes__input" id="filter-principles" name="filters" type="checkbox" value="principle">
                <label class="govuk-label govuk-checkboxes__label" for="filter-principles">Principles</label>
              </div>
              <div class="govuk-checkboxes__item">
                <input class="govuk-checkboxes__input" id="filter-standards" name="filters" type="checkbox" value="standard">
                <label class="govuk-label govuk-checkboxes__label" for="filter-standards">Standards</label>
              </div>
              <div class="govuk-checkboxes__item">
                <input class="govuk-checkboxes__input" id="filter-patterns" name="filters" type="checkbox" value="pattern">
                <label class="govuk-label govuk-checkboxes__label" for="filter-patterns">Patterns</label>
              </div>
            </div>
          </fieldset>
        </div>
        
        <div class="search-results" data-search-results></div>
        <div class="search-history" data-search-history style="display: none;"></div>
      </div>
    `;

    this.bindSearchEvents();
  }

  bindSearchEvents() {
    const searchInput = document.getElementById('search-input');
    const searchClear = document.querySelector('.search-clear');
    const searchResults = document.querySelector('[data-search-results]');
    const searchHistory = document.querySelector('[data-search-history]');

    let searchTimeout;

    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        this.performSearch(e.target.value);
      }, 300);
    });

    searchInput.addEventListener('focus', () => {
      if (!searchInput.value) {
        this.showSearchHistory();
      }
    });

    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchResults.innerHTML = '';
      searchHistory.style.display = 'none';
      searchInput.focus();
    });

    // Show filters when search is active
    searchInput.addEventListener('input', (e) => {
      const filters = document.querySelector('.search-filters');
      if (e.target.value.length > 0) {
        filters.style.display = 'block';
      } else {
        filters.style.display = 'none';
      }
    });

    // Filter change events
    document.querySelectorAll('input[name="filters"]').forEach(filter => {
      filter.addEventListener('change', () => {
        if (searchInput.value) {
          this.performSearch(searchInput.value);
        }
      });
    });
  }

  setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Focus search with "/" key
      if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
        const searchInput = document.getElementById('search-input');
        if (searchInput && document.activeElement !== searchInput) {
          e.preventDefault();
          searchInput.focus();
        }
      }

      // Close search with Escape
      if (e.key === 'Escape') {
        const searchInput = document.getElementById('search-input');
        if (searchInput && document.activeElement === searchInput) {
          searchInput.blur();
          document.querySelector('[data-search-results]').innerHTML = '';
        }
      }
    });
  }

  performSearch(query) {
    if (!query.trim()) {
      document.querySelector('[data-search-results]').innerHTML = '';
      return;
    }

    // Add to search history
    this.addToSearchHistory(query);

    // Get active filters
    const activeFilters = Array.from(document.querySelectorAll('input[name="filters"]:checked'))
      .map(filter => filter.value);

    // Perform search
    const results = this.searchContent(query, activeFilters);
    this.displayResults(results, query);
  }

  searchContent(query, filters = []) {
    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
    const results = [];

    this.searchData.forEach(item => {
      let score = 0;
      const content = `${item.title} ${item.content} ${item.tags?.join(' ') || ''}`.toLowerCase();

      // Check if item matches filters
      if (filters.length > 0 && !filters.includes(item.type)) {
        return;
      }

      // Calculate relevance score
      searchTerms.forEach(term => {
        if (item.title.toLowerCase().includes(term)) {
          score += 3; // Title matches are most important
        }
        if (item.content.toLowerCase().includes(term)) {
          score += 1; // Content matches
        }
        if (item.tags?.some(tag => tag.toLowerCase().includes(term))) {
          score += 2; // Tag matches
        }
      });

      if (score > 0) {
        results.push({
          ...item,
          score,
          highlightedTitle: this.highlightMatches(item.title, searchTerms),
          highlightedContent: this.highlightMatches(item.content.substring(0, 200), searchTerms)
        });
      }
    });

    return results.sort((a, b) => b.score - a.score).slice(0, 10);
  }

  highlightMatches(text, terms) {
    let highlighted = text;
    terms.forEach(term => {
      const regex = new RegExp(`(${term})`, 'gi');
      highlighted = highlighted.replace(regex, '<mark>$1</mark>');
    });
    return highlighted;
  }

  displayResults(results, query) {
    const container = document.querySelector('[data-search-results]');
    
    if (results.length === 0) {
      container.innerHTML = `
        <div class="search-no-results">
          <p class="govuk-body">No results found for "<strong>${query}</strong>"</p>
          <p class="govuk-body-s">Try:</p>
          <ul class="govuk-list govuk-list--bullet">
            <li>Using different keywords</li>
            <li>Checking your spelling</li>
            <li>Using more general terms</li>
          </ul>
        </div>
      `;
      return;
    }

    const resultsHtml = results.map(result => `
      <div class="search-result">
        <h3 class="govuk-heading-s">
          <a href="${result.url}" class="govuk-link">${result.highlightedTitle}</a>
        </h3>
        <p class="govuk-body-s">${result.highlightedContent}...</p>
        <div class="search-result-meta">
          <span class="govuk-tag govuk-tag--${result.type === 'principle' ? 'blue' : result.type === 'standard' ? 'green' : 'purple'}">
            ${result.type}
          </span>
          ${result.tags ? result.tags.map(tag => `<span class="govuk-tag govuk-tag--grey">${tag}</span>`).join(' ') : ''}
        </div>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="search-results-header">
        <p class="govuk-body-s">${results.length} result${results.length !== 1 ? 's' : ''} for "<strong>${query}</strong>"</p>
      </div>
      ${resultsHtml}
    `;
  }

  addToSearchHistory(query) {
    let history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    history = history.filter(item => item !== query);
    history.unshift(query);
    history = history.slice(0, 5); // Keep only last 5 searches
    localStorage.setItem('searchHistory', JSON.stringify(history));
  }

  loadSearchHistory() {
    const history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    const container = document.querySelector('[data-search-history]');
    
    if (history.length === 0) return;

    container.innerHTML = `
      <div class="search-history-header">
        <p class="govuk-body-s">Recent searches:</p>
      </div>
      ${history.map(query => `
        <button class="search-history-item" data-query="${query}">
          ${query}
        </button>
      `).join('')}
    `;

    // Bind click events
    container.querySelectorAll('.search-history-item').forEach(button => {
      button.addEventListener('click', (e) => {
        const query = e.target.dataset.query;
        document.getElementById('search-input').value = query;
        this.performSearch(query);
      });
    });
  }

  showSearchHistory() {
    const history = document.querySelector('[data-search-history]');
    if (history && history.innerHTML) {
      history.style.display = 'block';
    }
  }
}

// Initialize enhanced search
document.addEventListener('DOMContentLoaded', () => {
  new EnhancedSearch();
});
