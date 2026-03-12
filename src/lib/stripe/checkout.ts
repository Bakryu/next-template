import Stripe from 'stripe';
import type { CartItem } from '@/types/cart.types';

/**
 * Server-side Stripe instance.
 */
function getStripeServer(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    console.warn('Stripe secret key not configured. Commerce features disabled.');
    return null;
  }
  return new Stripe(key, {
    apiVersion: '2025-02-24.acacia',
    typescript: true,
  });
}

/**
 * Create a Stripe Checkout Session from cart items.
 * Returns the session URL for redirect.
 */
export async function createCheckoutSession(
  items: CartItem[],
  locale: string = 'en',
): Promise<{ url: string | null; error?: string }> {
  const stripe = getStripeServer();

  if (!stripe) {
    return { url: null, error: 'Stripe is not configured' };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      locale: locale as Stripe.Checkout.SessionCreateParams.Locale,
      line_items: items.map((item) => ({
        price_data: {
          currency: 'eur',
          product_data: {
            name: item.name,
            description: item.description || undefined,
            images: item.image ? [item.image] : undefined,
          },
          unit_amount: Math.round(item.price * 100), // Convert to cents
        },
        quantity: item.quantity,
      })),
      success_url: `${baseUrl}/${locale}/checkout?status=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/${locale}/cart?status=cancelled`,
      metadata: {
        locale,
      },
    });

    return { url: session.url };
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return {
      url: null,
      error: error instanceof Error ? error.message : 'Failed to create checkout session',
    };
  }
}

/**
 * Retrieve a checkout session to verify payment.
 */
export async function getCheckoutSession(sessionId: string) {
  const stripe = getStripeServer();
  if (!stripe) return null;

  try {
    return await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items'],
    });
  } catch {
    return null;
  }
}
