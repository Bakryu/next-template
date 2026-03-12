'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';

/**
 * Team V3 — Dark Overlay Cards
 * Dark background with large cards featuring gradient overlays.
 */
export function TeamSectionV3() {
  const t = useTranslations('team');
  const team = siteConfig.team;

  if (!team?.length) return null;

  return (
    <Section id="team" variant="dark" padding="lg" className="overflow-hidden grain">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-xl"
        >
          <MotionTypography variant="overline" as="span" className="text-secondary">
            {t('title')}
          </MotionTypography>
          <MotionTypography variant="h2" className="mt-4">
            {t('subtitle')}
          </MotionTypography>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-white/5"
            >
              {/* Large initial background */}
              <div className="absolute inset-0 flex items-center justify-center text-[10rem] font-bold font-heading text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-500">
                {member.name.charAt(0)}
              </div>

              {/* Content at bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground via-foreground/80 to-transparent p-6 pt-16">
                <Typography variant="h3" className="text-lg">{member.name}</Typography>
                <Typography variant="small" className="text-secondary">{member.role}</Typography>
                {member.bio && (
                  <Typography variant="caption" className="mt-3 leading-relaxed opacity-50 line-clamp-2">{member.bio}</Typography>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-secondary/5 blur-[120px]" />
    </Section>
  );
}
