'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';

export function StatsSection() {
  const t = useTranslations('stats');
  const stats = siteConfig.stats;

  if (!stats?.length) return null;

  return (
    <Section id="stats" variant="dark" padding="lg" className="grain overflow-hidden">
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

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <Typography variant="h2" className="text-secondary">
                {stat.value}
              </Typography>
              <Typography variant="small" className="mt-2 opacity-60">{stat.label}</Typography>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-secondary/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />
    </Section>
  );
}
