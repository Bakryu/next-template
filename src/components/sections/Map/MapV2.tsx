'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MapPin, Clock, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography } from '@/components/ui/Typography';

/**
 * Map V2 — Full Width with Overlay Card
 * Full-width map with a floating info card overlay on the left.
 */
export function MapSectionV2() {
  const t = useTranslations('contact');
  const { contact, business } = siteConfig;

  if (!contact.mapEmbedUrl) return null;

  return (
    <Section id="map" padding="sm" className="overflow-hidden">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-[500px] w-full"
        >
          <iframe
            src={contact.mapEmbedUrl}
            className="h-full w-full border-0 grayscale"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location map"
          />
        </motion.div>

        {/* Floating card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="absolute left-6 top-6 z-10 max-w-sm rounded-2xl border border-border/40 bg-card p-8 shadow-xl sm:left-12 sm:top-12"
        >
          <Typography variant="h3" className="text-lg">{business.name}</Typography>

          <div className="mt-6 space-y-4 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <Typography variant="small" as="span">{business.address || business.location}</Typography>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-secondary" />
              <Typography variant="small" as="span">{business.phone}</Typography>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 shrink-0 text-secondary" />
              <Typography variant="small" as="span">Mon – Sat: 9am – 6pm</Typography>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
