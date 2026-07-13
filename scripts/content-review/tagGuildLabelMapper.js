// Tag to Guild Label Mapping Helper
// This module provides a function to map page tags to associated guild GitHub labels.
// Extend the TAG_TO_GUILD_LABEL_MAP as needed.

export const TAG_TO_GUILD_LABEL_MAP = {
  'API Design': '',
  'Accessibility': 'accessibility',
  'Artificial intelligence (AI)': '',
  'Automation': '',
  'Build, release and deploy': 'Build release deploy',
  'CI/CD': '',
  'Dependencies': 'dependencies',
  'Developed with assistance from Copilot': '',
  'Documentation': 'documentation',
  'Encryption': '',
  'Example': '',
  'Generative AI': '',
  'Infrastructure': '',
  'Logging': '',
  'Low code': '',
  'Maintainability': '',
  'Monitoring': '',
  'Observability': 'Observability',
  'Quality engineering': 'Quality engineering',
  'Reliability': '',
  'Reusability': '',
  'SRE': '',
  'Secure development': 'Secure development',
  'Security': '',
  'Software design': 'Software design',
  'Source management': 'Source management',
  'Tag one': '',
  'Tag two': '',
  'Ways of working': 'Ways of working',
};

/**
 * Given an array of tags, returns an array of associated guild GitHub labels.
 * @param {string[]} tags - The tags to map.
 * @returns {string[]} - The corresponding GitHub labels for guilds.
 */
export function mapTagsToGuildLabels(tags) {
  if (!Array.isArray(tags)) return [];
  return tags
    .map(tag => TAG_TO_GUILD_LABEL_MAP[tag.trim?.() ?? tag])
    .filter(Boolean);
}
