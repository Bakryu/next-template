'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography } from '@/components/ui/Typography';

/**
 * Stats V4 — Full-Width Accent Banner
 * Inline stats on a secondary-colored banner with bold contrast.
 */
export function StatsSectionV4() {
  const t = useTranslations('stats');
  const stats = siteConfig.stats;

  if (!stats?.length) return null;

  return (
    <Section id="stats" padding="sm" className="bg-secondary text-secondary-foreground">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 gap-8 py-8 md:grid-cols-4 md:py-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <Typography variant="h2">{stat.value}</Typography>
              <Typography variant="small" className="mt-2 opacity-70">{stat.label}</Typography>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
