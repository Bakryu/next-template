'use client';

import React from 'react';
import { Link } from '@/lib/i18n/routing';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import { cn } from '@/lib/utils/cn';

export function PricingSection() {
  const t = useTranslations('pricing');
  const pricing = siteConfig.pricing;

  if (!pricing?.length) return null;

  return (
    <Section id="pricing" variant="warm">
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

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pricing.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                'relative flex flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-500',
                plan.featured
                  ? 'border-secondary/30 bg-card shadow-xl shadow-secondary/5 scale-[1.02]'
                  : 'border-border/40 bg-card hover:shadow-lg hover:border-secondary/20',
              )}
            >
              {plan.featured && (
                <div className="absolute -right-12 top-6 rotate-45 bg-secondary px-12 py-1 text-[10px] font-bold uppercase tracking-widest text-secondary-foreground">
                  {t('popular')}
                </div>
              )}

              <div className="mb-6">
                <Typography variant="h4" weight="bold" as="h3">{plan.name}</Typography>
                {plan.description && (
                  <Typography variant="muted" className="mt-2">{plan.description}</Typography>
                )}
              </div>

              <div className="mb-8">
                <Typography weight="bold" as="span" className="text-4xl font-heading">{plan.price}</Typography>
                {plan.period && (
                  <Typography variant="muted" as="span" className="ml-1">/{plan.period}</Typography>
                )}
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                    <Typography as="span" color="muted">{feature}</Typography>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? 'secondary' : 'outline'}
                rounded="full"
                className="w-full"
                asChild
              >
                <Link href={plan.href || '#contact'}>
                  {plan.buttonText || t('getStarted')}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
