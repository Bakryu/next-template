export type BusinessType =
  | 'florist'
  | 'barber'
  | 'restaurant'
  | 'bakery'
  | 'salon'
  | 'spa'
  | 'gym'
  | 'cafe'
  | 'boutique'
  | 'service-provider';

export type ThemeStyle = 'minimal' | 'bold' | 'elegant' | 'playful';

export type SectionId =
  | 'hero'
  | 'services'
  | 'about'
  | 'gallery'
  | 'testimonials'
  | 'contact'
  | 'faq'
  | 'cta'
  | 'map'
  | 'team'
  | 'pricing'
  | 'features'
  | 'partners'
  | 'stats';

export type Locale = 'en' | 'fr' | 'de' | 'ru';

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  twitter?: string;
  tiktok?: string;
  youtube?: string;
  linkedin?: string;
}

export interface BusinessInfo {
  name: string;
  type: BusinessType;
  description: string;
  location: string;
  address?: string;
  phone: string;
  email: string;
  socials: SocialLinks;
  openingHours?: OpeningHours[];
}

export interface OpeningHours {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

export interface HeroConfig {
  headline: string;
  subheadline: string;
  cta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
}

export interface ServiceItem {
  name: string;
  description: string;
  icon: string;
  price?: string;
  duration?: string;
  image?: string;
}

export interface AboutConfig {
  title: string;
  subtitle?: string;
  paragraphs: string[];
  image?: string;
  stats?: { label: string; value: string }[];
}

export interface GalleryConfig {
  title: string;
  subtitle?: string;
  categories: string[];
}

export interface ContactConfig {
  title: string;
  subtitle?: string;
  showMap: boolean;
  showForm: boolean;
  mapEmbedUrl?: string;
}

export interface TestimonialItem {
  name: string;
  role?: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CTAConfig {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonHref: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image?: string;
}

export interface PricingPlan {
  name: string;
  description?: string;
  price: string;
  period?: string;
  features: string[];
  featured?: boolean;
  buttonText?: string;
  href?: string;
}

export interface FeatureItem {
  name: string;
  description: string;
  icon: string;
}

export interface PartnerItem {
  name: string;
  logo?: string;
  url?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SiteConfig {
  business: BusinessInfo;
  hero: HeroConfig;
  services: ServiceItem[];
  about: AboutConfig;
  gallery: GalleryConfig;
  testimonials: TestimonialItem[];
  faq: FAQItem[];
  cta: CTAConfig;
  contact: ContactConfig;
  team?: TeamMember[];
  pricing?: PricingPlan[];
  features?: FeatureItem[];
  partners?: PartnerItem[];
  stats?: StatItem[];
  sections: SectionId[];
  defaultLocale: Locale;
  availableLocales: Locale[];
}

export interface NavigationItem {
  label: string;
  href: string;
  translationKey: string;
}

export interface NavigationConfig {
  items: NavigationItem[];
  cta?: {
    label: string;
    href: string;
    translationKey: string;
  };
}
