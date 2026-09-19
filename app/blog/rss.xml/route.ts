import { getAllPosts, getAuthor, postUrl, siteUrl } from '@/lib/blog';
import { blogDescription } from '@/lib/blog-seo';

// Rendered once at build time into out/blog/rss.xml.
export const dynamic = 'force-static';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function rfc822(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toUTCString();
}

export function GET() {
  const posts = getAllPosts();
  const lastBuild = posts[0]?.updated ?? new Date().toISOString().slice(0, 10);

  const items = posts
    .map((post) => {
      const url = postUrl(post.slug);
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.description)}</description>
      <content:encoded><![CDATA[${post.html.replace(/]]>/g, ']]]]><![CDATA[>')}]]></content:encoded>
      <dc:creator>${escapeXml(getAuthor(post.authorId).name)}</dc:creator>
      <pubDate>${rfc822(post.date)}</pubDate>
${post.tags.map((tag) => `      <category>${escapeXml(tag)}</category>`).join('\n')}
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>QuantumX Foundation Blog</title>
    <link>${siteUrl}/blog/</link>
    <atom:link href="${siteUrl}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(blogDescription)}</description>
    <language>en</language>
    <lastBuildDate>${rfc822(lastBuild)}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
