import React from 'react';
import { FadeIn } from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  // Exact text from the original spec (personalised for Sekhar)
  const bioText =
    "With more than five years of experience in design and engineering, i focus on branding, web design, and user experience. i truly enjoy working with businesses that aim to stand out and present their best image. Let\u2019s build something incredible together!";

  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#0C0C0C] flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 w-full"
      style={{ overflowX: 'clip' }}
    >
      {/* ── Corner 3-D images ── */}

      {/* Top-left: Moon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt=""
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain select-none"
          />
        </FadeIn>
      </div>

      {/* Bottom-left: abstract 3-D */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt=""
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain select-none"
          />
        </FadeIn>
      </div>

      {/* Top-right: Lego */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt=""
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain select-none"
          />
        </FadeIn>
      </div>

      {/* Bottom-right: 3-D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt=""
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain select-none"
          />
        </FadeIn>
      </div>

      {/* ── Centre content ── */}
      <div className="relative z-10 flex flex-col items-center text-center w-full">

        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Character-by-character scroll-reveal paragraph */}
        <AnimatedText
          text={bioText}
          className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px] text-center"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />

        {/* Gap */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* CTA */}
        <FadeIn delay={0.2} y={20}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
