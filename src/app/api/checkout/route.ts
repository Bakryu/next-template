import { NextRequest, NextResponse } from 'next/server';
import { createCheckoutSession } from '@/lib/stripe/checkout';
import type { CartItem } from '@/types/cart.types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items, locale = 'en' } = body as { items: CartItem[]; locale?: string };

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'No items provided' }, { status: 400 });
    }

    const { url, error } = await createCheckoutSession(items, locale);

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ url });
  } catch (error) {
    console.error('Checkout API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
