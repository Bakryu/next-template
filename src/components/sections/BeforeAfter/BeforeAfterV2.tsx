'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { MotionTypography } from '@/components/ui/Typography';

/**
 * BeforeAfter V2 — Static grid with hover reveal.
 * All pairs shown in a grid. Hover any card to fade-transition between before/after.
 */
export function BeforeAfterSectionV2() {
  const t = useTranslations('beforeAfter');
  const items = siteConfig.beforeAfter;

  if (!items?.length) return null;

  return (
    <Section id="beforeAfter" padding="lg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <HoverCard key={i} item={item} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function HoverCard({
  item,
  index,
}: {
  item: { before: string; after: string; label?: string };
  index: number;
}) {
  const t = useTranslations('beforeAfter');
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      {/* Before (base) */}
      <Image
        src={item.before}
        alt={t('before')}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* After (fades in on hover) */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        <Image
          src={item.after}
          alt={t('after')}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Label bar at bottom */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent px-4 pt-10 pb-4">
        <span className="text-xs font-semibold text-white/70">
          {hovered ? t('after') : t('before')}
        </span>
        {item.label && (
          <span className="rounded-full bg-white/20 px-3 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
            {item.label}
          </span>
        )}
        <span className="text-xs font-semibold text-white/40">
          {hovered ? t('before') : t('after')}
        </span>
      </div>

      {/* Hover hint on first render */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
        style={{ opacity: hovered ? 0 : 1 }}
      >
        <span className="rounded-full bg-black/40 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
          {t('hoverHint')}
        </span>
      </div>
    </motion.div>
  );
}
