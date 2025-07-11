
(function() {
  'use strict';

  let searchIndex = [];
  let filteredResults = [];
  
  // Enhanced search configuration
  const searchConfig = {
    minSearchLength: 2,
    maxResults: 50,
    highlightClass: 'search-highlight',
    categories: ['principles', 'patterns', 'standards']
  };

  // Initialize search
  function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const categoryFilters = document.querySelectorAll('.category-filter');
    
    if (!searchInput) return;

    // Load search index
    loadSearchIndex();
    
    // Add event listeners
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    searchInput.addEventListener('keydown', handleKeyNavigation);
    
    categoryFilters.forEach(filter => {
      filter.addEventListener('change', handleCategoryFilter);
    });
  }

  // Load search index from JSON
  async function loadSearchIndex() {
    try {
      const response = await fetch('/search.json');
      searchIndex = await response.json();
    } catch (error) {
      console.error('Failed to load search index:', error);
    }
  }

  // Enhanced search with ranking
  function performSearch(query, categories = []) {
    if (!query || query.length < searchConfig.minSearchLength) {
      return [];
    }

    const queryLower = query.toLowerCase();
    const words = queryLower.split(/\s+/).filter(word => word.length > 1);
    
    return searchIndex
      .map(item => {
        let score = 0;
        const titleLower = item.title?.toLowerCase() || '';
        const contentLower = item.content?.toLowerCase() || '';
        const tagsLower = (item.tags || []).join(' ').toLowerCase();
        
        // Title matches (highest priority)
        if (titleLower.includes(queryLower)) score += 100;
        words.forEach(word => {
          if (titleLower.includes(word)) score += 50;
        });
        
        // Tag matches
        if (tagsLower.includes(queryLower)) score += 75;
        words.forEach(word => {
          if (tagsLower.includes(word)) score += 25;
        });
        
        // Content matches
        if (contentLower.includes(queryLower)) score += 20;
        words.forEach(word => {
          if (contentLower.includes(word)) score += 10;
        });
        
        // Category filter
        if (categories.length > 0 && !categories.some(cat => item.url?.includes(cat))) {
          score = 0;
        }
        
        return { ...item, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, searchConfig.maxResults);
  }

  // Handle search input
  function handleSearch(event) {
    const query = event.target.value.trim();
    const selectedCategories = getSelectedCategories();
    
    if (query.length < searchConfig.minSearchLength) {
      hideSearchResults();
      return;
    }

    const results = performSearch(query, selectedCategories);
    displaySearchResults(results, query);
  }

  // Display search results with highlighting
  function displaySearchResults(results, query) {
    const searchResults = document.getElementById('search-results');
    if (!searchResults) return;

    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
      searchResults.style.display = 'block';
      return;
    }

    const resultsHTML = results.map((result, index) => `
      <div class="search-result" data-index="${index}">
        <h3><a href="${result.url}">${highlightText(result.title, query)}</a></h3>
        <p class="search-excerpt">${highlightText(truncateText(result.content, 150), query)}</p>
        <div class="search-meta">
          ${result.tags?.map(tag => `<span class="tag">${tag}</span>`).join('') || ''}
        </div>
      </div>
    `).join('');

    searchResults.innerHTML = resultsHTML;
    searchResults.style.display = 'block';
  }

  // Utility functions
  function highlightText(text, query) {
    if (!text || !query) return text;
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return text.replace(regex, `<mark class="${searchConfig.highlightClass}">$1</mark>`);
  }

  function truncateText(text, length) {
    if (!text || text.length <= length) return text;
    return text.substring(0, length) + '...';
  }

  function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  function getSelectedCategories() {
    return Array.from(document.querySelectorAll('.category-filter:checked'))
      .map(filter => filter.value);
  }

  function hideSearchResults() {
    const searchResults = document.getElementById('search-results');
    if (searchResults) {
      searchResults.style.display = 'none';
    }
  }

  function handleKeyNavigation(event) {
    // Add keyboard navigation for search results
    const results = document.querySelectorAll('.search-result');
    if (results.length === 0) return;

    // Implementation for arrow key navigation
    // This would enhance accessibility
  }

  function handleCategoryFilter() {
    const searchInput = document.getElementById('search-input');
    if (searchInput && searchInput.value.trim()) {
      handleSearch({ target: searchInput });
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSearch);
  } else {
    initSearch();
  }
})();
