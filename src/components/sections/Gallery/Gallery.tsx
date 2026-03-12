'use client';

import React from 'react';
import { Link } from '@/lib/i18n/routing';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';

export function GalleryPreviewSection() {
  const t = useTranslations('gallery');
  const { gallery } = siteConfig;

  // Placeholder images — replaced by Sanity data in production
  const placeholderImages = Array.from({ length: 6 }, (_, i) => ({
    id: `placeholder-${i}`,
    src: `https://images.unsplash.com/photo-${1487530811176 + i * 1000}-3780de880c2d?w=600&h=400&q=80`,
    alt: `Gallery image ${i + 1}`,
  }));

  return (
    <Section id="gallery" variant="muted">
      <Container>
        {/* Header row */}
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg"
          >
            <Typography variant="overline" as="span" className="text-secondary">
              {t('title', { fallback: gallery.title })}
            </Typography>
            <Typography variant="h2" className="mt-4">
              {t('title', { fallback: gallery.title })}
            </Typography>
            {gallery.subtitle && (
              <Typography className="mt-4 text-muted-foreground">{gallery.subtitle}</Typography>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button variant="outline" rounded="full" className="gap-2 group" asChild>
              <Link href="/gallery">
                {t('viewAll')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Masonry-style grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4"
        >
          {placeholderImages.map((img, index) => {
            // Alternate tall / wide items for visual variety
            const isTall = index === 0 || index === 3;
            return (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/10 via-muted to-accent/10 ${
                  isTall ? 'row-span-2 aspect-auto min-h-[320px] md:min-h-[480px]' : 'aspect-square'
                }`}
              >
                {/* Gradient placeholder content */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/8 to-accent/8" />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/50 via-foreground/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <Typography variant="label" as="span" className="px-5 pb-5 text-white">
                    {t('viewMore')}
                  </Typography>
                </div>

                {/* Corner accent on hover */}
                <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/0 transition-all duration-500 group-hover:bg-white/90">
                  <ArrowRight className="h-3.5 w-3.5 text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
