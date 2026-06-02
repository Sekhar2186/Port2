import React from 'react';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import { FadeIn } from '../components/FadeIn';

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  return (
    <section
      className="relative h-screen flex flex-col bg-[#0C0C0C]"
      style={{ overflowX: 'clip' }}
    >
      {/* ── Navbar ── */}
      <FadeIn delay={0} y={-20} tag="nav" className="w-full shrink-0 z-30 relative">
        <div className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 w-full text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <a href="#about"    className="hover:opacity-70 transition-opacity duration-200">About</a>
          <a href="#services" className="hover:opacity-70 transition-opacity duration-200">Price</a>
          <a href="#projects" className="hover:opacity-70 transition-opacity duration-200">Projects</a>
          <button
            onClick={onContactClick}
            className="hover:opacity-70 transition-opacity duration-200 uppercase cursor-pointer outline-none bg-transparent border-0 text-[#D7E2EA] font-medium tracking-wider"
          >
            Contact
          </button>
        </div>
      </FadeIn>

      {/* ── Hero heading — overflow-hidden clips the slide-up animation ── */}
      <div className="w-full overflow-hidden shrink-0 z-20 relative">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center select-none mt-6 sm:mt-4 md:-mt-5"
            style={{ fontSize: 'clamp(14vw, 17.5vw, 220px)' }}
          >
            Hi, i&apos;m sekhar
          </h1>
        </FadeIn>
      </div>

      {/* ── Portrait — absolute, centred X, bottom-anchored on sm+, midpoint on mobile ── */}
      <div
        className="
          absolute left-1/2 -translate-x-1/2 z-10
          w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]
          top-1/2 -translate-y-1/2
          sm:top-auto sm:translate-y-0 sm:bottom-0
        "
      >
        <FadeIn delay={0.6} y={30} duration={0.9}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Portrait of Sekhar"
              className="w-full h-auto object-contain pointer-events-none select-none"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* ── Flex spacer pushes bottom bar to foot of viewport ── */}
      <div className="flex-1" />

      {/* ── Bottom bar ── */}
      <div className="relative z-20 w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end pointer-events-none">

        {/* Left — descriptor text */}
        <FadeIn delay={0.35} y={20} className="pointer-events-auto">
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-left select-none max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a 3d creator &amp; developer driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        {/* Right — contact CTA */}
        <FadeIn delay={0.5} y={20} className="pointer-events-auto">
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
