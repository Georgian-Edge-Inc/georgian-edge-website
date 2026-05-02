import type { MetadataRoute } from 'next';

const baseUrl = 'https://georgianedgeinc.ca';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'Google-Extended'],
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
