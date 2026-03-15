'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography } from '@/components/ui/Typography';

/**
 * FAQ V3 — Two Column Grid
 * Split layout with heading left and accordion cards on the right.
 */
export function FAQSectionV3() {
  const t = useTranslations('faq');
  const { faq } = siteConfig;
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <Section id="faq" variant="muted" padding="lg">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left — sticky heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32 lg:col-span-4 lg:self-start"
          >
            <Typography variant="overline" as="span" className="text-secondary">
              {t('title')}
            </Typography>
            <Typography variant="h2" className="mt-4">
              {t('subtitle')}
            </Typography>
          </motion.div>

          {/* Right — accordion cards */}
          <div className="space-y-3 lg:col-span-8">
            {faq.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="border-border/40 bg-card overflow-hidden rounded-2xl border"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <Typography
                      variant="body1"
                      weight="medium"
                      as="span"
                      className="font-heading pr-4"
                    >
                      {item.question}
                    </Typography>
                    <ChevronDown
                      className={`text-muted-foreground h-5 w-5 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-border/40 border-t px-6 py-5">
                          <Typography
                            variant="body2"
                            className="text-muted-foreground leading-relaxed"
                          >
                            {item.answer}
                          </Typography>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
