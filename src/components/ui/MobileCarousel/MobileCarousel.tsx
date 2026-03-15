'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';
import { cn } from '@/lib/utils/cn';

interface MobileCarouselProps {
  children: React.ReactNode[];
  className?: string;
  /** Tailwind class for each slide wrapper, e.g. "w-[80vw]" */
  slideWidth?: string;
  showDots?: boolean;
}

/**
 * Zero-dependency mobile carousel using CSS scroll-snap.
 * Renders children as a horizontal scroll strip on mobile,
 * and falls through to normal flow (pass a grid wrapper) on sm+.
 *
 * Usage:
 *   <MobileCarousel slideWidth="w-[78vw]" className="sm:hidden">
 *     {items.map(item => <Card key={item.id} ... />)}
 *   </MobileCarousel>
 *   <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 *     {items.map(item => <Card key={item.id} ... />)}
 *   </div>
 */
export function MobileCarousel({
  children,
  className,
  slideWidth = 'w-[78vw]',
  showDots = true,
}: MobileCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = React.Children.count(children);

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const slideW = el.scrollWidth / count;
    setActiveIndex(Math.round(el.scrollLeft / slideW));
  }, [count]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const scrollTo = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const slideW = el.scrollWidth / count;
    el.scrollTo({ left: slideW * index, behavior: 'smooth' });
  };

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {/* Track */}
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-1"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {React.Children.map(children, (child, i) => (
          <div key={i} className={cn('shrink-0 snap-start', slideWidth)}>
            {child}
          </div>
        ))}
        {/* trailing spacer so last card doesn't hug the edge */}
        <div className="w-4 shrink-0" aria-hidden="true" />
      </div>

      {/* Dot indicators */}
      {showDots && count > 1 && (
        <div className="flex justify-center gap-1.5 px-4">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                i === activeIndex
                  ? 'bg-secondary w-5'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/60 w-1.5',
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
