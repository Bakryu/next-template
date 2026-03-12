'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';
import { siteConfig } from '@/config/site.config';

interface GalleryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function GalleryFilter({ activeCategory, onCategoryChange }: GalleryFilterProps) {
  const { gallery } = siteConfig;

  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter gallery">
      {gallery.categories.map((category) => (
        <button
          key={category}
          role="tab"
          aria-selected={activeCategory === category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
            activeCategory === category
              ? 'text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted',
          )}
        >
          {activeCategory === category && (
            <motion.span
              layoutId="gallery-filter-active"
              className="absolute inset-0 rounded-full bg-primary"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </button>
      ))}
    </div>
  );
}
