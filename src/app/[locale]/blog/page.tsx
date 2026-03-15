import { getTranslations, getLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site.config';
import { Container } from '@/components/layout/Container';
import { Typography } from '@/components/ui/Typography';
import { Section } from '@/components/layout/Section/Section';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  return {
    title: t('title'),
  };
}

export default async function BlogPage() {
  const t = await getTranslations('blog');
  const locale = await getLocale();
  const posts = siteConfig.blog ?? [];

  return (
    <Section id="blog">
      <Container>
        {/* Page header */}
        <div className="mb-14">
          <Typography variant="overline" as="span" color="secondary">
            {t('title')}
          </Typography>
          <Typography variant="h1" className="mt-4">
            {t('heading')}
          </Typography>
          <Typography variant="subtitle1" className="mt-4 max-w-2xl">
            {t('subtitle')}
          </Typography>
        </div>

        {/* Blog grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-card transition-all duration-500 hover:shadow-lg hover:border-secondary/20"
            >
              {/* Placeholder image area */}
              <div className="aspect-[16/10] bg-gradient-to-br from-muted to-muted/50 transition-colors duration-300 group-hover:from-secondary/10 group-hover:to-accent/5" />

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="inline-flex rounded-full bg-secondary/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-secondary">
                    {post.category}
                  </span>
                  <Typography variant="caption" as="span" color="muted">{post.readTime}</Typography>
                </div>

                <Typography variant="h2" className="leading-tight group-hover:text-secondary transition-colors duration-300">
                  {post.title}
                </Typography>

                <Typography variant="muted" className="mt-3 flex-1">
                  {post.excerpt}
                </Typography>

                <div className="mt-6 flex items-center justify-between">
                  <time className="text-xs text-muted-foreground" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString(locale, {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                  <Typography variant="label" as="span" color="secondary" className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {t('readMore')} →
                  </Typography>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
