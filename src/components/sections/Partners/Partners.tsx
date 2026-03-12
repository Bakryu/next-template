'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography } from '@/components/ui/Typography';

export function PartnersSection() {
  const t = useTranslations('partners');
  const partners = siteConfig.partners;

  if (!partners?.length) return null;

  return (
    <Section id="partners" padding="md">
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
          <Typography variant="h2" className="mt-4">
            {t('subtitle')}
          </Typography>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex h-16 items-center justify-center px-4 grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            >
              <Typography variant="large" as="span" weight="bold" className="font-heading text-foreground whitespace-nowrap">
                {partner.name}
              </Typography>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
