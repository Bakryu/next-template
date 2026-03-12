'use client';

import React from 'react';
import { Link } from '@/lib/i18n/routing';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Check, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';

/**
 * Pricing V2 — Minimal Comparison
 * Clean horizontal pricing comparison with check marks.
 */
export function PricingSectionV2() {
  const t = useTranslations('pricing');
  const pricing = siteConfig.pricing;

  if (!pricing?.length) return null;

  return (
    <Section id="pricing" padding="lg">
      <Container size="md">
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

        <div className="space-y-4">
          {pricing.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group rounded-2xl border p-8 transition-all duration-300 hover:shadow-lg ${
                plan.featured
                  ? 'border-secondary/40 bg-secondary/5'
                  : 'border-border/40 bg-card'
              }`}
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <Typography variant="h4" as="h3">{plan.name}</Typography>
                    {plan.featured && (
                      <span className="rounded-full bg-secondary px-3 py-0.5 text-xs font-medium text-secondary-foreground">
                        {t('popularLabel', { fallback: 'Popular' })}
                      </span>
                    )}
                  </div>
                  {plan.description && (
                    <Typography variant="muted" className="mt-1">{plan.description}</Typography>
                  )}
                </div>

                <div className="flex items-baseline gap-1 shrink-0">
                  <Typography weight="bold" as="span" className="text-3xl font-heading">{plan.price}</Typography>
                  {plan.period && (
                    <Typography variant="muted" as="span">/{plan.period}</Typography>
                  )}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-secondary" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Button
                  variant={plan.featured ? 'secondary' : 'outline'}
                  rounded="full"
                  className="gap-2 group/btn"
                  asChild
                >
                  <Link href={plan.href || '#contact'}>
                    {plan.buttonText || t('selectButton', { fallback: 'Select Plan' })}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
