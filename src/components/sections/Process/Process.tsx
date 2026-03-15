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
 * Process — Horizontal numbered steps
 * Clean numbered cards in a row with a connecting line between them.
 */
export function ProcessSection() {
  const t = useTranslations('process');
  const steps = siteConfig.process;

  if (!steps?.length) return null;

  return (
    <Section id="process" variant="muted">
      <Container>
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

        {/* Connector line + cards */}
        <div className="relative">
          {/* horizontal line on md+ */}
          <div className="bg-border/60 absolute left-0 right-0 top-10 z-0 hidden h-px md:block" />

          <div className="relative z-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = iconMap[step.icon] || Sparkles;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step number badge */}
                  <div className="relative mb-6">
                    <div className="bg-background border-secondary/30 flex h-20 w-20 items-center justify-center rounded-full border-2 shadow-sm">
                      <Icon className="text-secondary h-8 w-8" />
                    </div>
                    <span className="bg-secondary text-secondary-foreground absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <Typography variant="h3" className="text-base font-semibold">
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-muted-foreground mt-2 text-sm leading-relaxed"
                  >
                    {step.description}
                  </Typography>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
