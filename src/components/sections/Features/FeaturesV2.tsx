'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  Zap, Shield, Clock, Globe, Smartphone, TrendingUp,
  Heart, Sparkles, Lock, Headphones, Truck, Leaf,
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
 * Features V2 — Icon Row
 * Minimal horizontal layout with icon top and a clean two-row grid.
 */
export function FeaturesSectionV2() {
  const t = useTranslations('features');
  const features = siteConfig.features;

  if (!features?.length) return null;

  return (
    <Section id="features" padding="lg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <MotionTypography variant="overline" as="span" className="text-secondary">
            {t('title')}
          </MotionTypography>
          <MotionTypography variant="h2" className="mt-4">
            {t('subtitle')}
          </MotionTypography>
        </motion.div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="text-center"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <Icon className="h-6 w-6" />
                </div>
                <Typography variant="h3" className="text-lg">{feature.name}</Typography>
                <Typography variant="body2" className="mt-2 text-muted-foreground leading-relaxed">{feature.description}</Typography>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
