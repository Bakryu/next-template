'use client';

import React from 'react';
import { Link } from '@/lib/i18n/routing';
import { useTranslations } from 'next-intl';
import { ShoppingBag, ArrowLeft, Section } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { Container } from '@/components/layout/Container';
import { CartItem } from '@/components/cart/CartItem';
import { CartSummary } from '@/components/cart/CartSummary';
import { Button } from '@/components/ui/Button';
import { useToast } from '@/components/ui/Toast';
import { Typography } from '@/components/ui/Typography';

export default function CartPage() {
  const t = useTranslations('cart');
  const { items, totalItems } = useCart();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        toast(data.error || 'Checkout failed', 'error');
        setIsLoading(false);
      }
    } catch {
      toast('Something went wrong', 'error');
      setIsLoading(false);
    }
  };

  return (
    <Section id="cart" className="pt-32 pb-20 md:pt-40 md:pb-32">
      <Container size="lg">
        {/* Header */}
        <div className="mb-10">
          <Typography variant="overline" as="span" color="secondary">
            {t('title')}
          </Typography>
          <Typography variant="h1" className="mt-3">
            {t('title')} ({totalItems})
          </Typography>
          <div className="mt-4 h-0.5 w-12 bg-gradient-to-r from-secondary to-transparent" />
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center py-24">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
              <ShoppingBag className="h-8 w-8 text-muted-foreground/40" />
            </div>
            <Typography variant="subtitle1" className="mt-6">{t('empty')}</Typography>
            <Button variant="outline" rounded="full" className="mt-8 gap-2" asChild>
              <Link href="/gallery">
                <ArrowLeft className="h-4 w-4" />
                {t('continueShopping')}
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Cart Items */}
            <div className="lg:col-span-8">
              <div className="divide-y divide-border/40 rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              <div className="mt-5">
                <Button variant="ghost" className="gap-2 text-muted-foreground" asChild>
                  <Link href="/gallery">
                    <ArrowLeft className="h-4 w-4" />
                    {t('continueShopping')}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-4">
              <CartSummary onCheckout={handleCheckout} isLoading={isLoading} />
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
