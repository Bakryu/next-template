'use client';

import React, { useState, useEffect } from 'react';
import { Link, usePathname } from '@/lib/i18n/routing';
import { useTranslations } from 'next-intl';
import { Menu, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { siteConfig } from '@/config/site.config';
import { navigationConfig } from '@/config/navigation.config';
import { Container } from '../Container';
import { Navigation } from '../Navigation';
import { MobileMenu } from '../MobileMenu';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/hooks/useCart';
import { LocaleSwitcher } from './LocaleSwitcher';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations();
  const { totalItems } = useCart();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Use transparent/white-text style only on the homepage (hero overlay)
  const isTransparent = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 right-0 left-0 z-[var(--z-header)] w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
          isTransparent
            ? 'bg-transparent'
            : 'border-border/50 bg-background/80 border-b shadow-sm backdrop-blur-2xl',
        )}
      >
        <Container>
          <div className="flex h-18 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className={cn(
                'font-heading text-xl font-bold tracking-tight transition-colors duration-300',
                isTransparent
                  ? 'hover:text-secondary text-white'
                  : 'text-foreground hover:text-secondary',
              )}
            >
              {siteConfig.business.name}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-1">
              <Navigation isScrolled={!isTransparent} />

              <div className="ml-6 flex items-center gap-3 border-l border-current/10 pl-6">
                <LocaleSwitcher
                  className={
                    isTransparent
                      ? 'text-white/80 hover:bg-white/10 hover:text-white'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }
                />

                {/* Cart */}
                <Link
                  href="/cart"
                  className={cn(
                    'relative rounded-full p-2.5 transition-all duration-300',
                    isTransparent
                      ? 'text-white/80 hover:bg-white/10 hover:text-white'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                  )}
                  aria-label={`Cart (${totalItems} items)`}
                >
                  <ShoppingBag className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="bg-secondary text-secondary-foreground absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold">
                      {totalItems}
                    </span>
                  )}
                </Link>

                {/* CTA */}
                {navigationConfig.cta && (
                  <Button size="sm" variant="secondary" rounded="full" asChild>
                    <Link href={navigationConfig.cta.href}>
                      {t(navigationConfig.cta.translationKey)}
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            {/* Mobile controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <LocaleSwitcher
                className={
                  isTransparent
                    ? 'text-white/80 hover:bg-white/10 hover:text-white'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }
              />

              <Link
                href="/cart"
                className={cn(
                  'relative rounded-full p-2.5 transition-all duration-300',
                  isTransparent
                    ? 'text-white/80 hover:bg-white/10 hover:text-white'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                )}
                aria-label={`Cart (${totalItems} items)`}
              >
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="bg-secondary text-secondary-foreground absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold">
                    {totalItems}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={cn(
                  'rounded-full p-2.5 transition-all duration-300',
                  isTransparent
                    ? 'text-white/80 hover:bg-white/10 hover:text-white'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                )}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
