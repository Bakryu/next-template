'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';

/**
 * Team V4 — Editorial Grid with Bio
 * Two-column grid with large text and full bios, magazine style.
 */
export function TeamSectionV4() {
  const t = useTranslations('team');
  const team = siteConfig.team;

  if (!team?.length) return null;

  return (
    <Section id="team" padding="lg">
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
            <MotionTypography variant="overline" as="span" className="text-secondary">
              {t('title')}
            </MotionTypography>
            <MotionTypography variant="h2" className="mt-4">
              {t('subtitle')}
            </MotionTypography>
          </motion.div>

          {/* Right: Team grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group"
              >
                {/* Avatar placeholder */}
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted mb-5 flex items-center justify-center">
                  <span className="text-5xl font-bold font-heading text-muted-foreground/20 group-hover:text-secondary/30 transition-colors duration-300">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>

                <Typography variant="h3" className="text-lg">{member.name}</Typography>
                <Typography variant="small" className="text-secondary">{member.role}</Typography>
                {member.bio && (
                  <Typography variant="small" className="mt-3 text-muted-foreground leading-relaxed">{member.bio}</Typography>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
