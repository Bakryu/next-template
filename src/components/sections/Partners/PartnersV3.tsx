'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography } from '@/components/ui/Typography';

/**
 * Partners V3 — Dark Grid Cards
 * Dark background with partner names in bordered grid cards.
 */
export function PartnersSectionV3() {
  const t = useTranslations('partners');
  const partners = siteConfig.partners;

  if (!partners?.length) return null;

  return (
    <Section id="partners" variant="dark" padding="md" className="overflow-hidden">
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

        <div className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex h-24 items-center justify-center bg-foreground px-4 text-center transition-colors duration-300 hover:bg-white/5"
            >
              <Typography variant="small" as="span" weight="bold" className="font-heading opacity-40 hover:opacity-80 transition-opacity">
                {partner.name}
              </Typography>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
