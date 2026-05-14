import type { MetadataRoute } from 'next';

const baseUrl = 'https://georgianedgeinc.ca';

const lastModified = new Date('2026-05-14T00:00:00-04:00');

const routes = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/service-areas', priority: 0.85, changeFrequency: 'monthly' as const },
  { path: '/gallery', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/request-work', priority: 0.9, changeFrequency: 'monthly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
