import React, { useState, useRef, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const elementCenterX = rect.left + rect.width / 2;
      const elementCenterY = rect.top + rect.height / 2;

      // Distance from mouse to element center
      const distanceX = e.clientX - elementCenterX;
      const distanceY = e.clientY - elementCenterY;

      // Check if cursor is within padding distance of element edge
      const isWithinPaddingX = Math.abs(distanceX) < (rect.width / 2) + padding;
      const isWithinPaddingY = Math.abs(distanceY) < (rect.height / 2) + padding;

      if (isWithinPaddingX && isWithinPaddingY) {
        setIsHovered(true);
        // Magnetic pull divided by strength factor
        const targetX = distanceX / strength;
        const targetY = distanceY / strength;
        setPosition({ x: targetX, y: targetY });
      } else {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, strength]);

  const style: React.CSSProperties = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: isHovered ? activeTransition : inactiveTransition,
    willChange: 'transform',
  };

  return (
    <div ref={elementRef} style={style} className={className}>
      {children}
    </div>
  );
};
export default Magnet;
