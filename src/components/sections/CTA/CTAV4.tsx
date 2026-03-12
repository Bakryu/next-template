'use client';

import React from 'react';
import { Link } from '@/lib/i18n/routing';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';

/**
 * CTA V4 — Card with Contact Info
 * Rounded card CTA with business contact details alongside the action.
 */
export function CTASectionV4() {
  const t = useTranslations('cta');
  const { cta, business } = siteConfig;

  return (
    <Section id="cta" padding="lg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-secondary/20 bg-gradient-to-br from-secondary/5 via-secondary/10 to-accent/5 p-10 sm:p-16"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Typography variant="h2">
                {t('heading', { fallback: cta.title })}
              </Typography>

              {cta.subtitle && (
                <Typography variant="subtitle2" className="mt-6">
                  {t('subheading', { fallback: cta.subtitle })}
                </Typography>
              )}

              <Button size="lg" variant="primary" rounded="full" className="mt-8 gap-2 group" asChild>
                <Link href={cta.buttonHref}>
                  {t('button', { fallback: cta.buttonText })}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="space-y-6 lg:pl-8 lg:border-l lg:border-border/40">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <Typography variant="caption" color="muted" className="uppercase tracking-wider">Phone</Typography>
                  <Typography weight="medium" className="font-heading">{business.phone}</Typography>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <Typography variant="caption" color="muted" className="uppercase tracking-wider">Email</Typography>
                  <Typography weight="medium" className="font-heading">{business.email}</Typography>
                </div>
              </div>

              {business.address && (
                <Typography variant="muted">{business.address}</Typography>
              )}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
