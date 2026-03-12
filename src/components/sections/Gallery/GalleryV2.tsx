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

/**
 * Gallery V2 — Minimal Masonry
 * Clean centered heading with masonry-like grid and minimal overlay.
 */
export function GalleryPreviewSectionV2() {
  const t = useTranslations('gallery');
  const { gallery } = siteConfig;

  const placeholders = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    aspect: i % 3 === 0 ? 'aspect-[3/4]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]',
  }));

  return (
    <Section id="gallery" variant="muted" padding="lg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <Typography variant="overline" as="span" className="text-secondary">
            {t('title')}
          </Typography>
          <Typography variant="h2" className="mt-4">
            {gallery.subtitle || t('subtitle')}
          </Typography>
        </motion.div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {placeholders.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="mb-4 break-inside-avoid"
            >
              <div
                className={`${item.aspect} overflow-hidden rounded-2xl bg-muted transition-transform duration-500 hover:scale-[1.02]`}
              >
                <div className="flex h-full w-full items-center justify-center text-muted-foreground/30">
                  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button variant="outline" rounded="full" className="gap-2 group" asChild>
            <Link href="/gallery">
              {t('viewAll')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
