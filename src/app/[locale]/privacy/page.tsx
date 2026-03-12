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

export default function PrivacyPage() {
  const { business } = siteConfig;

  return (
    <Section id="privacy">
      <Container size="md">
        <div className="mb-14">
          <Typography variant="overline" as="span" color="secondary">
            Legal
          </Typography>
          <Typography variant="h1" className="mt-4">
            Privacy Policy
          </Typography>
          <Typography className="mt-4" color="muted">Last updated: March 1, 2026</Typography>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <div>
            <Typography variant="h2" className="mb-3">1. Introduction</Typography>
            <Typography color="muted" className="leading-[1.8]">
              {business.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website and use our services.
            </Typography>
          </div>

          <div>
            <Typography variant="h2" className="mb-3">2. Information We Collect</Typography>
            <Typography color="muted" className="leading-[1.8] mb-3">
              We may collect information about you in a variety of ways:
            </Typography>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2"><span className="text-secondary">•</span> Personal data: name, email address, phone number, and shipping address when you place an order.</li>
              <li className="flex gap-2"><span className="text-secondary">•</span> Payment information: processed securely through our payment provider — we do not store card details.</li>
              <li className="flex gap-2"><span className="text-secondary">•</span> Usage data: pages visited, time spent, browser type, and referring pages for analytics purposes.</li>
              <li className="flex gap-2"><span className="text-secondary">•</span> Cookies: small data files to improve your browsing experience.</li>
            </ul>
          </div>

          <div>
            <Typography variant="h2" className="mb-3">3. How We Use Your Information</Typography>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2"><span className="text-secondary">•</span> To process and fulfill your orders.</li>
              <li className="flex gap-2"><span className="text-secondary">•</span> To communicate with you about your orders, inquiries, and promotions.</li>
              <li className="flex gap-2"><span className="text-secondary">•</span> To improve our website, products, and services.</li>
              <li className="flex gap-2"><span className="text-secondary">•</span> To comply with legal obligations.</li>
            </ul>
          </div>

          <div>
            <Typography variant="h2" className="mb-3">4. Data Sharing</Typography>
            <Typography color="muted" className="leading-[1.8]">
              We do not sell or rent your personal information to third parties. We may share information
              with trusted service providers who assist us in operating our business (payment processors,
              delivery services) under strict confidentiality agreements.
            </Typography>
          </div>

          <div>
            <Typography variant="h2" className="mb-3">5. Your Rights</Typography>
            <Typography color="muted" className="leading-[1.8]">
              You have the right to access, correct, or delete your personal data. You may also opt out of
              marketing communications at any time. To exercise these rights, contact us at{' '}
              <a href={`mailto:${business.email}`} className="text-secondary hover:underline">
                {business.email}
              </a>.
            </Typography>
          </div>

          <div>
            <Typography variant="h2" className="mb-3">6. Contact Us</Typography>
            <Typography color="muted" className="leading-[1.8]">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href={`mailto:${business.email}`} className="text-secondary hover:underline">
                {business.email}
              </a>{' '}
              or visit us at {business.address || business.location}.
            </Typography>
          </div>
        </div>
      </Container>
    </Section>
  );
}
