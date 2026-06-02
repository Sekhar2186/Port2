import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import ContactButton from '../components/ContactButton';

interface FooterProps {
  onContactClick: () => void;
}

const LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Sekhar2186',
    icon: <Github size={18} />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/k-soma-venkata-sekhar',
    icon: <Linkedin size={18} />,
  },
  {
    label: 'Old Portfolio',
    href: 'https://sekhar-kurapati.vercel.app/',
    icon: <ExternalLink size={18} />,
  },
];

const NAV = [
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
];

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => (
  <footer className="bg-[#0C0C0C] border-t border-[#D7E2EA]/[0.07] px-5 sm:px-8 md:px-10 pt-16 pb-10 w-full relative z-20">
    <div className="max-w-5xl mx-auto">
      {/* Top row — CTA + name */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-black uppercase leading-none tracking-tight select-none"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
        >
          Let&apos;s talk
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ContactButton onClick={onContactClick} />
        </motion.div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#D7E2EA]/[0.08] mb-10" />

      {/* Bottom row — nav · social · copy */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
        {/* Nav links */}
        <nav className="flex items-center gap-6">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium hover:text-[#D7E2EA] transition-colors duration-200"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-5">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              title={l.label}
              className="text-[#D7E2EA]/40 hover:text-[#D7E2EA] transition-colors duration-200"
            >
              {l.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[0.7rem] text-[#D7E2EA]/25 uppercase tracking-widest font-light">
          © {new Date().getFullYear()} K Soma Venkata Sekhar
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
