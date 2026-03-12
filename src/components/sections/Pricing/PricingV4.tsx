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
 * Pricing V4 — Side-by-Side Split
 * Left heading sticky, right scrollable pricing cards.
 */
export function PricingSectionV4() {
  const t = useTranslations('pricing');
  const pricing = siteConfig.pricing;

  if (!pricing?.length) return null;

  return (
    <Section id="pricing" variant="warm" padding="lg">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"
          >
            <Typography variant="overline" color="secondary" as="span">
              {t('title')}
            </Typography>
            <Typography variant="h2" className="mt-4 lg:text-4xl">
              {t('subtitle')}
            </Typography>
            <Typography variant="muted" className="mt-4">
              {t('description', { fallback: '' })}
            </Typography>
          </motion.div>

          {/* Right: Cards */}
          <div className="space-y-6 lg:col-span-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`overflow-hidden rounded-3xl border ${
                  plan.featured
                    ? 'border-secondary/40 ring-1 ring-secondary/20'
                    : 'border-border/40'
                } bg-card`}
              >
                <div className="grid gap-6 p-8 sm:grid-cols-2 sm:p-10">
                  <div>
                    <div className="flex items-center gap-3">
                      <Typography variant="h4" as="h3">{plan.name}</Typography>
                      {plan.featured && (
                        <span className="rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary">
                          {t('popularLabel', { fallback: 'Popular' })}
                        </span>
                      )}
                    </div>
                    {plan.description && (
                      <Typography variant="muted" className="mt-2">{plan.description}</Typography>
                    )}
                    <div className="mt-4 flex items-baseline gap-1">
                      <Typography weight="bold" as="span" className="text-3xl font-heading">{plan.price}</Typography>
                      {plan.period && (
                        <Typography variant="muted" as="span">/{plan.period}</Typography>
                      )}
                    </div>
                    <Button
                      variant={plan.featured ? 'primary' : 'outline'}
                      rounded="full"
                      className="mt-6 gap-2 group/btn"
                      asChild
                    >
                      <Link href={plan.href || '#contact'}>
                        {plan.buttonText || t('selectButton', { fallback: 'Choose Plan' })}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>

                  <ul className="space-y-2.5">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
