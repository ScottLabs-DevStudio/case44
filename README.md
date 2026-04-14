# Case 44 — Blues & Rock Website

A Next.js website for Case 44, a blues/rock band from St. Louis, MO.

## 🎸 Features

- **Homepage** — Hero, upcoming shows, band highlight, merch preview, blues quote
- **About** — Band story, member bios, venue list
- **Shows** — Full upcoming events calendar
- **Photos** — Photo gallery with category filters
- **Videos** — Video gallery with embedded players
- **Merch Shop** — E-commerce store with cart, size selector, Stripe checkout ready
- **Contact** — Contact form with booking inquiry support

## 🎨 Design

Blues music themed with:
- **Deep navy/midnight** backgrounds (`#0a0a0e`, `#0d1b2a`)
- **Gold/amber accents** (`#c9a84c`, `#d4a04a`) — warm stage lighting feel
- **Cream text** on dark backgrounds — smoky club ambiance
- **Playfair Display** serif headings — vintage, soulful feel
- **Cormorant Garamond** for accent text — elegant blues aesthetic
- **Inter** for body text — clean readability
- Subtle noise textures, glow effects, and smooth animations
- Fully responsive (mobile-first)

## 🛠 Tech Stack

- **Next.js 16** — App Router, React Server Components, static generation
- **Tailwind CSS 4** — Utility-first styling with custom theme
- **TypeScript** — Type safety throughout
- **Lucide React** — Icons
- **Stripe** (ready) — API route for checkout sessions (`/api/checkout`)
- **Vercel** — Deployment-ready

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 💳 Stripe Setup

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Stripe Dashboard
3. Set environment variables:
   ```
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   NEXT_PUBLIC_URL=https://case44rocks.com
   ```
4. The `/api/checkout` endpoint creates Stripe checkout sessions
5. Update the checkout button in the Shop page to call this endpoint

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx      # About the band
│   ├── events/page.tsx     # Show dates
│   ├── photos/page.tsx     # Photo gallery
│   ├── videos/page.tsx     # Video gallery
│   ├── shop/page.tsx      # Merch store with cart
│   ├── contact/page.tsx   # Contact form
│   ├── api/
│   │   ├── checkout/route.ts  # Stripe checkout
│   │   └── contact/route.ts   # Contact form handler
│   └── globals.css         # Theme & animations
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer
│   ├── Hero.tsx            # Homepage hero
│   ├── BluesQuote.tsx      # B.B. King quote section
│   ├── UpcomingShows.tsx  # Shows preview
│   ├── BandHighlight.tsx  # Band member cards
│   └── MerchPreview.tsx   # Merch store preview
```

## 🎤 Content

All show dates, band member bios, and venue information sourced from the original [case44rocks.com](https://case44rocks.com/). Update data in the component files or migrate to a CMS (Sanity, Contentful) for easier management.

## 📝 License

Private — Case 44 band website.