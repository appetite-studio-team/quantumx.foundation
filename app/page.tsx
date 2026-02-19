import { HeroSection } from '@/components/sections/HeroSection';
import { IntersectingCultureSection } from '@/components/sections/IntersectingCultureSection';
import { TechnologyStatementSection } from '@/components/sections/TechnologyStatementSection';
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection';
import { StudioPhilosophySection } from '@/components/sections/StudioPhilosophySection';
import { ContactFooterSection } from '@/components/sections/ContactFooterSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <IntersectingCultureSection />
      <TechnologyStatementSection />
      <CapabilitiesSection />
      <StudioPhilosophySection />
      <ContactFooterSection />
    </main>
  );
}
