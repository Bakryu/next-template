'use client';

import React from 'react';
import { Link, usePathname } from '@/lib/i18n/routing';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils/cn';
import { navigationConfig } from '@/config/navigation.config';

export interface NavigationProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  isScrolled?: boolean;
  onItemClick?: () => void;
}

export function Navigation({
  className,
  orientation = 'horizontal',
  isScrolled = true,
  onItemClick,
}: NavigationProps) {
  const pathname = usePathname();
  const t = useTranslations();

  return (
    <nav
      className={cn(
        'flex gap-0.5',
        orientation === 'horizontal' ? 'flex-row items-center' : 'flex-col',
        className,
      )}
    >
      {navigationConfig.items.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== '/' && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onItemClick}
            className={cn(
              'relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
              orientation === 'vertical' && 'w-full rounded-xl px-4 py-3',
              isActive
                ? orientation === 'vertical'
                  ? 'bg-secondary/10 text-secondary'
                  : isScrolled
                    ? 'text-foreground'
                    : 'text-white'
                : orientation === 'vertical'
                  ? 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  : isScrolled
                    ? 'text-muted-foreground hover:text-foreground'
                    : 'text-white/70 hover:text-white',
            )}
          >
            {t(item.translationKey)}
            {isActive && orientation === 'horizontal' && (
              <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-secondary" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
