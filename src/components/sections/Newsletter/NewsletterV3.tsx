'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, Check, Sparkles, Bell, Gift } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site.config';

const perks = [
  { icon: Bell, key: 'perk1' },
  { icon: Gift, key: 'perk2' },
  { icon: Sparkles, key: 'perk3' },
] as const;

/**
 * Newsletter V3 — Two-column value prop + form
 * Left: headline + benefit list with icons. Right: standalone form card.
 */
export function NewsletterSectionV3() {
  const t = useTranslations('newsletter');
  const config = siteConfig.newsletter;
  const [submitted, setSubmitted] = useState(false);

  if (!config) return null;

  return (
    <Section id="newsletter" padding="lg">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: value prop */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <MotionTypography variant="overline" as="span" className="text-secondary">
              {t('overline')}
            </MotionTypography>
            <MotionTypography variant="h2" className="mt-4">
              {t('heading')}
            </MotionTypography>
            <MotionTypography variant="body1" className="text-muted-foreground mt-4 max-w-sm">
              {t('subtitle')}
            </MotionTypography>

            <ul className="mt-8 space-y-4">
              {perks.map(({ icon: Icon, key }, i) => (
                <motion.li
                  key={key}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-secondary/10 text-secondary flex h-9 w-9 shrink-0 items-center justify-center rounded-xl">
                    <Icon className="h-4 w-4" />
                  </div>
                  <Typography
                    variant="body2"
                    className="text-muted-foreground pt-1.5 text-sm leading-snug"
                  >
                    {t(key)}
                  </Typography>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: form card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="border-border/40 bg-card rounded-3xl border p-8 shadow-sm sm:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center gap-4 py-8 text-center"
                >
                  <div className="bg-secondary/10 text-secondary flex h-14 w-14 items-center justify-center rounded-full">
                    <Check className="h-7 w-7" />
                  </div>
                  <Typography variant="h3" className="text-xl font-semibold">
                    {t('successMessage')}
                  </Typography>
                </motion.div>
              ) : (
                <>
                  <Typography variant="h3" className="text-xl font-semibold">
                    {t('formHeading')}
                  </Typography>
                  <Typography variant="body2" className="text-muted-foreground mt-2 text-sm">
                    {t('formSubtitle')}
                  </Typography>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="mt-7 space-y-4"
                  >
                    <div className="flex flex-col gap-1.5">
                      <label className="text-muted-foreground text-xs font-medium">
                        {t('labelName')}
                      </label>
                      <input
                        type="text"
                        placeholder={t('placeholderName')}
                        className="border-border/40 bg-background focus:border-secondary/50 focus:ring-secondary/10 rounded-xl border px-4 py-3 text-sm transition-colors outline-none focus:ring-2"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-muted-foreground text-xs font-medium">
                        {t('labelEmail')}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={t('placeholder')}
                        className="border-border/40 bg-background focus:border-secondary/50 focus:ring-secondary/10 rounded-xl border px-4 py-3 text-sm transition-colors outline-none focus:ring-2"
                      />
                    </div>

                    <Button type="submit" variant="secondary" size="md" fullWidth className="mt-2">
                      {t('submit')}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </form>

                  <Typography
                    variant="body2"
                    className="text-muted-foreground/60 mt-4 text-center text-xs"
                  >
                    {t('privacyNote')}
                  </Typography>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
