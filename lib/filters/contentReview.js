
export function addContentReviewData(collection) {
  return collection.map(item => {
    const lastModified = new Date(item.date);
    const now = new Date();
    const daysSinceUpdate = Math.floor((now - lastModified) / (1000 * 60 * 60 * 24));
    
    // Flag content for review if older than 12 months
    const needsReview = daysSinceUpdate > 365;
    const staleness = daysSinceUpdate > 730 ? 'stale' : 
                     daysSinceUpdate > 365 ? 'needs-review' : 'fresh';
    
    return {
      ...item,
      daysSinceUpdate,
      needsReview,
      staleness
    };
  });
}
