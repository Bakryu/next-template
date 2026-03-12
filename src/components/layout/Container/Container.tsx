import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Max width constraint */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const sizeClasses = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[90rem]',
  full: 'max-w-full',
};

export function Container({ size = 'lg', className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn('mx-auto w-full h-full px-[1.25rem] md:px-[2rem] xl:px-[5rem]', sizeClasses[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
