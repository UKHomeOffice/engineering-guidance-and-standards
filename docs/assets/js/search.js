
class ContentSearch {
  constructor() {
    this.searchData = [];
    this.searchInput = document.getElementById('search-input');
    this.searchResults = document.getElementById('search-results');
    this.init();
  }

  async init() {
    try {
      const response = await fetch('/search.json');
      this.searchData = await response.json();
      this.setupEventListeners();
    } catch (error) {
      console.error('Failed to load search data:', error);
    }
  }

  setupEventListeners() {
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.performSearch(e.target.value);
      });
    }
  }

  performSearch(query) {
    if (query.length < 2) {
      this.clearResults();
      return;
    }

    const results = this.searchData.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.content.toLowerCase().includes(query.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    ).slice(0, 10);

    this.displayResults(results);
  }

  displayResults(results) {
    if (!this.searchResults) return;

    if (results.length === 0) {
      this.searchResults.innerHTML = '<p>No results found</p>';
      return;
    }

    const resultsHTML = results.map(result => `
      <div class="search-result">
        <h3><a href="${result.url}">${result.title}</a></h3>
        <p>${result.excerpt}</p>
        <div class="tags">
          ${result.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
    `).join('');

    this.searchResults.innerHTML = resultsHTML;
  }

  clearResults() {
    if (this.searchResults) {
      this.searchResults.innerHTML = '';
    }
  }
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ContentSearch();
});
