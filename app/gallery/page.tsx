import Image from 'next/image';
import type { Metadata } from 'next';
import SiteNav from '../components/SiteNav';

export const metadata: Metadata = {
  title: 'Gallery | Georgian Bay Landscape & Property Care Photos',
  description:
    'View Georgian Edge Inc. project photos showing garden cleanups, edging, stonework, planting, landscape builds, property refreshes, and outdoor property care around Georgian Bay.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Gallery | Georgian Edge Inc.',
    url: '/gallery',
    description:
      'Real Georgian Edge project photos from garden beds, cleanups, landscape refreshes, and outdoor property care.',
  },
};

const hiddenPhotoNumbers = new Set(['31']);

const photos = Array.from({ length: 38 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0');
  return {
    number,
    src: `/photos/stephen-uploaded/georgian-edge-owned-${number}.jpg`,
    alt: `Georgian Edge Inc. project photo ${number}`,
  };
}).filter((photo) => !hiddenPhotoNumbers.has(photo.number));

const gallerySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ImageGallery',
      '@id': 'https://georgianedgeinc.ca/gallery#webpage',
      url: 'https://georgianedgeinc.ca/gallery',
      name: 'Georgian Edge Inc. project gallery',
      description:
        'Project photos from Georgian Edge Inc. garden cleanups, edging, stonework, planting, landscape refreshes, and outdoor property care around Georgian Bay.',
      inLanguage: 'en-CA',
      isPartOf: { '@id': 'https://georgianedgeinc.ca/#website' },
      about: { '@id': 'https://georgianedgeinc.ca/#business' },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://georgianedgeinc.ca/photos/stephen-uploaded/georgian-edge-owned-01.jpg',
      },
      associatedMedia: photos.slice(0, 12).map((photo) => ({
        '@type': 'ImageObject',
        contentUrl: `https://georgianedgeinc.ca${photo.src}`,
        name: photo.alt,
        description: photo.alt,
        creator: { '@id': 'https://georgianedgeinc.ca/#business' },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://georgianedgeinc.ca/gallery#breadcrumbs',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://georgianedgeinc.ca/' },
        { '@type': 'ListItem', position: 2, name: 'Gallery', item: 'https://georgianedgeinc.ca/gallery' },
      ],
    },
  ],
};

export default function GalleryPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <section className="pageHero galleryHero">
        <SiteNav />
        <div className="wrap pageHeroInner">
          <p className="eyebrow">Gallery</p>
          <h1 className="serif">Real Georgian Edge work, from garden beds to property refreshes.</h1>
          <p className="lead">A growing collection of Georgian Edge-owned project photos showing cleanups, edging, stonework, planting, landscape builds, refreshes, and outdoor property care.</p>
        </div>
      </section>

      <section className="galleryIntro wrap">
        <div>
          <p className="eyebrow">Project photos</p>
          <h2 className="serif">Actual work beats stock photos.</h2>
        </div>
        <p>These photos help the site feel like Georgian Edge — local, practical, and real. The homepage stays curated; this gallery can hold the broader proof.</p>
      </section>

      <section className="photoMasonry wrap">
        {photos.map((photo, index) => (
          <figure key={photo.src} className={index % 7 === 0 || index % 7 === 4 ? 'tall' : ''}>
            <Image src={photo.src} alt={photo.alt} width={900} height={1200} />
          </figure>
        ))}
      </section>
    </main>
  );
}
