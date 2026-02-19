import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { StudioShell } from '@/components/studio-shell/StudioShell';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Studio Dialect — Expert Digital Production',
    template: '%s — Studio Dialect',
  },
  description:
    'Award-winning motion, design and interactive experiences that connect culture, technology and contemporary aesthetics.',
  keywords: [
    'motion design',
    'digital production',
    'interactive experiences',
    'creative studio',
    'design',
  ],
  authors: [{ name: 'Studio Dialect' }],
  creator: 'Studio Dialect',
  metadataBase: new URL('https://studiodialect.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://studiodialect.com/',
    siteName: 'Studio Dialect',
    title: 'Studio Dialect — Expert Digital Production',
    description:
      'Award-winning motion, design and interactive experiences that connect culture, technology and contemporary aesthetics.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Dialect — Expert Digital Production',
    description:
      'Award-winning motion, design and interactive experiences that connect culture, technology and contemporary aesthetics.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Studio Dialect',
              url: 'https://studiodialect.com',
              description:
                'Award-winning motion, design and interactive experiences that connect culture, technology and contemporary aesthetics.',
              email: 'hello@studiodialect.com',
            }),
          }}
        />
      </head>
      <body className="bg-background text-text-primary font-sans antialiased">
        <div className="grain-overlay" aria-hidden />
        <StudioShell>{children}</StudioShell>
      </body>
    </html>
  );
}
