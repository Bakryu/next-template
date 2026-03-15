'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Clock, Tag, ChevronRight, Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

/**
 * Booking — Two-column layout
 * Left: service list with select-to-highlight; Right: contact form / CTA.
 */
export function BookingSection() {
  const t = useTranslations('booking');
  const config = siteConfig.booking;
  const [selected, setSelected] = useState(0);

  if (!config) return null;

  const services = config.services;
  const active = services[selected];

  return (
    <Section id="booking" variant="muted">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-xl"
        >
          <MotionTypography variant="overline" as="span" className="text-secondary">
            {t('overline')}
          </MotionTypography>
          <MotionTypography variant="h2" className="mt-4">
            {t('heading')}
          </MotionTypography>
          <MotionTypography variant="body1" className="text-muted-foreground mt-4">
            {t('subtitle')}
          </MotionTypography>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Service list */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3"
          >
            {services.map((service, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`group w-full rounded-2xl border px-6 py-5 text-left transition-all duration-300 ${
                  selected === i
                    ? 'border-secondary/40 bg-secondary/8 shadow-sm'
                    : 'border-border/40 bg-card hover:border-secondary/20 hover:bg-card/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <Typography variant="h3" className="text-base font-semibold">
                    {service.name}
                  </Typography>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform duration-300 ${
                      selected === i ? 'text-secondary translate-x-1' : 'text-muted-foreground'
                    }`}
                  />
                </div>
                <div className="mt-2 flex items-center gap-4">
                  <span className="text-muted-foreground flex items-center gap-1.5 text-sm">
                    <Clock className="h-3.5 w-3.5" />
                    {service.duration}
                  </span>
                  <span className="text-secondary flex items-center gap-1.5 text-sm font-medium">
                    <Tag className="h-3.5 w-3.5" />
                    {service.price}
                  </span>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Booking CTA panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            <div className="border-border/40 bg-card flex-1 rounded-3xl border p-8 shadow-sm">
              <Typography variant="overline" as="span" className="text-secondary text-xs">
                {t('selectedLabel')}
              </Typography>
              <Typography variant="h3" className="mt-2 text-2xl">
                {active.name}
              </Typography>
              <div className="border-border/40 mt-4 flex items-center gap-6 border-b pb-6">
                <div>
                  <Typography variant="body2" className="text-muted-foreground text-xs">
                    {t('duration')}
                  </Typography>
                  <Typography variant="body1" className="font-semibold">
                    {active.duration}
                  </Typography>
                </div>
                <div>
                  <Typography variant="body2" className="text-muted-foreground text-xs">
                    {t('price')}
                  </Typography>
                  <Typography variant="body1" className="text-secondary font-semibold">
                    {active.price}
                  </Typography>
                </div>
              </div>

              <Typography variant="body2" className="text-muted-foreground mt-6 text-sm">
                {t('contactPrompt')}
              </Typography>

              <div className="mt-6 space-y-3">
                <a
                  href={`tel:${siteConfig.business.phone}`}
                  className="border-border/40 bg-background hover:border-secondary/30 hover:bg-secondary/5 flex w-full items-center gap-3 rounded-xl border px-5 py-3.5 text-sm font-medium transition-colors"
                >
                  <Phone className="text-secondary h-4 w-4" />
                  {siteConfig.business.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.business.email}`}
                  className="border-border/40 bg-background hover:border-secondary/30 hover:bg-secondary/5 flex w-full items-center gap-3 rounded-xl border px-5 py-3.5 text-sm font-medium transition-colors"
                >
                  <Mail className="text-secondary h-4 w-4" />
                  {siteConfig.business.email}
                </a>
              </div>

              <Button variant="secondary" size="lg" fullWidth className="mt-6">
                {t('cta')}
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
