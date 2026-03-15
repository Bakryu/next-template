import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Flower } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('notFound');
  return {
    title: `${t('code')} — ${t('heading')}`,
  };
}

export default async function NotFoundPage() {
  const t = await getTranslations('notFound');

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-24">
      <Container size="sm">
        <div className="flex flex-col items-center text-center">
          {/* Decorative flower */}
          <div className="bg-primary/10 mb-8 flex h-20 w-20 items-center justify-center rounded-full">
            <Flower className="text-primary h-10 w-10" strokeWidth={1.5} />
          </div>

          {/* 404 code */}
          <Typography
            variant="h1"
            as="span"
            className="from-foreground to-foreground/20 block bg-gradient-to-b bg-clip-text text-[8rem] leading-none font-black tracking-tight text-transparent"
          >
            {t('code')}
          </Typography>

          {/* Heading */}
          <Typography variant="h2" className="mt-4">
            {t('heading')}
          </Typography>

          {/* Subtitle */}
          <Typography variant="subtitle1" className="text-muted mt-3 max-w-md">
            {t('subtitle')}
          </Typography>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button variant="primary" size="md" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                {t('backHome')}
              </Link>
            </Button>
            <Button variant="outline" size="md" asChild>
              <Link href="/gallery">{t('browseGallery')}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
