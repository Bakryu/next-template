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

export function CTASection() {
  const t = useTranslations('cta');
  const { cta } = siteConfig;

  return (
    <Section id="cta" variant="dark" padding="xl" className="grain overflow-hidden">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-secondary mx-auto mb-8 h-0.5 w-12"
          />

          <Typography variant="h2">{t('title', { fallback: cta.title })}</Typography>

          {cta.subtitle && (
            <Typography className="mx-auto mt-6 max-w-xl text-lg opacity-60">
              {t('subheading', { fallback: cta.subtitle })}
            </Typography>
          )}

          <div className="mt-10">
            <Button size="xl" variant="secondary" rounded="full" className="group gap-2" asChild>
              <Link href={cta.buttonHref}>
                {t('button', { fallback: cta.buttonText })}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </Container>

      {/* Decorative gradient orbs */}
      <div className="bg-secondary/10 pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full blur-[120px]" />
      <div className="bg-accent/10 pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full blur-[120px]" />
    </Section>
  );
}
