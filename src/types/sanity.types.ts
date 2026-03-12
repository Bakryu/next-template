export interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  alt?: string;
}

export interface SanitySlug {
  _type: 'slug';
  current: string;
}

export interface SanityPage extends SanityDocument {
  _type: 'page';
  title: string;
  slug: SanitySlug;
  sections: SanitySection[];
  seo?: SanitySEO;
}

export interface SanitySection extends SanityDocument {
  _type: 'section';
  sectionType: string;
  title?: string;
  subtitle?: string;
  content?: SanityBlock[];
  image?: SanityImage;
  items?: SanityReference[];
}

export interface SanityBlock {
  _type: 'block';
  _key: string;
  style: string;
  children: {
    _type: 'span';
    _key: string;
    text: string;
    marks: string[];
  }[];
  markDefs: {
    _key: string;
    _type: string;
    href?: string;
  }[];
}

export interface SanityReference {
  _type: 'reference';
  _ref: string;
}

export interface SanityService extends SanityDocument {
  _type: 'service';
  name: string;
  description: string;
  icon: string;
  price?: number;
  duration?: string;
  image?: SanityImage;
  order: number;
}

export interface SanityGalleryItem extends SanityDocument {
  _type: 'galleryItem';
  title: string;
  description?: string;
  category: string;
  image: SanityImage;
  featured?: boolean;
  order: number;
}

export interface SanityTestimonial extends SanityDocument {
  _type: 'testimonial';
  name: string;
  role?: string;
  content: string;
  rating: number;
  avatar?: SanityImage;
  order: number;
}

export interface SanityProduct extends SanityDocument {
  _type: 'product';
  name: string;
  slug: SanitySlug;
  description: string;
  price: number;
  compareAtPrice?: number;
  image: SanityImage;
  gallery?: SanityImage[];
  category: string;
  inStock: boolean;
  stripeProductId?: string;
  stripePriceId?: string;
}

export interface SanitySEO {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImage;
}
