'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';

/**
 * Stats V3 — Card Grid with Icons
 * Individual stat cards with large numbers on a gradient background.
 */
export function StatsSectionV3() {
  const t = useTranslations('stats');
  const stats = siteConfig.stats;

  if (!stats?.length) return null;

  return (
    <Section id="stats" padding="lg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <Typography variant="overline" className="text-secondary">
            {t('title')}
          </Typography>
          <MotionTypography variant="h2" className="mt-4">
            {t('subtitle')}
          </MotionTypography>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-border/40 bg-card p-8 text-center transition-all duration-500 hover:shadow-lg hover:border-secondary/20"
            >
              <div className="relative z-10">
                <Typography variant="h2" className="text-secondary">
                  {stat.value}
                </Typography>
                <Typography variant="small" className="mt-3 text-muted-foreground">{stat.label}</Typography>
              </div>
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-secondary/5 opacity-0 blur-[40px] transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
