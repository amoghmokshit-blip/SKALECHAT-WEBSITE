# SkaleChat — Company Website

Marketing website for **SkaleChat**, a private group messaging platform for
intermediaries. Parties communicate while their contact information stays hidden
— only the admin sees real identities.

_Operated by SKALECHAT COMMUNICATIONS PRIVATE LIMITED._

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- Fonts: **Sora** (display) + **Inter** (body) via `next/font`

All pages are statically prerendered.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build (type-check + lint + compile)
npm run start    # serve the production build
npm run lint     # eslint
```

## Structure

```
src/
  app/
    layout.tsx        # root layout: fonts, nav, footer, metadata
    page.tsx          # Home
    about/            # About
    product/          # Product (Super Group + workflow)
    company/          # Company information
    contact/          # Contact details
    privacy/          # Privacy Policy
    terms/            # Terms & Conditions
    globals.css       # design tokens (@theme) + base styles
  components/          # Nav, Footer, Button, Container, SuperGroupPanel, ...
  lib/
    site.ts           # single source of truth for company / contact details
    cn.ts             # className helper
```

## Design system

Design tokens live in `src/app/globals.css` under `@theme`:

- Neutral palette (white / near-black) with a single emerald accent (`--color-accent`).
- Minimal, typographic layout — hairline dividers over boxed cards, shadows only
  where they earn their place.

## Notes / placeholders

Some content is awaiting final details and is marked in the source:

- Registered office **address** (`src/lib/site.ts`).
- **Effective dates** on the Privacy Policy and Terms & Conditions pages.
- **Jurisdiction** clause in the Terms & Conditions.

Legal copy is a professional starting point and should be reviewed before launch.
