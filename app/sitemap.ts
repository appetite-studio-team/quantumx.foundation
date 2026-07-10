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
      url: baseUrl + '/projects/',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: baseUrl + '/projects/qxquark/',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: baseUrl + '/projects/qxace/',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: baseUrl + '/projects/dsynq/',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: baseUrl + '/articles/',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: baseUrl + '/research/',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: baseUrl + '/community/',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: baseUrl + '/careers/',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: baseUrl + '/contact/',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: baseUrl + '/terms/',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: baseUrl + '/terms-and-conditions/',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: baseUrl + '/privacy/',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
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
