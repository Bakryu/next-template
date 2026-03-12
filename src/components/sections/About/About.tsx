'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';

export function AboutSection() {
  const t = useTranslations('about');
  const { about } = siteConfig;

  return (
    <Section id="about">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          {/* Content — wider column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <Typography variant="overline" as="span" className="text-secondary">
              {t('title', { fallback: about.title })}
            </Typography>

            <Typography variant="h2" className="mt-4">
              {t('title', { fallback: about.title })}
            </Typography>

            <div className="mt-8 space-y-5">
              {about.paragraphs.map((paragraph, index) => (
                <MotionTypography
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-muted-foreground leading-[1.8]"
                >
                  {paragraph}
                </MotionTypography>
              ))}
            </div>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 h-0.5 w-20 origin-left bg-gradient-to-r from-secondary to-transparent"
            />
          </motion.div>

          {/* Stats — editorial number grid */}
          {about.stats && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 lg:col-start-8"
            >
              <div className="grid grid-cols-2 gap-1">
                {about.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.35 + index * 0.08 }}
                    className="group relative overflow-hidden rounded-2xl bg-muted/50 p-8 text-center transition-colors duration-300 hover:bg-muted"
                  >
                    <div className="text-4xl font-bold font-heading text-foreground lg:text-5xl">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </Container>
    </Section>
  );
}
