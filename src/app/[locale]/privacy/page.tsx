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
  const t = await getTranslations({ locale, namespace: 'privacy' });
  return {
    title: t('title'),
  };
}

export default async function PrivacyPage() {
  const { business, legal } = siteConfig;
  const t = await getTranslations('privacy');

  return (
    <Section id="privacy">
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
            <Typography color="muted" className="leading-[1.8] mb-3">
              {t('s2Intro')}
            </Typography>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2"><span className="text-secondary">•</span> {t('s2Item1')}</li>
              <li className="flex gap-2"><span className="text-secondary">•</span> {t('s2Item2')}</li>
              <li className="flex gap-2"><span className="text-secondary">•</span> {t('s2Item3')}</li>
              <li className="flex gap-2"><span className="text-secondary">•</span> {t('s2Item4')}</li>
            </ul>
          </div>

          <div>
            <Typography variant="h2" className="mb-3">{t('s3Title')}</Typography>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2"><span className="text-secondary">•</span> {t('s3Item1')}</li>
              <li className="flex gap-2"><span className="text-secondary">•</span> {t('s3Item2')}</li>
              <li className="flex gap-2"><span className="text-secondary">•</span> {t('s3Item3')}</li>
              <li className="flex gap-2"><span className="text-secondary">•</span> {t('s3Item4')}</li>
            </ul>
          </div>

          <div>
            <Typography variant="h2" className="mb-3">{t('s4Title')}</Typography>
            <Typography color="muted" className="leading-[1.8]">
              {t('s4Body')}
            </Typography>
          </div>

          <div>
            <Typography variant="h2" className="mb-3">{t('s5Title')}</Typography>
            <Typography color="muted" className="leading-[1.8]">
              {t('s5Body')}{' '}
              <a href={`mailto:${business.email}`} className="text-secondary hover:underline">
                {business.email}
              </a>.
            </Typography>
          </div>

          <div>
            <Typography variant="h2" className="mb-3">{t('s6Title')}</Typography>
            <Typography color="muted" className="leading-[1.8]">
              {t('s6Body')}{' '}
              <a href={`mailto:${business.email}`} className="text-secondary hover:underline">
                {business.email}
              </a>{' '}
              {t('s6Or')} {business.address || business.location}.
            </Typography>
          </div>
        </div>
      </Container>
    </Section>
  );
}
