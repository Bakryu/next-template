'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useCart } from '@/hooks/useCart';
import { formatCurrency } from '@/lib/utils/format';
import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';

interface CartSummaryProps {
  onCheckout: () => void;
  isLoading?: boolean;
}

export function CartSummary({ onCheckout, isLoading }: CartSummaryProps) {
  const t = useTranslations('cart');
  const { items, totalPrice, clearCart } = useCart();

  if (items.length === 0) return null;

  return (
    <div className="rounded-xl border border-border bg-card p-6 space-y-4">
      <Typography variant="large" as="h3">{t('summary')}</Typography>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <Typography variant="muted" as="span">{t('subtotal')}</Typography>
          <Typography variant="body2" as="span">{formatCurrency(totalPrice)}</Typography>
        </div>
        <div className="flex justify-between">
          <Typography variant="muted" as="span">{t('shipping')}</Typography>
          <Typography variant="muted" as="span">{t('calculated')}</Typography>
        </div>
      </div>

      <div className="border-t border-border pt-4">
        <div className="flex justify-between text-base font-semibold">
          <span>{t('total')}</span>
          <span>{formatCurrency(totalPrice)}</span>
        </div>
      </div>

      <div className="space-y-2">
        <Button
          fullWidth
          size="lg"
          onClick={onCheckout}
          disabled={isLoading}
        >
          {isLoading ? t('processing') : t('checkout')}
        </Button>
        <Button
          fullWidth
          variant="ghost"
          size="sm"
          onClick={clearCart}
        >
          {t('clearCart')}
        </Button>
      </div>
    </div>
  );
}
