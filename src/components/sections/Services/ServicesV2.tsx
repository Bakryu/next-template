'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  Heart, Sparkles, Calendar, Gift, Star, Scissors, Palette,
  Camera, Music, Coffee, Flower, ShoppingBag,
} from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography } from '@/components/ui/Typography';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  heart: Heart, sparkles: Sparkles, calendar: Calendar, gift: Gift,
  star: Star, scissors: Scissors, palette: Palette, camera: Camera,
  music: Music, coffee: Coffee, flower: Flower, shopping: ShoppingBag,
};

/**
 * Services V2 — Horizontal Cards
 * Clean horizontal layout with icon left, text right, subtle borders.
 */
export function ServicesSectionV2() {
  const t = useTranslations('services');
  const { services } = siteConfig;

  return (
    <Section id="services" padding="lg">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <Typography variant="overline" as="span" className="text-secondary">
            {t('title')}
          </Typography>
          <Typography variant="h2" className="mt-4">
            {t('subtitle')}
          </Typography>
        </motion.div>

        <div className="space-y-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group flex items-start gap-6 rounded-2xl border border-border/40 p-6 transition-all duration-300 hover:border-secondary/30 hover:shadow-lg sm:items-center sm:gap-8 sm:p-8"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-secondary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <Typography variant="h3">{service.name}</Typography>
                  <Typography className="mt-1 text-muted-foreground">{service.description}</Typography>
                </div>
                {service.price && (
                  <div className="hidden shrink-0 text-right sm:block">
                    <Typography variant="large" as="span" className="text-secondary">{service.price}</Typography>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
