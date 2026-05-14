import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import SiteNav from '../components/SiteNav';
import PageHeroVideo from '../components/PageHeroVideo';

export const metadata: Metadata = {
  title: 'Service Areas | Georgian Bay Property Care & Landscaping',
  description:
    'Georgian Edge Inc. serves Georgian Bay properties in Collingwood, The Blue Mountains, Thornbury, Meaford, Clearview, and surrounding cottage and country home areas.',
  alternates: { canonical: '/service-areas' },
  openGraph: {
    title: 'Service Areas | Georgian Edge Inc.',
    url: '/service-areas',
    description:
      'Premium property care, garden cleanups, landscape refreshes, property management, and cottage support around Georgian Bay, Collingwood, The Blue Mountains, Thornbury, Meaford, and Clearview.',
    images: [
      {
        url: '/photos/stephen-uploaded/georgian-edge-owned-20.jpg',
        width: 959,
        height: 1280,
        alt: 'Cared-for Georgian Bay property served by Georgian Edge Inc.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Areas | Georgian Edge Inc.',
    description:
      'Georgian Bay property care, landscape refreshes, cottage support, and garden cleanups in Collingwood, The Blue Mountains, Thornbury, Meaford, Clearview, and nearby areas.',
    images: ['/photos/stephen-uploaded/georgian-edge-owned-20.jpg'],
  },
};

const areas = [
  {
    name: 'Collingwood',
    text: 'Garden cleanups, landscape refreshes, planting, pruning, property check-ins, and outdoor care for homes, cottages, and country properties around Collingwood.',
    terms: ['Collingwood garden cleanups', 'Collingwood landscaping support', 'Collingwood property care'],
  },
  {
    name: 'The Blue Mountains',
    text: 'Cottage and country-home support, seasonal openings, garden maintenance, planting refreshes, and property oversight around Blue Mountain and surrounding rural properties.',
    terms: ['Blue Mountain cottage support', 'The Blue Mountains property management', 'Blue Mountain garden care'],
  },
  {
    name: 'Thornbury',
    text: 'Detailed outdoor property care, garden bed resets, pruning, planting, mulch, and seasonal support for Thornbury-area properties.',
    terms: ['Thornbury garden cleanups', 'Thornbury property care', 'Thornbury landscape refreshes'],
  },
  {
    name: 'Meaford',
    text: 'Landscape refreshes, garden cleanups, property inspections, and practical outdoor support for Meaford homes, cottages, and larger properties.',
    terms: ['Meaford landscaping', 'Meaford garden maintenance', 'Meaford property support'],
  },
  {
    name: 'Clearview',
    text: 'Clean, reliable garden and property care for Clearview-area country homes, rural properties, and seasonal outdoor spaces.',
    terms: ['Clearview property maintenance', 'Clearview garden cleanup', 'Clearview landscape care'],
  },
  {
    name: 'Georgian Bay properties',
    text: 'Owner support, property inspections, seasonal care, aerial property photography, planting, pruning, and landscape refreshes for Georgian Bay homes and cottages.',
    terms: ['Georgian Bay property care', 'Georgian Bay cottage maintenance', 'Georgian Bay landscape refreshes'],
  },
];

const serviceAreaSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://georgianedgeinc.ca/service-areas#webpage',
      url: 'https://georgianedgeinc.ca/service-areas',
      name: 'Georgian Edge Inc. service areas',
      description:
        'Service areas for Georgian Edge Inc. property care, landscaping, garden cleanups, cottage support, and property management around Georgian Bay, Ontario.',
      inLanguage: 'en-CA',
      isPartOf: { '@id': 'https://georgianedgeinc.ca/#website' },
      about: { '@id': 'https://georgianedgeinc.ca/#business' },
    },
    {
      '@type': 'ItemList',
      '@id': 'https://georgianedgeinc.ca/service-areas#areas',
      name: 'Georgian Edge Inc. service areas',
      itemListElement: areas.map((area, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: area.name,
        item: {
          '@type': 'Place',
          name: area.name,
          description: area.text,
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://georgianedgeinc.ca/service-areas#breadcrumbs',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://georgianedgeinc.ca/' },
        { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://georgianedgeinc.ca/service-areas' },
      ],
    },
  ],
};

export default function ServiceAreasPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreaSchema) }}
      />
      <section className="pageHero pageHeroWithVideo serviceAreasHero">
        <PageHeroVideo
          name="Georgian Edge service area property care background"
          poster="/videos/georgian-edge-services-loop-poster.jpg"
          webm="/videos/georgian-edge-services-loop.webm"
          mp4="/videos/georgian-edge-services-loop.mp4"
        />
        <SiteNav />
        <div className="wrap pageHeroInner">
          <p className="eyebrow">Service areas</p>
          <h1 className="serif">Georgian Bay property care for homes, cottages, and country properties.</h1>
          <p className="lead">Georgian Edge serves Collingwood, The Blue Mountains, Thornbury, Meaford, Clearview, and surrounding Georgian Bay properties with polished outdoor care and seasonal support.</p>
        </div>
      </section>

      <section className="galleryIntro wrap">
        <div>
          <p className="eyebrow">Local search focus</p>
          <h2 className="serif">Property care that matches the way Georgian Bay properties are actually used.</h2>
        </div>
        <p>
          Some properties need a seasonal reset. Some need planting, pruning, mulch, pond-edge repair, or a larger landscape refresh. Others need a trusted set of eyes while owners are away. Georgian Edge keeps the work practical, detailed, and suited to the property.
        </p>
      </section>

      <section className="serviceAreaGrid wrap" aria-label="Georgian Edge service areas">
        {areas.map((area) => (
          <article className="serviceAreaCard" key={area.name}>
            <MapPin size={24} aria-hidden="true" />
            <h2>{area.name}</h2>
            <p>{area.text}</p>
            <ul>
              {area.terms.map((term) => <li key={term}><CheckCircle2 size={16} />{term}</li>)}
            </ul>
          </article>
        ))}
      </section>

      <section className="splitFeature wrap">
        <Image src="/photos/stephen-uploaded/georgian-edge-owned-04.jpg" alt="Clean garden bed edge and maintained property detail by Georgian Edge" width={740} height={860} />
        <div>
          <p className="eyebrow">Start with the property</p>
          <h2 className="serif">Not every property needs the same package.</h2>
          <p>Request work with the property location, the kind of support needed, and any photos that help explain the priority. Georgian Edge can shape the next step around cleanups, planting, pruning, property check-ins, seasonal support, or a broader landscape refresh.</p>
          <Link className="btn primary" href="/request-work">Request work <ArrowRight size={18} /></Link>
        </div>
      </section>
    </main>
  );
}
