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
  | 'stats'
  | 'booking'
  | 'process'
  | 'beforeAfter'
  | 'video'
  | 'promotions'
  | 'certificates'
  | 'instagram'
  | 'newsletter'
  | 'hours'
  | 'brands';

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

export interface AboutValue {
  title: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
}

export interface LegalConfig {
  lastUpdated: string;
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

// ─── New section config types ────────────────────────────────────────────────

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}

export interface BeforeAfterItem {
  before: string;
  after: string;
  label?: string;
}

export interface VideoConfig {
  url: string;
  poster?: string;
  title?: string;
  subtitle?: string;
}

export interface PromotionItem {
  title: string;
  description: string;
  badge?: string;
  expiresAt?: string;
  href?: string;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  year?: string;
  icon?: string;
  image?: string;
}

export interface InstagramPost {
  image: string;
  url?: string;
  likes?: number;
  caption?: string;
}

export interface NewsletterConfig {
  heading?: string;
  subtitle?: string;
  provider?: string;
}

export interface BrandItem {
  name: string;
  logo?: string;
  description?: string;
  url?: string;
}

export interface BookingService {
  name: string;
  duration: string;
  price: string;
}

export interface BookingConfig {
  heading?: string;
  subtitle?: string;
  services: BookingService[];
}

// ─────────────────────────────────────────────────────────────────────────────

export interface SiteConfig {
  business: BusinessInfo;
  hero: HeroConfig;
  services: ServiceItem[];
  about: AboutConfig & {
    mission?: string;
    values?: AboutValue[];
  };
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
  blog?: BlogPost[];
  legal?: LegalConfig;
  // New sections
  process?: ProcessStep[];
  beforeAfter?: BeforeAfterItem[];
  video?: VideoConfig;
  promotions?: PromotionItem[];
  certificates?: CertificateItem[];
  instagramPosts?: InstagramPost[];
  newsletter?: NewsletterConfig;
  brands?: BrandItem[];
  booking?: BookingConfig;
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
