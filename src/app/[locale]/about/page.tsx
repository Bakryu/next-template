import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
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
  const t = await getTranslations({ locale, namespace: 'aboutPage' });
  return {
    title: t('title'),
  };
}

export default async function AboutPage() {
  const { about, business } = siteConfig;
  const t = await getTranslations('aboutPage');

  return (
    <Section id="about">
      <Container size="md">
        {/* Page header */}
        <div className="mb-14">
          <Typography variant="overline" as="span" color="secondary">
            {t('overline')}
          </Typography>
          <Typography variant="h1" className="mt-4">
            {about.title}
          </Typography>
        </div>

        {/* Story content */}
        <div className="mb-16 space-y-6">
          {about.paragraphs.map((paragraph, index) => (
            <Typography
              key={index}
              variant="subtitle1"
              className="leading-[1.8]"
            >
              {paragraph}
            </Typography>
          ))}
        </div>

        {/* Stats */}
        {about.stats && (
          <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            {about.stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-2xl bg-muted/50 p-6 text-center"
              >
                <div className="text-3xl font-bold font-heading text-foreground">
                  {stat.value}
                </div>
                <Typography variant="muted" className="mt-1">{stat.label}</Typography>
              </div>
            ))}
          </div>
        )}

        {/* Mission */}
        {about.mission && (
          <div className="mb-16">
            <Typography variant="h2" className="mb-6">{t('missionHeading')}</Typography>
            <Typography variant="subtitle1" className="leading-[1.8]">
              {about.mission}
            </Typography>
          </div>
        )}

        {/* Values */}
        {about.values && about.values.length > 0 && (
          <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {about.values.map((value, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border/40 bg-card p-6"
              >
                <Typography variant="h3">{value.title}</Typography>
                <Typography variant="muted" className="mt-2">
                  {value.description}
                </Typography>
              </div>
            ))}
          </div>
        )}

        {/* Business info */}
        <div className="mt-16 rounded-2xl bg-muted/30 p-8 md:p-12">
          <Typography variant="h2" className="mb-6">{t('visitHeading')}</Typography>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <Typography variant="h3" color="secondary" className="mb-2">{t('addressLabel')}</Typography>
              <Typography color="muted">{business.address || business.location}</Typography>
            </div>
            <div>
              <Typography variant="h3" color="secondary" className="mb-2">{t('contactLabel')}</Typography>
              <Typography color="muted">{business.phone}</Typography>
              <Typography color="muted">{business.email}</Typography>
            </div>
          </div>

          {business.openingHours && (
            <div className="mt-8">
              <Typography variant="h3" color="secondary" className="mb-3">{t('hoursLabel')}</Typography>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {business.openingHours.map((hours, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="font-medium">{hours.day}</span>
                    <span className="text-muted-foreground">
                      {hours.closed ? t('closed') : `${hours.open} — ${hours.close}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
