import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Camera, Leaf, MapPin, Sprout, Star, Trees } from 'lucide-react';
import SiteNav from './components/SiteNav';

export const metadata: Metadata = {
  title: 'Georgian Edge Inc. | Georgian Bay Property Care & Landscaping',
  description:
    'Premium Georgian Bay property care, garden cleanups, landscape refreshes, planting, pruning, cottage support, property management, and aerial property photography.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Georgian Edge Inc. | Georgian Bay Property Care & Landscaping',
    url: '/',
    description:
      'Premium property care, garden cleanups, landscape refreshes, planting, pruning, cottage support, property management, and aerial photography around Georgian Bay.',
    images: [
      {
        url: '/photos/stephen-uploaded/georgian-edge-owned-03.jpg',
        width: 959,
        height: 1280,
        alt: 'Large Georgian Bay property with landscaped gardens and open lawn',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Georgian Edge Inc. | Georgian Bay Property Care & Landscaping',
    description:
      'Premium Georgian Bay property care, landscape refreshes, garden cleanups, cottage support, and aerial property photography.',
    images: ['/photos/stephen-uploaded/georgian-edge-owned-03.jpg'],
  },
};

const services = [
  {
    icon: Leaf,
    title: 'Garden cleanups',
    text: 'Seasonal resets, bed cleanup, edging, soil prep, and detail work that makes the whole property feel cared for.',
  },
  {
    icon: Trees,
    title: 'Landscape builds & refreshes',
    text: 'Design-forward garden beds, planting areas, stone accents, edging, soil, mulch, refreshes, and finishing details that create a complete outdoor space.',
  },
  {
    icon: Sprout,
    title: 'Planting & pruning',
    text: 'Thoughtful planting, pruning, and ongoing garden maintenance that fits the property instead of fighting it.',
  },
  {
    icon: MapPin,
    title: 'Property management',
    text: 'Reliable cottage and country property support: inspections, seasonal opening/closing help, outdoor care coordination, and details handled without chasing everything yourself.',
  },
  {
    icon: Camera,
    title: 'Aerial property photography',
    text: 'Aerial property photography for progress, listings, seasonal records, transformations, and larger property planning.',
  },
];

const phoneDisplay = '705-441-1215';
const phoneHref = 'tel:+17054411215';
const facebookUrl = 'https://www.facebook.com/GeorgianEdgeLandscaping/';
const facebookReviewsUrl = 'https://www.facebook.com/GeorgianEdgeLandscaping/reviews';
const googleReviewUrl = 'https://g.page/r/CUB04VSzUFVdEAE/review';
const instagramUrl = 'https://www.instagram.com/georgianedgeinc/';

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
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
      sameAs: [facebookUrl, instagramUrl],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service and work requests',
        email: 'georgianedgeinc@gmail.com',
        telephone: '+1-705-441-1215',
        areaServed: 'CA-ON',
        availableLanguage: ['en-CA'],
        url: 'https://georgianedgeinc.ca/request-work',
      },
      description:
        'Premium property care, garden cleanups, landscape refreshes, planting, pruning, property management, cottage support, and aerial property photography around Georgian Bay, Ontario.',
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Georgian Bay, Ontario' },
        { '@type': 'City', name: 'Collingwood' },
        { '@type': 'City', name: 'The Blue Mountains' },
        { '@type': 'City', name: 'Thornbury' },
        { '@type': 'City', name: 'Meaford' },
        { '@type': 'AdministrativeArea', name: 'Clearview' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Georgian Bay property care services',
        itemListElement: services.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.title,
            areaServed: 'Georgian Bay, Ontario',
            provider: { '@id': 'https://georgianedgeinc.ca/#business' },
          },
        })),
      },
      potentialAction: [
        {
          '@type': 'CommunicateAction',
          name: 'Request Georgian Edge property work',
          target: 'https://georgianedgeinc.ca/request-work',
        },
        {
          '@type': 'ReviewAction',
          name: 'Leave a Google review for Georgian Edge Inc.',
          target: googleReviewUrl,
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://georgianedgeinc.ca/#website',
      url: 'https://georgianedgeinc.ca/',
      name: 'Georgian Edge Inc.',
      inLanguage: 'en-CA',
      publisher: { '@id': 'https://georgianedgeinc.ca/#business' },
      potentialAction: {
        '@type': 'CommunicateAction',
        name: 'Request work',
        target: 'https://georgianedgeinc.ca/request-work',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://georgianedgeinc.ca/#homepage',
      url: 'https://georgianedgeinc.ca/',
      name: 'Georgian Edge Inc. homepage',
      description:
        'Homepage for Georgian Edge Inc., a Georgian Bay property care, landscaping, cottage support, and aerial property photography business.',
      inLanguage: 'en-CA',
      isPartOf: { '@id': 'https://georgianedgeinc.ca/#website' },
      about: { '@id': 'https://georgianedgeinc.ca/#business' },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://georgianedgeinc.ca/photos/stephen-uploaded/georgian-edge-owned-03.jpg',
      },
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <section className="hero heroWithVideo">
        <div className="heroVideo" aria-hidden="true">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/videos/georgian-edge-hero-drone-poster.jpg"
          >
            <source src="/videos/georgian-edge-hero-drone-loop.webm" type="video/webm" />
            <source src="/videos/georgian-edge-hero-drone-loop.mp4" type="video/mp4" />
          </video>
        </div>
        <SiteNav />
        <div className="heroInner wrap">
          <div className="heroCopy">
            <p className="eyebrow">Georgian Edge Inc.</p>
            <h1 className="serif">Premium property care and management for Georgian Bay homes and cottages.</h1>
            <p className="lead">
              Garden cleanups, design-forward landscape builds and refreshes, planting, pruning, property management,
              aerial property photography, and owner support with a clean, established Georgian Bay feel.
            </p>
            <div className="actions">
              <Link className="btn light" href="/request-work">
                Request work <ArrowRight size={18} />
              </Link>
              <a className="textLink" href={phoneHref}>{phoneDisplay}</a>
              <a className="textLink" href="#work">See recent work</a>
            </div>
          </div>
          <div className="heroCard">
            <Image
              src="/photos/stephen-uploaded/georgian-edge-owned-03.jpg"
              alt="Large Georgian Bay property with landscaped gardens and open lawn"
              fill
              priority
              sizes="(max-width: 860px) 100vw, 48vw"
            />
          </div>
        </div>
      </section>

      <section className="intro wrap">
        <div>
          <p className="eyebrow">Properties, handled properly</p>
          <h2 className="serif">Not just outdoor work — a sharper, calmer property.</h2>
        </div>
        <p>
          Georgian Edge helps bring structure back to gardens, paths, beds, seasonal outdoor spaces, and the property
          itself. The focus is practical, polished care for owners who want reliable inspections, coordination, and eyes
          on the place when needed.
        </p>
      </section>

      <section id="services" className="services wrap" aria-label="Georgian Edge services">
        {services.map(({ icon: Icon, title, text }) => (
          <article className="service" key={title}>
            <Icon size={25} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>
      <div className="wrap centerLink">
        <Link className="btn primary" href="/services">View all services</Link>
      </div>

      <section id="about" className="homeAbout wrap">
        <div>
          <p className="eyebrow">About us</p>
          <h2 className="serif">A local property care team focused on cleaner, calmer homes, cottages, and outdoor spaces.</h2>
        </div>
        <div>
          <p>
            Georgian Edge Inc. works with country homes, cottages, and Georgian Bay properties that need detailed outdoor
            care and management: garden cleanups, landscape builds and refreshes, planting, pruning, property inspections,
            seasonal support, and owner peace of mind.
          </p>
          <Link className="btn primary" href="/about">Learn more about Georgian Edge</Link>
        </div>
      </section>

      <section id="reviews" className="reviews wrap" aria-label="Georgian Edge reviews and recommendations">
        <div className="reviewIntro">
          <p className="eyebrow">Reviews & recommendations</p>
          <h2 className="serif">Local trust matters when someone is caring for your property.</h2>
          <p>
            Georgian Edge is now approved on Google. If we have helped with your garden, landscape, cottage, or property
            care, a quick review helps other Georgian Bay property owners find us with confidence.
          </p>
        </div>
        <div className="reviewCards">
          <a className="reviewCard" href={googleReviewUrl} target="_blank" rel="noopener noreferrer">
            <span className="reviewIcon" aria-hidden="true"><Star size={22} /></span>
            <strong>Leave a Google review</strong>
            <span>Share your experience on Georgian Edge’s Google Business Profile.</span>
          </a>
          <a className="reviewCard" href={facebookReviewsUrl} target="_blank" rel="noopener noreferrer">
            <span className="reviewIcon" aria-hidden="true"><Sprout size={22} /></span>
            <strong>View Facebook recommendations</strong>
            <span>See or leave recommendations through the Georgian Edge Facebook page.</span>
          </a>
        </div>
      </section>

      <section id="work" className="work">
        <div className="wrap workHead">
          <p className="eyebrow">Recent refresh</p>
          <h2 className="serif">A broader look at gardens, beds, stonework, planting, and cared-for Georgian Bay properties.</h2>
        </div>
        <div className="gallery wrap" aria-label="Selected Georgian Edge project photos">
          <Image src="/photos/stephen-uploaded/georgian-edge-owned-02.jpg" alt="Natural stone patio and garden edging completed by Georgian Edge" width={600} height={760} />
          <Image src="/photos/stephen-uploaded/georgian-edge-owned-10.jpg" alt="Gravel garden refresh with decorative stone features" width={600} height={760} />
          <Image src="/photos/stephen-uploaded/georgian-edge-owned-04.jpg" alt="Clean curved garden bed edge around mature trees" width={600} height={760} />
          <Image src="/photos/stephen-uploaded/georgian-edge-owned-07.jpg" alt="Foundation garden bed with shrubs and dark mulch" width={600} height={760} />
          <Image src="/photos/stephen-uploaded/georgian-edge-owned-08.jpg" alt="Fresh lawn edge and walkway after property maintenance" width={600} height={760} />
          <Image src="/photos/stephen-uploaded/georgian-edge-owned-09.jpg" alt="Decorative stone feature in a gravel garden" width={600} height={760} />
        </div>
      </section>

      <section id="contact" className="cta wrap">
        <Image src="/brand/georgian-edge-brandmark-black.png" alt="" width={86} height={86} />
        <h2 className="serif">Ready to clean up, refresh, inspect, or manage your property?</h2>
        <p>Tell us what your property needs and we’ll help shape the next step.</p>
        <div className="contactActions">
          <Link className="btn primary" href="/request-work">Request work</Link>
          <a className="contactLink" href={phoneHref}>{phoneDisplay}</a>
          <a className="contactLink" href={googleReviewUrl} target="_blank" rel="noopener noreferrer">Google review</a>
          <a className="contactLink" href={facebookReviewsUrl} target="_blank" rel="noopener noreferrer">Facebook reviews</a>
          <a className="contactLink" href={facebookUrl} target="_blank" rel="noopener noreferrer">Facebook</a>
          <a className="contactLink" href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </section>
    </main>
  );
}
