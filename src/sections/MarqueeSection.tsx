import React, { useRef, useState, useEffect } from 'react';

const IMAGES = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif"
];

// Row 1: first 11, Row 2: remaining 10 — tripled for seamless loop
const row1 = [...IMAGES.slice(0, 11), ...IMAGES.slice(0, 11), ...IMAGES.slice(0, 11)];
const row2 = [...IMAGES.slice(11), ...IMAGES.slice(11), ...IMAGES.slice(11)];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(200); // start neutral so rows are centred

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
      // Exact formula from spec
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(raw);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 flex flex-col gap-3 w-full"
      style={{ overflowX: 'clip' }}
    >
      {/* Row 1 — moves RIGHT: translateX(offset - 200) */}
      <div
        className="flex gap-3 w-max"
        style={{
          transform: `translate3d(${offset - 200}px, 0, 0)`,
          willChange: 'transform',
        }}
      >
        {row1.map((url, i) => (
          <img
            key={`r1-${i}`}
            src={url}
            alt=""
            loading="lazy"
            draggable={false}
            className="rounded-2xl object-cover shrink-0 pointer-events-none select-none"
            style={{ width: 420, height: 270 }}
          />
        ))}
      </div>

      {/* Row 2 — moves LEFT: translateX(-(offset - 200)) */}
      <div
        className="flex gap-3 w-max"
        style={{
          transform: `translate3d(${-(offset - 200)}px, 0, 0)`,
          willChange: 'transform',
        }}
      >
        {row2.map((url, i) => (
          <img
            key={`r2-${i}`}
            src={url}
            alt=""
            loading="lazy"
            draggable={false}
            className="rounded-2xl object-cover shrink-0 pointer-events-none select-none"
            style={{ width: 420, height: 270 }}
          />
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
