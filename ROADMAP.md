# Template Roadmap — Sections & Pages

All new sections follow the same code conventions:

- `'use client'` + framer-motion animations
- `useTranslations()` for all UI strings
- `siteConfig` as single data source
- `Section` + `Container` layout primitives
- `Typography`, `Button`, `Badge` UI components
- V1 / V2 / V3 variants per section (each a distinct visual layout)
- Export via `index.ts` barrel file

---

## New Sections

### ✅ Status legend

- `[ ]` not started
- `[~]` in progress
- `[x]` done

---

### 1. Booking

**File:** `src/components/sections/Booking/`
**i18n namespace:** `booking`
**Config:** `siteConfig.booking` (services list, contact info)

| Variant         | Layout                                                                 | Status |
| --------------- | ---------------------------------------------------------------------- | ------ |
| `Booking.tsx`   | Two-column: left = service select + date/time, right = contact summary | `[ ]`  |
| `BookingV2.tsx` | Centered stepper (Step 1 service → Step 2 details → Step 3 confirm)    | `[ ]`  |
| `BookingV3.tsx` | Dark full-width panel with inline form, secondary color accent         | `[ ]`  |

**i18n keys needed:** `booking.heading`, `booking.subtitle`, `booking.selectService`, `booking.selectDate`, `booking.selectTime`, `booking.yourName`, `booking.yourPhone`, `booking.yourEmail`, `booking.notes`, `booking.submit`, `booking.confirmation`, `booking.step1`, `booking.step2`, `booking.step3`

---

### 2. Process / How It Works

**File:** `src/components/sections/Process/`
**i18n namespace:** `process`
**Config:** `siteConfig.process` (steps array)

| Variant         | Layout                                                    | Status |
| --------------- | --------------------------------------------------------- | ------ |
| `Process.tsx`   | Horizontal numbered steps with icons, connected by a line | `[ ]`  |
| `ProcessV2.tsx` | Vertical timeline, alternating left/right on desktop      | `[ ]`  |
| `ProcessV3.tsx` | Large step numbers as background decoration, minimal text | `[ ]`  |

**i18n keys needed:** `process.heading`, `process.subtitle`, `process.overline`

---

### 3. Before & After

**File:** `src/components/sections/BeforeAfter/`
**i18n namespace:** `beforeAfter`
**Config:** `siteConfig.beforeAfter` (image pairs)

| Variant             | Layout                                              | Status |
| ------------------- | --------------------------------------------------- | ------ |
| `BeforeAfter.tsx`   | Drag-to-reveal slider on a single featured pair     | `[ ]`  |
| `BeforeAfterV2.tsx` | Grid of static side-by-side pairs with hover reveal | `[ ]`  |
| `BeforeAfterV3.tsx` | Full-width carousel of pairs with labels            | `[ ]`  |

**i18n keys needed:** `beforeAfter.heading`, `beforeAfter.subtitle`, `beforeAfter.before`, `beforeAfter.after`

---

### 4. Video

**File:** `src/components/sections/Video/`
**i18n namespace:** `video`
**Config:** `siteConfig.video` (url, poster, title)

| Variant       | Layout                                                    | Status |
| ------------- | --------------------------------------------------------- | ------ |
| `Video.tsx`   | Centered rounded video card with play button overlay      | `[ ]`  |
| `VideoV2.tsx` | Full-width cinema hero video (background autoplay, muted) | `[ ]`  |
| `VideoV3.tsx` | Two-column: left = text + CTA, right = video embed        | `[ ]`  |

**i18n keys needed:** `video.heading`, `video.subtitle`, `video.play`

---

### 5. Promotions / Offers

**File:** `src/components/sections/Promotions/`
**i18n namespace:** `promotions`
**Config:** `siteConfig.promotions` (offers array)

| Variant            | Layout                                                        | Status |
| ------------------ | ------------------------------------------------------------- | ------ |
| `Promotions.tsx`   | Cards grid with badge, title, description, expiry date        | `[ ]`  |
| `PromotionsV2.tsx` | Horizontal banner strip (single featured deal, prominent CTA) | `[ ]`  |
| `PromotionsV3.tsx` | Dark section with glowing accent cards, countdown timer       | `[ ]`  |

**i18n keys needed:** `promotions.heading`, `promotions.subtitle`, `promotions.expires`, `promotions.claimButton`, `promotions.badgeNew`, `promotions.badgeHot`

---

### 6. Certificates & Awards

**File:** `src/components/sections/Certificates/`
**i18n namespace:** `certificates`
**Config:** `siteConfig.certificates` (items array)

| Variant              | Layout                                                     | Status |
| -------------------- | ---------------------------------------------------------- | ------ |
| `Certificates.tsx`   | Centered icon + title + issuer cards in a grid             | `[ ]`  |
| `CertificatesV2.tsx` | Horizontal logo strip (like Partners but with year badges) | `[ ]`  |
| `CertificatesV3.tsx` | Alternating large featured cert + supporting grid          | `[ ]`  |

**i18n keys needed:** `certificates.heading`, `certificates.subtitle`, `certificates.overline`

---

### 7. Instagram Feed

**File:** `src/components/sections/Instagram/`
**i18n namespace:** `instagram`
**Config:** `siteConfig.business.socials.instagram` + `siteConfig.instagram` (static posts)

| Variant           | Layout                                              | Status |
| ----------------- | --------------------------------------------------- | ------ |
| `Instagram.tsx`   | 6-image grid with hover overlay and follow CTA      | `[ ]`  |
| `InstagramV2.tsx` | Masonry-style varying height grid                   | `[ ]`  |
| `InstagramV3.tsx` | Horizontal scroll strip with handle + follow button | `[ ]`  |

**i18n keys needed:** `instagram.heading`, `instagram.followButton`, `instagram.handle`

---

### 8. Newsletter

**File:** `src/components/sections/Newsletter/`
**i18n namespace:** `newsletter`
**Config:** `siteConfig.newsletter` (title, subtitle, provider)

| Variant            | Layout                                           | Status |
| ------------------ | ------------------------------------------------ | ------ |
| `Newsletter.tsx`   | Centered card with email input + submit          | `[ ]`  |
| `NewsletterV2.tsx` | Full-width dark banner with inline form          | `[ ]`  |
| `NewsletterV3.tsx` | Two-column: left = value prop text, right = form | `[ ]`  |

**i18n keys needed:** `newsletter.heading`, `newsletter.subtitle`, `newsletter.placeholder`, `newsletter.submit`, `newsletter.successMessage`, `newsletter.privacyNote`

---

### 9. Opening Hours (Standalone)

**File:** `src/components/sections/Hours/`
**i18n namespace:** (reuses `days.*` + `footer.*`)
**Config:** `siteConfig.business.openingHours`

| Variant       | Layout                                                       | Status |
| ------------- | ------------------------------------------------------------ | ------ |
| `Hours.tsx`   | Clean card with week table, today highlighted                | `[ ]`  |
| `HoursV2.tsx` | Two-column: left = hours table, right = map embed            | `[ ]`  |
| `HoursV3.tsx` | Dark section with large today's hours prominent + full table | `[ ]`  |

**i18n keys needed:** `hours.heading`, `hours.todayLabel`, `hours.openNow`, `hours.closedNow`

---

### 10. Brands / Products Used

**File:** `src/components/sections/Brands/`
**i18n namespace:** `brands`
**Config:** `siteConfig.brands` (items array)

| Variant        | Layout                                                         | Status |
| -------------- | -------------------------------------------------------------- | ------ |
| `Brands.tsx`   | Logo grid with grayscale → color on hover (same as Partners)   | `[ ]`  |
| `BrandsV2.tsx` | Cards with logo + short description of why they use this brand | `[ ]`  |
| `BrandsV3.tsx` | Marquee / auto-scroll strip                                    | `[ ]`  |

**i18n keys needed:** `brands.heading`, `brands.subtitle`, `brands.overline`

---

## New Pages

### 11. `/services` — Full Services Page

**File:** `src/app/[locale]/services/page.tsx`
**Status:** `[ ]`

Full detailed services listing — not just a preview section. Each service gets its own card with full description, price, duration. Optional category filter tabs.

---

### 12. `/booking` — Booking Page

**File:** `src/app/[locale]/booking/page.tsx`
**Status:** `[ ]`

Wraps the Booking section in a standalone page. Includes confirmation state after submit.

---

### 13. `/menu` — Service Menu / Price List

**File:** `src/app/[locale]/menu/page.tsx`
**Status:** `[ ]`

Printable-style price list page. Grouped by category (e.g. Haircut, Color, Treatment for a salon). Uses `siteConfig.services` + category grouping.

---

### 14. `/team` — Full Team Page

**File:** `src/app/[locale]/team/page.tsx`
**Status:** `[ ]`

Extended team page with bios, specialties, social links per member.

---

### 15. `/contact` — Standalone Contact Page

**File:** `src/app/[locale]/contact/page.tsx`
**Status:** `[ ]`

Full-page contact: form + map + address + hours — not just a section.

---

### 16. `/reviews` — Reviews Page

**File:** `src/app/[locale]/reviews/page.tsx`
**Status:** `[ ]`

All testimonials + average rating summary + platform badges (Google, TripAdvisor, etc.)

---

### 17. `/faq` — Standalone FAQ Page

**File:** `src/app/[locale]/faq/page.tsx`
**Status:** `[ ]`

All FAQ items with category tabs if needed.

---

### 18. `/thank-you` — Confirmation Page

**File:** `src/app/[locale]/thank-you/page.tsx`
**Status:** `[ ]`

Post-booking or post-contact confirmation. Shows summary + "What happens next" steps.

---

## Build Order (recommended)

1. **Process** — simple, no new config, high value
2. **Booking** — core for most businesses
3. **Hours** — standalone, reuses existing data
4. **Newsletter** — simple, self-contained
5. **Promotions** — high visual impact
6. **Before & After** — barbershop / salon essential
7. **Video** — universal appeal
8. **Instagram** — flower shops / beauty
9. **Certificates** — trust signal
10. **Brands** — salon-specific

**Pages:** `/services` → `/booking` → `/contact` → `/menu` → `/team` → `/reviews` → `/faq` → `/thank-you`

---

## Config additions needed in `site.config.ts` / `site.types.ts`

```typescript
// New SectionId values
| 'booking' | 'process' | 'beforeAfter' | 'video'
| 'promotions' | 'certificates' | 'instagram' | 'newsletter'
| 'hours' | 'brands'

// New config interfaces
ProcessStep       { title, description, icon }
BeforeAfterItem   { before, after, label }
VideoConfig       { url, poster?, title?, subtitle? }
PromotionItem     { title, description, badge?, expiresAt?, href? }
CertificateItem   { title, issuer, year?, icon?, image? }
InstagramPost     { image, url, likes?, caption? }
NewsletterConfig  { heading, subtitle, provider? }
BrandItem         { name, logo?, description?, url? }
BookingConfig     { heading, subtitle, services: BookingService[] }
BookingService    { name, duration, price }
```
