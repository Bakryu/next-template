'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Instagram, Heart } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { MotionTypography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

/**
 * Instagram — 6-image uniform grid with hover overlay + follow CTA.
 */
export function InstagramSection() {
  const t = useTranslations('instagram');
  const posts = siteConfig.instagramPosts;
  const handle = siteConfig.business.socials.instagram;

  if (!posts?.length) return null;

  return (
    <Section id="instagram" variant="muted">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <MotionTypography variant="overline" as="span" className="text-secondary">
            {t('overline')}
          </MotionTypography>
          <MotionTypography variant="h2" className="mt-4">
            {t('heading')}
          </MotionTypography>
          {handle && (
            <MotionTypography variant="body1" className="text-muted-foreground mt-2">
              {handle}
            </MotionTypography>
          )}
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {posts.slice(0, 6).map((post, i) => (
            <motion.a
              key={i}
              href={post.url ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-muted relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={post.image}
                alt={post.caption ?? t('post')}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {post.likes !== undefined && (
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-white">
                    <Heart className="h-4 w-4 fill-white" />
                    {post.likes.toLocaleString()}
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <Button variant="outline" size="md" asChild>
            <a
              href={`https://instagram.com/${handle?.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2 h-4 w-4" />
              {t('followButton')}
            </a>
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
