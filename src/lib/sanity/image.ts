import imageUrlBuilder from '@sanity/image-url';
import type { SanityImage } from '@/types/sanity.types';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

const builder = projectId
  ? imageUrlBuilder({ projectId, dataset })
  : null;

/**
 * Generate an optimized image URL from a Sanity image reference.
 * Returns a placeholder if Sanity is not configured.
 */
export function sanityImageUrl(image: SanityImage | null | undefined) {
  if (!image || !builder) {
    return {
      url: (width = 800, height = 600) =>
        `https://placehold.co/${width}x${height}/e2e8f0/64748b?text=Placeholder`,
      width: (w: number) => ({ url: () => `https://placehold.co/${w}x${Math.round(w * 0.75)}/e2e8f0/64748b` }),
    };
  }

  return builder.image(image);
}

/**
 * Get a simple URL string from a Sanity image with specific dimensions.
 */
export function getSanityImageUrl(
  image: SanityImage | null | undefined,
  width: number = 800,
  height?: number,
): string {
  if (!image || !builder) {
    const h = height || Math.round(width * 0.75);
    return `https://placehold.co/${width}x${h}/e2e8f0/64748b?text=Placeholder`;
  }

  let url = builder.image(image).width(width);
  if (height) {
    url = url.height(height);
  }
  return url.auto('format').quality(80).url();
}
