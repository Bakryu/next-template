'use client';

import React from 'react';
import { Link } from '@/lib/i18n/routing';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';

/**
 * Gallery V4 — Bento Gallery
 * Asymmetric bento-grid layout with category labels and hover reveals.
 */
export function GalleryPreviewSectionV4() {
  const t = useTranslations('gallery');
  const { gallery } = siteConfig;

  const categories = gallery.categories.filter((c) => c !== 'All').slice(0, 4);

  const gridItems = [
    { span: 'sm:col-span-2 sm:row-span-2', label: categories[0] },
    { span: '', label: categories[1] },
    { span: '', label: categories[2] },
    { span: 'sm:col-span-2', label: categories[3] || categories[0] },
    { span: '', label: categories[1] || categories[0] },
  ];

  return (
    <Section id="gallery" padding="lg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <Typography variant="overline" as="span" className="text-secondary">
              {t('title')}
            </Typography>
            <Typography variant="h2" className="mt-4">
              {gallery.subtitle || t('subtitle')}
            </Typography>
          </div>
          <Button variant="outline" rounded="full" className="gap-2 group shrink-0" asChild>
            <Link href="/gallery">
              {t('viewAll')}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3">
          {gridItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className={`group relative overflow-hidden rounded-3xl bg-muted ${item.span}`}
            >
              <div
                className={`flex items-center justify-center text-muted-foreground/20 ${
                  index === 0 ? 'aspect-square' : 'aspect-[4/3]'
                }`}
              >
                <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="p-6">
                  <Typography variant="overline" as="span" className="text-white/60">
                    {item.label}
                  </Typography>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
