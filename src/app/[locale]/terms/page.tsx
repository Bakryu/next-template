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

export default function TermsPage() {
  const { business } = siteConfig;

  return (
    <Section id="terms">
      <Container size="md">
        <div className="mb-14">
          <Typography variant="overline" as="span" color="secondary">
            Legal
          </Typography>
          <Typography variant="h1" className="mt-4">
            Terms of Service
          </Typography>
          <Typography className="mt-4" color="muted">Last updated: March 1, 2026</Typography>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <div>
            <Typography variant="h2" className="mb-3">1. Agreement to Terms</Typography>
            <Typography color="muted" className="leading-[1.8]">
              By accessing or using the services provided by {business.name}, you agree to be bound by
              these Terms of Service. If you do not agree with any part of these terms, you may not
              access the service.
            </Typography>
          </div>

          <div>
            <Typography variant="h2" className="mb-3">2. Services</Typography>
            <Typography color="muted" className="leading-[1.8]">
              {business.name} provides floral arrangement services including but not limited to custom
              bouquets, event decoration, weekly subscriptions, and gift arrangements. All services
              are subject to availability and may be modified at our discretion.
            </Typography>
          </div>

          <div>
            <Typography variant="h2" className="mb-3">3. Orders & Payments</Typography>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2"><span className="text-secondary">•</span> All prices are displayed in Euros (€) and include applicable taxes unless otherwise stated.</li>
              <li className="flex gap-2"><span className="text-secondary">•</span> Orders are confirmed only after successful payment processing.</li>
              <li className="flex gap-2"><span className="text-secondary">•</span> We reserve the right to refuse or cancel orders at our discretion.</li>
              <li className="flex gap-2"><span className="text-secondary">•</span> Delivery times are estimates and may vary based on location and availability.</li>
            </ul>
          </div>

          <div>
            <Typography variant="h2" className="mb-3">4. Cancellation & Refunds</Typography>
            <Typography color="muted" className="leading-[1.8]">
              Due to the perishable nature of our products, cancellations must be made at least 24 hours
              before the scheduled delivery. Refunds will be processed within 5-10 business days.
              If you are not satisfied with your arrangement, please contact us within 24 hours
              of delivery.
            </Typography>
          </div>

          <div>
            <Typography variant="h2" className="mb-3">5. Intellectual Property</Typography>
            <Typography color="muted" className="leading-[1.8]">
              All content on this website — including text, graphics, logos, images, and software —
              is the property of {business.name} and is protected by intellectual property laws.
              Unauthorized use is prohibited.
            </Typography>
          </div>

          <div>
            <Typography variant="h2" className="mb-3">6. Limitation of Liability</Typography>
            <Typography color="muted" className="leading-[1.8]">
              {business.name} shall not be liable for any indirect, incidental, special, or
              consequential damages arising from the use of our services. Our liability is limited
              to the amount paid for the specific service in question.
            </Typography>
          </div>

          <div>
            <Typography variant="h2" className="mb-3">7. Changes to Terms</Typography>
            <Typography color="muted" className="leading-[1.8]">
              We reserve the right to modify these terms at any time. Changes will be effective
              immediately upon posting on this page. Your continued use of our services constitutes
              acceptance of the updated terms.
            </Typography>
          </div>

          <div>
            <Typography variant="h2" className="mb-3">8. Contact</Typography>
            <Typography color="muted" className="leading-[1.8]">
              For questions about these Terms of Service, please contact us at{' '}
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
