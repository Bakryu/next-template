'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Plus, Minus } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';

/**
 * FAQ V2 — Centered Minimal
 * Clean centered accordion with plus/minus icons and elegant transitions.
 */
export function FAQSectionV2() {
  const t = useTranslations('faq');
  const { faq } = siteConfig;
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <Section id="faq" padding="lg">
      <Container size="sm">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <Typography variant="overline" as="span" className="text-secondary">
            {t('title')}
          </Typography>
          <Typography variant="h2" className="mt-4">
            {t('subtitle')}
          </Typography>
        </motion.div>

        <div className="space-y-0 divide-y divide-border/60">
          {faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between py-6 text-left"
                >
                  <Typography variant="body1" weight="medium" as="span" className="pr-8 font-heading">{item.question}</Typography>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-secondary hover:text-secondary">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <Typography variant="body2" className="pb-6 leading-relaxed text-muted-foreground">
                        {item.answer}
                      </Typography>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
