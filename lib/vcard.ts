import type { Founder } from '@/content/founders';
import { site } from '@/content/site';

const baseUrl = 'https://quantumx.foundation';

/** Escapes text values per RFC 6350 section 3.4. */
function esc(value: string) {
  return value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/([,;])/g, '\\$1');
}

/** Public path of a founder's downloadable contact card. */
export function vcardPath(founder: Founder) {
  return `/vcard/${founder.slug}.vcf`;
}

/** Digits only, for tel: and wa.me links. */
export function phoneDigits(phone: string) {
  return phone.replace(/[^\d+]/g, '');
}

/** Builds a vCard 3.0 (best supported by iOS and Android contacts) for one founder. */
export function buildVcard(founder: Founder) {
  const { name, title, email, phone } = founder.card;
  const parts = name.split(' ');
  const family = parts.length > 1 ? parts[parts.length - 1] : '';
  const given = parts.length > 1 ? parts.slice(0, -1).join(' ') : name;

  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${esc(family)};${esc(given)};;;`,
    `FN:${esc(name)}`,
    `ORG:${esc(site.name)}`,
    `TITLE:${esc(title)}`,
    `EMAIL;TYPE=INTERNET,WORK:${email}`,
    `TEL;TYPE=CELL:${phoneDigits(phone)}`,
    site.address ? `ADR;TYPE=WORK:;;${esc(site.address)};;;;` : null,
    `URL:${baseUrl}/founder/${founder.slug}/`,
    founder.linkedin ? `X-SOCIALPROFILE;TYPE=linkedin:${founder.linkedin}` : null,
    founder.x ? `X-SOCIALPROFILE;TYPE=twitter:${founder.x}` : null,
    'END:VCARD',
  ];

  // vCard requires CRLF line endings.
  return lines.filter(Boolean).join('\r\n') + '\r\n';
}
