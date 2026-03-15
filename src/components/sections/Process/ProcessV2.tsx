'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
  Calendar,
  Clock,
  Sparkles,
  CheckCircle,
  Star,
  Heart,
  Phone,
  ShoppingBag,
  Scissors,
  MessageCircle,
  MapPin,
  Gift,
} from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  calendar: Calendar,
  clock: Clock,
  sparkles: Sparkles,
  check: CheckCircle,
  star: Star,
  heart: Heart,
  phone: Phone,
  bag: ShoppingBag,
  scissors: Scissors,
  message: MessageCircle,
  pin: MapPin,
  gift: Gift,
};

/**
 * Process V2 — Vertical timeline
 * Each step is a row: number/icon on one side, content on the other,
 * connected by a vertical line down the center (desktop) or left side (mobile).
 */
export function ProcessSectionV2() {
  const t = useTranslations('process');
  const steps = siteConfig.process;

  if (!steps?.length) return null;

  return (
    <Section id="process" padding="lg">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <MotionTypography variant="overline" as="span" className="text-secondary">
            {t('overline')}
          </MotionTypography>
          <MotionTypography variant="h2" className="mt-4">
            {t('heading')}
          </MotionTypography>
          <MotionTypography variant="body1" className="text-muted-foreground mx-auto mt-4 max-w-xl">
            {t('subtitle')}
          </MotionTypography>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="bg-border/50 absolute bottom-0 left-8 top-0 w-px md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = iconMap[step.icon] || Sparkles;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex items-start gap-6 md:items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content card — desktop: takes half width */}
                  <div
                    className={`ml-20 flex-1 md:ml-0 md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'}`}
                  >
                    <div className="border-border/40 bg-card rounded-2xl border p-6 shadow-sm">
                      <Typography variant="overline" as="span" className="text-secondary text-xs">
                        Step {index + 1}
                      </Typography>
                      <Typography variant="h3" className="mt-1 text-lg">
                        {step.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="text-muted-foreground mt-2 text-sm leading-relaxed"
                      >
                        {step.description}
                      </Typography>
                    </div>
                  </div>

                  {/* Center dot — icon */}
                  <div className="absolute left-0 top-6 z-10 md:static md:top-auto md:flex md:w-2/12 md:justify-center">
                    <div className="bg-secondary text-secondary-foreground ring-background flex h-16 w-16 items-center justify-center rounded-full shadow-md ring-4">
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>

                  {/* Spacer — other side on desktop */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
