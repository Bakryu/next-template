import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Section background variant */
  variant?: 'default' | 'muted' | 'primary' | 'dark' | 'warm';
  /** Vertical padding size */
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  /** Background image URL */
  bgImage?: string;
  /** Background overlay opacity (0-100) */
  bgOverlayOpacity?: number;
}

const variantClasses = {
  default: 'bg-background',
  muted: 'bg-muted/40',
  primary: 'bg-primary text-primary-foreground',
  dark: 'bg-foreground text-background',
  warm: 'bg-gradient-to-b from-muted/30 to-background',
};

const paddingClasses = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-24',
  lg: 'py-20 md:py-32',
  xl: 'py-28 md:py-40',
};

export function Section({
  variant = 'default',
  padding = 'lg',
  bgImage,
  bgOverlayOpacity = 50,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        'relative flex justify-center items-center overflow-hidden',
        bgImage ? 'bg-cover bg-center bg-no-repeat' : variantClasses[variant],
        paddingClasses[padding],
        className,
      )}
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
      {...props}
    >

      {bgImage ? <div className="relative">{children}</div> : children}
    </section>
  );
}
