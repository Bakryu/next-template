'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography } from '@/components/ui/Typography';

/**
 * About V3 — Bold Split with Dark Feature
 * Dark section with split layout — stats on left, text on right.
 */
export function AboutSectionV3() {
  const t = useTranslations('about');
  const { about } = siteConfig;

  return (
    <Section id="about" variant="dark" padding="lg" className="overflow-hidden grain">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {about.stats && (
              <div className="grid grid-cols-2 gap-6">
                {about.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm"
                  >
                    <div className="text-3xl font-bold font-heading text-secondary lg:text-4xl">
                      {stat.value}
                    </div>
                    <Typography className="mt-2 text-xs uppercase tracking-wider opacity-50">{stat.label}</Typography>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Typography variant="overline" as="span" className="text-secondary">
              {t('title')}
            </Typography>
            <Typography variant="h2" className="mt-4">
              {t('subtitle')}
            </Typography>

            <div className="mt-8 space-y-5">
              {about.paragraphs.map((paragraph, index) => (
                <Typography key={index} className="leading-relaxed opacity-60">
                  {paragraph}
                </Typography>
              ))}
            </div>

            <div className="mt-10 h-px w-16 bg-secondary/40" />
          </motion.div>
        </div>
      </Container>

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/5 blur-[120px]" />
    </Section>
  );
}
