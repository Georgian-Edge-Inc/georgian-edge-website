import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Camera, Leaf, MapPin, Quote, Sprout, Star, Trees } from 'lucide-react';
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
const googleBusinessProfileUrl = 'https://g.page/r/CUB04VSzUFVdEAE';
const googleReviewUrl = 'https://g.page/r/CUB04VSzUFVdEAE/review';
const instagramUrl = 'https://www.instagram.com/georgianedgeinc/';

export const revalidate = 3600;

type ClientReview = {
  name: string;
  date?: string;
  text: string;
  rating: number;
  profilePhotoUrl?: string;
  source: 'Google';
};

type ReviewSummary = {
  rating: number;
  total: number;
  live: boolean;
};

const fallbackReviews: ClientReview[] = [
  {
    name: 'Mike Ryan',
    date: '2023-02-03',
    text: 'The attention to detail that Kassidy and Stephen show is remarkable! They seemingly read your mind to provide results beyond your wildest dreams…I wholeheartedly recommend this team!',
    rating: 5,
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocKD0VcFAN9N2UUWvM3jmoPKXqOQ07WtPbhDXbMvVmvF=w40-h40-c-rp-mo-br100',
    source: 'Google',
  },
  {
    name: 'Jamilyn Johnston',
    date: '2022-09-05',
    text: "I can't say enough great things about this company! They completely redid our gardens in time for our upcoming wedding and made them look gorgeous. One of the most professional, fun, and talented group of landscapers around, I highly recommend!",
    rating: 5,
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjWxN0F6oswyOg8fI_55oxrZfe8wEPOruywAu2pRk1p0LMA=w40-h40-c-rp-mo-br100',
    source: 'Google',
  },
  {
    name: 'Chris Brittain',
    date: '2021-04-26',
    text: 'I highly recommend Georgian Edge for all landscaping needs. They have been doing a great job with our lawn care services, and we look forward to using them for landscaping projects throughout this year. Stephen is responsive and on time, making it easy to work with him.',
    rating: 5,
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocKobNmdkiUEu_27Q6KFcuXbwHfXcbL9wxno4dF-mACP=w40-h40-c-rp-mo-br100',
    source: 'Google',
  },
  {
    name: 'Heather McFarlane',
    date: '2021-04-19',
    text: 'Amazing job!!! Stephen did a great job with my yard clean up. Super friendly, experienced and very responsive. Looking forward to booking any future landscaping needs with him!',
    rating: 5,
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocI8gCyV9U9R5Q2nbVaphCt4tqImZDK4d9yUzrPlvY_-=w40-h40-c-rp-mo-br100',
    source: 'Google',
  },
  {
    name: 'Kyle Spencley',
    date: '2021-04-14',
    text: 'Amazing job with our gardens. Very experienced and lots of attention to detail. Went above and beyond! Will be booking this service every year.',
    rating: 5,
    profilePhotoUrl: 'https://lh3.googleusercontent.com/a/ACg8ocKIjE-DZgUgK4oYDeptvYf7892S5Ah8b3_FmbM1qvva=w40-h40-c-rp-mo-br100',
    source: 'Google',
  },
];

async function getGoogleReviews(): Promise<{ reviews: ClientReview[]; summary: ReviewSummary }> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return { reviews: fallbackReviews, summary: { rating: 4.4, total: 7, live: false } };
  }

  try {
    const params = new URLSearchParams({
      place_id: placeId,
      fields: 'rating,user_ratings_total,reviews,url',
      reviews_sort: 'newest',
      key: apiKey,
    });
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?${params.toString()}`, {
      next: { revalidate: 3600 },
    });
    const data = await response.json();

    if (!response.ok || data.status !== 'OK' || !data.result) {
      return { reviews: fallbackReviews, summary: { rating: 4.4, total: 7, live: false } };
    }

    const liveReviews = (data.result.reviews || [])
      .filter((review: { text?: string }) => review.text)
      .map((review: { author_name?: string; profile_photo_url?: string; rating?: number; relative_time_description?: string; text: string }) => ({
        name: review.author_name || 'Google reviewer',
        date: review.relative_time_description,
        text: review.text,
        rating: review.rating || 5,
        profilePhotoUrl: review.profile_photo_url,
        source: 'Google' as const,
      }));

    return {
      reviews: liveReviews.length ? liveReviews : fallbackReviews,
      summary: {
        rating: data.result.rating || 4.4,
        total: data.result.user_ratings_total || 7,
        live: Boolean(liveReviews.length),
      },
    };
  } catch {
    return { reviews: fallbackReviews, summary: { rating: 4.4, total: 7, live: false } };
  }
}

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
      sameAs: [facebookUrl, instagramUrl, googleBusinessProfileUrl],
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

export default async function Home() {
  const { reviews, summary } = await getGoogleReviews();

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

      <section id="reviews" className="reviews" aria-label="Georgian Edge client reviews">
        <div className="wrap reviewIntro">
          <div>
            <p className="eyebrow">Client reviews</p>
            <h2 className="serif">Proof from the people who’ve worked with us.</h2>
          </div>
          <p>Real client feedback, compact cards, ratings, and profile photos where available.</p>
        </div>

        <div className="wrap reviewSummary">
          <div className="reviewScore" aria-label={`Google rating ${summary.rating} out of 5`}>
            <strong>{summary.rating.toFixed(1)}</strong>
            <span>
              <span className="reviewStars compactStars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={14} />
                ))}
              </span>
              Google rating · {summary.total} reviews
            </span>
          </div>
        </div>

        <div className="reviewRail" aria-label="Scrollable client review cards">
          {reviews.map((review) => (
            <article className="reviewCard" key={`${review.name}-${review.text.slice(0, 18)}`}>
              <div className="reviewCardTop">
                {review.profilePhotoUrl ? (
                  <img className="reviewAvatar" src={review.profilePhotoUrl} alt="" loading="lazy" />
                ) : (
                  <span className="reviewAvatar reviewAvatarFallback" aria-hidden="true">{review.name.slice(0, 1)}</span>
                )}
                <div>
                  <strong>{review.name}</strong>
                  <span>{review.date ? `Google · ${review.date}` : 'Google review'}</span>
                </div>
                <Quote className="quoteMark" size={21} aria-hidden="true" />
              </div>
              <div className="reviewStars" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: Math.round(review.rating) }).map((_, index) => (
                  <Star key={index} size={14} aria-hidden="true" />
                ))}
              </div>
              <p>“{review.text}”</p>
            </article>
          ))}
        </div>
        <div className="wrap reviewFooter">
          <span>Client reviews from Google and Facebook help property owners see the kind of work Georgian Edge is known for.</span>
          <div>
            <a className="contactLink" href={googleReviewUrl} target="_blank" rel="noopener noreferrer">Leave a Google review</a>
            <a className="contactLink" href={facebookReviewsUrl} target="_blank" rel="noopener noreferrer">Facebook recommendations</a>
          </div>
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
