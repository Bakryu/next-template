import React from 'react';
import { siteConfig } from '@/config/site.config';
import { Section } from '@/components/layout/Section';

export function MapSection() {
  const { contact } = siteConfig;

  if (!contact.mapEmbedUrl) return null;

  return (
    <Section id="map" padding="sm" className="px-0">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl px-[var(--container-padding)]">
        <div className="h-[400px] w-full overflow-hidden rounded-2xl border border-border/30 shadow-md lg:h-[500px]">
          <iframe
            src={contact.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location map"
          />
        </div>
      </div>
    </Section>
  );
}
