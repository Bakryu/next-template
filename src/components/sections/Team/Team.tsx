'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';

export function TeamSection() {
  const t = useTranslations('team');
  const team = siteConfig.team;

  if (!team?.length) return null;

  return (
    <Section id="team">
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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group text-center"
            >
              {/* Avatar */}
              <div className="relative mx-auto mb-6 h-40 w-40 overflow-hidden rounded-2xl bg-muted transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary/20 to-accent/10">
                  <span className="text-4xl font-bold text-secondary/60 font-heading">
                    {member.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Info */}
              <Typography variant="h3" className="text-lg">{member.name}</Typography>
              <Typography variant="small" className="mt-1 text-secondary" weight="medium">{member.role}</Typography>
              {member.bio && (
                <Typography variant="small" className="mt-3 text-muted-foreground leading-relaxed">
                  {member.bio}
                </Typography>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
