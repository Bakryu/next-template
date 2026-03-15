import { getHomepageSections } from '@/config/sections.config';
import type { SectionId } from '@/types/site.types';

// Section component imports
import { HeroSection } from '@/components/sections/Hero';
import { ServicesSection } from '@/components/sections/Services';
import { AboutSection } from '@/components/sections/About';
import { GalleryPreviewSection } from '@/components/sections/Gallery';
import { TestimonialsSection } from '@/components/sections/Testimonials';
import { ContactSection } from '@/components/sections/Contact';
// import { ContactSection,ContactSectionV2,ContactSectionV3, ContactSectionV4 } from '@/components/sections/Contact';
import { FAQSection } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTA';
import { MapSection } from '@/components/sections/Map';
import { TeamSection } from '@/components/sections/Team';
import { PricingSection } from '@/components/sections/Pricing';
import { FeaturesSection } from '@/components/sections/Features';
import { PartnersSection } from '@/components/sections/Partners';
import { StatsSection } from '@/components/sections/Stats';

const sectionComponents: Record<SectionId, React.ComponentType> = {
  hero: HeroSection,
  services: ServicesSection,
  about: AboutSection,
  gallery: GalleryPreviewSection,
  testimonials: TestimonialsSection,
  contact: ContactSection,
  faq: FAQSection,
  cta: CTASection,
  map: MapSection,
  team: TeamSection,
  pricing: PricingSection,
  features: FeaturesSection,
  partners: PartnersSection,
  stats: StatsSection,
};

export default function HomePage() {
  const sections = getHomepageSections();

  return (
    <>
      {sections.map(({ id }) => {
        const Component = sectionComponents[id];
        if (!Component) return null;
        return <Component key={id} />;
      })}
    </>
  );
}
