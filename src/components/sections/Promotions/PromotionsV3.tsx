'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, Timer } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';
import { Badge } from '@/components/ui/Badge';

function useCountdown(target: string | undefined) {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    if (!target) return;
    const end = new Date(target).getTime();
    const tick = () => {
      const diff = Math.max(0, end - Date.now());
      setTimeLeft({
        d: Math.floor(diff / 86_400_000),
        h: Math.floor((diff % 86_400_000) / 3_600_000),
        m: Math.floor((diff % 3_600_000) / 60_000),
        s: Math.floor((diff % 60_000) / 1_000),
      });
    };
    tick();
    const id = setInterval(tick, 1_000);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-secondary text-2xl font-black tabular-nums">
        {String(value).padStart(2, '0')}
      </span>
      <span className="mt-0.5 text-[9px] tracking-widest uppercase opacity-50">{label}</span>
    </div>
  );
}

/**
 * Promotions V3 — Dark glowing cards with countdown timer
 * Dark section, accent-glowing cards, first item shows a live countdown.
 */
export function PromotionsSectionV3() {
  const t = useTranslations('promotions');
  const items = siteConfig.promotions;

  const firstExpiry = items?.[0]?.expiresAt;
  const countdown = useCountdown(firstExpiry);

  if (!items?.length) return null;

  return (
    <Section id="promotions" variant="dark" padding="lg" className="overflow-hidden">
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
          <MotionTypography variant="body1" className="mx-auto mt-4 max-w-lg opacity-60">
            {t('subtitle')}
          </MotionTypography>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group hover:border-secondary/40 relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:bg-white/8"
            >
              {/* Glow for first card */}
              {i === 0 && (
                <div className="bg-secondary/20 pointer-events-none absolute -top-10 left-1/2 h-32 w-40 -translate-x-1/2 rounded-full blur-[50px]" />
              )}

              {item.badge && (
                <Badge variant="secondary" size="sm" className="relative z-10 mb-4 self-start">
                  {item.badge === 'new'
                    ? t('badgeNew')
                    : item.badge === 'hot'
                      ? t('badgeHot')
                      : item.badge}
                </Badge>
              )}

              <Typography variant="h3" className="relative z-10 text-lg font-semibold">
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                className="relative z-10 mt-2 flex-1 text-sm leading-relaxed opacity-55"
              >
                {item.description}
              </Typography>

              {/* Countdown on first item */}
              {i === 0 && firstExpiry && (
                <div className="relative z-10 mt-6 flex items-center gap-1.5">
                  <Timer className="text-secondary/60 h-3.5 w-3.5" />
                  <div className="flex items-center gap-3">
                    <CountdownUnit value={countdown.d} label={t('days')} />
                    <span className="font-bold text-white/30">:</span>
                    <CountdownUnit value={countdown.h} label={t('hours')} />
                    <span className="font-bold text-white/30">:</span>
                    <CountdownUnit value={countdown.m} label={t('minutes')} />
                    <span className="font-bold text-white/30">:</span>
                    <CountdownUnit value={countdown.s} label={t('seconds')} />
                  </div>
                </div>
              )}

              {/* Expiry for non-first items */}
              {i > 0 && item.expiresAt && (
                <Typography variant="body2" className="relative z-10 mt-5 text-xs opacity-40">
                  {t('expires')} {item.expiresAt}
                </Typography>
              )}

              {item.href && (
                <a
                  href={item.href}
                  className="text-secondary hover:text-secondary/80 relative z-10 mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                >
                  {t('claimButton')}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </Container>

      <div className="bg-secondary/8 pointer-events-none absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full blur-[100px]" />
    </Section>
  );
}
