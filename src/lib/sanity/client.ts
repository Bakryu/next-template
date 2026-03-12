import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

/**
 * Check if Sanity is configured. If not, the site runs in static mode
 * using data from site.config.ts.
 */
export const isSanityConfigured = !!projectId;

/**
 * Sanity client for fetching data.
 * Returns null if Sanity is not configured.
 */
export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-12-01',
      useCdn: true,
    })
  : null;

/**
 * Sanity client with auth token for mutations and preview.
 */
export const sanityWriteClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-12-01',
      useCdn: false,
      token: process.env.SANITY_API_TOKEN,
    })
  : null;

/**
 * Fetch from Sanity with fallback.
 * Returns null if Sanity is not configured, allowing caller to use static data.
 */
export async function sanityFetch<T>(
  query: string,
  params?: Record<string, unknown>,
): Promise<T | null> {
  if (!sanityClient) return null;

  try {
    return await sanityClient.fetch<T>(query, params ?? {});
  } catch (error) {
    console.error('Sanity fetch error:', error);
    return null;
  }
}
