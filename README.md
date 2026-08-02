# Haske Lafiya — Digital Health Infrastructure

A recreation of the Haske Lafiya marketing site, built with Next.js 14 (App
Router), TypeScript, and Tailwind CSS. Every section of the page is its own
component under `components/`.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx        Root layout + global metadata
  page.tsx           Assembles all sections
  globals.css        Tailwind base styles
components/
  Navbar.tsx          Site header + mobile menu
  Hero.tsx            Hero section with headline + dashboard mockup
  LogoCloud.tsx        "Trusted by" partner strip
  Features.tsx        Feature grid (EHR, telemedicine, analytics, etc.)
  Stats.tsx            Key metrics band
  DashboardPreview.tsx Analytics dashboard preview
  Testimonials.tsx     Customer quotes
  Pricing.tsx           Pricing tiers
  CTA.tsx               Closing call-to-action banner
  Footer.tsx            Footer links + social
```

## Build for production

```bash
npm run build
npm start
```
