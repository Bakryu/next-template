import type { NavigationConfig } from '@/types/site.types';

export const navigationConfig: NavigationConfig = {
  items: [
    { label: 'Home', href: '/', translationKey: 'nav.home' },
    { label: 'Gallery', href: '/gallery', translationKey: 'nav.gallery' },
    { label: 'Blog', href: '/blog', translationKey: 'nav.blog' },
    { label: 'About', href: '/about', translationKey: 'nav.about' },
    { label: 'Contact', href: '/#contact', translationKey: 'nav.contact' },
  ],
  cta: {
    label: 'Book Now',
    href: '/#contact',
    translationKey: 'nav.cta',
  },
};
