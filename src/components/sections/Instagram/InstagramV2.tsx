'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Instagram, Heart, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

/**
 * Instagram V2 — Masonry-style varying-height grid.
 * Two columns on mobile, three on desktop with staggered heights.
 */
export function InstagramSectionV2() {
  const t = useTranslations('instagram');
  const posts = siteConfig.instagramPosts;
  const handle = siteConfig.business.socials.instagram;

  if (!posts?.length) return null;

  // Split into 3 columns for masonry
  const cols = [
    posts.filter((_, i) => i % 3 === 0),
    posts.filter((_, i) => i % 3 === 1),
    posts.filter((_, i) => i % 3 === 2),
  ];

  const aspects = [
    'aspect-[3/4]',
    'aspect-square',
    'aspect-[3/4]',
    'aspect-[4/3]',
    'aspect-square',
  ];

  return (
    <Section id="instagram" padding="lg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <MotionTypography variant="overline" as="span" className="text-secondary">
            {t('overline')}
          </MotionTypography>
          <MotionTypography variant="h2" className="mt-4">
            {t('heading')}
          </MotionTypography>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {cols.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-3">
              {col.map((post, i) => {
                const globalIdx = ci + i * 3;
                return (
                  <motion.a
                    key={i}
                    href={post.url ?? '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: globalIdx * 0.05 }}
                    className={`group relative ${aspects[globalIdx % aspects.length]} bg-muted w-full overflow-hidden rounded-2xl`}
                  >
                    <Image
                      src={post.image}
                      alt={post.caption ?? t('post')}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex items-center gap-4 text-sm font-semibold text-white">
                        {post.likes !== undefined && (
                          <span className="flex items-center gap-1">
                            <Heart className="h-4 w-4 fill-white" />
                            {post.likes.toLocaleString()}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4 fill-white" />
                        </span>
                      </div>
                      {post.caption && (
                        <Typography
                          variant="body2"
                          className="line-clamp-2 max-w-[80%] text-center text-xs text-white/80"
                        >
                          {post.caption}
                        </Typography>
                      )}
                    </div>
                  </motion.a>
                );
              })}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <Button variant="secondary" size="md" asChild>
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
