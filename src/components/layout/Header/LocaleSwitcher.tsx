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

export function LocaleSwitcher({ className }: { className?: string }) {
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
    <div className="group relative">
      <button
        className={cn(
          'rounded-base flex items-center gap-1 px-2 py-2 text-sm transition-colors',
          className,
        )}
        aria-label="Change language"
      >
        <Globe className="h-4 w-4" />
        <span className="text-xs font-medium">{localeLabels[locale] || locale.toUpperCase()}</span>
      </button>

      <div className="border-border bg-card invisible absolute top-full right-0 z-10 min-w-[80px] rounded-lg border py-1 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
        {siteConfig.availableLocales.map((loc) => (
          <button
            key={loc}
            onClick={() => handleLocaleChange(loc)}
            className={cn(
              'hover:bg-muted flex w-full items-center px-3 py-1.5 text-sm transition-colors',
              loc === locale && 'text-primary font-semibold',
            )}
          >
            {localeLabels[loc] || loc.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
