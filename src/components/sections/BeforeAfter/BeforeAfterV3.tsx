'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';

/**
 * BeforeAfter V3 — Full-width carousel with side-by-side pairs.
 * Each slide shows before/after images side-by-side with label and nav arrows.
 */
export function BeforeAfterSectionV3() {
  const t = useTranslations('beforeAfter');
  const items = siteConfig.beforeAfter;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  if (!items?.length) return null;

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };
  const prev = () => goTo((current - 1 + items.length) % items.length);
  const next = () => goTo((current + 1) % items.length);

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
  };

  const item = items[current];

  return (
    <Section id="beforeAfter" variant="dark" padding="lg" className="overflow-hidden">
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
          <MotionTypography variant="body1" className="mx-auto mt-4 max-w-xl opacity-60">
            {t('subtitle')}
          </MotionTypography>
        </motion.div>

        {/* Slide */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-3 sm:grid-cols-2"
            >
              {/* Before */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={item.before}
                  alt={t('before')}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <span className="absolute bottom-3 left-3 rounded-md bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {t('before')}
                </span>
              </div>

              {/* After */}
              <div className="ring-secondary/40 relative aspect-[4/3] overflow-hidden rounded-2xl ring-2">
                <Image
                  src={item.after}
                  alt={t('after')}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <span className="bg-secondary/80 text-secondary-foreground absolute bottom-3 left-3 rounded-md px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                  {t('after')}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Label + nav */}
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={prev}
              aria-label={t('prev')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition-colors hover:bg-white/15"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="text-center">
              {item.label && (
                <Typography variant="body1" className="font-semibold">
                  {item.label}
                </Typography>
              )}
              <Typography variant="body2" className="mt-1 text-xs opacity-40">
                {current + 1} / {items.length}
              </Typography>
            </div>

            <button
              onClick={next}
              aria-label={t('next')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition-colors hover:bg-white/15"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Dot indicators */}
          {items.length > 1 && (
            <div className="mt-5 flex justify-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-secondary w-6' : 'w-1.5 bg-white/25 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </Container>

      <div className="bg-secondary/8 pointer-events-none absolute top-1/2 -left-32 h-80 w-80 -translate-y-1/2 rounded-full blur-[100px]" />
    </Section>
  );
}
