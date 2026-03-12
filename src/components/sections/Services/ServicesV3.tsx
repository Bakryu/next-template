'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  Heart, Sparkles, Calendar, Gift, Star, Truck, Clock,
  Scissors, Coffee, Palette, Camera, Music,
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

export function ServicesSectionV3() {
  const t = useTranslations('services');
  const { services } = siteConfig;

  return (
    <Section id="services" variant="dark" padding="lg" className="overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-xl"
        >
          <Typography variant="overline" as="span" className="text-secondary">
            {t('title')}
          </Typography>
          <Typography variant="h2" className="mt-4">
            {t('subtitle')}
          </Typography>
        </motion.div>

        <div className="grid gap-px bg-white/5 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative bg-foreground p-10 transition-all duration-500 hover:bg-white/[0.03]"
              >
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary ring-1 ring-secondary/20 transition-all duration-300 group-hover:bg-secondary group-hover:text-white group-hover:ring-secondary/50 group-hover:shadow-[0_0_30px_rgba(201,169,110,0.3)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <Typography variant="h3">{service.name}</Typography>
                  <Typography className="mt-3 opacity-50">{service.description}</Typography>
                  {service.price && (
                    <Typography variant="label" as="span" className="mt-4 inline-block text-secondary">
                      {service.price}
                    </Typography>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>

      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-[120px]" />
    </Section>
  );
}
