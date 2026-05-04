import Image from 'next/image';
import type { Metadata } from 'next';
import { Camera, CheckCircle2, Leaf, MapPin, Sprout, Trees } from 'lucide-react';
import SiteNav from '../components/SiteNav';
import PageHeroVideo from '../components/PageHeroVideo';

export const metadata: Metadata = {
  title: 'Services | Property Care, Landscape Refreshes & Cottage Support',
  description:
    'Explore Georgian Edge Inc. services around Georgian Bay: garden cleanups, mulch installation, landscape builds and refreshes, planting, pruning, property management, cottage support, and aerial property photography.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services | Georgian Edge Inc.',
    url: '/services',
    description:
      'Garden cleanups, landscape refreshes, planting, pruning, property management, cottage support, and aerial property photography around Georgian Bay.',
    images: [
      {
        url: '/photos/stephen-uploaded/georgian-edge-owned-02.jpg',
        width: 959,
        height: 1280,
        alt: 'Georgian Edge landscape and property care project detail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Georgian Edge Inc.',
    description:
      'Garden cleanups, landscape refreshes, planting, pruning, property management, cottage support, and aerial property photography around Georgian Bay.',
    images: ['/photos/stephen-uploaded/georgian-edge-owned-02.jpg'],
  },
};

const services = [
  {
    icon: Leaf,
    title: 'Garden cleanups',
    text: 'Seasonal resets for beds, edges, weeds, debris, old growth, soil prep, and the detail work that makes a property feel cared for again.',
    bullets: ['Spring and fall garden resets', 'Bed cleanup and edging', 'Debris removal and prep for mulch or planting'],
  },
  {
    icon: Trees,
    title: 'Landscape builds & refreshes',
    text: 'Design-forward garden beds, planting areas, stone accents, edging, soil, mulch, refreshes, and finishing details that create a complete outdoor space.',
    bullets: ['New garden bed builds', 'Planting layouts and refreshes', 'Pond-edge and muskrat-damage repairs'],
  },
  {
    icon: Sprout,
    title: 'Planting & pruning',
    text: 'Thoughtful planting, pruning, and ongoing garden maintenance that fits the property instead of fighting it.',
    bullets: ['Planting refreshes', 'Shrub and perennial pruning', 'Garden maintenance visits'],
  },
  {
    icon: MapPin,
    title: 'Property management',
    text: 'Reliable cottage and country property support for owners who need inspections, seasonal opening/closing help, outdoor care coordination, and details handled without chasing everything themselves.',
    bullets: ['Property inspections and check-ins', 'Seasonal opening and closing support', 'Outdoor care coordination'],
  },
  {
    icon: Camera,
    title: 'Aerial property photography',
    text: 'Aerial property photography for progress, listings, seasonal records, transformations, and larger property planning.',
    bullets: ['Aerial before/after documentation', 'Property overview images', 'Progress and planning documentation'],
  },
];

const serviceAreas = [
  { '@type': 'AdministrativeArea', name: 'Georgian Bay, Ontario' },
  { '@type': 'City', name: 'Collingwood' },
  { '@type': 'City', name: 'The Blue Mountains' },
  { '@type': 'City', name: 'Thornbury' },
  { '@type': 'City', name: 'Meaford' },
  { '@type': 'AdministrativeArea', name: 'Clearview' },
];

const servicesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://georgianedgeinc.ca/services#webpage',
      url: 'https://georgianedgeinc.ca/services',
      name: 'Georgian Edge Inc. services',
      description:
        'Outdoor property care, garden cleanups, landscape refreshes, planting, pruning, cottage support, property management, and aerial property photography around Georgian Bay, Ontario.',
      inLanguage: 'en-CA',
      isPartOf: { '@id': 'https://georgianedgeinc.ca/#website' },
      about: { '@id': 'https://georgianedgeinc.ca/#business' },
    },
    {
      '@type': 'ItemList',
      '@id': 'https://georgianedgeinc.ca/services#service-list',
      name: 'Georgian Bay property care services',
      itemListElement: services.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: service.title,
        item: {
          '@type': 'Service',
          name: service.title,
          description: service.text,
          provider: { '@id': 'https://georgianedgeinc.ca/#business' },
          areaServed: serviceAreas,
          serviceType: service.title,
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://georgianedgeinc.ca/services#breadcrumbs',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://georgianedgeinc.ca/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://georgianedgeinc.ca/services' },
      ],
    },
  ],
};

export default function ServicesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <section className="pageHero pageHeroWithVideo servicesHero">
        <PageHeroVideo
          name="Georgian Edge landscape maintenance background video"
          poster="/videos/georgian-edge-services-loop-poster.jpg"
          webm="/videos/georgian-edge-services-loop.webm"
          mp4="/videos/georgian-edge-services-loop.mp4"
        />
        <SiteNav />
        <div className="wrap pageHeroInner">
          <p className="eyebrow">Services</p>
          <h1 className="serif">Outdoor property care and management with a sharper Georgian Bay feel.</h1>
          <p className="lead">Georgian Edge focuses on garden cleanups, landscape builds and refreshes, planting, pruning, property inspections, aerial property photography, and property management — not basic lawn mowing.</p>
        </div>
      </section>

      <section className="serviceDetailGrid wrap">
        {services.map(({ icon: Icon, title, text, bullets }) => (
          <article className="serviceDetail" key={title}>
            <Icon size={30} />
            <h2>{title}</h2>
            <p>{text}</p>
            <ul>
              {bullets.map((bullet) => <li key={bullet}><CheckCircle2 size={17} />{bullet}</li>)}
            </ul>
          </article>
        ))}
      </section>

      <section className="splitFeature wrap">
        <div>
          <p className="eyebrow">How it works</p>
          <h2 className="serif">Walk the property, choose the priorities, keep the place looked after.</h2>
          <p>Most jobs start with a simple property conversation: what needs attention now, what should be watched, what seasonal support is needed, and what would make the biggest visual difference. That can include quieter problem areas too, like pond-edge washouts or muskrat damage. From there Georgian Edge shapes a practical scope instead of forcing a generic package.</p>
          <a className="btn primary" href="/request-work">Request work</a>
        </div>
        <Image src="/photos/stephen-uploaded/georgian-edge-owned-01.jpg" alt="Freshly built garden bed with clean edges and landscape finishing" width={740} height={860} />
      </section>
    </main>
  );
}
