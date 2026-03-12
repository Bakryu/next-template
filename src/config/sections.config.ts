import type { SectionId } from '@/types/site.types';
import { siteConfig } from './site.config';

/**
 * Sections rendered on the homepage, in order.
 * Reads from siteConfig.sections — this file provides the mapping
 * from section IDs to their lazy-loaded React components.
 */

export interface SectionDefinition {
  id: SectionId;
  /** Whether this section needs client-side interactivity */
  isClient?: boolean;
}

export function getHomepageSections(): SectionDefinition[] {
  return siteConfig.sections.map((id) => ({
    id,
    isClient: ['gallery', 'testimonials', 'faq', 'contact', 'map', 'team', 'pricing', 'features', 'partners', 'stats'].includes(id),
  }));
}
