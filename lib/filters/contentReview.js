
const { DateTime } = require('luxon');

// Content quality metrics
const QUALITY_THRESHOLDS = {
  minWordCount: 100,
  maxWordCount: 2000,
  idealReadingTime: { min: 2, max: 10 }, // minutes
  stalenessMonths: 12
};

// Content validation rules
const VALIDATION_RULES = {
  title: {
    minLength: 10,
    maxLength: 100,
    pattern: /^[A-Z].+[^.]$/
  },
  headings: {
    mustHaveH2: true,
    maxNesting: 4
  },
  links: {
    mustBeHTTPS: true,
    noDeadLinks: true
  }
};

function analyzeContent(content, metadata = {}) {
  const analysis = {
    wordCount: 0,
    readingTime: 0,
    headings: [],
    links: [],
    issues: [],
    score: 0,
    lastUpdated: null,
    isStale: false
  };

  if (!content) {
    analysis.issues.push('Content is empty');
    return analysis;
  }

  // Word count and reading time
  const words = content.match(/\b\w+\b/g) || [];
  analysis.wordCount = words.length;
  analysis.readingTime = Math.ceil(words.length / 200); // 200 WPM average

  // Extract headings
  const headingMatches = content.match(/^#{1,6}\s+.+$/gm) || [];
  analysis.headings = headingMatches.map(h => {
    const level = h.match(/^#+/)[0].length;
    const text = h.replace(/^#+\s+/, '');
    return { level, text };
  });

  // Extract links
  const linkMatches = content.match(/\[([^\]]+)\]\(([^)]+)\)/g) || [];
  analysis.links = linkMatches.map(link => {
    const match = link.match(/\[([^\]]+)\]\(([^)]+)\)/);
    return { text: match[1], url: match[2] };
  });

  // Check staleness
  if (metadata.date) {
    const lastUpdate = DateTime.fromJSDate(new Date(metadata.date));
    const monthsOld = DateTime.now().diff(lastUpdate, 'months').months;
    analysis.lastUpdated = lastUpdate;
    analysis.isStale = monthsOld > QUALITY_THRESHOLDS.stalenessMonths;
    
    if (analysis.isStale) {
      analysis.issues.push(`Content is ${Math.round(monthsOld)} months old and may be stale`);
    }
  }

  // Validate content quality
  validateContentQuality(analysis, metadata);
  
  // Calculate overall score
  analysis.score = calculateQualityScore(analysis);

  return analysis;
}

function validateContentQuality(analysis, metadata) {
  // Word count validation
  if (analysis.wordCount < QUALITY_THRESHOLDS.minWordCount) {
    analysis.issues.push(`Content too short (${analysis.wordCount} words, minimum ${QUALITY_THRESHOLDS.minWordCount})`);
  }
  
  if (analysis.wordCount > QUALITY_THRESHOLDS.maxWordCount) {
    analysis.issues.push(`Content too long (${analysis.wordCount} words, maximum ${QUALITY_THRESHOLDS.maxWordCount})`);
  }

  // Reading time validation
  if (analysis.readingTime < QUALITY_THRESHOLDS.idealReadingTime.min) {
    analysis.issues.push(`Reading time too short (${analysis.readingTime} min)`);
  }
  
  if (analysis.readingTime > QUALITY_THRESHOLDS.idealReadingTime.max) {
    analysis.issues.push(`Reading time too long (${analysis.readingTime} min)`);
  }

  // Title validation
  if (metadata.title) {
    const title = metadata.title;
    if (title.length < VALIDATION_RULES.title.minLength) {
      analysis.issues.push('Title too short');
    }
    if (title.length > VALIDATION_RULES.title.maxLength) {
      analysis.issues.push('Title too long');
    }
    if (!VALIDATION_RULES.title.pattern.test(title)) {
      analysis.issues.push('Title should start with capital letter and not end with period');
    }
  }

  // Heading structure validation
  if (VALIDATION_RULES.headings.mustHaveH2 && !analysis.headings.some(h => h.level === 2)) {
    analysis.issues.push('Content should have at least one H2 heading for better structure');
  }

  const maxLevel = Math.max(...analysis.headings.map(h => h.level), 0);
  if (maxLevel > VALIDATION_RULES.headings.maxNesting) {
    analysis.issues.push(`Heading nesting too deep (max level ${VALIDATION_RULES.headings.maxNesting})`);
  }

  // Link validation
  analysis.links.forEach(link => {
    if (VALIDATION_RULES.links.mustBeHTTPS && link.url.startsWith('http://')) {
      analysis.issues.push(`Insecure link found: ${link.url}`);
    }
  });
}

function calculateQualityScore(analysis) {
  let score = 100;

  // Deduct points for issues
  score -= analysis.issues.length * 10;

  // Bonus for good word count
  if (analysis.wordCount >= QUALITY_THRESHOLDS.minWordCount && 
      analysis.wordCount <= QUALITY_THRESHOLDS.maxWordCount) {
    score += 10;
  }

  // Bonus for good structure
  if (analysis.headings.length >= 2) {
    score += 5;
  }

  // Penalty for staleness
  if (analysis.isStale) {
    score -= 20;
  }

  return Math.max(0, Math.min(100, score));
}

function generateContentReport(collection) {
  const report = {
    totalDocs: collection.length,
    averageScore: 0,
    staleCount: 0,
    issueCount: 0,
    categories: {}
  };

  let totalScore = 0;
  
  collection.forEach(item => {
    const analysis = analyzeContent(item.content, item.data);
    
    totalScore += analysis.score;
    if (analysis.isStale) report.staleCount++;
    if (analysis.issues.length > 0) report.issueCount++;

    // Categorize by type
    const category = item.data.tags?.[0] || 'uncategorized';
    if (!report.categories[category]) {
      report.categories[category] = { count: 0, averageScore: 0 };
    }
    report.categories[category].count++;
  });

  report.averageScore = Math.round(totalScore / collection.length);

  return report;
}

module.exports = {
  analyzeContent,
  generateContentReport,
  QUALITY_THRESHOLDS,
  VALIDATION_RULES
};
