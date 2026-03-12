'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Eye, ShoppingCart } from 'lucide-react';

import type { GalleryItem as GalleryItemType } from '@/types/gallery.types';
import { Typography } from '@/components/ui/Typography';

interface GalleryItemProps {
  item: GalleryItemType;
  index: number;
  onView: (item: GalleryItemType) => void;
  onAddToCart?: (item: GalleryItemType) => void;
  showPrice?: boolean;
}

export function GalleryItem({ item, index, onView, onAddToCart, showPrice }: GalleryItemProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="group relative cursor-pointer overflow-hidden rounded-lg bg-muted"
      onClick={() => onView(item)}
    >
      <div className="relative aspect-square">
        {item.imageUrl ? (
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            placeholder={item.blurDataUrl ? 'blur' : undefined}
            blurDataURL={item.blurDataUrl}
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-primary/10 to-secondary/10" />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/40">
          <div className="flex items-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <button
              className="rounded-full bg-white/90 p-2.5 text-foreground shadow-lg transition-transform hover:scale-110"
              aria-label="View image"
              onClick={(e) => {
                e.stopPropagation();
                onView(item);
              }}
            >
              <Eye className="h-5 w-5" />
            </button>
            {onAddToCart && item.price != null && (
              <button
                className="rounded-full bg-primary p-2.5 text-primary-foreground shadow-lg transition-transform hover:scale-110"
                aria-label="Add to cart"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(item);
                }}
              >
                <ShoppingCart className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Title + Price */}
      <div className="p-3">
        <Typography variant="label" as="h3" noWrap>{item.title}</Typography>
        {showPrice && item.price != null && (
          <Typography variant="body2" color="primary" weight="semibold" className="mt-0.5">
            €{item.price.toFixed(2)}
          </Typography>
        )}
      </div>
    </motion.div>
  );
}
