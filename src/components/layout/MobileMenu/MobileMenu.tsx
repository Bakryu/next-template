'use client';

import React from 'react';
import { Link } from '@/lib/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { cn } from '@/lib/utils/cn';
import { Navigation } from '../Navigation';
import { navigationConfig } from '@/config/navigation.config';
import { siteConfig } from '@/config/site.config';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
    onClose();
  };

  const localeLabels: Record<string, string> = { en: 'EN', fr: 'FR', de: 'DE', ru: 'RU' };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-overlay fixed inset-0 z-40 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className={cn(
              'bg-background/95 fixed inset-y-0 right-0 z-50 w-full max-w-sm backdrop-blur-2xl lg:hidden',
              'border-border/50 flex flex-col border-l',
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5">
              <Typography variant="h5" as="span" weight="bold" className="tracking-tight">
                {siteConfig.business.name}
              </Typography>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-full p-2.5 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Divider */}
            <div className="via-border mx-6 h-px bg-gradient-to-r from-transparent to-transparent" />

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <Navigation orientation="vertical" isScrolled={true} onItemClick={onClose} />
            </div>

            {/* Locale switcher */}
            <div className="mx-6 mb-4">
              <div className="via-border mx-0 mb-4 h-px bg-gradient-to-r from-transparent to-transparent" />
              <div className="flex items-center gap-2">
                <Globe className="text-muted-foreground h-4 w-4 shrink-0" />
                <div className="flex gap-1">
                  {siteConfig.availableLocales.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => handleLocaleChange(loc)}
                      className={cn(
                        'rounded-full px-3 py-1 text-xs font-medium transition-colors',
                        loc === locale
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                      )}
                    >
                      {localeLabels[loc] || loc.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            {navigationConfig.cta && (
              <div className="px-6 py-6">
                <Button asChild fullWidth variant="secondary" rounded="full" size="lg">
                  <Link href={navigationConfig.cta.href} onClick={onClose}>
                    {t(navigationConfig.cta.translationKey)}
                  </Link>
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
