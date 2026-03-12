'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  Zap, Shield, Clock, Globe, Smartphone, TrendingUp,
  Heart, Sparkles, Lock, Headphones, Truck, Leaf, ArrowUpRight,
} from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  zap: Zap, shield: Shield, clock: Clock, globe: Globe,
  smartphone: Smartphone, trending: TrendingUp, heart: Heart,
  sparkles: Sparkles, lock: Lock, headphones: Headphones, truck: Truck, leaf: Leaf,
};

/**
 * Features V4 — Bento Layout
 * Asymmetric bento-grid with the first feature as a large highlighted card.
 */
export function FeaturesSectionV4() {
  const t = useTranslations('features');
  const features = siteConfig.features;

  if (!features?.length) return null;

  return (
    <Section id="features" variant="warm" padding="lg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-xl">
            <MotionTypography variant="overline" as="span" className="text-secondary">
              {t('title')}
            </MotionTypography>
            <MotionTypography variant="h2" className="mt-4">
              {t('subtitle')}
            </MotionTypography>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            const isFirst = index === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className={`group relative overflow-hidden rounded-3xl border p-8 transition-all duration-500 hover:shadow-xl ${
                  isFirst
                    ? 'sm:col-span-2 lg:row-span-2 border-secondary/30 bg-primary text-primary-foreground'
                    : 'border-border/40 bg-card hover:border-secondary/20'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      isFirst ? 'bg-white/10 text-white' : 'bg-secondary/10 text-secondary'
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <ArrowUpRight
                    className={`h-5 w-5 opacity-0 transition-all group-hover:opacity-60 ${
                      isFirst ? 'text-white' : 'text-muted-foreground'
                    }`}
                  />
                </div>

                <div className={isFirst ? 'mt-auto pt-12' : 'mt-6'}>
                  <Typography
                    variant="h3"
                    className={isFirst ? 'text-2xl sm:text-3xl' : 'text-lg'}
                  >
                    {feature.name}
                  </Typography>
                  <Typography
                    variant={isFirst ? 'body1' : 'body2'}
                    className={`mt-3 leading-relaxed ${
                      isFirst ? 'opacity-70 max-w-md' : 'text-muted-foreground'
                    }`}
                  >
                    {feature.description}
                  </Typography>
                </div>

                {isFirst && (
                  <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-secondary/10 blur-[80px]" />
                )}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
