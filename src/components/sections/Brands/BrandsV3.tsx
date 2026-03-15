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
 * Brands V3 — Dark section with logo cards + name + short description.
 */
export function BrandsSectionV3() {
  const t = useTranslations('brands');
  const items = siteConfig.brands;

  if (!items?.length) return null;

  return (
    <Section id="brands" variant="dark" padding="lg">
      <Container>
        {/* Header */}
        <div className="mb-12 text-center">
          <MotionTypography variant="overline" as="span" className="text-secondary">
            {t('overline')}
          </MotionTypography>
          <MotionTypography variant="h2" className="mt-3">
            {t('heading')}
          </MotionTypography>
          <MotionTypography variant="subtitle1" className="mx-auto mt-4 max-w-xl opacity-60">
            {t('subtitle')}
          </MotionTypography>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/8"
            >
              {/* Logo / name */}
              <div className="flex h-12 w-full items-center">
                {brand.logo ? (
                  <div className="relative h-8 w-full opacity-60 brightness-200 grayscale transition-all duration-300 group-hover:opacity-100">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain object-left"
                      sizes="(max-width: 640px) 80vw, 25vw"
                    />
                  </div>
                ) : (
                  <Typography variant="label" className="text-base font-semibold">
                    {brand.name}
                  </Typography>
                )}
              </div>

              {/* Description */}
              {brand.description && (
                <Typography variant="body2" className="line-clamp-3 text-sm opacity-50">
                  {brand.description}
                </Typography>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
