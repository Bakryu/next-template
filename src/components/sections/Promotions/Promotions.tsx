'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, Calendar } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';
import { Badge } from '@/components/ui/Badge';

/**
 * Promotions — Cards grid
 * Each promotion is a card with badge, title, description, expiry, and CTA link.
 */
export function PromotionsSection() {
  const t = useTranslations('promotions');
  const items = siteConfig.promotions;

  if (!items?.length) return null;

  return (
    <Section id="promotions" variant="muted">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-xl"
        >
          <MotionTypography variant="overline" as="span" className="text-secondary">
            {t('overline')}
          </MotionTypography>
          <MotionTypography variant="h2" className="mt-4">
            {t('heading')}
          </MotionTypography>
          <MotionTypography variant="body1" className="text-muted-foreground mt-4">
            {t('subtitle')}
          </MotionTypography>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group border-border/40 bg-card hover:border-secondary/30 flex flex-col rounded-2xl border p-7 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              {item.badge && (
                <Badge variant="secondary" size="sm" className="mb-4 self-start">
                  {item.badge === 'new'
                    ? t('badgeNew')
                    : item.badge === 'hot'
                      ? t('badgeHot')
                      : item.badge}
                </Badge>
              )}

              <Typography variant="h3" className="text-lg font-semibold">
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed"
              >
                {item.description}
              </Typography>

              {item.expiresAt && (
                <div className="text-muted-foreground/70 mt-5 flex items-center gap-1.5 text-xs">
                  <Calendar className="h-3.5 w-3.5" />
                  {t('expires')} {item.expiresAt}
                </div>
              )}

              {item.href && (
                <a
                  href={item.href}
                  className="text-secondary hover:text-secondary/80 mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                >
                  {t('claimButton')}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
