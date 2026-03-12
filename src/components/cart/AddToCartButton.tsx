'use client';

import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/components/ui/Toast';
import type { ButtonProps } from '@/components/ui/Button';

interface AddToCartButtonProps extends Omit<ButtonProps, 'onClick'> {
  item: {
    id: string;
    name: string;
    price: number;
    image?: string;
    description?: string;
  };
}

export function AddToCartButton({ item, children, ...buttonProps }: AddToCartButtonProps) {
  const t = useTranslations('cart');
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAdd = () => {
    addItem(item);
    toast(`${item.name} ${t('addedToCart')}`, 'success');
  };

  return (
    <Button onClick={handleAdd} className="gap-2" {...buttonProps}>
      <ShoppingCart className="h-4 w-4" />
      {children || t('addToCart')}
    </Button>
  );
}
