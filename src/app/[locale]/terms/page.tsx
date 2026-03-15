import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Typography } from '@/components/ui/Typography';
import { Section } from '@/components/layout/Section';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'terms' });
  return {
    title: t('title'),
  };
}

export default async function TermsPage() {
  const { business, legal } = siteConfig;
  const t = await getTranslations('terms');

  return (
    <Section id="terms">
      <Container size="md">
        <div className="mb-14">
          <Typography variant="overline" as="span" color="secondary">
            {t('overline')}
          </Typography>
          <Typography variant="h1" className="mt-4">
            {t('heading')}
          </Typography>
          {legal?.lastUpdated && (
            <Typography className="mt-4" color="muted">
              {t('lastUpdated')}: {legal.lastUpdated}
            </Typography>
          )}
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <div>
            <Typography variant="h2" className="mb-3">{t('s1Title')}</Typography>
            <Typography color="muted" className="leading-[1.8]">
              {t('s1Body', { name: business.name })}
            </Typography>
          </div>

          <div>
            <Typography variant="h2" className="mb-3">{t('s2Title')}</Typography>
            <Typography color="muted" className="leading-[1.8]">
              {t('s2Body')}
            </Typography>
          </div>

          <div>
            <Typography variant="h2" className="mb-3">{t('s3Title')}</Typography>
            <Typography color="muted" className="leading-[1.8]">
              {t('s3Body')}
            </Typography>
          </div>

          <div>
            <Typography variant="h2" className="mb-3">{t('s4Title')}</Typography>
            <Typography color="muted" className="leading-[1.8]">
              {t('s4Body', { name: business.name })}
            </Typography>
          </div>

          <div>
            <Typography variant="h2" className="mb-3">{t('s5Title')}</Typography>
            <Typography color="muted" className="leading-[1.8]">
              {t('s5Body')}
            </Typography>
          </div>

          <div>
            <Typography variant="h2" className="mb-3">{t('s6Title')}</Typography>
            <Typography color="muted" className="leading-[1.8]">
              {t('s6Body', { name: business.name })}
            </Typography>
          </div>

          <div>
            <Typography variant="h2" className="mb-3">{t('s7Title')}</Typography>
            <Typography color="muted" className="leading-[1.8]">
              {t('s7Body')}{' '}
              <a href={`mailto:${business.email}`} className="text-secondary hover:underline">
                {business.email}
              </a>.
            </Typography>
          </div>
        </div>
      </Container>
    </Section>
  );
}
