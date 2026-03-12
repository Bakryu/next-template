import Stripe from 'stripe';
import { headers } from 'next/headers';

/**
 * Verify and construct a Stripe webhook event.
 */
export async function constructWebhookEvent(
  body: string,
): Promise<{ event: Stripe.Event | null; error?: string }> {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const stripeKey = process.env.STRIPE_SECRET_KEY;

  if (!secret || !stripeKey) {
    return { event: null, error: 'Stripe webhook secret not configured' };
  }

  const stripe = new Stripe(stripeKey, {
    apiVersion: '2025-02-24.acacia',
    typescript: true,
  });

  const headerStore = await headers();
  const signature = headerStore.get('stripe-signature');

  if (!signature) {
    return { event: null, error: 'Missing stripe-signature header' };
  }

  try {
    const event = stripe.webhooks.constructEvent(body, signature, secret);
    return { event };
  } catch (err) {
    return {
      event: null,
      error: err instanceof Error ? err.message : 'Webhook verification failed',
    };
  }
}

/**
 * Handle relevant Stripe webhook events.
 */
export async function handleWebhookEvent(event: Stripe.Event): Promise<void> {
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log('✅ Payment successful:', session.id);
      // TODO: Send confirmation email, update order status, etc.
      break;
    }

    case 'payment_intent.payment_failed': {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log('❌ Payment failed:', paymentIntent.id);
      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }
}
