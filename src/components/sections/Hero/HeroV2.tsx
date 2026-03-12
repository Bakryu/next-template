'use client';

import React from 'react';
import { Link } from '@/lib/i18n/routing';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { MotionTypography } from '@/components/ui/Typography';
import { Section } from '@/components/layout/Section';

/**
 * Hero V2 — Centered Minimal
 * Clean centered layout with subtle background, large typography, pill CTA.
 */
export function HeroSectionV2() {
  const t = useTranslations('hero');
  const { hero } = siteConfig;

  return (
    <Section id="hero" className="min-h-dvh" bgImage={hero.backgroundImage}>
      <Container size="md">
        <div className="flex min-h-dvh flex-col items-center justify-center py-32 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/80 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
            {siteConfig.business.location}
          </motion.span>

          <MotionTypography
            variant="h1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="leading-[1.08]"
          >
            {t('headline', { fallback: hero.headline })}
          </MotionTypography>

          <MotionTypography
            variant="subtitle1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-lg sm:text-xl"
          >
            {t('subheadline', { fallback: hero.subheadline })}
          </MotionTypography>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <Button size="lg" variant="primary" rounded="full" className="gap-2 group px-8" asChild>
              <Link href={hero.cta.href}>
                {t('cta', { fallback: hero.cta.text })}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            {hero.secondaryCta && (
              <Button size="lg" variant="ghost" rounded="full" className="gap-2" asChild>
                <Link href={hero.secondaryCta.href}>
                  {t('secondaryCta', { fallback: hero.secondaryCta.text })}
                </Link>
              </Button>
            )}
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}
