'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, Tag } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

/**
 * Promotions V2 — Featured banner strip
 * Shows the first promotion as a large horizontal banner,
 * remaining items as compact rows below.
 */
export function PromotionsSectionV2() {
  const t = useTranslations('promotions');
  const items = siteConfig.promotions;

  if (!items?.length) return null;

  const [featured, ...rest] = items;

  return (
    <Section id="promotions" padding="lg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center"
        >
          <MotionTypography variant="overline" as="span" className="text-secondary">
            {t('overline')}
          </MotionTypography>
          <MotionTypography variant="h2" className="mt-4">
            {t('heading')}
          </MotionTypography>
        </motion.div>

        {/* Featured banner */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="border-secondary/25 bg-secondary/6 mb-6 flex flex-col gap-5 overflow-hidden rounded-3xl border p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10"
        >
          <div className="flex-1">
            {featured.badge && (
              <Badge variant="secondary" size="sm" className="mb-3">
                {featured.badge === 'new'
                  ? t('badgeNew')
                  : featured.badge === 'hot'
                    ? t('badgeHot')
                    : featured.badge}
              </Badge>
            )}
            <Typography variant="h2" className="text-2xl font-semibold sm:text-3xl">
              {featured.title}
            </Typography>
            <Typography variant="body1" className="text-muted-foreground mt-2 max-w-lg">
              {featured.description}
            </Typography>
            {featured.expiresAt && (
              <Typography variant="body2" className="text-muted-foreground/60 mt-3 text-xs">
                {t('expires')} {featured.expiresAt}
              </Typography>
            )}
          </div>
          {featured.href && (
            <Button variant="secondary" size="lg" asChild className="shrink-0">
              <a href={featured.href}>
                {t('claimButton')}
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          )}
        </motion.div>

        {/* Remaining rows */}
        {rest.length > 0 && (
          <div className="space-y-3">
            {rest.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="border-border/40 bg-card hover:border-secondary/20 flex items-center gap-4 rounded-2xl border px-6 py-4 transition-colors"
              >
                <Tag className="text-secondary h-4 w-4 shrink-0" />
                <div className="min-w-0 flex-1">
                  <Typography variant="body1" className="truncate text-sm font-semibold">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" className="text-muted-foreground truncate text-xs">
                    {item.description}
                  </Typography>
                </div>
                {item.badge && (
                  <Badge variant="secondary" size="sm" className="shrink-0">
                    {item.badge === 'new'
                      ? t('badgeNew')
                      : item.badge === 'hot'
                        ? t('badgeHot')
                        : item.badge}
                  </Badge>
                )}
                {item.expiresAt && (
                  <Typography
                    variant="body2"
                    className="text-muted-foreground/60 hidden shrink-0 text-xs sm:block"
                  >
                    {t('expires')} {item.expiresAt}
                  </Typography>
                )}
                {item.href && (
                  <a
                    href={item.href}
                    className="text-secondary hover:text-secondary/80 ml-2 shrink-0"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
