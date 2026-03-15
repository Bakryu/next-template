'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Medal } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';
import { Badge } from '@/components/ui/Badge';

/**
 * Certificates V2 — Horizontal logo/icon strip with year badges.
 * All awards displayed inline, centred, with year overlay badge.
 */
export function CertificatesSectionV2() {
  const t = useTranslations('certificates');
  const items = siteConfig.certificates;

  if (!items?.length) return null;

  return (
    <Section id="certificates" variant="default" padding="lg">
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

        {/* Horizontal strip */}
        <div className="border-border flex flex-wrap justify-center gap-px overflow-hidden rounded-2xl border">
          {items.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group bg-background hover:bg-muted/40 relative flex min-w-[180px] flex-1 flex-col items-center gap-3 px-6 py-8 text-center transition-colors"
            >
              <div className="bg-primary/10 ring-primary/20 group-hover:bg-primary/20 flex h-14 w-14 items-center justify-center rounded-full ring-1 transition-all">
                <Medal className="text-primary h-7 w-7" />
              </div>
              <div>
                <Typography variant="label" className="text-sm leading-snug font-semibold">
                  {cert.title}
                </Typography>
                <Typography variant="body2" className="text-muted mt-0.5 text-xs">
                  {cert.issuer}
                </Typography>
              </div>
              <Badge variant="outline" className="text-xs">
                {cert.year}
              </Badge>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
