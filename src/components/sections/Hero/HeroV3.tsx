'use client';

import React from 'react';
import { Link } from '@/lib/i18n/routing';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { MotionTypography } from '@/components/ui/Typography';
import { Section } from '@/components/layout/Section';

/**
 * Hero V3 — Split Layout
 * Left text / right image with bold asymmetric design and dark panel.
 */
export function HeroSectionV3() {
  const t = useTranslations('hero');
  const { hero } = siteConfig;

  return (
    <Section id="hero" className="relative min-h-dvh !py-0" variant='dark'>
      <div className="grid min-h-dvh lg:grid-cols-2">
        {/* Left: Content */}
        <div className="relative z-10 flex items-center">
          <Container size="full">
            <div className="px-6 py-28 sm:px-12 lg:px-16 xl:px-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-secondary"
              >
                <MapPin className="h-3.5 w-3.5" />
                {siteConfig.business.location}
              </motion.div>

              <MotionTypography
                variant="h1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 lg:text-6xl xl:text-7xl"
              >
                {t('headline', { fallback: hero.headline })}
              </MotionTypography>

              <MotionTypography
                variant="body1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="mt-8 max-w-md text-lg opacity-60"
              >
                {t('subheadline', { fallback: hero.subheadline })}
              </MotionTypography>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <Button size="lg" variant="secondary" rounded="full" className="gap-2 group" asChild>
                  <Link href={hero.cta.href}>
                    {t('cta', { fallback: hero.cta.text })}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                {hero.secondaryCta && (
                  <Button
                    size="lg"
                    variant="outline"
                    rounded="full"
                    className="border-white/20 text-white hover:bg-white/10"
                    asChild
                  >
                    <Link href={hero.secondaryCta.href}>
                      {t('secondaryCta', { fallback: hero.secondaryCta.text })}
                    </Link>
                  </Button>
                )}
              </motion.div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-16 flex gap-10 border-t border-white/10 pt-8"
              >
                {siteConfig.about.stats?.slice(0, 3).map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold font-heading text-secondary">{stat.value}</div>
                    <div className="mt-1 text-xs uppercase tracking-wider opacity-50">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </Container>
        </div>

        {/* Right: Image */}
        {hero.backgroundImage && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <Image
              src={hero.backgroundImage}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/30 to-transparent" />
          </motion.div>
        )}
      </div>
    </Section>
  );
}
