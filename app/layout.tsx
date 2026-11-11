import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const siteUrl = 'https://georgianedgeinc.ca';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Georgian Edge Inc. | Georgian Bay Property Care & Landscaping',
    template: '%s | Georgian Edge Inc.',
  },
  description:
    'Property care, garden cleanups, landscape refreshes, planting, pruning, property management & aerial photography in Meaford, Collingwood & Georgian Bay.',
  keywords: [
    'Georgian Edge Inc',
    'Georgian Bay landscaping',
    'landscaper Meaford Ontario',
    'landscaping Meaford',
    'Collingwood landscaping',
    'lawn care Meaford',
    'Blue Mountain property care',
    'garden cleanups',
    'fall cleanup Collingwood',
    'mulch installation',
    'landscape refreshes',
    'cottage property management',
    'property management Meaford',
    'winter property check-ins Georgian Bay',
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
      'Property care, garden cleanups, landscape refreshes, planting, pruning, property management & aerial photography in Meaford, Collingwood & Georgian Bay.',
    images: [
      {
        url: '/photos/stephen-uploaded/georgian-edge-owned-20.jpg',
        width: 1280,
        height: 959,
        alt: 'Landscaped Georgian Bay property with gardens and lawn cared for by Georgian Edge Inc.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Georgian Edge Inc. | Georgian Bay Property Care & Landscaping',
    description:
      'Property care, garden cleanups, landscape refreshes, planting, pruning, property management & aerial photography in Meaford, Collingwood & Georgian Bay.',
    images: ['/photos/stephen-uploaded/georgian-edge-owned-20.jpg'],
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

const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LandscapingBusiness', 'HomeAndConstructionBusiness'],
      '@id': 'https://georgianedgeinc.ca/#business',
      name: 'Georgian Edge Inc.',
      legalName: 'Georgian Edge Inc.',
      alternateName: 'Georgian Edge',
      foundingDate: '2021',
      url: 'https://georgianedgeinc.ca/',
      image: 'https://georgianedgeinc.ca/brand/georgian-edge-primary-black.png',
      logo: 'https://georgianedgeinc.ca/brand/georgian-edge-primary-black.png',
      email: 'georgianedgeinc@gmail.com',
      telephone: '+1-705-441-1215',
      description:
        'Property care, garden cleanups, landscape builds and refreshes, planting, pruning, lawn care, property management, winter property check-ins, and aerial property photography around Georgian Bay, Ontario.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Meaford',
        addressRegion: 'ON',
        addressCountry: 'CA',
      },
      areaServed: [
        { '@type': 'City', name: 'Meaford' },
        { '@type': 'City', name: 'Thornbury' },
        { '@type': 'City', name: 'The Blue Mountains' },
        { '@type': 'City', name: 'Collingwood' },
        { '@type': 'AdministrativeArea', name: 'Clearview' },
        { '@type': 'AdministrativeArea', name: 'Georgian Bay, Ontario' },
      ],
      sameAs: [
        'https://www.facebook.com/GeorgianEdgeLandscaping/',
        'https://www.instagram.com/georgianedgeinc/',
        'https://g.page/r/CUB04VSzUFVdEAE',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service and work requests',
        email: 'georgianedgeinc@gmail.com',
        telephone: '+1-705-441-1215',
        areaServed: 'CA-ON',
        availableLanguage: ['en-CA'],
        url: 'https://georgianedgeinc.ca/request-work',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Georgian Bay property care services',
        itemListElement: [
          'Garden cleanups',
          'Fall cleanups',
          'Landscape builds & refreshes',
          'Planting & pruning',
          'Lawn care',
          'Property management',
          'Seasonal opening & closing',
          'Winter property check-ins',
          'Aerial property photography',
        ].map((serviceName) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: serviceName,
            areaServed: 'Georgian Bay, Ontario',
            provider: { '@id': 'https://georgianedgeinc.ca/#business' },
          },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://georgianedgeinc.ca/#website',
      url: 'https://georgianedgeinc.ca/',
      name: 'Georgian Edge Inc.',
      inLanguage: 'en-CA',
      publisher: { '@id': 'https://georgianedgeinc.ca/#business' },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <div className="announceBar">
          <div className="wrap announceBarInner">
            <p className="announceBarText">Fall cleanups are wrapping up — winter property check-ins are now open for empty homes &amp; cottages</p>
            <div className="announceBarActions">
              <a className="announceBarBtn" href="/request-work">Book a winter check-in</a>
              <a className="announceBarCall" href="tel:7054411215">Call 705-441-1215</a>
            </div>
          </div>
        </div>
        {children}
        <div className="mobileContactBar">
          <a className="mobileCall" href="tel:+17054411215">Call 705-441-1215</a>
          <a className="mobileRequest" href="/request-work">Request work</a>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
