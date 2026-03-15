'use client';

import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ChevronsLeftRight } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { MotionTypography } from '@/components/ui/Typography';

/**
 * BeforeAfter — Drag-to-reveal slider on the first item.
 * A full interactive split-image comparison on the featured pair.
 */
export function BeforeAfterSection() {
  const t = useTranslations('beforeAfter');
  const items = siteConfig.beforeAfter;

  if (!items?.length) return null;

  const featured = items[0];

  return (
    <Section id="beforeAfter" variant="muted">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-xl"
        >
          <MotionTypography variant="overline" as="span" className="text-secondary">
            {t('overline')}
          </MotionTypography>
          <MotionTypography variant="h2" className="mt-4">
            {t('heading')}
          </MotionTypography>
          <MotionTypography variant="body1" className="text-muted-foreground mt-4">
            {t('subtitle')}
          </MotionTypography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl"
        >
          <SliderComp before={featured.before} after={featured.after} label={featured.label} />
        </motion.div>

        {/* Thumbnail row for remaining items */}
        {items.length > 1 && (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.slice(1).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="overflow-hidden rounded-2xl"
              >
                <SliderComp before={item.before} after={item.after} label={item.label} compact />
              </motion.div>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}

// ─── Shared slider component ─────────────────────────────────────────────────

interface SliderProps {
  before: string;
  after: string;
  label?: string;
  compact?: boolean;
}

function SliderComp({ before, after, label, compact }: SliderProps) {
  const t = useTranslations('beforeAfter');
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50); // percentage
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - left) / width) * 100));
    setPos(pct);
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!dragging.current) return;
      move(e.clientX);
    },
    [move],
  );

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      move(e.touches[0].clientX);
    },
    [move],
  );

  const aspectClass = compact ? 'aspect-[4/3]' : 'aspect-[16/9]';

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${aspectClass} cursor-ew-resize overflow-hidden rounded-2xl select-none`}
      onMouseDown={() => {
        dragging.current = true;
      }}
      onMouseUp={() => {
        dragging.current = false;
      }}
      onMouseLeave={() => {
        dragging.current = false;
      }}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      {/* After image (base) */}
      <Image
        src={after}
        alt={t('after')}
        fill
        className="object-cover"
        sizes="(max-width:768px) 100vw, 800px"
      />

      {/* Before image clipped */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <Image
          src={before}
          alt={t('before')}
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, 800px"
        />
      </div>

      {/* Divider */}
      <div className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-xl" style={{ left: `${pos}%` }}>
        <div className="text-foreground absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
          <ChevronsLeftRight className="h-5 w-5" />
        </div>
      </div>

      {/* Labels */}
      <span className="absolute bottom-3 left-3 z-10 rounded-md bg-black/50 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
        {t('before')}
      </span>
      <span className="absolute right-3 bottom-3 z-10 rounded-md bg-black/50 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
        {t('after')}
      </span>

      {label && (
        <span className="absolute top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}
