import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

/**
 * Sanity webhook handler for on-demand ISR revalidation.
 *
 * Configure a webhook in Sanity to POST to this endpoint when content changes.
 * Add a secret to the webhook and set SANITY_REVALIDATE_SECRET in env.
 */
export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;

  // Verify secret
  const authHeader = request.headers.get('authorization');
  const token = authHeader?.replace('Bearer ', '');

  if (secret && token !== secret) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { _type, slug } = body;

    // Revalidate based on content type
    switch (_type) {
      case 'page':
        if (slug?.current) {
          revalidatePath(`/${slug.current}`);
        }
        revalidatePath('/');
        break;

      case 'service':
      case 'testimonial':
        revalidatePath('/');
        break;

      case 'galleryItem':
        revalidatePath('/');
        revalidatePath('/gallery');
        break;

      case 'product':
        revalidatePath('/gallery');
        revalidateTag('products');
        break;

      default:
        // Revalidate everything for unknown types
        revalidatePath('/', 'layout');
    }

    return NextResponse.json({
      revalidated: true,
      type: _type,
      now: Date.now(),
    });
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json({ error: 'Revalidation failed' }, { status: 500 });
  }
}
