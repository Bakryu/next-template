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
 * CTA V3 — Full-Width Dark Banner
 * Bold dark CTA with gradient background and dramatic text.
 */
export function CTASectionV3() {
  const t = useTranslations('cta');
  const { cta } = siteConfig;

  return (
    <Section id="cta" variant="dark" padding="xl" className="overflow-hidden grain">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          <Typography variant="h2" className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
            {t('heading', { fallback: cta.title })}
          </Typography>

          {cta.subtitle && (
            <Typography className="mx-auto mt-8 max-w-lg text-lg opacity-60">
              {t('subheading', { fallback: cta.subtitle })}
            </Typography>
          )}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" variant="secondary" rounded="full" className="mt-12 gap-2 group px-10" asChild>
              <Link href={cta.buttonHref}>
                {t('button', { fallback: cta.buttonText })}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />
    </Section>
  );
}
