'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';

/**
 * Brands V2 — Auto-scrolling marquee strip (pure CSS, no JS dependency).
 * Two mirrored rows scroll in opposite directions.
 */
export function BrandsSectionV2() {
  const t = useTranslations('brands');
  const items = siteConfig.brands;

  if (!items?.length) return null;

  // Duplicate for infinite scroll illusion
  const doubled = [...items, ...items];

  return (
    <Section id="brands" variant="default" padding="lg">
      <Container>
        {/* Header */}
        <div className="mb-12 text-center">
          <MotionTypography variant="overline" as="span">
            {t('overline')}
          </MotionTypography>
          <MotionTypography variant="h2" className="mt-3">
            {t('heading')}
          </MotionTypography>
          <MotionTypography variant="subtitle1" className="text-muted mx-auto mt-4 max-w-xl">
            {t('subtitle')}
          </MotionTypography>
        </div>
      </Container>

      {/* Full-width marquee tracks */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden"
      >
        {/* Row 1 — scroll left */}
        <div className="relative flex overflow-hidden py-3">
          <div className="flex animate-[marquee_30s_linear_infinite] gap-4 whitespace-nowrap">
            {doubled.map((brand, i) => (
              <BrandChip key={`a-${i}`} brand={brand} />
            ))}
          </div>
        </div>

        {/* Row 2 — scroll right */}
        <div className="relative flex overflow-hidden py-3">
          <div className="flex animate-[marquee_25s_linear_infinite_reverse] gap-4 whitespace-nowrap">
            {doubled.map((brand, i) => (
              <BrandChip key={`b-${i}`} brand={brand} />
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

function BrandChip({ brand }: { brand: { name: string; logo?: string } }) {
  return (
    <div className="border-border inline-flex h-14 w-36 shrink-0 items-center justify-center rounded-xl border bg-white px-4 shadow-sm">
      {brand.logo ? (
        <div className="relative h-7 w-full opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0">
          <Image src={brand.logo} alt={brand.name} fill className="object-contain" sizes="144px" />
        </div>
      ) : (
        <Typography
          variant="label"
          className="text-muted truncate text-center text-xs font-semibold"
        >
          {brand.name}
        </Typography>
      )}
    </div>
  );
}
