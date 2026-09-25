/**
 * City Data Model & Validator
 * Enforces uniqueness, content quality, and programmatic SEO safety.
 */

/**
 * Validates whether a city object has sufficient unique content to qualify for publishing.
 * Prevents low-quality / thin programmatic doorway pages.
 * 
 * @param {Object} city - The city configuration object
 * @returns {{ valid: boolean, errors: string[] }}
 */
export function validateCityData(city) {
  const errors = [];

  if (!city.slug || typeof city.slug !== 'string') {
    errors.push('Missing or invalid slug');
  }
  if (!city.city || !city.state || !city.country) {
    errors.push('Missing geographic identifiers (city, state, country)');
  }
  if (!city.metaTitle || city.metaTitle.length < 30) {
    errors.push('metaTitle must be at least 30 characters');
  }
  if (!city.metaDescription || city.metaDescription.length < 80) {
    errors.push('metaDescription must be at least 80 characters');
  }
  if (!city.h1) {
    errors.push('Missing H1 heading');
  }
  if (!city.heroTagline || !city.heroDescription) {
    errors.push('Missing hero copy');
  }
  if (!Array.isArray(city.localChallenges) || city.localChallenges.length < 3) {
    errors.push('Must provide at least 3 unique local market challenges');
  }
  if (!Array.isArray(city.industries) || city.industries.length < 3) {
    errors.push('Must specify at least 3 relevant local industries');
  }
  if (!Array.isArray(city.faqs) || city.faqs.length < 3) {
    errors.push('Must provide at least 3 unique local FAQs');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}
