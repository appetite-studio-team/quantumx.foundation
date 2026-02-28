# QuantumX Foundation Website

A clean, modern website for QuantumX Foundation built with **Next.js 14** and **Tailwind CSS**.

## Features

- **Next.js 14**: App Router with server components and optimized performance
- **Tailwind CSS**: Utility-first CSS with custom configuration
- **TypeScript**: Full type safety throughout the codebase
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, minimalist design inspired by contemporary tech websites
- **SEO Optimized**: Full metadata, Open Graph, and Twitter Card support
- **Custom Fonts**: Space Grotesk (heading) and Inter (body) via next/font
- **Framer Motion**: Section animations and transitions
- **Lenis**: Smooth scrolling

## Project Structure

```
quantumx.foundation/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page (6 sections)
│   ├── globals.css         # Global styles and Tailwind imports
│   ├── sitemap.ts
│   ├── robots.ts
│   └── careers/
│       └── page.tsx        # Careers page
├── components/
│   ├── site-header/        # App bar with logo and [MENU]
│   ├── menu/               # Full-screen dropdown menu
│   ├── sections/            # Hero, Quantum Speedup, Technology, Capabilities, Founder, Contact
│   ├── studio-shell/       # Shell: header, smooth scroll, cursor, mouse tracking
│   ├── cursor/             # Custom cursor
│   ├── smooth-scroll/      # Lenis wrapper
│   ├── transitions/        # Page transition
│   └── icons/              # XIcon, LinkedInIcon, MenuIcon, CheckCircleIcon
├── content/
│   ├── site.ts             # Site-wide: menu, footer, links
│   ├── home.ts             # Home page copy and image paths
│   └── careers.ts          # Careers page copy
├── public/images/          # App-Icon-Black.png, quantum-computer.png, ajmal-founder.jpg, etc.
├── lib/                    # motion-variants
├── hooks/                  # useLenis, useMousePosition, useReducedMotion
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create production build
npm run build

# Start production server (for SSR)
npm start
```

### Static Export

The project is configured for static export. After building, the static files are generated in the `out/` directory:

```bash
npm run build
```

Deploy the `out/` folder to any static hosting provider (Netlify, Vercel, GitHub Pages, etc.).

## Deployment

### Netlify

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `out`
4. Deploy!

### Vercel

1. Import your repository on Vercel
2. Vercel will auto-detect Next.js settings
3. Deploy!

## Customization

- **Colors**: Modify Tailwind classes or extend `tailwind.config.ts`
- **Fonts**: Update font configuration in `app/layout.tsx`
- **Content**: Edit page components in `app/` directory
- **Styles**: Modify `app/globals.css` for global styles

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge).

## License

Copyright © QuantumX Foundation. All rights reserved.
