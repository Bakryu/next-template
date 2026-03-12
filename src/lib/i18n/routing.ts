import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { siteConfig } from '@/config/site.config';

export const routing = defineRouting({
  locales: siteConfig.availableLocales,
  defaultLocale: siteConfig.defaultLocale,
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
