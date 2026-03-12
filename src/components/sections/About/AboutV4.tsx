'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Quote } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography } from '@/components/ui/Typography';

/**
 * About V4 — Editorial Magazine
 * Large pull-quote style with side stats panel and editorial feel.
 */
export function AboutSectionV4() {
  const t = useTranslations('about');
  const { about } = siteConfig;

  return (
    <Section id="about" variant="muted" padding="xl">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left column - large pull-quote style */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <Typography variant="overline" as="span" className="text-secondary">
              {t('title')}
            </Typography>
            <Typography variant="h2" className="mt-6">
              {t('subtitle')}
            </Typography>

            <Quote className="mt-10 h-8 w-8 text-secondary/40" />

            <div className="mt-4 space-y-6">
              {about.paragraphs.map((paragraph, index) => (
                <Typography
                  key={index}
                  className={`leading-relaxed ${index === 0
                    ? 'text-xl text-foreground/80 italic font-light'
                    : 'text-muted-foreground'
                    }`}
                >
                  {paragraph}
                </Typography>
              ))}
            </div>
          </motion.div>

          {/* Right column - stats sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5"
          >
            {about.stats && (
              <div className="space-y-0 divide-y divide-border/60 rounded-2xl border border-border/40 bg-card p-2">
                {about.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                    className="flex items-center justify-between px-6 py-6"
                  >
                    <Typography variant="small" as="span" className="text-muted-foreground">{stat.label}</Typography>
                    <Typography variant="h4" as="span" className="text-secondary">
                      {stat.value}
                    </Typography>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Business info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 rounded-2xl border border-secondary/20 bg-secondary/5 p-6"
            >
              <Typography variant="small" className="text-secondary">{siteConfig.business.name}</Typography>
              <Typography variant="caption" className="mt-1">{siteConfig.business.address}</Typography>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
