import { HeroSection } from '@/components/sections/HeroSection';
import { QuantumSpeedupSection } from '@/components/sections/QuantumSpeedupSection';
import { TechnologyStatementSection } from '@/components/sections/TechnologyStatementSection';
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection';
import { FromTheLabSection } from '@/components/sections/FromTheLabSection';
import { EventsSection } from '@/components/sections/EventsSection';
// TODO: re-enable once the real Discord invite is set in content/site.ts:
// import { DiscordCtaSection } from '@/components/sections/DiscordCtaSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <QuantumSpeedupSection />
      <TechnologyStatementSection />
      <CapabilitiesSection />
      <FromTheLabSection />
      <EventsSection />
      {/* <DiscordCtaSection /> */}
    </main>
  );
}
