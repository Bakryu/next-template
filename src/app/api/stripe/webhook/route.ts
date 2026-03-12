import { NextRequest, NextResponse } from 'next/server';
import { constructWebhookEvent, handleWebhookEvent } from '@/lib/stripe/webhook';

export async function POST(request: NextRequest) {
  const body = await request.text();

  const { event, error } = await constructWebhookEvent(body);

  if (error || !event) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: error || 'Unknown error' }, { status: 400 });
  }

  try {
    await handleWebhookEvent(event);
    return NextResponse.json({ received: true });
  } catch (err) {
    console.error('Webhook handler error:', err);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}
