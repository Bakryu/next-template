'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  Heart, Sparkles, Calendar, Gift, Star, Truck, Clock,
  Scissors, Coffee, Palette, Camera, Music, ArrowUpRight,
} from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography } from '@/components/ui/Typography';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  heart: Heart, sparkles: Sparkles, calendar: Calendar, gift: Gift,
  star: Star, truck: Truck, clock: Clock, scissors: Scissors,
  coffee: Coffee, palette: Palette, camera: Camera, music: Music,
};

/**
 * Services V4 — Bento Grid
 * Asymmetric bento-style grid with varied card sizes and accent backgrounds.
 */
export function ServicesSectionV4() {
  const t = useTranslations('services');
  const { services } = siteConfig;

  const gridPatterns = [
    'sm:col-span-2 sm:row-span-2',
    '',
    '',
    'sm:col-span-2',
  ];

  return (
    <Section id="services" variant="warm" padding="lg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <Typography variant="overline" as="span" className="text-secondary">
              {t('title')}
            </Typography>
            <Typography variant="h2" className="mt-4">
              {t('subtitle')}
            </Typography>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;
            const isLarge = index === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative overflow-hidden rounded-3xl border border-border/40 p-8 transition-all duration-500 hover:shadow-xl ${
                  isLarge
                    ? 'sm:col-span-2 sm:row-span-2 bg-primary text-primary-foreground'
                    : 'bg-card hover:border-secondary/30'
                } ${gridPatterns[index] && index !== 0 ? gridPatterns[index] : ''}`}
              >
                <div className="relative z-10 flex h-full flex-col">
                  <div
                    className={`mb-6 flex items-center justify-between ${
                      isLarge ? '' : ''
                    }`}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                        isLarge
                          ? 'bg-white/10 text-white'
                          : 'bg-secondary/10 text-secondary'
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <ArrowUpRight
                      className={`h-5 w-5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                        isLarge ? 'text-white/60' : 'text-muted-foreground'
                      }`}
                    />
                  </div>

                  <div className="mt-auto">
                    <Typography
                      variant={isLarge ? 'h2' : 'h3'}
                      as="h3"
                    >
                      {service.name}
                    </Typography>
                    <Typography
                      className={`mt-3 ${
                        isLarge
                          ? 'text-white/60 max-w-md'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {service.description}
                    </Typography>
                    {service.price && (
                      <Typography
                        variant="label"
                        as="span"
                        className="mt-4 inline-block text-secondary"
                      >
                        {service.price}
                      </Typography>
                    )}
                  </div>
                </div>

                {isLarge && (
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
