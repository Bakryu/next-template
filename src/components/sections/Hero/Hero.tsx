'use client';

import React from 'react';
import { Link } from '@/lib/i18n/routing';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, Play } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { MotionTypography } from '@/components/ui/Typography';
import { Section } from '@/components/layout/Section';

/**
 * Hero V4 — Editorial Magazine
 * Full-bleed image with bottom-aligned content card overlay, editorial typography.
 */
export function HeroSection() {
  const t = useTranslations('hero');
  const { hero } = siteConfig;

  return (
    <Section id="hero" className="relative min-h-dvh" bgImage={hero.backgroundImage}>
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-foreground/80 grid gap-8 rounded-3xl border border-white/10 p-8 backdrop-blur-xl sm:p-12 lg:grid-cols-2 lg:items-center lg:gap-16 lg:p-16"
        >
          <div>
            <MotionTypography
              variant="overline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-secondary tracking-[0.25em]"
            >
              {siteConfig.business.location}
            </MotionTypography>

            <MotionTypography
              variant="h1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-4 text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl"
            >
              {t('headline', { fallback: hero.headline })}
            </MotionTypography>
          </div>

          <div>
            <MotionTypography
              variant="body1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-white/60 sm:text-lg"
            >
              {t('subheadline', { fallback: hero.subheadline })}
            </MotionTypography>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button size="lg" variant="secondary" rounded="full" className="group gap-2" asChild>
                <Link href={hero.cta.href}>
                  {t('cta', { fallback: hero.cta.text })}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              {hero.secondaryCta && (
                <Button
                  size="lg"
                  variant="ghost"
                  rounded="full"
                  className="gap-2 text-white/70 hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <Link href={hero.secondaryCta.href}>
                    <Play className="h-4 w-4" />
                    {t('secondaryCta', { fallback: hero.secondaryCta.text })}
                  </Link>
                </Button>
              )}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
