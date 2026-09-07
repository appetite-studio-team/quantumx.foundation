'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { defaultTransition } from '@/lib/motion-variants';
import { initials, type Speaker, type SpeakerLinks } from '@/content/speakers';
import {
  XIcon,
  LinkedInIcon,
  InstagramIcon,
  YouTubeIcon,
  GlobeIcon,
} from '@/components/icons';

type LinkKey = keyof SpeakerLinks;

const socialIcons: Record<
  LinkKey,
  { label: string; Icon: (props: { className?: string }) => JSX.Element }
> = {
  youtube: { label: 'YouTube', Icon: YouTubeIcon },
  x: { label: 'X', Icon: XIcon },
  instagram: { label: 'Instagram', Icon: InstagramIcon },
  linkedin: { label: 'LinkedIn', Icon: LinkedInIcon },
  website: { label: 'Website', Icon: GlobeIcon },
};

/** Fixed order so icon rows line up across the grid. */
const linkOrder: LinkKey[] = ['youtube', 'x', 'instagram', 'linkedin', 'website'];

function Avatar({ speaker }: { speaker: Speaker }) {
  return (
    <div className="relative mx-auto aspect-square w-28 overflow-hidden rounded-full border border-gray-secondary/20 bg-gray-secondary/10 transition-colors duration-500 group-hover:border-accent/50 sm:w-32 md:w-36">
      {speaker.photo ? (
        <Image
          src={speaker.photo}
          alt={speaker.name}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 40vw, (max-width: 1024px) 22vw, 15vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <span
          aria-hidden="true"
          className="flex h-full w-full items-center justify-center font-heading text-xl font-bold uppercase tracking-tight text-gray-secondary md:text-2xl"
        >
          {initials(speaker.name)}
        </span>
      )}
    </div>
  );
}

export function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const links = speaker.links ?? {};
  const activeLinks = linkOrder.filter((key) => Boolean(links[key]));

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={defaultTransition}
      className="group flex flex-col items-center text-center"
    >
      {speaker.profileUrl ? (
        <Link
          href={speaker.profileUrl}
          className="block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          aria-label={`${speaker.name} profile`}
          data-magnetic
        >
          <Avatar speaker={speaker} />
        </Link>
      ) : (
        <Avatar speaker={speaker} />
      )}

      <h3 className="mt-5 font-heading text-sm font-bold uppercase leading-tight tracking-tight text-text-primary transition-colors duration-300 group-hover:text-accent md:text-base">
        {speaker.profileUrl ? (
          <Link href={speaker.profileUrl}>{speaker.name}</Link>
        ) : (
          speaker.name
        )}
      </h3>

      <p className="mt-2 max-w-[16rem] text-sm leading-snug text-gray-secondary">
        {speaker.title}
      </p>

      {activeLinks.length > 0 && (
        <ul className="mt-3 flex items-center justify-center gap-3">
          {activeLinks.map((key) => {
            const { label, Icon } = socialIcons[key];
            return (
              <li key={key}>
                <a
                  href={links[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${speaker.name} on ${label}`}
                  className="inline-flex text-gray-secondary transition-colors hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </motion.div>
  );
}
