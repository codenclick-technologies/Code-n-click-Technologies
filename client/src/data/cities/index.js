import { cityRegistry } from './registry.js';
import { validateCityData } from './types.js';

/**
 * Returns all cities in the registry (published and drafts).
 */
export function getAllCities() {
  return cityRegistry;
}

/**
 * Returns only published cities that meet our uniqueness and quality criteria.
 */
export function getPublishedCities() {
  return cityRegistry.filter(city => city.published === true);
}

/**
 * Finds a published city by its URL slug.
 * Case-insensitive lookup with strict publishing gate.
 */
export function getCityBySlug(slug) {
  if (!slug) return null;
  const cleanSlug = slug.toLowerCase().trim();
  const city = cityRegistry.find(c => c.slug.toLowerCase() === cleanSlug);
  
  if (city && city.published) {
    return city;
  }
  return null;
}

/**
 * Resolves related nearby cities for contextual cross-linking.
 */
export function getRelatedCities(currentSlug) {
  const currentCity = getCityBySlug(currentSlug);
  if (!currentCity || !Array.isArray(currentCity.nearbyCities)) {
    return [];
  }

  return currentCity.nearbyCities
    .map(nearby => {
      const fullCity = cityRegistry.find(c => c.slug === nearby.slug && c.published);
      return fullCity || null;
    })
    .filter(Boolean);
}

/**
 * Returns cities currently in draft/staged state for roadmap visibility.
 */
export function getDraftCities() {
  return cityRegistry.filter(city => !city.published);
}

export { cityRegistry, validateCityData };
