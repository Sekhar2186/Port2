import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  let charIndex = 0;
  
  const wordSpans = words.map((word) => {
    const chars = Array.from(word);
    const start = charIndex;
    charIndex += chars.length;
    return {
      word,
      chars,
      startIndex: start,
      endIndex: charIndex,
    };
  });
  
  const totalChars = charIndex;

  return (
    <p ref={containerRef} className={className} style={style}>
      {wordSpans.map((w, wIdx) => (
        <span key={wIdx} className="inline-block whitespace-nowrap mr-2">
          {w.chars.map((char, cIdx) => {
            const index = w.startIndex + cIdx;
            // Map character index to its portion of scroll progress
            const startRange = index / totalChars;
            const endRange = (index + 1) / totalChars;
            
            return (
              <Character 
                key={cIdx} 
                char={char} 
                progress={scrollYProgress} 
                range={[startRange, endRange]} 
              />
            );
          })}
        </span>
      ))}
    </p>
  );
};

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ char, progress, range }) => {
  // Animate character opacity from 0.2 to 1 based on its progress range
  const opacity = useTransform(progress, range, [0.2, 1]);
  
  return (
    <span className="relative inline-block">
      {/* Invisible placeholder for correct sizing and wrapping */}
      <span className="opacity-0">{char}</span>
      {/* Absolute positioned animated character */}
      <motion.span style={{ opacity }} className="absolute inset-0 select-none">
        {char}
      </motion.span>
    </span>
  );
};
export default AnimatedText;
