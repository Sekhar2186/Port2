import React from 'react';
import { motion } from 'framer-motion';

interface LiveProjectButtonProps {
  href?: string;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ href, className = '' }) => {
  const content = (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-semibold uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer ${className}`}
    >
      Live Project
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};

export default LiveProjectButton;
