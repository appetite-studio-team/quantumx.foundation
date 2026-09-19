import type { MetadataRoute } from 'next';
import { MIN_POSTS_TO_INDEX_TAG, getAllPosts, getAllTags } from '@/lib/blog';

const baseUrl = 'https://quantumx.foundation';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = getAllPosts();
  // The blog index changes whenever a post is published or updated.
  const blogUpdated = posts.reduce(
    (latest, post) => (post.updated > latest ? post.updated : latest),
    posts[0]?.updated ?? ''
  );

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.updated),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Only tag archives that are indexable (see MIN_POSTS_TO_INDEX_TAG).
  const tagEntries: MetadataRoute.Sitemap = getAllTags()
    .filter((tag) => tag.count >= MIN_POSTS_TO_INDEX_TAG)
    .map((tag) => ({
      url: `${baseUrl}/blog/tag/${tag.slug}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.5,
    }));

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
      url: baseUrl + '/blog/',
      lastModified: blogUpdated ? new Date(blogUpdated) : now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...postEntries,
    ...tagEntries,
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
      url: baseUrl + '/speakers/',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: baseUrl + '/newsroom/',
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
      url: baseUrl + '/company/',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: baseUrl + '/founder/ajmal/',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: baseUrl + '/founder/ameen/',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: baseUrl + '/founder/samad/',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
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
    {
      url: baseUrl + '/qx-hack/certificate/',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ];
}
