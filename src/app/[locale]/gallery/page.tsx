import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site.config';
import { sanityFetch } from '@/lib/sanity/client';
import { galleryQuery } from '@/lib/sanity/queries';
import { Container } from '@/components/layout/Container';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import { Typography } from '@/components/ui/Typography';
import type { GalleryItem } from '@/types/gallery.types';
import { Section } from '@/components/layout/Section';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'gallery' });
  return {
    title: t('title'),
  };
}

/**
 * Generate placeholder gallery data when Sanity is not configured.
 */
function getStaticGalleryItems(): GalleryItem[] {
  const { gallery } = siteConfig;
  const categories = gallery.categories.filter((c) => c !== 'All');

  return Array.from({ length: 12 }, (_, i) => ({
    id: `static-${i + 1}`,
    title: `Gallery Item ${i + 1}`,
    description: `A beautiful example of our work in ${categories[i % categories.length]}.`,
    category: categories[i % categories.length],
    imageUrl: '',
    width: 800,
    height: 600,
    date: new Date(Date.now() - i * 86400000).toISOString(),
    featured: i < 3,
    price: siteConfig.business.type !== 'service-provider' ? 25 + i * 10 : undefined,
  }));
}

export default async function GalleryPage() {
  // Try Sanity first, fall back to static data
  const sanityItems = await sanityFetch<GalleryItem[]>(galleryQuery);
  const items = sanityItems || getStaticGalleryItems();

  const showAddToCart = ['florist', 'bakery', 'boutique'].includes(siteConfig.business.type);

  return (
    <Section id="gallery">
      <Container>
        {/* Page header */}
        <div className="mb-14">
          <Typography variant="overline" as="span" color="secondary">
            {siteConfig.gallery.title}
          </Typography>
          <Typography variant="h1" className="mt-4">
            {siteConfig.gallery.title}
          </Typography>
          {siteConfig.gallery.subtitle && (
            <Typography className="mt-4 max-w-xl" color="muted">
              {siteConfig.gallery.subtitle}
            </Typography>
          )}
          <div className="mt-6 h-0.5 w-16 bg-gradient-to-r from-secondary to-transparent" />
        </div>

        <GalleryGrid items={items} showAddToCart={showAddToCart} />
      </Container>
    </Section>
  );
}
