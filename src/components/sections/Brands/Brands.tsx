'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';
import { MobileCarousel } from '@/components/ui/MobileCarousel';

/**
 * Brands V1 — Clean logo grid.
 * Logo image with text fallback, uniform grayscale → colour on hover.
 */
export function BrandsSection() {
  const t = useTranslations('brands');
  const items = siteConfig.brands;

  if (!items?.length) return null;

  return (
    <Section id="brands" variant="muted" padding="lg">
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

        {/* Mobile carousel */}
        <MobileCarousel slideWidth="w-[40vw]" className="-mx-4 sm:hidden">
          {items.map((brand, i) => (
            <div
              key={i}
              className="border-border flex aspect-square items-center justify-center rounded-xl border bg-white p-5"
            >
              {brand.logo ? (
                <div className="relative h-8 w-full opacity-60 grayscale">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    sizes="40vw"
                  />
                </div>
              ) : (
                <Typography
                  variant="label"
                  className="text-muted text-center text-xs font-semibold"
                >
                  {brand.name}
                </Typography>
              )}
            </div>
          ))}
        </MobileCarousel>

        {/* Desktop grid */}
        <div className="hidden grid-cols-2 gap-4 sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {items.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group border-border flex items-center justify-center rounded-xl border bg-white p-6 transition-shadow hover:shadow-sm"
            >
              {brand.logo ? (
                <div className="relative h-10 w-full opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 40vw, 20vw"
                  />
                </div>
              ) : (
                <Typography
                  variant="label"
                  className="text-muted group-hover:text-foreground text-sm font-semibold transition-colors"
                >
                  {brand.name}
                </Typography>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
