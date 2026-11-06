import Image from 'next/image';
import type { Metadata } from 'next';
import SiteNav from '../components/SiteNav';
import PageHeroVideo from '../components/PageHeroVideo';

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
    images: [
      {
        url: '/photos/stephen-uploaded/georgian-edge-owned-20.jpg',
        width: 1280,
        height: 959,
        alt: 'Georgian Edge Inc. landscape and property care project photo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery | Georgian Edge Inc.',
    description:
      'Real Georgian Edge project photos from garden beds, cleanups, landscape refreshes, and outdoor property care.',
    images: ['/photos/stephen-uploaded/georgian-edge-owned-20.jpg'],
  },
};

const hiddenPhotoNumbers = new Set(['31']);

const photoAltText: Record<string, string> = {
  '01': 'Freshly built Georgian Edge garden bed with clean edges and landscape finishing',
  '02': 'Natural stone patio and garden edging completed by Georgian Edge',
  '03': 'Large Georgian Bay property with landscaped gardens and open lawn',
  '04': 'Clean curved garden bed edge around mature trees',
  '05': 'Mulched shade garden bed with hostas and perennials under a mature tree',
  '06': 'Front garden beds with shrubs and fresh mulch at a brick home',
  '07': 'Foundation garden bed with shrubs and dark mulch',
  '08': 'Fresh lawn edge and walkway after property maintenance',
  '09': 'Decorative stone feature in a gravel garden',
  '10': 'Gravel garden refresh with decorative stone features',
  '11': 'Fresh mulch bed along a pond edge with shoreline planting',
  '12': 'Circular mulched bed around a shrub in an open lawn',
  '13': 'Planting bed with shrubs and perennials at a commercial property',
  '14': 'Garden bed with a feature boulder, shrubs, and river rock edging',
  '15': 'Freshly mulched foundation planting bed along a brick home',
  '16': 'Fall leaf cleanup underway at a wooded property',
  '17': 'Natural stone patio with boulder edging beside a stone home',
  '18': 'Long mulched garden bed with fresh plantings beneath blue spruce trees',
  '19': 'Magenta daylily in bloom in a perennial garden',
  '20': 'Georgian Edge landscape refresh and outdoor property care project',
  '21': 'Pink daylily in bloom with hostas in a perennial garden',
  '22': 'Red and yellow gladiolus in bloom in a summer garden',
  '23': 'Orange marigold in bloom beside a weathered log planter',
  '24': 'White hydrangea blooms in a summer garden',
  '25': 'Freshly edged garden bed with new shrubs beside a raised deck',
  '26': 'Curved mulched garden bed with a flowering hydrangea, variegated shrubs, and perennials',
  '27': 'Newly planted tree and ornamental grasses in a mulched commercial planting bed',
  '28': 'Long mulched planting bed with ornamental grasses at a commercial property',
  '29': 'Street-side planting bed with young trees, ornamental grasses, and fresh mulch',
  '30': 'Ornamental grass and boulder feature bed with fall plantings',
  '32': 'Aerial view of a freshly striped lawn with young trees on a country property',
  '33': 'Garden shed with fresh flower beds and stepping stones',
  '34': 'Boulder-edged perennial garden bed along a front lawn',
  '35': 'Landscaped front entrance and gardens of a Georgian Bay home at dusk',
  '36': 'Rows of plants inside a nursery greenhouse while sourcing for a project',
  '37': 'Freshly striped lawn bordered by perennial gardens and woodland',
  '38': 'Gravel driveway and stone walkway work with equipment on site at a country property',
};

const photos = Array.from({ length: 38 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0');
  return {
    number,
    src: `/photos/stephen-uploaded/georgian-edge-owned-${number}.jpg`,
    alt: photoAltText[number] ?? `Georgian Edge Inc. garden, landscape, and property care project photo ${number}`,
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
      associatedMedia: photos.map((photo) => ({
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
      <section className="pageHero pageHeroWithVideo galleryHero">
        <PageHeroVideo
          name="Georgian Edge project showcase background video"
          poster="/videos/georgian-edge-gallery-loop-poster.jpg"
          webm="/videos/georgian-edge-gallery-loop.webm"
          mp4="/videos/georgian-edge-gallery-loop.mp4"
        />
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
