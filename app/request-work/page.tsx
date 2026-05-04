import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, ClipboardList, ShieldCheck } from 'lucide-react';
import SiteNav from '../components/SiteNav';

export const metadata: Metadata = {
  title: 'Request Work | Georgian Edge Inc.',
  description:
    'Request a Georgian Edge Inc. quote for garden cleanups, landscape refreshes, planting, pruning, property management, cottage support, aerial property photography, and outdoor property care.',
  alternates: { canonical: '/request-work' },
  openGraph: {
    title: 'Request Work | Georgian Edge Inc.',
    url: '/request-work',
    description:
      'Share your property details, timing, photos, and the outdoor work or property management support you want quoted.',
    images: [
      {
        url: '/photos/stephen-uploaded/georgian-edge-owned-06.jpg',
        width: 721,
        height: 1280,
        alt: 'Georgian Edge Inc. property care request and project work',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Request Work | Georgian Edge Inc.',
    description:
      'Share your property details, timing, photos, and the outdoor work or property management support you want quoted.',
    images: ['/photos/stephen-uploaded/georgian-edge-owned-06.jpg'],
  },
};

const jobberRequestUrl = 'https://clienthub.getjobber.com/hubs/4dddfa75-84ac-4cd0-b8af-250b1a49d53c/public/requests/304805/new';
const phoneDisplay = '705-441-1215';
const phoneHref = 'tel:+17054411215';
const facebookUrl = 'https://www.facebook.com/GeorgianEdgeLandscaping/';
const instagramUrl = 'https://www.instagram.com/georgianedgeinc/';

const requestWorkSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://georgianedgeinc.ca/request-work#webpage',
      url: 'https://georgianedgeinc.ca/request-work',
      name: 'Request work from Georgian Edge Inc.',
      description:
        'Start a quote request for Georgian Edge Inc. property care, garden cleanup, landscape refresh, planting, pruning, property management, cottage support, or aerial property photography services.',
      inLanguage: 'en-CA',
      isPartOf: { '@id': 'https://georgianedgeinc.ca/#website' },
      about: { '@id': 'https://georgianedgeinc.ca/#business' },
      potentialAction: {
        '@type': 'CommunicateAction',
        name: 'Request property care work',
        target: 'https://georgianedgeinc.ca/request-work',
        recipient: { '@id': 'https://georgianedgeinc.ca/#business' },
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://georgianedgeinc.ca/request-work#breadcrumbs',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://georgianedgeinc.ca/' },
        { '@type': 'ListItem', position: 2, name: 'Request work', item: 'https://georgianedgeinc.ca/request-work' },
      ],
    },
  ],
};

export default function RequestWorkPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(requestWorkSchema) }}
      />
      <section className="pageHero requestHero">
        <SiteNav />
        <div className="wrap pageHeroInner">
          <p className="eyebrow">Request work</p>
          <h1 className="serif">Tell us what your property needs.</h1>
          <p className="lead">Use the Georgian Edge request form to share your property details, photos, timing, and the outdoor work or property management support you want quoted.</p>
        </div>
      </section>

      <section className="requestPanel wrap">
        <div className="requestPhoto" aria-hidden="true"></div>
        <div className="requestCard">
          <ClipboardList size={34} />
          <h2 className="serif">Start a request through Jobber</h2>
          <p>For now, Georgian Edge is using Jobber to collect work requests while the custom CRM is being built. This keeps quote requests organized and makes sure nothing gets missed.</p>
          <a className="btn primary requestButton" href={jobberRequestUrl} target="_blank" rel="noopener noreferrer">
            Open request form <ArrowRight size={18} />
          </a>
          <p className="smallNote">The form opens securely on Jobber in a new tab.</p>
        </div>
        <div className="requestSteps">
          <div><span>1</span><p>Describe the cleanup, landscape build or refresh, planting, pruning, pond-edge repair, inspection, seasonal support, or property care you need.</p></div>
          <div><span>2</span><p>Add your contact info, property address, timing, and photos if helpful.</p></div>
          <div><span>3</span><p>Georgian Edge reviews the request and follows up with the next step.</p></div>
        </div>
      </section>

      <section className="trustStrip wrap">
        <ShieldCheck size={22} />
        <p>Temporary Jobber form now. Custom Georgian Edge CRM later — same website flow, cleaner backend when ready.</p>
      </section>

      <section className="cta wrap">
        <h2 className="serif">Not ready to fill out the form?</h2>
        <p>You can still call, email, or reach Georgian Edge through Facebook and Instagram.</p>
        <div className="contactActions">
          <a className="btn primary" href={phoneHref}>Call {phoneDisplay}</a>
          <Link className="contactLink" href="mailto:georgianedgeinc@gmail.com">Email</Link>
          <a className="contactLink" href={facebookUrl} target="_blank" rel="noopener noreferrer">Facebook</a>
          <a className="contactLink" href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </section>
    </main>
  );
}
