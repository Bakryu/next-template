# Next.js Small Business Starter

A **production-ready Next.js 15 template** for generating unique small business websites — florists, barbers, restaurants, cafés, bakeries, and more. Swap a single config file to produce a fully branded, multilingual, e-commerce-ready site.

---

## Features

- **Next.js 15** App Router with React 19 Server Components
- **Tailwind CSS 4** CSS-first `@theme` configuration
- **Config-driven architecture** — one `site.config.ts` defines the entire site
- **4 theme style presets** — Minimal, Bold, Elegant, Playful
- **Internationalization** — EN, FR, DE, RU via `next-intl`
- **Sanity CMS** — optional headless CMS with static fallback
- **Stripe Checkout** — cart system with redirect-mode payments
- **Framer Motion** — polished section entrance animations
- **95+ Lighthouse score** — semantic HTML, lazy loading, optimised images
- **Full component library** — Button, Input, Select, Card, Badge, Modal, Toast, Skeleton, Typography (all built with `cva()` variants)
- **Section-based homepage** — assemble pages from config (Hero, Services, About, Gallery, Testimonials, FAQ, CTA, Contact, Map)
- **Gallery** — filter, sort, masonry/grid toggle, lightbox
- **Responsive** — mobile menu, adaptive layouts, fluid typography

---

## Quick Start

```bash
# 1. Clone and install
git clone <repo-url> my-business-site
cd my-business-site
npm install

# 2. Copy environment variables
cp .env.example .env.local

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/
│   ├── [locale]/           # i18n route prefix
│   │   ├── layout.tsx      # Root layout (fonts, providers, header/footer)
│   │   ├── page.tsx        # Homepage (config-driven section assembly)
│   │   ├── gallery/page.tsx
│   │   ├── cart/page.tsx
│   │   └── checkout/page.tsx
│   └── api/
│       ├── checkout/       # Stripe checkout session
│       ├── stripe/webhook/ # Stripe webhook handler
│       └── revalidate/     # Sanity ISR webhook
├── components/
│   ├── ui/                 # Atomic components (Button, Input, Card…)
│   ├── layout/             # Header, Footer, Navigation, Container…
│   ├── sections/           # Hero, Services, About, Gallery, Testimonials…
│   ├── gallery/            # GalleryGrid, GalleryFilter, GalleryItem…
│   └── cart/               # CartProvider, CartItem, CartSummary…
├── config/
│   ├── site.config.ts      # ⭐ Main config — swap this per client
│   ├── theme.config.ts     # Design tokens & style presets
│   ├── navigation.config.ts
│   └── sections.config.ts
├── hooks/                  # useCart, useMediaQuery, useIntersection
├── lib/
│   ├── i18n/               # next-intl routing & request config
│   ├── sanity/             # Client, queries, image helpers, schemas
│   ├── stripe/             # Client, checkout, webhook handlers
│   └── utils/              # cn(), formatCurrency(), slugify()…
├── styles/
│   ├── globals.css         # Base styles
│   └── theme.css           # Tailwind @theme tokens
├── types/                  # TypeScript type definitions
└── middleware.ts           # Locale detection & routing
```

---

## Configuration

### Creating a New Site

1. **Edit `src/config/site.config.ts`** — update business info, sections, services, colours, and content.
2. **Update `src/styles/theme.css`** — adjust CSS custom properties in the `@theme` block if needed.
3. **Add translations** — edit JSON files in `src/lib/i18n/messages/`.
4. **Replace images** — drop assets into `public/images/` and reference them in config.

### Site Config Overview

```typescript
// src/config/site.config.ts
export const siteConfig: SiteConfig = {
  business: {
    name: 'Bloom & Petal',
    type: 'florist',
    tagline: 'Handcrafted floral arrangements…',
    // ...
  },
  theme: {
    style: 'elegant',     // minimal | bold | elegant | playful
    primaryColor: '#2d5016',
    // ...
  },
  sections: ['hero', 'services', 'about', 'gallery', 'testimonials', 'faq', 'cta', 'contact'],
  // Hero content, services list, gallery items, testimonials, FAQ, etc.
};
```

### Theme Style Presets

| Preset    | Border Radius | Shadow   | Animation | Best For            |
| --------- | ------------- | -------- | --------- | ------------------- |
| Minimal   | Sharp         | Subtle   | Fast      | Studios, agencies   |
| Bold      | Medium        | Strong   | Bouncy    | Gyms, food trucks   |
| Elegant   | Rounded       | Soft     | Smooth    | Florists, salons    |
| Playful   | Full          | Colorful | Springy   | Bakeries, pet shops |

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values you need:

```env
# Required for Stripe checkout
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Required for Sanity CMS (optional — falls back to static config)
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=
SANITY_REVALIDATE_SECRET=

# App
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Without Sanity

The template works entirely with static data from `site.config.ts`. Sanity is **optional** — when project ID is missing, all CMS fetches gracefully return `null` and the app uses config data.

### Without Stripe

Cart UI renders normally. Checkout will show a console warning if Stripe keys are missing. Add keys when ready to accept payments.

---

## Internationalization

Supported locales: **English**, **French**, **German**, **Russian**.

Translation files live in `src/lib/i18n/messages/`. Every user-facing string is translated via `next-intl`.

```
/en/          → English (default)
/fr/          → French
/de/          → German
/ru/          → Russian
```

### Adding a New Locale

1. Add the locale code to `siteConfig.availableLocales` in `site.config.ts`.
2. Create `src/lib/i18n/messages/<locale>.json` with all translation keys.
3. Update `src/lib/i18n/routing.ts` if you need custom path prefixes.

---

## Sanity CMS

### Setup

1. Create a project at [sanity.io](https://sanity.io).
2. Set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` in `.env.local`.
3. Deploy the schemas from `src/lib/sanity/schemas/` to your Sanity Studio.
4. Add a webhook pointing to `/api/revalidate` for on-demand ISR.

### Schemas

Pre-built schemas for: `service`, `galleryItem`, `testimonial`, `product`, `page`, `section`.

---

## Stripe Integration

### Setup

1. Get API keys from [dashboard.stripe.com](https://dashboard.stripe.com).
2. Set `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` and `STRIPE_SECRET_KEY` in `.env.local`.
3. For webhooks, use the Stripe CLI in development:

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

4. Set the `STRIPE_WEBHOOK_SECRET` from the CLI output.

### Flow

1. User adds items to cart (client-side, persisted to localStorage)
2. Checkout button POSTs cart to `/api/checkout`
3. Server creates a Stripe Checkout Session
4. User is redirected to Stripe's hosted checkout page
5. On success, redirected to `/checkout?session_id=...`
6. Webhook at `/api/stripe/webhook` handles fulfilment events

---

## Component Library

Every UI component follows the pattern:

```
components/ui/<name>/
├── <name>.variants.ts   # cva() variant definitions
├── <name>.tsx           # React component with forwardRef
└── index.ts             # Re-exports
```

### Available Components

| Component    | Variants                                                      |
| ------------ | ------------------------------------------------------------- |
| **Button**   | primary, secondary, accent, outline, ghost, link, destructive |
| **Input**    | default, error — with label, helper text, error message       |
| **Select**   | default, error — with options array                           |
| **Card**     | Compound: Card, CardHeader, CardTitle, CardContent, CardFooter|
| **Badge**    | primary, secondary, accent, outline, success, warning, error  |
| **Modal**    | Animated overlay with keyboard close, aria attributes         |
| **Toast**    | success, error, info, warning — via context + hook            |
| **Skeleton** | Pulse animation, configurable dimensions, circle option       |
| **Typography** | h1–h4, p, lead, large, small, muted, blockquote            |

---

## Scripts

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run start     # Start production server
npm run lint      # ESLint check
npm run format    # Prettier format
```

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub.
2. Import in [vercel.com](https://vercel.com).
3. Add environment variables.
4. Deploy.

### Other Platforms

Any platform supporting Node.js 18+ and Next.js:

```bash
npm run build
npm run start
```

---

## Tech Stack

| Technology       | Version | Purpose                     |
| ---------------- | ------- | --------------------------- |
| Next.js          | 15      | Framework (App Router)      |
| React            | 19      | UI library                  |
| TypeScript       | 5       | Type safety                 |
| Tailwind CSS     | 4       | Utility-first styling       |
| next-intl        | 4       | Internationalization        |
| Sanity           | 3       | Headless CMS (optional)     |
| Stripe           | latest  | Payment processing          |
| Framer Motion    | 12      | Animations                  |
| cva              | latest  | Component variant API       |
| Zod              | latest  | Runtime validation          |
| Lucide React     | latest  | Icons                       |

---

## License

MIT
