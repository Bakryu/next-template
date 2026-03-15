'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MapPin, Clock, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Section } from '@/components/layout/Section';
import { Typography } from '@/components/ui/Typography';

/**
 * Map V2 — Full Width with Overlay Card
 * Full-width map with a floating info card overlay on the left.
 */
export function MapSectionV2() {
  const tDays = useTranslations('days');
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
          className="border-border/40 bg-card absolute top-6 left-6 z-10 max-w-sm rounded-2xl border p-8 shadow-xl sm:top-12 sm:left-12"
        >
          <Typography variant="h3" className="text-lg">
            {business.name}
          </Typography>

          <div className="text-muted-foreground mt-6 space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="text-secondary mt-0.5 h-4 w-4 shrink-0" />
              <Typography variant="small" as="span">
                {business.address || business.location}
              </Typography>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-secondary h-4 w-4 shrink-0" />
              <Typography variant="small" as="span">
                {business.phone}
              </Typography>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-secondary h-4 w-4 shrink-0" />
              {business.openingHours ? (
                <Typography variant="small" as="span">
                  {business.openingHours
                    .filter((h) => !h.closed)
                    .slice(0, 1)
                    .map(
                      (h) =>
                        `${tDays(h.day as Parameters<typeof tDays>[0])}: ${h.open} – ${h.close}`,
                    )
                    .join(', ')}
                </Typography>
              ) : null}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
