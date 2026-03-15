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
  const tDays = useTranslations('days');
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
                <div className="text-secondary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <Typography variant="label" as="p">
                    {t('addressLabel')}
                  </Typography>
                  <Typography variant="body2" className="mt-1 opacity-60">
                    {business.address || business.location}
                  </Typography>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-secondary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <Typography variant="label" as="p">
                    {t('phoneLabel')}
                  </Typography>
                  <Typography variant="body2" className="mt-1 opacity-60">
                    {business.phone}
                  </Typography>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-secondary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <Typography variant="label" as="p">
                    {t('emailLabel')}
                  </Typography>
                  <Typography variant="body2" className="mt-1 opacity-60">
                    {business.email}
                  </Typography>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-secondary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <Typography variant="label" as="p">
                    {t('hoursLabel')}
                  </Typography>
                  {business.openingHours ? (
                    <div className="mt-1 space-y-1">
                      {business.openingHours.slice(0, 3).map((h) => (
                        <Typography key={h.day} variant="body2" className="opacity-60">
                          {tDays(h.day as Parameters<typeof tDays>[0])}:{' '}
                          {h.closed ? t('info.closed') : `${h.open} – ${h.close}`}
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
              className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-4">
                <Input
                  placeholder={t('form.namePlaceholder', { fallback: 'Your name' })}
                  className="border-white/10 bg-white/5 text-white placeholder:text-white/30"
                />
                <Input
                  type="email"
                  placeholder={t('form.emailPlaceholder', { fallback: 'Your email' })}
                  className="border-white/10 bg-white/5 text-white placeholder:text-white/30"
                />
                <textarea
                  placeholder={t('form.messagePlaceholder', { fallback: 'Your message...' })}
                  rows={5}
                  className="focus:border-secondary w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-colors placeholder:text-white/30 focus:outline-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                variant="secondary"
                rounded="full"
                className="w-full gap-2"
              >
                <Send className="h-4 w-4" />
                {t('form.submit', { fallback: 'Send Message' })}
              </Button>
            </motion.form>
          )}
        </div>
      </Container>

      <div className="bg-secondary/5 pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full blur-[120px]" />
    </Section>
  );
}
