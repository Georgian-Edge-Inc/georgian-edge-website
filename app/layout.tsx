import './globals.css';
import type { Metadata } from 'next';

const siteUrl = 'https://georgianedgeinc.ca';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Georgian Edge Inc. | Georgian Bay Property Care & Landscaping',
    template: '%s | Georgian Edge Inc.',
  },
  description:
    'Georgian Edge Inc. provides premium property care, garden cleanups, landscape refreshes, planting, pruning, cottage support, property management, and aerial property photography around Georgian Bay.',
  keywords: [
    'Georgian Edge Inc',
    'Georgian Bay landscaping',
    'Collingwood landscaping',
    'Blue Mountain property care',
    'garden cleanups',
    'mulch installation',
    'landscape refreshes',
    'cottage property management',
    'aerial property photography',
  ],
  applicationName: 'Georgian Edge Inc.',
  authors: [{ name: 'Georgian Edge Inc.' }],
  category: 'home services',
  classification: 'Property care, landscaping, garden cleanup, cottage property management, and aerial property photography',
  creator: 'Georgian Edge Inc.',
  publisher: 'Georgian Edge Inc.',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-CA': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: siteUrl,
    siteName: 'Georgian Edge Inc.',
    title: 'Georgian Edge Inc. | Georgian Bay Property Care & Landscaping',
    description:
      'Premium property care, garden cleanups, landscape refreshes, planting, pruning, cottage support, property management, and aerial property photography around Georgian Bay.',
    images: [
      {
        url: '/brand/georgian-edge-primary-black.png',
        width: 1200,
        height: 630,
        alt: 'Georgian Edge Inc. logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Georgian Edge Inc. | Georgian Bay Property Care & Landscaping',
    description:
      'Premium property care, garden cleanups, landscape refreshes, planting, pruning, cottage support, property management, and aerial property photography around Georgian Bay.',
    images: ['/brand/georgian-edge-primary-black.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/meta-app-icon.png',
    apple: '/meta-app-icon-512.png',
  },
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    title: 'Georgian Edge Inc.',
    statusBarStyle: 'black-translucent',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en-CA"><body>{children}</body></html>;
}
