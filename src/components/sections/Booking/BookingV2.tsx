'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Clock, Tag, Check } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

const STEPS = ['service', 'details', 'confirm'] as const;

/**
 * Booking V2 — Step-by-step stepper
 * Three-step wizard: (1) pick service → (2) contact details → (3) confirmation.
 */
export function BookingSectionV2() {
  const t = useTranslations('booking');
  const config = siteConfig.booking;
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(0);

  if (!config) return null;

  const services = config.services;

  return (
    <Section id="booking" padding="lg">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <MotionTypography variant="overline" as="span" className="text-secondary">
            {t('overline')}
          </MotionTypography>
          <MotionTypography variant="h2" className="mt-4">
            {t('heading')}
          </MotionTypography>
          <MotionTypography variant="body1" className="text-muted-foreground mx-auto mt-4 max-w-lg">
            {t('subtitle')}
          </MotionTypography>
        </motion.div>

        {/* Step indicators */}
        <div className="mb-10 flex items-center justify-center gap-0">
          {STEPS.map((s, i) => (
            <React.Fragment key={s}>
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300 ${
                    i < step
                      ? 'border-secondary bg-secondary text-secondary-foreground'
                      : i === step
                        ? 'border-secondary bg-background text-secondary'
                        : 'border-border/40 bg-background text-muted-foreground'
                  }`}
                >
                  {i < step ? <Check className="h-4 w-4" /> : i + 1}
                </div>
                <span
                  className={`mt-1.5 text-xs ${i === step ? 'text-secondary font-medium' : 'text-muted-foreground'}`}
                >
                  {t(`step${i + 1}`)}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={`mb-5 h-px w-16 transition-colors duration-300 sm:w-24 ${
                    i < step ? 'bg-secondary' : 'bg-border/40'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Step panels */}
        <div className="border-border/40 bg-card rounded-3xl border p-8 shadow-sm sm:p-10">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Typography variant="h3" className="mb-6 text-lg font-semibold">
                  {t('step1Label')}
                </Typography>
                <div className="grid gap-3 sm:grid-cols-2">
                  {services.map((service, i) => (
                    <button
                      key={i}
                      onClick={() => setSelected(i)}
                      className={`rounded-xl border p-4 text-left transition-all duration-200 ${
                        selected === i
                          ? 'border-secondary/40 bg-secondary/8'
                          : 'border-border/40 hover:border-secondary/20'
                      }`}
                    >
                      <Typography variant="body1" className="text-sm font-semibold">
                        {service.name}
                      </Typography>
                      <div className="text-muted-foreground mt-1.5 flex items-center gap-3 text-xs">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {service.duration}
                        </span>
                        <span className="text-secondary flex items-center gap-1 font-medium">
                          <Tag className="h-3 w-3" />
                          {service.price}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex justify-end">
                  <Button variant="secondary" size="md" onClick={() => setStep(1)}>
                    {t('next')} →
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Typography variant="h3" className="mb-6 text-lg font-semibold">
                  {t('step2Label')}
                </Typography>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-muted-foreground text-xs font-medium">
                      {t('fieldName')}
                    </label>
                    <input
                      type="text"
                      placeholder={t('fieldNamePlaceholder')}
                      className="border-border/40 bg-background focus:border-secondary/50 focus:ring-secondary/10 rounded-xl border px-4 py-3 text-sm transition-colors outline-none focus:ring-2"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-muted-foreground text-xs font-medium">
                      {t('fieldPhone')}
                    </label>
                    <input
                      type="tel"
                      placeholder={t('fieldPhonePlaceholder')}
                      className="border-border/40 bg-background focus:border-secondary/50 focus:ring-secondary/10 rounded-xl border px-4 py-3 text-sm transition-colors outline-none focus:ring-2"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label className="text-muted-foreground text-xs font-medium">
                      {t('fieldDate')}
                    </label>
                    <input
                      type="date"
                      className="border-border/40 bg-background focus:border-secondary/50 focus:ring-secondary/10 rounded-xl border px-4 py-3 text-sm transition-colors outline-none focus:ring-2"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label className="text-muted-foreground text-xs font-medium">
                      {t('fieldNote')}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={t('fieldNotePlaceholder')}
                      className="border-border/40 bg-background focus:border-secondary/50 focus:ring-secondary/10 resize-none rounded-xl border px-4 py-3 text-sm transition-colors outline-none focus:ring-2"
                    />
                  </div>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <Button variant="ghost" size="md" onClick={() => setStep(0)}>
                    ← {t('back')}
                  </Button>
                  <Button variant="secondary" size="md" onClick={() => setStep(2)}>
                    {t('next')} →
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="text-center"
              >
                <div className="bg-secondary/10 text-secondary mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full">
                  <Check className="h-8 w-8" />
                </div>
                <Typography variant="h3" className="text-xl font-semibold">
                  {t('confirmTitle')}
                </Typography>
                <Typography variant="body2" className="text-muted-foreground mx-auto mt-3 max-w-sm">
                  {t('confirmBody')}
                </Typography>
                <div className="border-border/40 bg-background mt-6 inline-flex items-center gap-4 rounded-xl border px-6 py-3 text-sm">
                  <span className="font-semibold">{services[selected].name}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{services[selected].duration}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-secondary font-medium">{services[selected].price}</span>
                </div>
                <div className="mt-8">
                  <Button variant="secondary" size="lg" onClick={() => setStep(0)}>
                    {t('bookAnother')}
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  );
}
