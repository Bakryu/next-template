import { getTranslations } from 'next-intl/server';
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

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

function getStaticBlogPosts(): BlogPost[] {
  return [
    {
      id: '1',
      title: 'How to Choose the Perfect Wedding Bouquet',
      excerpt: 'Your wedding bouquet is one of the most important floral elements of your big day. Here are our tips for choosing the perfect one.',
      date: '2026-03-01',
      category: 'Weddings',
      readTime: '5 min',
    },
    {
      id: '2',
      title: 'Seasonal Flowers Guide: What\'s in Season Right Now',
      excerpt: 'Discover which flowers are at their peak this season and how to incorporate them into your arrangements.',
      date: '2026-02-20',
      category: 'Tips',
      readTime: '4 min',
    },
    {
      id: '3',
      title: 'How to Make Fresh Flowers Last Longer',
      excerpt: 'Simple tips and tricks to extend the life of your cut flowers and keep them looking beautiful for days.',
      date: '2026-02-10',
      category: 'Tips',
      readTime: '3 min',
    },
    {
      id: '4',
      title: 'Event Decoration Trends for 2026',
      excerpt: 'From minimalist elegance to bold color palettes — explore the top floral decoration trends this year.',
      date: '2026-01-28',
      category: 'Events',
      readTime: '6 min',
    },
    {
      id: '5',
      title: 'The Language of Flowers: What Each Flower Means',
      excerpt: 'Every flower carries a meaning. Learn the symbolism behind popular blooms and choose arrangements that tell a story.',
      date: '2026-01-15',
      category: 'Education',
      readTime: '7 min',
    },
    {
      id: '6',
      title: 'Behind the Scenes: A Day at Our Flower Shop',
      excerpt: 'Take a peek behind the curtain and see what goes into creating our signature arrangements every day.',
      date: '2026-01-05',
      category: 'About Us',
      readTime: '4 min',
    },
  ];
}

export default async function BlogPage() {
  const posts = getStaticBlogPosts();

  return (
    <Section id="blog" >
      <Container>
        {/* Page header */}
        <div className="mb-14">
          <Typography variant="overline" as="span" color="secondary">
            Blog
          </Typography>
          <Typography variant="h1" className="mt-4">
            News & Insights
          </Typography>
          <Typography variant="subtitle1" className="mt-4 max-w-2xl">
            Tips, trends, and stories from our flower studio.
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
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                  <Typography variant="label" as="span" color="secondary" className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Read more →
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
