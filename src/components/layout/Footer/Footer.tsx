import React from 'react';
import { Link } from '@/lib/i18n/routing';
import { useTranslations } from 'next-intl';
import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { navigationConfig } from '@/config/navigation.config';
import { Container } from '../Container';
import { Typography } from '@/components/ui/Typography';

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  youtube: Youtube,
};

export function Footer() {
  const t = useTranslations();
  const { business } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="border-border/40 bg-foreground text-background relative border-t">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
          {/* Brand */}
          <div className="space-y-6 lg:col-span-4">
            <Typography variant="h4" as="h3" weight="bold">
              {business.name}
            </Typography>
            <Typography variant="body2" className="text-background/60 leading-[1.8]">
              {business.description}
            </Typography>
            {/* Social Links */}
            <div className="flex gap-2">
              {Object.entries(business.socials).map(([platform, handle]) => {
                if (!handle) return null;
                const Icon = socialIcons[platform];
                if (!Icon) return null;
                return (
                  <a
                    key={platform}
                    href={`https://${platform}.com/${handle.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background/5 text-background/50 hover:bg-secondary/20 hover:text-secondary flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300"
                    aria-label={platform}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation + Contact — side by side on mobile, separate cols on desktop */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-5 lg:col-start-6 lg:grid-cols-2 lg:gap-0">
            {/* Navigation */}
            <div className="lg:col-span-1">
              <Typography variant="overline" as="h4" className="text-background/40 mb-5">
                {t('footer.navigation')}
              </Typography>
              <ul className="space-y-3">
                {navigationConfig.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-background/60 hover:text-secondary text-sm transition-colors duration-300"
                    >
                      {t(item.translationKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <Typography variant="overline" as="h4" className="text-background/40 mb-5">
                {t('footer.contact')}
              </Typography>
              <ul className="space-y-4">
                <li className="text-background/60 flex items-start gap-3 text-sm">
                  <MapPin className="text-secondary/60 mt-0.5 h-4 w-4 shrink-0" />
                  {business.address || business.location}
                </li>
                <li>
                  <a
                    href={`tel:${business.phone}`}
                    className="text-background/60 hover:text-secondary flex items-center gap-3 text-sm transition-colors duration-300"
                  >
                    <Phone className="text-secondary/60 h-4 w-4 shrink-0" />
                    {business.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${business.email}`}
                    className="text-background/60 hover:text-secondary flex items-center gap-3 text-sm transition-colors duration-300"
                  >
                    <Mail className="text-secondary/60 h-4 w-4 shrink-0" />
                    {business.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Hours */}
          {business.openingHours && (
            <div className="lg:col-span-3 lg:col-start-auto">
              <Typography variant="overline" as="h4" className="text-background/40 mb-5">
                {t('footer.hours')}
              </Typography>
              <ul className="space-y-2">
                {(() => {
                  // Group consecutive days with identical hours
                  type Group = {
                    from: string;
                    to: string;
                    open: string;
                    close: string;
                    closed: boolean;
                  };
                  const groups: Group[] = [];
                  business.openingHours.forEach((h) => {
                    const prev = groups[groups.length - 1];
                    const closed = !!h.closed;
                    if (
                      prev &&
                      prev.closed === closed &&
                      prev.open === h.open &&
                      prev.close === h.close
                    ) {
                      prev.to = h.day;
                    } else {
                      groups.push({ from: h.day, to: h.day, open: h.open, close: h.close, closed });
                    }
                  });
                  return groups.map((g) => {
                    const label =
                      g.from === g.to
                        ? t(`days.${g.from}Short` as Parameters<typeof t>[0])
                        : `${t(`days.${g.from}Short` as Parameters<typeof t>[0])} – ${t(`days.${g.to}Short` as Parameters<typeof t>[0])}`;
                    return (
                      <li key={g.from} className="flex justify-between text-sm">
                        <span className="text-background/40">{label}</span>
                        <span className="text-background/70">
                          {g.closed ? t('footer.closed') : `${g.open} – ${g.close}`}
                        </span>
                      </li>
                    );
                  });
                })()}
              </ul>
            </div>
          )}
        </div>

        {/* Copyright */}
        <div className="border-background/10 border-t py-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <Typography variant="caption" className="text-background/30 tracking-wider">
              &copy; {year} {business.name}. {t('footer.rights')}
            </Typography>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-background/30 hover:text-secondary text-xs transition-colors duration-300"
              >
                {t('footer.privacy')}
              </Link>
              <Link
                href="/terms"
                className="text-background/30 hover:text-secondary text-xs transition-colors duration-300"
              >
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
