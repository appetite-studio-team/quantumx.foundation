import Image from 'next/image';
import { QuantumSpeedupChart } from '@/components';

// Data for Projects (displayed in hero)
const projects = [
  {
    id: 'roadmap',
    title: 'Quantum Computing Roadmap 2026',
    description: 'Quantum Computing Roadmap 2026',
    image: '/images/roadmap-new.jpg',
    link: 'https://roadmap.quantumx.school/',
    external: true,
  },
  {
    id: 'vulnerable',
    title: 'Quantum Vulnerability Database',
    description: 'Quantum Vulnerability Database',
    image: '/images/vulnerable.jpg',
    link: 'https://vulnerable.quantumx.technology/',
    external: true,
  },
  {
    id: 'qubit',
    title: 'Qubit Database',
    description: 'Qubit Database',
    image: '/images/qubit.jpg',
    link: 'https://qubit.quantumx.technology/',
    external: true,
  },
  {
    id: 'pqc',
    title: 'Post Quantum Cryptography',
    description: 'Post quantum cryptography',
    image: '/images/pqc.jpg',
    link: '',
  },
  {
    id: 'qec',
    title: 'Quantum Experience Center, Bangalore',
    description: 'Quantum Experience Center, Bangalore',
    image: '/images/qec.jpg',
    link: '',
  },
];

// Data for Launch Photo Section
const launchPhoto = {
  image: '/images/launch-image.jpg',
  description: 'QuantumX launch with Hon. Deputy Chief Minister of Karnataka, Shri D. K. Shivakumar',
};

export default function HomePage() {
  return (
    <main className="pt-24 md:pt-9">
      {/* Hero Section - Dark with floating project cards */}
      <section className="bg-black min-h-screen relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-44 lg:py-52">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 min-h-[60vh]">
            {/* Left side - Text content */}
            <div className="z-10 flex items-center">
              <div>
                <h1 className="serif-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
                  The Quantum Foundation.
                </h1>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg animate-fade-in-up animate-delay-100">
                  We are a deep-tech initiative building an open, accessible, and
                  reliable quantum future. Building the foundations of the post-quantum era.
                </p>
              </div>
            </div>

            {/* Right side - Floating project cards at bottom */}
            <div className="flex flex-col gap-3 md:gap-4 items-center lg:items-end justify-end animate-fade-in-up animate-delay-200">
              {/* Top row - Large card + QEC card */}
              <div className="flex gap-3 md:gap-4 items-end">
                {/* Card - Quantum Experience Center */}
                <div className="project-card w-24 sm:w-28 md:w-36 lg:w-40 aspect-square rounded-xl md:rounded-2xl overflow-hidden relative">
                  <div className="absolute inset-0">
                    <Image
                      src={projects[4].image}
                      alt={projects[4].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-2 md:p-3">
                    <p className="text-white text-[10px] md:text-xs font-medium">
                      {projects[4].description}
                    </p>
                  </div>
                </div>

                {/* Large card - Quantum Vulnerability Database */}
                <a
                  href={projects[1].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card w-36 sm:w-44 md:w-56 lg:w-64 aspect-square rounded-xl md:rounded-2xl overflow-hidden relative"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={projects[1].image}
                      alt={projects[1].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3 md:p-4">
                    <p className="text-white text-xs md:text-sm font-medium">
                      {projects[1].description}
                    </p>
                  </div>
                </a>
              </div>

              {/* Bottom row cards */}
              <div className="flex gap-3 md:gap-4 flex-wrap justify-center lg:justify-end">
                {/* Card 1 - Quantum Roadmap */}
                <a
                  href={projects[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card w-24 sm:w-28 md:w-36 lg:w-40 aspect-square rounded-xl md:rounded-2xl overflow-hidden relative"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={projects[0].image}
                      alt={projects[0].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-2 md:p-3">
                    <p className="text-white text-[10px] md:text-xs font-medium">
                      {projects[0].description}
                    </p>
                  </div>
                </a>

                {/* Card 2 - Qubit Database */}
                <a
                  href={projects[2].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card w-24 sm:w-28 md:w-36 lg:w-40 aspect-square rounded-xl md:rounded-2xl overflow-hidden relative"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={projects[2].image}
                      alt={projects[2].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-2 md:p-3">
                    <p className="text-white text-[10px] md:text-xs font-medium">
                      {projects[2].description}
                    </p>
                  </div>
                </a>

                {/* Card 3 - Post Quantum Cryptography */}
                <div className="project-card w-24 sm:w-28 md:w-36 lg:w-40 aspect-square rounded-xl md:rounded-2xl overflow-hidden relative">
                  <div className="absolute inset-0">
                    <Image
                      src={projects[3].image}
                      alt={projects[3].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-2 md:p-3">
                    <p className="text-white text-[10px] md:text-xs font-medium">
                      {projects[3].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Speedup Chart Section */}
      <QuantumSpeedupChart />

      {/* National Quantum Mission Section */}
      <section className="bg-white py-20 lg:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Content */}
            <div className="animate-fade-in-up">
              <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-sm text-gray-600 mb-6">
                Part of India&apos;s ₹6,000 Cr Quantum Mission
              </div>
              <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Aligned with India&apos;s Quantum Vision
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                We are proud to align our efforts with the{' '}
                <strong className="text-gray-900">National Quantum Mission of India</strong>, 
                contributing to a shared goal of advancing quantum research, 
                talent, and infrastructure across the country.
              </p>
              <a
                href="https://dst.gov.in/national-quantum-mission-nqm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all"
              >
                Learn about NQM
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Right side - Image */}
            <div className="animate-fade-in-up animate-delay-200 relative">
              <div className="aspect-square rounded-3xl overflow-hidden relative">
                <Image
                  src="/images/nqm.jpg"
                  alt="National Quantum Mission"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="bg-black py-20 lg:py-28 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-12 animate-fade-in-up">
            <div>
              <h2 className="serif-heading text-3xl md:text-4xl font-bold text-white">
                From the Lab
              </h2>
              <p className="text-gray-500 mt-2">Insights, research, and perspectives</p>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <article className="group animate-fade-in-up">
              <div className="mb-4">
                <span className="text-gray-500 text-sm">Jan 13, 2026</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-300 transition-colors">
                What breaks first during a post-quantum migration?
              </h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                Algorithms, infrastructure, or governance? Most conversations around post-quantum readiness start with algorithms.
              </p>
              <a
                href="https://www.linkedin.com/pulse/what-breaks-first-during-post-quantum-migration-quantumx-foundation-69zdc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm font-medium underline underline-offset-4 hover:no-underline"
              >
                Read article
              </a>
            </article>

            {/* Article 2 */}
            <article className="group animate-fade-in-up animate-delay-100">
              <div className="mb-4">
                <span className="text-gray-500 text-sm">Dec 17, 2025</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-300 transition-colors">
                We&apos;re designing for a Quantum-safe world
              </h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                Quantum safety is often framed as a future problem. Something to think about once large-scale quantum computers arrive.
              </p>
              <a
                href="https://www.linkedin.com/pulse/were-designing-quantum-safe-world-quantumx-foundation-ssz2c/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm font-medium underline underline-offset-4 hover:no-underline"
              >
                Read article
              </a>
            </article>

            {/* Article 3 - Placeholder for future */}
            <article className="group animate-fade-in-up animate-delay-200 hidden lg:block">
              <div className="mb-4">
                <span className="text-gray-500 text-sm">Coming soon</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-3">
                More insights on the way
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                We&apos;re working on new research and perspectives. Stay tuned.
              </p>
              <span className="text-gray-600 text-sm font-medium">
                Subscribe for updates
              </span>
            </article>
          </div>
        </div>
      </section>

      {/* Founder Note Section */}
      <section className="bg-black py-20 lg:py-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in-up">
            {/* Large quote mark */}
            <div className="text-6xl md:text-8xl text-gray-700 font-serif leading-none mb-6">&ldquo;</div>
            
            {/* Quote */}
            <blockquote className="mb-12">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed font-light max-w-4xl mx-auto px-2">
                The quantum revolution isn&apos;t just about faster computers,it&apos;s
                about reimagining what&apos;s possible. At QuantumX Foundation, we
                believe that open collaboration and accessible education are the
                keys to building a quantum future that benefits everyone.
              </p>
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center gap-4 animate-fade-in-up animate-delay-200">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden relative ring-2 ring-gray-700 ring-offset-4 ring-offset-black">
                <Image
                  src="/images/ajmal-founder.jpg"
                  alt="Ajmal - Founder of QuantumX Foundation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <p className="text-white font-semibold text-lg">Ajmal</p>
                <p className="text-gray-500 text-sm">Founder, QuantumX Foundation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Launch Photo Section */}
      <section className="bg-black py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Image */}
            <div className="animate-fade-in-up">
              <div className="aspect-[4/3] bg-gray-900 rounded-2xl overflow-hidden relative">
                <Image
                  src={launchPhoto.image}
                  alt="QuantumX Foundation Launch"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>

            {/* Right side - Note */}
            <div className="animate-fade-in-up animate-delay-100">
              <h2 className="serif-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Launch Moments
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                {launchPhoto.description}
              </p>
              <p className="text-gray-500 leading-relaxed">
                A milestone moment for QuantumX Foundation, marking our commitment to advancing quantum technology education and research in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="bg-black py-20 lg:py-28 relative overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="animate-fade-in-up">
              <h2 className="serif-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                We are hiring
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
                Join us in building the foundations of the post-quantum era.
                We&apos;re looking for passionate individuals who share our vision.
              </p>
              <a
                href="https://wellfound.com/company/quantumx-qx-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white hover:bg-gray-100 text-black px-8 py-4 font-medium transition-colors"
              >
                View Open Positions →
              </a>
            </div>

            {/* Right - Visual element */}
            <div className="animate-fade-in-up animate-delay-200 hidden md:flex justify-end">
              <div className="relative">
                <div className="text-[120px] lg:text-[180px] font-bold text-white/5 leading-none select-none">
                  JOIN
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-gray-700 rotate-45" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-gray-600 rotate-12" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
