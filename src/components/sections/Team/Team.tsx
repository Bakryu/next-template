'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';
import { MobileCarousel } from '@/components/ui/MobileCarousel';

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

        {/* Mobile carousel */}
        <MobileCarousel slideWidth="w-[60vw]" className="-mx-4 sm:hidden">
          {team.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="bg-muted relative mx-auto mb-6 h-40 w-40 overflow-hidden rounded-2xl">
                <div className="from-secondary/20 to-accent/10 flex h-full w-full items-center justify-center bg-gradient-to-br">
                  <span className="font-heading text-secondary/60 text-4xl font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
              </div>
              <Typography variant="h3" className="text-lg">
                {member.name}
              </Typography>
              <Typography variant="small" className="text-secondary mt-1" weight="medium">
                {member.role}
              </Typography>
              {member.bio && (
                <Typography variant="small" className="text-muted-foreground mt-3 leading-relaxed">
                  {member.bio}
                </Typography>
              )}
            </div>
          ))}
        </MobileCarousel>

        {/* Desktop grid */}
        <div className="hidden gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
              <div className="bg-muted relative mx-auto mb-6 h-40 w-40 overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="from-secondary/20 to-accent/10 flex h-full w-full items-center justify-center bg-gradient-to-br">
                  <span className="font-heading text-secondary/60 text-4xl font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
              </div>
              <Typography variant="h3" className="text-lg">
                {member.name}
              </Typography>
              <Typography variant="small" className="text-secondary mt-1" weight="medium">
                {member.role}
              </Typography>
              {member.bio && (
                <Typography variant="small" className="text-muted-foreground mt-3 leading-relaxed">
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
