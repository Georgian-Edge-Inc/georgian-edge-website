import type { MetadataRoute } from 'next';

const baseUrl = 'https://georgianedgeinc.ca';

const routes = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/gallery', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/request-work', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/data-deletion', priority: 0.3, changeFrequency: 'yearly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
