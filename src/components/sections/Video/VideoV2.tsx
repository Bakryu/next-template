'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Volume2, VolumeX } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { MotionTypography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

/**
 * Video V2 — Full-width cinema hero.
 * Autoplaying muted background video (or YouTube embed fallback).
 * Heading + CTA overlaid on top with a dark gradient.
 */
export function VideoSectionV2() {
  const t = useTranslations('video');
  const config = siteConfig.video;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  if (!config) return null;

  // Detect if URL is a direct video file or an embed URL
  const isDirectVideo = /\.(mp4|webm|ogg)(\?|$)/i.test(config.url);

  return (
    <Section
      id="video"
      variant="dark"
      padding="sm"
      className="relative flex min-h-[70vh] items-center overflow-hidden !py-0"
    >
      {/* Background */}
      {isDirectVideo ? (
        <video
          ref={videoRef}
          src={config.url}
          poster={config.poster}
          autoPlay
          loop
          muted={muted}
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
      ) : (
        config.poster && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url(${config.poster})` }}
          />
        )
      )}

      {/* Gradient overlay */}
      <div className="from-background/90 via-background/40 to-background/20 absolute inset-0 bg-gradient-to-t" />

      {/* Content */}
      <Container className="relative z-10 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <MotionTypography variant="overline" as="span" className="text-secondary">
            {t('overline')}
          </MotionTypography>
          <MotionTypography variant="h1" className="mx-auto mt-4 max-w-3xl">
            {t('heading')}
          </MotionTypography>
          <MotionTypography variant="body1" className="mx-auto mt-5 max-w-xl opacity-70">
            {t('subtitle')}
          </MotionTypography>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <a href={siteConfig.hero.cta.href}>{siteConfig.hero.cta.text}</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">{siteConfig.hero.secondaryCta?.text}</a>
            </Button>
          </div>
        </motion.div>
      </Container>

      {/* Mute toggle — only for direct video */}
      {isDirectVideo && (
        <button
          onClick={() => {
            setMuted((m) => !m);
            if (videoRef.current) videoRef.current.muted = !muted;
          }}
          aria-label={muted ? t('unmute') : t('mute')}
          className="absolute right-6 bottom-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      )}
    </Section>
  );
}
