'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Award } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';
import { Badge } from '@/components/ui/Badge';
import { MobileCarousel } from '@/components/ui/MobileCarousel';

/**
 * Certificates V1 — Light grid of award cards.
 * Icon + title + issuer + year badge per card.
 */
export function CertificatesSection() {
  const t = useTranslations('certificates');
  const items = siteConfig.certificates;

  if (!items?.length) return null;

  return (
    <Section id="certificates" variant="muted" padding="lg">
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
        <MobileCarousel slideWidth="w-[78vw]" className="-mx-4 sm:hidden">
          {items.map((cert, i) => (
            <div
              key={i}
              className="border-border flex h-full flex-col items-start gap-4 rounded-2xl border bg-white p-6 shadow-sm"
            >
              <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-xl">
                <Award className="text-primary h-6 w-6" />
              </div>
              <div className="flex-1">
                <Typography variant="h5" className="leading-snug">
                  {cert.title}
                </Typography>
                <Typography variant="body2" className="text-muted mt-1">
                  {cert.issuer}
                </Typography>
              </div>
              <Badge variant="secondary">{cert.year}</Badge>
            </div>
          ))}
        </MobileCarousel>

        {/* Desktop grid */}
        <div className="hidden grid-cols-1 gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {items.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group border-border flex flex-col items-start gap-4 rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-xl">
                <Award className="text-primary h-6 w-6" />
              </div>
              <div className="flex-1">
                <Typography variant="h5" className="leading-snug">
                  {cert.title}
                </Typography>
                <Typography variant="body2" className="text-muted mt-1">
                  {cert.issuer}
                </Typography>
              </div>
              <Badge variant="secondary">{cert.year}</Badge>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
