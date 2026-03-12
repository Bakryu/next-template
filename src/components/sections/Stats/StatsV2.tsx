'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography } from '@/components/ui/Typography';

/**
 * Stats V2 — Inline Counters
 * Minimal single-row stat counters with dividers.
 */
export function StatsSectionV2() {
  const t = useTranslations('stats');
  const stats = siteConfig.stats;

  if (!stats?.length) return null;

  return (
    <Section id="stats" variant="muted" padding="md">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center divide-x divide-border/40"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="px-8 py-6 text-center sm:px-12"
            >
              <Typography variant="h2" className="text-secondary">
                {stat.value}
              </Typography>
              <Typography variant="overline" className="mt-2 text-muted-foreground">
                {stat.label}
              </Typography>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
