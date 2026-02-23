import { HeroSection } from '@/components/sections/HeroSection';
import { QuantumSpeedupSection } from '@/components/sections/QuantumSpeedupSection';
import { TechnologyStatementSection } from '@/components/sections/TechnologyStatementSection';
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection';
import { StudioPhilosophySection } from '@/components/sections/StudioPhilosophySection';
import { FromTheLabSection } from '@/components/sections/FromTheLabSection';
import { ContactFooterSection } from '@/components/sections/ContactFooterSection';
import { EventsSection } from '@/components/sections/EventsSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <QuantumSpeedupSection />
      <TechnologyStatementSection />
      <CapabilitiesSection />
      <StudioPhilosophySection />
      <FromTheLabSection />
      <EventsSection />
      <ContactFooterSection />
    </main>
  );
}
