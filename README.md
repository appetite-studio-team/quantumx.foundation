# QuantumX Foundation Website

A clean, modern website for QuantumX Foundation built with **Next.js 14** and **Tailwind CSS**.

## Features

- **Next.js 14**: App Router with server components and optimized performance
- **Tailwind CSS**: Utility-first CSS with custom configuration
- **TypeScript**: Full type safety throughout the codebase
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, minimalist design inspired by contemporary tech websites
- **SEO Optimized**: Full metadata, Open Graph, and Twitter Card support
- **Custom Fonts**: Playfair Display (serif) and Inter (sans-serif) via next/font
- **Static Export**: Ready for deployment to Netlify, Vercel, or any static hosting

## Project Structure

```
quantumx.foundation/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles and Tailwind imports
│   └── careers/
│       └── page.tsx        # Careers page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with newsletter form
│   ├── Toast.tsx           # Toast notification component
│   ├── NewsletterForm.tsx  # Newsletter subscription form
│   └── icons/              # SVG icon components
│       ├── XIcon.tsx
│       ├── LinkedInIcon.tsx
│       ├── MenuIcon.tsx
│       └── CheckCircleIcon.tsx
├── public/
│   └── images/             # Static image assets
│       ├── App-Icon-Black.png
│       ├── cursor-image.png
│       └── qx-logo with name.png
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
