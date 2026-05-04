import type { MetadataRoute } from 'next';

const baseUrl = 'https://quantumx.foundation';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: baseUrl + '/',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: baseUrl + '/careers/',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: baseUrl + '/qx-hack/',
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: baseUrl + '/qx-hack/rules/',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: baseUrl + '/qx-hack/problem-statements/',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];
}
