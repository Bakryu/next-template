'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  Zap,
  Shield,
  Clock,
  Globe,
  Smartphone,
  TrendingUp,
  Heart,
  Sparkles,
  Lock,
  Headphones,
  Truck,
  Leaf,
} from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';
import { MobileCarousel } from '@/components/ui/MobileCarousel';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  zap: Zap,
  shield: Shield,
  clock: Clock,
  globe: Globe,
  smartphone: Smartphone,
  trending: TrendingUp,
  heart: Heart,
  sparkles: Sparkles,
  lock: Lock,
  headphones: Headphones,
  truck: Truck,
  leaf: Leaf,
};

export function FeaturesSection() {
  const t = useTranslations('features');
  const features = siteConfig.features;

  if (!features?.length) return null;

  return (
    <Section id="features" variant="muted">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-xl"
        >
          <MotionTypography variant="overline" as="span" className="text-secondary">
            {t('title')}
          </MotionTypography>
          <MotionTypography variant="h2" className="mt-4">
            {t('subtitle')}
          </MotionTypography>
        </motion.div>

        {/* Mobile carousel */}
        <MobileCarousel slideWidth="w-[78vw]" className="-mx-4 sm:hidden">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <div key={index} className="group border-border/40 bg-card rounded-2xl border p-8">
                <div className="bg-secondary/10 text-secondary mb-5 flex h-12 w-12 items-center justify-center rounded-xl">
                  <Icon className="h-6 w-6" />
                </div>
                <Typography variant="h3" className="text-lg">
                  {feature.name}
                </Typography>
                <Typography variant="body2" className="text-muted-foreground mt-2 leading-relaxed">
                  {feature.description}
                </Typography>
              </div>
            );
          })}
        </MobileCarousel>

        {/* Desktop grid */}
        <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group border-border/40 bg-card hover:border-secondary/20 rounded-2xl border p-8 transition-all duration-500 hover:shadow-lg"
              >
                <div className="bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <Typography variant="h3" className="text-lg">
                  {feature.name}
                </Typography>
                <Typography variant="body2" className="text-muted-foreground mt-2 leading-relaxed">
                  {feature.description}
                </Typography>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
