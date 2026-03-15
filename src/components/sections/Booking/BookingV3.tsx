'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Clock, Tag, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

/**
 * Booking V3 — Dark full-width panel
 * Services displayed as cards on a dark background; single prominent CTA.
 */
export function BookingSectionV3() {
  const t = useTranslations('booking');
  const config = siteConfig.booking;

  if (!config) return null;

  const services = config.services;

  return (
    <Section id="booking" variant="dark" padding="lg" className="overflow-hidden">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_auto] lg:items-start">
          {/* Left: heading + services grid */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-10"
            >
              <MotionTypography variant="overline" as="span" className="text-secondary">
                {t('overline')}
              </MotionTypography>
              <MotionTypography variant="h2" className="mt-4">
                {t('heading')}
              </MotionTypography>
              <MotionTypography variant="body1" className="mt-4 max-w-lg opacity-60">
                {t('subtitle')}
              </MotionTypography>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group hover:border-secondary/30 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:bg-white/8"
                >
                  <Typography variant="h3" className="text-base font-semibold">
                    {service.name}
                  </Typography>
                  <div className="mt-3 flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1.5 text-white/50">
                      <Clock className="h-3.5 w-3.5" />
                      {service.duration}
                    </span>
                    <span className="text-secondary flex items-center gap-1.5 font-semibold">
                      <Tag className="h-3.5 w-3.5" />
                      {service.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: sticky CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:sticky lg:top-28 lg:w-72 xl:w-80"
          >
            <div className="border-secondary/30 bg-secondary/8 rounded-3xl border p-8 text-center backdrop-blur-sm">
              <Typography variant="h3" className="text-xl font-semibold">
                {t('ctaCardHeading')}
              </Typography>
              <Typography variant="body2" className="mt-3 text-sm opacity-60">
                {t('ctaCardBody')}
              </Typography>

              <Button variant="secondary" size="lg" fullWidth className="mt-8">
                {t('cta')}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>

              <div className="mt-6 space-y-2 text-sm opacity-50">
                <div>{siteConfig.business.phone}</div>
                <div>{siteConfig.business.email}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Ambient glow */}
      <div className="bg-secondary/10 pointer-events-none absolute bottom-0 -left-40 h-96 w-96 rounded-full blur-[100px]" />
    </Section>
  );
}
