'use client';

import React, { useEffect } from 'react';
import { Link } from '@/lib/i18n/routing';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/hooks/useCart';
import { Typography } from '@/components/ui/Typography';

export default function CheckoutPage() {
  const t = useTranslations('checkout');
  const searchParams = useSearchParams();
  const status = searchParams.get('status');
  const { clearCart } = useCart();

  useEffect(() => {
    if (status === 'success') {
      clearCart();
    }
  }, [status, clearCart]);

  if (status === 'success') {
    return (
      <Section id="checkout-success">
        <Container size="sm">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-success/10">
              <CheckCircle className="h-12 w-12 text-success" />
            </div>
            <Typography variant="h1">{t('success')}</Typography>
            <Typography variant="subtitle1" className="mt-4 max-w-md">
              {t('successMessage')}
            </Typography>
            <Button className="mt-10 gap-2 group" size="lg" variant="secondary" rounded="full" asChild>
              <Link href="/">
                {t('backHome')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  // Default: redirect to cart if no status
  return (
    <Section id="checkout-redirect">
      <Container size="sm">
        <div className="flex flex-col items-center text-center">
          <Typography variant="subtitle1">Redirecting...</Typography>
          <Button className="mt-6" variant="outline" rounded="full" asChild>
            <Link href="/cart">{t('backHome')}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
