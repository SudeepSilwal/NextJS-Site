import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

// Only the four routes that actually exist on the main site.
// Individual post/project detail pages live on the blog subdomain and
// are indexed there — including them here would create duplicate-content
// signals for URLs this site doesn't even serve.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/posts`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}