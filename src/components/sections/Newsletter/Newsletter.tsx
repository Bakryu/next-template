'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Mail, ArrowRight, Check } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site.config';

/**
 * Newsletter — Centered card
 * Clean centered card with headline, subtitle, email input and submit button.
 */
export function NewsletterSection() {
  const t = useTranslations('newsletter');
  const config = siteConfig.newsletter;
  const [submitted, setSubmitted] = useState(false);

  if (!config) return null;

  return (
    <Section id="newsletter" variant="muted">
      <Container size="sm">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="border-border/40 bg-card rounded-3xl border p-10 text-center shadow-sm sm:p-14"
        >
          <div className="bg-secondary/10 text-secondary mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl">
            <Mail className="h-6 w-6" />
          </div>

          <MotionTypography variant="overline" as="span" className="text-secondary">
            {t('overline')}
          </MotionTypography>
          <MotionTypography variant="h2" className="mt-3 text-3xl">
            {t('heading')}
          </MotionTypography>
          <MotionTypography variant="body1" className="text-muted-foreground mx-auto mt-4 max-w-md">
            {t('subtitle')}
          </MotionTypography>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="mt-8 flex flex-col items-center gap-3"
            >
              <div className="bg-secondary/10 text-secondary flex h-12 w-12 items-center justify-center rounded-full">
                <Check className="h-6 w-6" />
              </div>
              <Typography variant="body1" className="font-medium">
                {t('successMessage')}
              </Typography>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-2"
            >
              <input
                type="email"
                required
                placeholder={t('placeholder')}
                className="border-border/40 bg-background focus:border-secondary/50 focus:ring-secondary/10 flex-1 rounded-xl border px-5 py-3.5 text-sm transition-colors outline-none focus:ring-2"
              />
              <Button type="submit" variant="secondary" size="md" className="shrink-0">
                {t('submit')}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </form>
          )}

          <Typography variant="body2" className="text-muted-foreground/60 mt-5 text-xs">
            {t('privacyNote')}
          </Typography>
        </motion.div>
      </Container>
    </Section>
  );
}
