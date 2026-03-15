'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Play } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { MotionTypography } from '@/components/ui/Typography';

/**
 * Video — Centered rounded card with play button overlay.
 * Shows poster image; clicking swaps in the iframe embed.
 */
export function VideoSection() {
  const t = useTranslations('video');
  const config = siteConfig.video;
  const [playing, setPlaying] = useState(false);

  if (!config) return null;

  return (
    <Section id="video" variant="muted">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <MotionTypography variant="overline" as="span" className="text-secondary">
            {t('overline')}
          </MotionTypography>
          <MotionTypography variant="h2" className="mt-4">
            {t('heading')}
          </MotionTypography>
          <MotionTypography variant="body1" className="text-muted-foreground mx-auto mt-4 max-w-xl">
            {t('subtitle')}
          </MotionTypography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-2xl"
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
              {/* Poster */}
              {config.poster ? (
                <Image
                  src={config.poster}
                  alt={config.title ?? t('heading')}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 900px"
                />
              ) : (
                <div className="bg-muted absolute inset-0" />
              )}

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Play button */}
              <button
                onClick={() => setPlaying(true)}
                aria-label={t('play')}
                className="group absolute inset-0 flex items-center justify-center"
              >
                <div className="text-foreground group-hover:bg-secondary group-hover:text-secondary-foreground flex h-20 w-20 items-center justify-center rounded-full bg-white/95 shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Play className="ml-1 h-8 w-8 fill-current" />
                </div>
              </button>
            </>
          )}
        </motion.div>
      </Container>
    </Section>
  );
}
