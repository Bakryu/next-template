'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Typography } from '@/components/ui/Typography';

/**
 * Contact V2 — Minimal Centered
 * Single-column centered form with contact info below.
 */
export function ContactSectionV2() {
  const t = useTranslations('contact');
  const { contact, business } = siteConfig;

  return (
    <Section id="contact" padding="lg">
      <Container size="sm">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <Typography variant="overline" color="secondary">
            {t('title')}
          </Typography>
          <Typography variant="h2" className="mt-4">
            {contact.subtitle || t('subtitle')}
          </Typography>
        </motion.div>

        {contact.showForm && (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-12 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Input placeholder={t('form.namePlaceholder', { fallback: 'Your name' })} />
              <Input type="email" placeholder={t('form.emailPlaceholder', { fallback: 'Your email' })} />
            </div>
            <textarea
              placeholder={t('form.messagePlaceholder', { fallback: 'Your message...' })}
              rows={5}
              className="w-full rounded-xl border border-border/60 bg-card px-4 py-3 text-sm transition-colors focus:border-secondary focus:outline-none placeholder:text-muted-foreground resize-none"
            />
            <Button type="submit" size="lg" rounded="full" className="w-full gap-2 sm:w-auto">
              <Send className="h-4 w-4" />
              {t('form.submit', { fallback: 'Send Message' })}
            </Button>
          </motion.form>
        )}

        {/* Contact info row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-border/40 pt-10 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-secondary" />
            {business.phone}
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-secondary" />
            {business.email}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-secondary" />
            {business.location}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
