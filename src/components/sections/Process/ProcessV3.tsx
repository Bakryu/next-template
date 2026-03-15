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
 * Process V3 — Dark, giant step numbers as decorative background
 * Each step has a huge faded number behind it; icon + title + text in foreground.
 */
export function ProcessSectionV3() {
  const t = useTranslations('process');
  const steps = siteConfig.process;

  if (!steps?.length) return null;

  return (
    <Section id="process" variant="dark" padding="lg" className="overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <MotionTypography variant="overline" as="span" className="text-secondary">
            {t('overline')}
          </MotionTypography>
          <MotionTypography variant="h2" className="mt-4">
            {t('heading')}
          </MotionTypography>
          <MotionTypography variant="body1" className="mx-auto mt-4 max-w-xl opacity-60">
            {t('subtitle')}
          </MotionTypography>
        </motion.div>

        <div className="grid gap-0 divide-y divide-white/10 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon] || Sparkles;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden px-8 py-12 text-center"
              >
                {/* Giant decorative number */}
                <span
                  className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 select-none text-[9rem] font-black leading-none text-white/[0.04]"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div className="bg-secondary/15 text-secondary ring-secondary/20 relative z-10 mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ring-1">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Step label */}
                <Typography
                  variant="overline"
                  as="span"
                  className="text-secondary/60 relative z-10 text-[10px]"
                >
                  {t('overline')} {index + 1}
                </Typography>

                <Typography variant="h3" className="relative z-10 mt-2 text-lg">
                  {step.title}
                </Typography>
                <Typography
                  variant="body2"
                  className="relative z-10 mt-3 text-sm leading-relaxed opacity-50"
                >
                  {step.description}
                </Typography>
              </motion.div>
            );
          })}
        </div>
      </Container>

      {/* Ambient glow */}
      <div className="bg-secondary/5 pointer-events-none absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full blur-[100px]" />
      <div className="bg-secondary/5 pointer-events-none absolute -right-40 bottom-1/4 h-[400px] w-[400px] rounded-full blur-[100px]" />
    </Section>
  );
}
