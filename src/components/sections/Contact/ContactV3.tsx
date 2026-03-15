'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Typography } from '@/components/ui/Typography';

/**
 * Contact V3 — Dark Split Layout
 * Dark background with contact details left, form right.
 */
export function ContactSectionV3() {
  const t = useTranslations('contact');
  const { contact, business } = siteConfig;

  return (
    <Section id="contact" variant="dark" padding="lg" className="overflow-hidden">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Typography variant="overline" color="secondary">
              {t('title')}
            </Typography>
            <Typography variant="h2" className="mt-4">
              {contact.subtitle || t('form.subtitle')}
            </Typography>

            <div className="mt-12 space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-secondary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <Typography variant="label" as="p">{t('addressLabel')}</Typography>
                  <Typography variant="body2" className="mt-1 opacity-60">{business.address || business.location}</Typography>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-secondary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <Typography variant="label" as="p">{t('phoneLabel')}</Typography>
                  <Typography variant="body2" className="mt-1 opacity-60">{business.phone}</Typography>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-secondary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <Typography variant="label" as="p">{t('emailLabel')}</Typography>
                  <Typography variant="body2" className="mt-1 opacity-60">{business.email}</Typography>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-secondary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <Typography variant="label" as="p">{t('hoursLabel')}</Typography>
                  {business.openingHours ? (
                    <div className="mt-1 space-y-1">
                      {business.openingHours.slice(0, 3).map((h) => (
                        <Typography key={h.day} variant="body2" className="opacity-60">
                          {h.day}: {h.closed ? t('info.closed') : `${h.open} – ${h.close}`}
                        </Typography>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          {contact.showForm && (
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="h-full flex justify-between flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-4">
                <Input placeholder={t('form.namePlaceholder', { fallback: 'Your name' })} className="border-white/10 bg-white/5 text-white placeholder:text-white/30" />
                <Input type="email" placeholder={t('form.emailPlaceholder', { fallback: 'Your email' })} className="border-white/10 bg-white/5 text-white placeholder:text-white/30" />
                <textarea
                  placeholder={t('form.messagePlaceholder', { fallback: 'Your message...' })}
                  rows={5}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-colors focus:border-secondary focus:outline-none placeholder:text-white/30 resize-none"
                />
              </div>
              <Button type="submit" size="lg" variant="secondary" rounded="full" className="w-full gap-2">
                <Send className="h-4 w-4" />
                {t('form.submit', { fallback: 'Send Message' })}
              </Button>
            </motion.form>
          )}
        </div>
      </Container>

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/5 blur-[120px]" />
    </Section>
  );
}
