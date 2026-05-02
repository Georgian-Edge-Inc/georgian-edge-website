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
        <div className="maintenanceFooter">
          <span>Premium property care • Landscapes • Cottage support • Georgian Bay</span>
        </div>
      </section>
    </main>
  );
}
