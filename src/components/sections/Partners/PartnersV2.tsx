'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography } from '@/components/ui/Typography';

/**
 * Partners V2 — Scrolling Marquee
 * Infinite scrolling marquee of partner names with subtle styling.
 */
export function PartnersSectionV2() {
  const t = useTranslations('partners');
  const partners = siteConfig.partners;

  if (!partners?.length) return null;

  const doubled = [...partners, ...partners];

  return (
    <Section id="partners" variant="muted" padding="md">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <Typography variant="overline" className="text-secondary">
            {t('title')}
          </Typography>
        </motion.div>
      </Container>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-muted/40 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-muted/40 to-transparent" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex gap-12 whitespace-nowrap"
        >
          {doubled.map((partner, index) => (
            <div
              key={index}
              className="flex h-16 items-center px-6"
            >
              <Typography variant="large" as="span" weight="bold" className="font-heading text-foreground/30">
                {partner.name}
              </Typography>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
