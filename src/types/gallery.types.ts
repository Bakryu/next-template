export interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  category: string;
  imageUrl: string;
  blurDataUrl?: string;
  width: number;
  height: number;
  date: string;
  featured?: boolean;
  productId?: string;
  price?: number;
}

export type GallerySortOption = 'date-desc' | 'date-asc' | 'name-asc' | 'name-desc' | 'popular';

export interface GalleryFilterState {
  category: string;
  sort: GallerySortOption;
}
