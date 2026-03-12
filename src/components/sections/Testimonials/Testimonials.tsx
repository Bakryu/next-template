'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Star } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography } from '@/components/ui/Typography';

export function TestimonialsSection() {
  const t = useTranslations('testimonials');
  const { testimonials } = siteConfig;

  if (!testimonials.length) return null;

  return (
    <Section id="testimonials" variant="warm">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-xl"
        >
          <Typography variant="overline" as="span" color="secondary">
            {t('title')}
          </Typography>
          <Typography variant="h2" className="mt-4">
            {t('subtitle')}
          </Typography>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
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
              className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card p-8 transition-all duration-500 hover:shadow-lg hover:border-secondary/20"
            >
              {/* Rating */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3.5 w-3.5 ${
                      i < testimonial.rating
                        ? 'fill-secondary text-secondary'
                        : 'fill-muted text-muted'
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <Typography className="mt-6 text-foreground leading-[1.8] font-heading" italic>
                &ldquo;{testimonial.content}&rdquo;
              </Typography>

              {/* Author */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-secondary/20 to-accent/10">
                  <span className="text-sm font-bold text-secondary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <Typography variant="small" weight="semibold">{testimonial.name}</Typography>
                  {testimonial.role && (
                    <Typography variant="caption" color="muted">{testimonial.role}</Typography>
                  )}
                </div>
              </div>

              {/* Decorative quote mark */}
              <div className="absolute -right-2 -top-2 text-8xl font-heading text-secondary/5 select-none">
                &ldquo;
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
