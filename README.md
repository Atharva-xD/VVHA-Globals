# VVHA Global - Enterprise Portfolio Website

A hyper-modern, editorial enterprise portfolio website built with Next.js (App Router) and Tailwind CSS.

## Design Philosophy

This website breaks away from traditional layouts, featuring:
- **Split-screen grids** instead of generic hero sections
- **Typography-driven UI** with oversized headings and confident spacing
- **Motion as design language** with scroll-based reveals and subtle parallax
- **Enterprise-grade minimalism** with intentional breathing space
- **Unconventional section structure** with progressive content reveals

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (no custom CSS files)
- **Framer Motion** for animations

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles with Tailwind
├── components/
│   ├── ServiceCard.tsx # Interactive service cards
│   ├── ScrollReveal.tsx # Scroll-based animation wrapper
│   └── KineticText.tsx # Kinetic text component
└── package.json
```

## Features

- **Split-screen opening section** with large typography
- **Asymmetric services grid** with interactive cards
- **Scroll-based reveals** for progressive content disclosure
- **Motion design** with hover states and transitions
- **Fully responsive** mobile-first design
- **No traditional patterns** - editorial, spatial layout

## Build

```bash
npm run build
npm start
```
