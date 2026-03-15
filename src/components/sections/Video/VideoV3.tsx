'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Play, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

/**
 * Video V3 — Two-column: text + CTA left, video embed right.
 * On mobile collapses to stacked layout.
 */
export function VideoSectionV3() {
  const t = useTranslations('video');
  const config = siteConfig.video;
  const [playing, setPlaying] = useState(false);

  if (!config) return null;

  return (
    <Section id="video" padding="lg">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <MotionTypography variant="overline" as="span" className="text-secondary">
              {t('overline')}
            </MotionTypography>
            <MotionTypography variant="h2" className="mt-4">
              {t('heading')}
            </MotionTypography>
            <MotionTypography
              variant="body1"
              className="text-muted-foreground mt-5 leading-relaxed"
            >
              {t('subtitle')}
            </MotionTypography>

            <Typography variant="body2" className="text-muted-foreground mt-5 leading-relaxed">
              {t('body')}
            </Typography>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="secondary" size="md" asChild>
                <a href={siteConfig.hero.cta.href}>
                  {siteConfig.hero.cta.text}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="md" asChild>
                <a href="#contact">{siteConfig.hero.secondaryCta?.text}</a>
              </Button>
            </div>
          </motion.div>

          {/* Right: video */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-xl"
          >
            {playing ? (
              <iframe
                src={`${config.url}?autoplay=1&rel=0`}
                title={config.title ?? t('heading')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            ) : (
              <>
                {config.poster ? (
                  <Image
                    src={config.poster}
                    alt={config.title ?? t('heading')}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="bg-muted absolute inset-0" />
                )}
                <div className="absolute inset-0 bg-black/25" />
                <button
                  onClick={() => setPlaying(true)}
                  aria-label={t('play')}
                  className="group absolute inset-0 flex items-center justify-center"
                >
                  <div className="text-foreground group-hover:bg-secondary group-hover:text-secondary-foreground flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all duration-300 group-hover:scale-110">
                    <Play className="ml-1 h-6 w-6 fill-current" />
                  </div>
                </button>
              </>
            )}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
