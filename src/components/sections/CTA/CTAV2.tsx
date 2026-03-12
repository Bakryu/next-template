'use client';

import React from 'react';
import { Link } from '@/lib/i18n/routing';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';

/**
 * CTA V2 — Minimal Centered
 * Simple centered CTA with large text and subtle background.
 */
export function CTASectionV2() {
  const t = useTranslations('cta');
  const { cta } = siteConfig;

  return (
    <Section id="cta" variant="muted" padding="xl">
      <Container size="sm">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <Typography variant="h2">
            {t('heading', { fallback: cta.title })}
          </Typography>

          {cta.subtitle && (
            <Typography variant="subtitle1" className="mx-auto mt-6 max-w-md">
              {t('subheading', { fallback: cta.subtitle })}
            </Typography>
          )}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" variant="primary" rounded="full" className="mt-10 gap-2 group px-8" asChild>
              <Link href={cta.buttonHref}>
                {t('button', { fallback: cta.buttonText })}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
