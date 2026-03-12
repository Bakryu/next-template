'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { cn } from '@/lib/utils/cn';

const localeLabels: Record<string, string> = {
  en: 'EN',
  fr: 'FR',
  de: 'DE',
  ru: 'RU',
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    // Remove current locale prefix and add new one
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-1 rounded-base px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        aria-label="Change language"
      >
        <Globe className="h-4 w-4" />
        <span className="text-xs font-medium">{localeLabels[locale] || locale.toUpperCase()}</span>
      </button>

      <div className="invisible absolute right-0 top-full z-10 min-w-[80px] rounded-lg border border-border bg-card py-1 shadow-lg opacity-0 transition-all group-hover:visible group-hover:opacity-100">
        {siteConfig.availableLocales.map((loc) => (
          <button
            key={loc}
            onClick={() => handleLocaleChange(loc)}
            className={cn(
              'flex w-full items-center px-3 py-1.5 text-sm transition-colors hover:bg-muted',
              loc === locale && 'font-semibold text-primary',
            )}
          >
            {localeLabels[loc] || loc.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
