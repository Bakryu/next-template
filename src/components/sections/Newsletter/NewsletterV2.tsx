'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, Check } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site.config';

/**
 * Newsletter V2 — Full-width dark banner with inline form
 * A high-contrast dark strip — heading left, form right, full bleed feel.
 */
export function NewsletterSectionV2() {
  const t = useTranslations('newsletter');
  const config = siteConfig.newsletter;
  const [submitted, setSubmitted] = useState(false);

  if (!config) return null;

  return (
    <Section id="newsletter" variant="dark" padding="md">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md"
          >
            <Typography variant="overline" as="span" className="text-secondary text-xs">
              {t('overline')}
            </Typography>
            <Typography variant="h2" className="mt-3 text-2xl sm:text-3xl">
              {t('heading')}
            </Typography>
            <Typography variant="body1" className="mt-3 text-sm opacity-60 sm:text-base">
              {t('subtitle')}
            </Typography>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-auto md:min-w-[380px]"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border-secondary/30 bg-secondary/10 flex items-center gap-3 rounded-xl border px-6 py-4 text-sm font-medium"
              >
                <Check className="text-secondary h-5 w-5 shrink-0" />
                {t('successMessage')}
              </motion.div>
            ) : (
              <>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    required
                    placeholder={t('placeholder')}
                    className="focus:border-secondary/50 focus:ring-secondary/20 flex-1 rounded-xl border border-white/15 bg-white/8 px-5 py-3.5 text-sm text-white transition-colors outline-none placeholder:text-white/40 focus:bg-white/10 focus:ring-2"
                  />
                  <Button type="submit" variant="secondary" size="md" className="shrink-0">
                    {t('submit')}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </form>
                <Typography variant="body2" className="mt-2.5 pl-1 text-xs opacity-40">
                  {t('privacyNote')}
                </Typography>
              </>
            )}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
