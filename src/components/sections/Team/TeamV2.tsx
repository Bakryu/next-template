'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';

/**
 * Team V2 — Horizontal List
 * Clean horizontal cards with large initials and minimal info.
 */
export function TeamSectionV2() {
  const t = useTranslations('team');
  const team = siteConfig.team;

  if (!team?.length) return null;

  return (
    <Section id="team" variant="muted" padding="lg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <MotionTypography variant="overline" as="span" className="text-secondary">
            {t('title')}
          </MotionTypography>
          <MotionTypography variant="h2" className="mt-4">
            {t('subtitle')}
          </MotionTypography>
        </motion.div>

        <div className="space-y-4">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex items-center gap-6 rounded-2xl border border-border/40 bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-secondary/20"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-secondary/10 text-xl font-bold font-heading text-secondary">
                {member.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div className="flex-1">
                <Typography variant="h3" className="text-lg">{member.name}</Typography>
                <Typography variant="small" className="text-secondary">{member.role}</Typography>
              </div>
              {member.bio && (
                <Typography variant="small" className="hidden max-w-xs text-muted-foreground lg:block">{member.bio}</Typography>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
