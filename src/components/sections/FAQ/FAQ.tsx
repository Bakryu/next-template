'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Plus } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';
import { cn } from '@/lib/utils/cn';

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'group rounded-2xl border transition-all duration-300',
        isOpen
          ? 'border-secondary/20 bg-card shadow-md'
          : 'border-border/40 bg-transparent hover:border-border hover:bg-card/50',
      )}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-6 text-left"
        aria-expanded={isOpen}
      >
        <Typography variant="body1" weight="semibold" as="span" className="pr-6 tracking-tight">{question}</Typography>
        <div
          className={cn(
            'flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300',
            isOpen
              ? 'bg-secondary text-secondary-foreground rotate-45'
              : 'bg-muted text-muted-foreground group-hover:bg-secondary/10 group-hover:text-secondary',
          )}
        >
          <Plus className="h-4 w-4" />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <Typography className="px-6 pb-6 text-muted-foreground leading-[1.8]">{answer}</Typography>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const t = useTranslations('faq');
  const { faq } = siteConfig;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faq.length) return null;

  return (
    <Section id="faq">
      <Container size="md">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left column — section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <Typography variant="overline" as="span" className="text-secondary">
              FAQ
            </Typography>
            <Typography variant="h2" className="mt-4">
              {t('title')}
            </Typography>
            <Typography className="mt-4 text-muted-foreground leading-relaxed">
              {t('subtitle')}
            </Typography>
          </motion.div>

          {/* Right column — accordion */}
          <div className="space-y-3 lg:col-span-8">
            {faq.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
