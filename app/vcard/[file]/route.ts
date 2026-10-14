import { founderList } from '@/content/founders';
import { buildVcard } from '@/lib/vcard';

// Prerendered to out/vcard/<slug>.vcf by the static export.
export const dynamic = 'force-static';

export function generateStaticParams() {
  return founderList.map((f) => ({ file: `${f.slug}.vcf` }));
}

export function GET(_req: Request, { params }: { params: { file: string } }) {
  const founder = founderList.find((f) => `${f.slug}.vcf` === params.file);
  if (!founder) return new Response('Not found', { status: 404 });

  return new Response(buildVcard(founder), {
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': `attachment; filename="${founder.slug}.vcf"`,
    },
  });
}
