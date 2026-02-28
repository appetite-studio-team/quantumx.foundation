import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme/ThemeContext';
import { StudioShell } from '@/components/studio-shell/StudioShell';

const GA_MEASUREMENT_ID = 'G-XE37HL7ZMR';

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
    default: 'QuantumX Foundation - Building the Foundations of the Post-Quantum Era',
    template: '%s - QuantumX Foundation',
  },
  description:
    'We are a deep-tech initiative building an open, accessible, and reliable quantum future. Building the foundations of the post-quantum era.',
  keywords: [
    'quantum computing',
    'post-quantum cryptography',
    'quantum technology',
    'quantum-safe algorithms',
    'quantum research',
    'open source quantum',
  ],
  authors: [{ name: 'QuantumX Foundation' }],
  creator: 'QuantumX Foundation',
  metadataBase: new URL('https://quantumx.foundation'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quantumx.foundation/',
    siteName: 'QuantumX Foundation',
    title: 'QuantumX Foundation - Building the Foundations of the Post-Quantum Era',
    description:
      'We are a deep-tech initiative building an open, accessible, and reliable quantum future.',
    images: [
      {
        url: '/images/App-Icon-Black.png',
        width: 512,
        height: 512,
        alt: 'QuantumX Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@_Quantum_X_',
    title: 'QuantumX Foundation - Building the Foundations of the Post-Quantum Era',
    description:
      'We are a deep-tech initiative building an open, accessible, and reliable quantum future.',
    images: ['/images/App-Icon-Black.png'],
  },
  icons: {
    icon: '/images/App-Icon-Black.png',
    apple: '/images/App-Icon-Black.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('quantumx-theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'QuantumX Foundation',
              url: 'https://quantumx.foundation',
              logo: 'https://quantumx.foundation/images/App-Icon-Black.png',
              description:
                'We are a deep-tech initiative building an open, accessible, and reliable quantum future. Building the foundations of the post-quantum era.',
              email: 'hi@quantumx.foundation',
              sameAs: [
                'https://x.com/_Quantum_X_',
                'https://www.linkedin.com/company/quantumx-foundation/',
              ],
            }),
          }}
        />
      </head>
      <body className="bg-background text-text-primary font-sans antialiased">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <div className="grain-overlay" aria-hidden />
        <ThemeProvider>
          <StudioShell>{children}</StudioShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
