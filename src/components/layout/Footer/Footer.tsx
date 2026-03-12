import React from 'react';
import { Link } from '@/lib/i18n/routing';
import { useTranslations } from 'next-intl';
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';
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
    <footer className="relative border-t border-border/40 bg-foreground text-background">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
          {/* Brand */}
          <div className="space-y-6 lg:col-span-4">
            <Typography variant="h4" as="h3" weight="bold">{business.name}</Typography>
            <Typography variant="body2" className="leading-[1.8] text-background/60">
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
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-background/5 text-background/50 transition-all duration-300 hover:bg-secondary/20 hover:text-secondary"
                    aria-label={platform}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 lg:col-start-6">
            <Typography variant="overline" as="h4" className="mb-5 text-background/40">
              {t('footer.navigation')}
            </Typography>
            <ul className="space-y-3">
              {navigationConfig.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/60 transition-colors duration-300 hover:text-secondary"
                  >
                    {t(item.translationKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <Typography variant="overline" as="h4" className="mb-5 text-background/40">
              {t('footer.contact')}
            </Typography>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-background/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary/60" />
                {business.address || business.location}
              </li>
              <li>
                <a
                  href={`tel:${business.phone}`}
                  className="flex items-center gap-3 text-sm text-background/60 transition-colors duration-300 hover:text-secondary"
                >
                  <Phone className="h-4 w-4 shrink-0 text-secondary/60" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-3 text-sm text-background/60 transition-colors duration-300 hover:text-secondary"
                >
                  <Mail className="h-4 w-4 shrink-0 text-secondary/60" />
                  {business.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          {business.openingHours && (
            <div className="lg:col-span-3">
              <Typography variant="overline" as="h4" className="mb-5 text-background/40">
                {t('footer.hours')}
              </Typography>
              <ul className="space-y-2">
                {business.openingHours.map((hours) => (
                  <li
                    key={hours.day}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-background/40">{hours.day}</span>
                    <span className="text-background/70">
                      {hours.closed ? t('footer.closed') : `${hours.open} – ${hours.close}`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Copyright */}
        <div className="border-t border-background/10 py-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <Typography variant="caption" className="text-background/30 tracking-wider">
              &copy; {year} {business.name}. {t('footer.rights')}
            </Typography>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-xs text-background/30 transition-colors duration-300 hover:text-secondary"
              >
                {t('footer.privacy')}
              </Link>
              <Link
                href="/terms"
                className="text-xs text-background/30 transition-colors duration-300 hover:text-secondary"
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
