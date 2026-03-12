'use client';

import React from 'react';
import { Link } from '@/lib/i18n/routing';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Check, Star } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';

/**
 * Pricing V3 — Dark Featured Center
 * Dark background with center-featured plan elevated.
 */
export function PricingSectionV3() {
  const t = useTranslations('pricing');
  const pricing = siteConfig.pricing;

  if (!pricing?.length) return null;

  return (
    <Section id="pricing" variant="dark" padding="lg" className="overflow-hidden grain">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <Typography variant="overline" color="secondary" as="span">
            {t('title')}
          </Typography>
          <Typography variant="h2" className="mt-4">
            {t('subtitle')}
          </Typography>
        </motion.div>

        <div className="grid items-center gap-6 md:grid-cols-3">
          {pricing.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl border p-8 transition-all duration-300 ${
                plan.featured
                  ? 'border-secondary/40 bg-secondary/10 md:scale-105 md:p-10 shadow-2xl shadow-secondary/10'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-secondary px-4 py-1 text-xs font-semibold text-secondary-foreground">
                  <Star className="h-3 w-3" />
                  {t('popularLabel', { fallback: 'Most Popular' })}
                </div>
              )}

              <div className="text-center">
                <Typography variant="h5" as="h3">{plan.name}</Typography>
                {plan.description && (
                  <Typography variant="body2" className="mt-1 opacity-50">{plan.description}</Typography>
                )}

                <div className="mt-6 flex items-baseline justify-center gap-1">
                  <Typography weight="bold" color="secondary" as="span" className="text-4xl font-heading">{plan.price}</Typography>
                  {plan.period && (
                    <Typography variant="small" className="opacity-50">/{plan.period}</Typography>
                  )}
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                    <Typography as="span" className="opacity-70">{feature}</Typography>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  variant={plan.featured ? 'secondary' : 'outline'}
                  rounded="full"
                  className={`w-full ${!plan.featured ? 'border-white/20 text-white hover:bg-white/10' : ''}`}
                  asChild
                >
                  <Link href={plan.href || '#contact'}>
                    {plan.buttonText || t('selectButton', { fallback: 'Get Started' })}
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-[120px]" />
    </Section>
  );
}
