import Image from 'next/image';

const localBusinessSchema = {
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
      description:
        'Premium property care, garden cleanups, landscape refreshes, planting, pruning, property management, cottage support, and aerial property photography around Georgian Bay, Ontario.',
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Georgian Bay, Ontario' },
        { '@type': 'City', name: 'Collingwood' },
        { '@type': 'City', name: 'The Blue Mountains' },
        { '@type': 'City', name: 'Wasaga Beach' },
        { '@type': 'City', name: 'Thornbury' },
        { '@type': 'City', name: 'Meaford' },
        { '@type': 'AdministrativeArea', name: 'Clearview' },
      ],
      serviceType: [
        'Garden cleanup',
        'Spring and fall property cleanup',
        'Mulch installation',
        'Garden maintenance',
        'Landscape refreshes',
        'Planting',
        'Pruning',
        'Property management',
        'Cottage property support',
        'Aerial property photography',
      ],
      makesOffer: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Garden cleanups', areaServed: 'Georgian Bay, Ontario' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landscape refreshes', areaServed: 'Georgian Bay, Ontario' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Property management', areaServed: 'Georgian Bay, Ontario' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aerial property photography', areaServed: 'Georgian Bay, Ontario' } },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Georgian Bay property care services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Seasonal garden and property cleanups' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landscape refreshes, bed edging, mulch, and planting' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cottage and country property management' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aerial property photography and progress documentation' } },
        ],
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
    {
      '@type': 'WebPage',
      '@id': 'https://georgianedgeinc.ca/#homepage',
      url: 'https://georgianedgeinc.ca/',
      name: 'Georgian Edge Inc. maintenance landing page',
      description:
        'Temporary maintenance landing page for Georgian Edge Inc. while the public website refresh is in progress.',
      inLanguage: 'en-CA',
      isPartOf: { '@id': 'https://georgianedgeinc.ca/#website' },
      about: { '@id': 'https://georgianedgeinc.ca/#business' },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://georgianedgeinc.ca/brand/georgian-edge-primary-white.png',
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="maintenancePage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <section className="maintenanceCard" aria-label="Georgian Edge website under maintenance">
        <Image
          src="/brand/georgian-edge-primary-white.png"
          alt="Georgian Edge Inc."
          width={520}
          height={190}
          priority
          className="maintenanceLogo"
        />
        <p className="maintenanceEyebrow">Website refresh in progress</p>
        <h1 className="serif">We&rsquo;re building something sharper for Georgian Bay properties.</h1>
        <p className="maintenanceText">
          Georgian Edge Inc. is updating our online home for premium property care,
          garden cleanups, landscape refreshes, planting, pruning, cottage support,
          property management, and aerial property photography around Georgian Bay.
        </p>
        <div className="maintenanceActions">
          <a className="btn light" href="/request-work">Request work</a>
          <a className="maintenanceEmail" href="mailto:georgianedgeinc@gmail.com">Email Georgian Edge</a>
        </div>
        <p className="maintenanceServiceArea">
          Serving Georgian Bay, Collingwood, The Blue Mountains, Wasaga Beach, Thornbury, Meaford, and surrounding cottage properties.
        </p>
        <div className="maintenanceFooter">
          <span>Premium property care • Landscapes • Cottage support • Georgian Bay</span>
        </div>
      </section>
    </main>
  );
}
