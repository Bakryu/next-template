'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  Heart,
  Sparkles,
  Calendar,
  Gift,
  Scissors,
  Palette,
  Clock,
  Star,
  Utensils,
  Coffee,
  Flower,
  Dumbbell,
} from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { Typography } from '@/components/ui/Typography';
import { MobileCarousel } from '@/components/ui/MobileCarousel';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  heart: Heart,
  sparkles: Sparkles,
  calendar: Calendar,
  gift: Gift,
  scissors: Scissors,
  palette: Palette,
  clock: Clock,
  star: Star,
  utensils: Utensils,
  coffee: Coffee,
  flower: Flower,
  dumbbell: Dumbbell,
};

export function ServicesSection() {
  const t = useTranslations('services');
  const { services } = siteConfig;

  return (
    <Section id="services" variant="warm">
      <Container>
        {/* Section header */}
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

        {/* Services grid — editorial asymmetric layout */}

        {/* Mobile carousel */}
        <MobileCarousel slideWidth="w-[78vw]" className="-mx-4 sm:hidden">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Star;
            return (
              <div
                key={index}
                className="group border-border/50 bg-card relative h-full overflow-hidden rounded-2xl border p-7"
              >
                <div className="bg-secondary/10 mb-5 flex h-12 w-12 items-center justify-center rounded-xl">
                  <Icon className="text-secondary h-5 w-5" />
                </div>
                <Typography variant="h3">{service.name}</Typography>
                <Typography className="text-muted-foreground mt-2">
                  {service.description}
                </Typography>
                {service.price && (
                  <div className="mt-5">
                    <Badge variant="secondary" size="sm">
                      {service.price}
                    </Badge>
                  </div>
                )}
              </div>
            );
          })}
        </MobileCarousel>

        {/* Desktop grid */}
        <div className="hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Star;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group border-border/50 bg-card hover:border-secondary/30 relative overflow-hidden rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="bg-secondary/10 group-hover:bg-secondary/20 mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300">
                  <Icon className="text-secondary h-5 w-5" />
                </div>
                <Typography variant="h3">{service.name}</Typography>
                <Typography className="text-muted-foreground mt-2">
                  {service.description}
                </Typography>
                {service.price && (
                  <div className="mt-5">
                    <Badge variant="secondary" size="sm">
                      {service.price}
                    </Badge>
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
