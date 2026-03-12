'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Grid3X3, LayoutGrid } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import type { GalleryItem as GalleryItemType, GallerySortOption } from '@/types/gallery.types';
import { GalleryFilter } from './GalleryFilter';
import { GallerySortSelect } from './GallerySortSelect';
import { GalleryItem } from './GalleryItem';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import { useCart } from '@/hooks/useCart';

interface GalleryGridProps {
  items: GalleryItemType[];
  showAddToCart?: boolean;
}

export function GalleryGrid({ items, showAddToCart = false }: GalleryGridProps) {
  const t = useTranslations('gallery');
  const { addItem } = useCart();
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOption, setSortOption] = useState<GallerySortOption>('date-desc');
  const [layout, setLayout] = useState<'grid' | 'masonry'>('grid');
  const [lightboxItem, setLightboxItem] = useState<GalleryItemType | null>(null);

  // Filter items
  const filteredItems = useMemo(() => {
    let result = items;

    if (activeCategory !== 'All') {
      result = result.filter((item) => item.category === activeCategory);
    }

    // Sort
    result = [...result].sort((a, b) => {
      switch (sortOption) {
        case 'date-desc':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'date-asc':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'name-asc':
          return a.title.localeCompare(b.title);
        case 'name-desc':
          return b.title.localeCompare(a.title);
        case 'popular':
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        default:
          return 0;
      }
    });

    return result;
  }, [items, activeCategory, sortOption]);

  const handleAddToCart = useCallback(
    (item: GalleryItemType) => {
      if (item.price == null) return;
      addItem({
        id: item.id,
        name: item.title,
        price: item.price,
        image: item.imageUrl,
        description: item.description,
      });
    },
    [addItem],
  );

  // Lightbox navigation
  const currentIndex = lightboxItem
    ? filteredItems.findIndex((i) => i.id === lightboxItem.id)
    : -1;

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (currentIndex === -1) return;
    const newIndex =
      direction === 'prev'
        ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
        : (currentIndex + 1) % filteredItems.length;
    setLightboxItem(filteredItems[newIndex]);
  };

  return (
    <>
      {/* Toolbar */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <GalleryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="flex items-center gap-2">
          <GallerySortSelect value={sortOption} onChange={setSortOption} />

          {/* Layout toggle */}
          <div className="flex rounded-base border border-border">
            <button
              onClick={() => setLayout('grid')}
              className={cn(
                'rounded-l-base p-2 transition-colors',
                layout === 'grid' ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground',
              )}
              aria-label="Grid layout"
            >
              <Grid3X3 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setLayout('masonry')}
              className={cn(
                'rounded-r-base p-2 transition-colors',
                layout === 'masonry' ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground',
              )}
              aria-label="Masonry layout"
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <LayoutGroup>
        <div
          className={cn(
            'grid gap-4',
            layout === 'grid'
              ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
              : 'columns-2 md:columns-3 lg:columns-4 space-y-4',
          )}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <GalleryItem
                key={item.id}
                item={item}
                index={index}
                onView={setLightboxItem}
                onAddToCart={showAddToCart ? handleAddToCart : undefined}
                showPrice={showAddToCart}
              />
            ))}
          </AnimatePresence>
        </div>
      </LayoutGroup>

      {/* Empty state */}
      {filteredItems.length === 0 && (
        <div className="py-16 text-center">
          <Typography variant="subtitle1">{t('empty')}</Typography>
        </div>
      )}

      {/* Lightbox Modal */}
      <Modal
        isOpen={!!lightboxItem}
        onClose={() => setLightboxItem(null)}
        className="max-w-4xl p-0 overflow-hidden"
      >
        {lightboxItem && (
          <div className="relative">
            <div className="relative aspect-[4/3] bg-muted">
              {lightboxItem.imageUrl ? (
                <Image
                  src={lightboxItem.imageUrl}
                  alt={lightboxItem.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 896px) 100vw, 896px"
                  priority
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-primary/10 to-secondary/10" />
              )}
            </div>

            {/* Navigation */}
            <button
              onClick={() => navigateLightbox('prev')}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg transition-transform hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => navigateLightbox('next')}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg transition-transform hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Info */}
            <div className="p-6">
              <Typography variant="large" as="h3">{lightboxItem.title}</Typography>
              {lightboxItem.description && (
                <Typography variant="muted" className="mt-1">{lightboxItem.description}</Typography>
              )}
              {lightboxItem.price != null && showAddToCart && (
                <div className="mt-4 flex items-center justify-between">
                  <Typography variant="large" as="span" weight="bold" color="primary">
                    €{lightboxItem.price.toFixed(2)}
                  </Typography>
                  <Button
                    size="sm"
                    onClick={() => {
                      handleAddToCart(lightboxItem);
                      setLightboxItem(null);
                    }}
                  >
                    {t('addToCart')}
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
