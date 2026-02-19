import type { MetadataRoute } from 'next';

const baseUrl = 'https://quantumx.foundation';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl + '/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: baseUrl + '/careers/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
