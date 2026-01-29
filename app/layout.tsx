import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
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
    <html lang="en" className={jetbrainsMono.variable}>
      <head>
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
      <body className="bg-white text-gray-900 font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
