'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Select } from '@/components/ui/Select';
import type { GallerySortOption } from '@/types/gallery.types';

interface GallerySortSelectProps {
  value: GallerySortOption;
  onChange: (value: GallerySortOption) => void;
}

export function GallerySortSelect({ value, onChange }: GallerySortSelectProps) {
  const t = useTranslations('gallery');

  const options: { value: GallerySortOption; label: string }[] = [
    { value: 'date-desc', label: t('sort.newest') },
    { value: 'date-asc', label: t('sort.oldest') },
    { value: 'name-asc', label: t('sort.nameAZ') },
    { value: 'name-desc', label: t('sort.nameZA') },
    { value: 'popular', label: t('sort.popular') },
  ];

  return (
    <Select
      options={options}
      value={value}
      onChange={(e) => onChange(e.target.value as GallerySortOption)}
      selectSize="sm"
      aria-label={t('sort.label')}
    />
  );
}
