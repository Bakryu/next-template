import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Width of the skeleton. Accepts any CSS value. */
  width?: string | number;
  /** Height of the skeleton. Accepts any CSS value. */
  height?: string | number;
  /** Render as a circle */
  circle?: boolean;
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, width, height, circle, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'animate-pulse rounded-base bg-muted',
          circle && 'rounded-full',
          className,
        )}
        style={{
          width: circle ? height || width : width,
          height: height || (circle ? width : undefined),
          ...style,
        }}
        aria-hidden="true"
        {...props}
      />
    );
  },
);

Skeleton.displayName = 'Skeleton';

export { Skeleton };
