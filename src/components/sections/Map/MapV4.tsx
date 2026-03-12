'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Navigation } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';

/**
 * Map V4 — Rounded Map with CTA
 * Centered rounded map with a call-to-directions button.
 */
export function MapSectionV4() {
  const t = useTranslations('contact');
  const { contact, business } = siteConfig;

  if (!contact.mapEmbedUrl) return null;

  return (
    <Section id="map" variant="muted" padding="lg">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <Typography variant="overline" as="span" className="tracking-[0.2em] text-secondary">
            {t('visitUsLabel', { fallback: 'Visit Us' })}
          </Typography>
          <Typography variant="h2" className="mt-4 text-2xl tracking-tight sm:text-3xl">
            {business.address || business.location}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="overflow-hidden rounded-3xl border border-border/40 shadow-lg"
        >
          <iframe
            src={contact.mapEmbedUrl}
            className="h-[400px] w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location map"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Button
            variant="outline"
            rounded="full"
            className="gap-2"
            onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address || business.location)}`, '_blank')}
          >
            <Navigation className="h-4 w-4" />
            {t('directionsButton', { fallback: 'Get Directions' })}
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
