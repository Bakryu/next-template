'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/components/ui/Toast';
import { Typography } from '@/components/ui/Typography';

export function ContactSection() {
  const t = useTranslations('contact');
  const tDays = useTranslations('days');
  const { contact, business } = siteConfig;
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast(t('successMessage'), 'success');
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Section id="contact" variant="muted">
      <Container>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-xl"
        >
          <Typography variant="overline" color="secondary">
            {t('title', { fallback: contact.title })}
          </Typography>
          <Typography variant="h2" className="mt-4">
            {t('title', { fallback: contact.title })}
          </Typography>
          {contact.subtitle && (
            <Typography color="muted" className="mt-4">
              {contact.subtitle}
            </Typography>
          )}
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Contact Form */}
          {contact.showForm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <form
                onSubmit={handleSubmit}
                className="border-border/50 bg-card rounded-2xl border p-8 shadow-sm"
              >
                <div className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Input
                      name="name"
                      label={t('form.name')}
                      placeholder={t('form.namePlaceholder')}
                      required
                    />
                    <Input
                      name="email"
                      type="email"
                      label={t('form.email')}
                      placeholder={t('form.emailPlaceholder')}
                      required
                    />
                  </div>
                  <Input
                    name="phone"
                    type="tel"
                    label={t('form.phone')}
                    placeholder={t('form.phonePlaceholder')}
                  />
                  <div className="flex flex-col gap-2">
                    <Typography
                      variant="label"
                      as="label"
                      className="text-foreground"
                      {...{ htmlFor: 'message' }}
                    >
                      {t('form.message')}
                    </Typography>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder={t('form.messagePlaceholder')}
                      className="border-border/60 bg-background placeholder:text-muted-foreground/60 focus-visible:ring-ring flex w-full resize-none rounded-xl border px-4 py-3 text-sm transition-all duration-300 focus-visible:border-transparent focus-visible:ring-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    rounded="full"
                    disabled={isSubmitting}
                    className="group gap-2"
                  >
                    {isSubmitting ? (
                      t('form.sending')
                    ) : (
                      <>
                        {t('form.submit')}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5 lg:col-span-4 lg:col-start-9"
          >
            {/* Info cards */}
            {[
              {
                icon: MapPin,
                label: t('info.address'),
                value: business.address || business.location,
              },
              {
                icon: Phone,
                label: t('info.phone'),
                value: business.phone,
                href: `tel:${business.phone}`,
              },
              {
                icon: Mail,
                label: t('info.email'),
                value: business.email,
                href: `mailto:${business.email}`,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card border-border/30 flex items-start gap-4 rounded-xl border p-5"
              >
                <div className="bg-secondary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                  <item.icon className="text-secondary h-4 w-4" />
                </div>
                <div>
                  <Typography variant="overline" as="p" color="muted">
                    {item.label}
                  </Typography>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-foreground hover:text-secondary mt-1 block text-sm transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <Typography variant="body2" className="text-foreground mt-1">
                      {item.value}
                    </Typography>
                  )}
                </div>
              </div>
            ))}

            {/* Hours */}
            {business.openingHours && (
              <div className="bg-card border-border/30 rounded-xl border p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div className="bg-secondary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                    <Clock className="text-secondary h-4 w-4" />
                  </div>
                  <Typography variant="overline" as="p" color="muted">
                    {t('info.hours')}
                  </Typography>
                </div>
                <div className="space-y-1.5 pl-[52px]">
                  {business.openingHours.slice(0, 4).map((h) => (
                    <Typography variant="body2" key={h.day} className="flex justify-between">
                      <Typography variant="body2" as="span" color="muted">
                        {tDays(h.day as Parameters<typeof tDays>[0])}
                      </Typography>
                      <Typography variant="body2" as="span" weight="medium">
                        {h.closed ? t('info.closed') : `${h.open} – ${h.close}`}
                      </Typography>
                    </Typography>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
