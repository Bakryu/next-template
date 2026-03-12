'use client';

import React from 'react';
import { Link } from '@/lib/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';
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
            className="fixed inset-0 z-40 bg-overlay backdrop-blur-sm lg:hidden"
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
              'fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background/95 backdrop-blur-2xl lg:hidden',
              'flex flex-col border-l border-border/50',
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5">
              <Typography variant="h5" as="span" weight="bold" className="tracking-tight">
                {siteConfig.business.name}
              </Typography>
              <button
                onClick={onClose}
                className="rounded-full p-2.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Divider */}
            <div className="mx-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <Navigation orientation="vertical" isScrolled={true} onItemClick={onClose} />
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
