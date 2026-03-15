'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Award, Star } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';
import { Badge } from '@/components/ui/Badge';

/**
 * Certificates V3 — Dark section.
 * First certificate large + featured (left column), remaining in 2-col grid (right column).
 */
export function CertificatesSectionV3() {
  const t = useTranslations('certificates');
  const items = siteConfig.certificates;

  if (!items?.length) return null;

  const [featured, ...rest] = items;

  return (
    <Section id="certificates" variant="dark" padding="lg">
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

        {/* Content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-8"
          >
            <div className="bg-primary/20 flex h-16 w-16 items-center justify-center rounded-2xl">
              <Star className="text-primary h-8 w-8" />
            </div>
            <div className="mt-auto pt-10">
              <Badge variant="secondary" className="mb-3">
                {featured.year}
              </Badge>
              <Typography variant="h3" className="leading-tight">
                {featured.title}
              </Typography>
              <Typography variant="body1" className="mt-2 opacity-60">
                {featured.issuer}
              </Typography>
            </div>
          </motion.div>

          {/* Rest grid */}
          <div className="grid grid-cols-1 content-start gap-4 sm:grid-cols-2">
            {rest.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/8"
              >
                <div className="bg-primary/15 flex h-10 w-10 items-center justify-center rounded-lg">
                  <Award className="text-primary h-5 w-5" />
                </div>
                <div>
                  <Typography variant="label" className="text-sm leading-snug font-semibold">
                    {cert.title}
                  </Typography>
                  <Typography variant="body2" className="mt-0.5 text-xs opacity-50">
                    {cert.issuer}
                  </Typography>
                </div>
                <Badge variant="outline" className="w-fit border-white/20 text-xs">
                  {cert.year}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
