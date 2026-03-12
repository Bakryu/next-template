'use client';

import React from 'react';
import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import type { CartItem as CartItemType } from '@/types/cart.types';
import { formatCurrency } from '@/lib/utils/format';
import { useCart } from '@/hooks/useCart';
import { Typography } from '@/components/ui/Typography';

interface CartItemProps {
  item: CartItemType;
  className?: string;
}

export function CartItem({ item, className }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className={cn('flex gap-4 py-4', className)}>
      {/* Image */}
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-muted">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="80px"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-primary/10 to-secondary/10" />
        )}
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <Typography variant="label" as="h3">{item.name}</Typography>
          {item.description && (
            <Typography variant="caption" as="p" color="muted" className="mt-0.5 line-clamp-1">
              {item.description}
            </Typography>
          )}
        </div>

        <div className="flex items-center justify-between">
          {/* Quantity */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="rounded-base p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Decrease quantity"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <Typography variant="label" as="span" align="center" className="w-8">{item.quantity}</Typography>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="rounded-base p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Increase quantity"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Price + Remove */}
          <div className="flex items-center gap-2">
            <Typography variant="body2" as="span" weight="semibold">
              {formatCurrency(item.price * item.quantity)}
            </Typography>
            <button
              onClick={() => removeItem(item.id)}
              className="rounded-base p-1 text-muted-foreground transition-colors hover:text-destructive"
              aria-label="Remove item"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
