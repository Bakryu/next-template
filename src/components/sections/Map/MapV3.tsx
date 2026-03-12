'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography } from '@/components/ui/Typography';

/**
 * Map V3 — Split Dark Layout
 * Dark section with info on left, map on right in a rounded container.
 */
export function MapSectionV3() {
  const t = useTranslations('contact');
  const { contact, business } = siteConfig;

  if (!contact.mapEmbedUrl) return null;

  return (
    <Section id="map" variant="dark" padding="lg">
      <Container>
        <div className="grid items-stretch gap-0 overflow-hidden rounded-3xl lg:grid-cols-2">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center bg-white/5 p-10 sm:p-14"
          >
            <Typography variant="overline" as="span" className="tracking-[0.2em] text-secondary">
              {t('visitUsLabel', { fallback: 'Visit Us' })}
            </Typography>
            <Typography variant="h3" className="mt-4 text-2xl sm:text-3xl">{business.name}</Typography>

            <div className="mt-8 space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <Typography variant="small" as="span" className="opacity-70">{business.address || business.location}</Typography>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-secondary" />
                <Typography variant="small" as="span" className="opacity-70">{business.phone}</Typography>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-secondary" />
                <Typography variant="small" as="span" className="opacity-70">{business.email}</Typography>
              </div>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <iframe
              src={contact.mapEmbedUrl}
              className="h-full min-h-[350px] w-full border-0 grayscale"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location map"
            />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
