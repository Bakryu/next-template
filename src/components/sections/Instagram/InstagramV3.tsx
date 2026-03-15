'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Instagram, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Typography, MotionTypography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

/**
 * Instagram V3 — Dark horizontal scroll strip.
 * Fixed-height scroll row with handle + follow button above.
 */
export function InstagramSectionV3() {
  const t = useTranslations('instagram');
  const posts = siteConfig.instagramPosts;
  const handle = siteConfig.business.socials.instagram;
  const scrollRef = useRef<HTMLDivElement>(null);

  if (!posts?.length) return null;

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
  };

  return (
    <Section id="instagram" variant="dark" padding="lg">
      <Container>
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <MotionTypography variant="overline" as="span" className="text-secondary">
              {t('overline')}
            </MotionTypography>
            <MotionTypography variant="h2" className="mt-3">
              {t('heading')}
            </MotionTypography>
            {handle && (
              <Typography variant="body1" className="mt-1 text-sm opacity-50">
                {handle}
              </Typography>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition-colors hover:bg-white/15"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition-colors hover:bg-white/15"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <Button variant="secondary" size="sm" asChild>
              <a
                href={`https://instagram.com/${handle?.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="mr-1.5 h-3.5 w-3.5" />
                {t('followButton')}
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Scroll strip */}
        <div
          ref={scrollRef}
          className="scrollbar-hide flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href={post.url ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative h-64 w-56 shrink-0 snap-start overflow-hidden rounded-2xl bg-white/5"
            >
              <Image
                src={post.image}
                alt={post.caption ?? t('post')}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="224px"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {post.likes !== undefined && (
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                    <Heart className="h-3.5 w-3.5 fill-white" />
                    {post.likes.toLocaleString()}
                  </div>
                )}
                {post.caption && (
                  <Typography variant="body2" className="mt-1 line-clamp-2 text-xs text-white/80">
                    {post.caption}
                  </Typography>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
