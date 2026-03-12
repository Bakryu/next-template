'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Building2 } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography } from '@/components/ui/Typography';

/**
 * Partners V4 — Card Badges
 * Partners displayed as rounded badge-like cards with icons.
 */
export function PartnersSectionV4() {
  const t = useTranslations('partners');
  const partners = siteConfig.partners;

  if (!partners?.length) return null;

  return (
    <Section id="partners" padding="lg">
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
          <Typography variant="h2" className="mt-4">
            {t('subtitle')}
          </Typography>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex items-center gap-3 rounded-full border border-border/40 bg-card px-6 py-3 transition-all duration-300 hover:border-secondary/30 hover:shadow-md"
            >
              <Building2 className="h-4 w-4 text-secondary/50 group-hover:text-secondary transition-colors" />
              <Typography variant="small" as="span" weight="medium" className="font-heading whitespace-nowrap">{partner.name}</Typography>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
