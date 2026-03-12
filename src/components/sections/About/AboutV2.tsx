'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography } from '@/components/ui/Typography';

/**
 * About V2 — Centered Storytelling
 * Clean centered layout with large text, stats in a row below.
 */
export function AboutSectionV2() {
  const t = useTranslations('about');
  const { about } = siteConfig;

  return (
    <Section id="about" padding="lg">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <Typography variant="overline" as="span" className="text-secondary">
            {t('title', { fallback: about.title })}
          </Typography>
          <Typography variant="h2" className="mt-4">
            {t('subtitle')}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-10 max-w-2xl space-y-6 text-center"
        >
          {about.paragraphs.map((paragraph, index) => (
            <Typography key={index} className="text-lg leading-relaxed text-muted-foreground">
              {paragraph}
            </Typography>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto my-16 h-px w-32 bg-secondary/40 origin-center"
        />

        {about.stats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="grid grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {about.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold font-heading text-secondary lg:text-4xl">
                  {stat.value}
                </div>
                <Typography variant="caption" className="mt-2 uppercase tracking-wider">
                  {stat.label}
                </Typography>
              </div>
            ))}
          </motion.div>
        )}
      </Container>
    </Section>
  );
}
