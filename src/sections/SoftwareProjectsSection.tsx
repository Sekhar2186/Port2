import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  tag: string;
  title: string;
  description: string;
  tech: string;
  status: string;
  statusColor: string;
  githubUrl: string;
  liveUrl?: string;
}

const PROJECTS: Project[] = [
  {
    id: "cancer-classification",
    tag: "Machine Learning",
    title: "Cancer Classification",
    description:
      "Bioinformatics research using PCA dimensionality reduction, SelectKBest feature selection, and XGBoost ensemble classifiers to predict cancer sub-types from high-dimensional gene expression data.",
    tech: "Python · Scikit-Learn · XGBoost · PCA",
    status: "Active",
    statusColor: "text-emerald-400",
    githubUrl: "https://github.com/Sekhar2186/cancer-classification",
  },
  {
    id: "pixel-revive",
    tag: "Computer Vision",
    title: "PixelRevive",
    description:
      "Restores degraded and scratched photographs using digital image processing — contour-based scratch detection, bilateral filtering, CLAHE contrast enhancement, and adaptive inpainting.",
    tech: "Python · OpenCV · Scikit-Image",
    status: "Active",
    statusColor: "text-emerald-400",
    githubUrl: "https://github.com/Sekhar2186/PixelRevive",
  },
  {
    id: "gesture-sense",
    tag: "Human–Computer Interaction",
    title: "GestureSense",
    description:
      "Real-time hand gesture recognition translating MediaPipe landmark vectors into system commands via custom SVM classifiers, with sub-millisecond inference latency from a standard webcam.",
    tech: "OpenCV · MediaPipe · SVM · Python",
    status: "Active",
    statusColor: "text-emerald-400",
    githubUrl: "https://github.com/Sekhar2186/GestureSense",
  },
];

export const SoftwareProjectsSection: React.FC = () => (
  <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 relative z-20 w-full">
    <div className="max-w-5xl mx-auto">
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <div className="text-center mb-14 sm:mb-20">
          <h2
            className="hero-heading font-black uppercase tracking-tight inline-block"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 120px)' }}
          >
            Engineering
          </h2>
          <p className="text-[#D7E2EA]/40 uppercase tracking-[0.2em] text-xs sm:text-sm mt-3 font-light">
            AI · Machine Learning · Computer Vision
          </p>
        </div>
      </FadeIn>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {PROJECTS.map((p, i) => (
          <FadeIn key={p.id} delay={i * 0.1} y={30} className="h-full">
            <div className="group h-full bg-white/[0.03] border border-[#D7E2EA]/[0.08] rounded-[28px] p-6 sm:p-7 flex flex-col gap-4 text-left transition-all duration-300 hover:border-[#D7E2EA]/25 hover:bg-white/[0.055] hover:shadow-[0_8px_32px_rgba(187,204,215,0.06)]">
              {/* Tag */}
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#BBCCD7]">
                {p.tag}
              </span>

              {/* Title */}
              <h3
                className="text-lg sm:text-xl font-semibold text-white leading-snug group-hover:text-[#D7E2EA] transition-colors"
              >
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#D7E2EA]/55 leading-relaxed font-light flex-1">
                {p.description}
              </p>

              {/* Footer */}
              <div className="pt-4 border-t border-white/[0.055]">
                <p className="text-[0.7rem] text-[#D7E2EA]/35 font-mono mb-3 leading-relaxed">
                  {p.tech}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-[0.7rem] font-bold uppercase tracking-wider ${p.statusColor}`}>
                    {p.status}
                  </span>
                  <div className="flex items-center gap-3">
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D7E2EA]/45 hover:text-white transition-colors"
                        title="GitHub"
                      >
                        <Github size={17} />
                      </a>
                    )}
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D7E2EA]/45 hover:text-white transition-colors"
                        title="Live"
                      >
                        <ExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default SoftwareProjectsSection;
