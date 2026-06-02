import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

interface Project {
  id: string;
  name: string;
  category: string;
  img1: string;
  img2: string;
  img3: string;
  liveUrl: string;
}

const PROJECTS: Project[] = [
  {
    id: "01",
    name: "AutoStack",
    category: "Agentic AI · LLMs",
    img1: "/autostack_hero.png",
    img2: "/autostack_dashboard.png",
    img3: "/autostack_dashboard.png",
    liveUrl: "https://auto-stack-mu.vercel.app/"
  },
  {
    id: "02",
    name: "Luxro",
    category: "Web Development",
    img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    img3: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    liveUrl: "https://luxro-ten.vercel.app/"
  },
  {
    id: "03",
    name: "CryptoPulse",
    category: "Data Analytics",
    img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    img3: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    liveUrl: "https://crypto-currency-tracker-kappa.vercel.app"
  }
];

const TOTAL = PROJECTS.length;

/* ─── Single sticky card ─── */
interface CardProps extends Project {
  index: number;
  scrollProgress: MotionValue<number>;
}

const ProjectCard: React.FC<CardProps> = ({
  index, id, name, category, img1, img2, img3, liveUrl, scrollProgress
}) => {
  // Cards further back in the stack shrink slightly
  const targetScale = 1 - (TOTAL - 1 - index) * 0.03;
  const scale = useTransform(scrollProgress, [index / TOTAL, 1], [1, targetScale]);

  return (
    /* h-[85vh] slot + sticky — each card anchors to top-24 md:top-32 */
    <div className="h-[85vh] flex items-start justify-center sticky top-24 md:top-32">
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
          borderRadius: 'clamp(30px, 4vw, 60px)',
        }}
        className="relative w-full max-w-5xl border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 shadow-2xl select-none overflow-hidden"
      >
        {/* ── Top row: number · category · title · live button ── */}
        <div className="flex justify-between items-center w-full gap-4">

          <div className="flex items-center gap-3 sm:gap-5 md:gap-8 min-w-0">
            {/* Big index number */}
            <span
              className="font-black leading-none text-[#D7E2EA] shrink-0"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 110px)' }}
            >
              {id}
            </span>

            {/* Category + title */}
            <div className="flex flex-col gap-0.5 text-left min-w-0">
              <span className="text-[0.6rem] sm:text-xs uppercase tracking-[0.18em] text-[#D7E2EA]/50 font-light truncate">
                {category}
              </span>
              <h3
                className="font-semibold uppercase text-white tracking-wide leading-tight truncate"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 2.4rem)' }}
              >
                {name}
              </h3>
            </div>
          </div>

          {/* Live-project ghost pill — spec: rounded-full, border-2, uppercase, tracking-widest */}
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-5 py-2 sm:px-8 sm:py-3 text-[0.65rem] sm:text-sm hover:bg-[#D7E2EA]/10 transition-colors"
          >
            <span className="hidden sm:inline">Live Project</span>
            <ExternalLink size={14} className="shrink-0" />
          </a>
        </div>

        {/* ── Image grid: 40% left col (2 stacked) · 60% right col (1 tall) ── */}
        <div
          className="grid gap-3 flex-1 min-h-0"
          style={{ gridTemplateColumns: '40% 1fr' }}
        >
          {/* Left column */}
          <div className="flex flex-col gap-3 min-h-0">
            <div
              className="overflow-hidden border border-[#D7E2EA]/10 flex-1"
              style={{
                borderRadius: 'clamp(20px, 3vw, 50px)',
                height: 'clamp(130px, 16vw, 230px)',
              }}
            >
              <img
                src={img1}
                alt={`${name} screenshot 1`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.04]"
              />
            </div>
            <div
              className="overflow-hidden border border-[#D7E2EA]/10 flex-1"
              style={{
                borderRadius: 'clamp(20px, 3vw, 50px)',
                height: 'clamp(160px, 22vw, 340px)',
              }}
            >
              <img
                src={img2}
                alt={`${name} screenshot 2`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.04]"
              />
            </div>
          </div>

          {/* Right column — 1 tall image */}
          <div
            className="overflow-hidden border border-[#D7E2EA]/10"
            style={{ borderRadius: 'clamp(20px, 3vw, 50px)' }}
          >
            <img
              src={img3}
              alt={`${name} screenshot 3`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.04]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* ─── Projects section ─── */
export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pb-24 relative z-20 w-full"
    >
      <div className="max-w-5xl mx-auto pt-16 sm:pt-20">
        {/* Section heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase tracking-tight text-center mb-12 md:mb-20 leading-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Sticky stacking cards */}
        <div className="relative flex flex-col">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              scrollProgress={scrollYProgress}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
