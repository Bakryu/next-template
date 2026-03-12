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
 * Features V3 — Dark Alternating List
 * Dark section with alternating left/right icon+text rows.
 */
export function FeaturesSectionV3() {
  const t = useTranslations('features');
  const features = siteConfig.features;

  if (!features?.length) return null;

  return (
    <Section id="features" variant="dark" padding="lg" className="overflow-hidden grain">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <MotionTypography variant="overline" as="span" className="text-secondary">
            {t('title')}
          </MotionTypography>
          <MotionTypography variant="h2" className="mt-4">
            {t('subtitle')}
          </MotionTypography>
        </motion.div>

        <div className="space-y-0 divide-y divide-white/10">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className={`flex items-center gap-8 py-10 ${isEven ? '' : 'flex-row-reverse text-right'}`}
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-secondary/10 text-secondary ring-1 ring-secondary/20">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <Typography variant="h3" className="text-xl">{feature.name}</Typography>
                  <Typography variant="body2" className="mt-2 leading-relaxed opacity-50">{feature.description}</Typography>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>

      <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-secondary/5 blur-[120px]" />
    </Section>
  );
}
