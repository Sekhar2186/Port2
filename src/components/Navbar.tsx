import React from 'react';
import { FadeIn } from './FadeIn';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  return (
    <FadeIn delay={0} y={-20} tag="nav" className="w-full">
      <div className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 w-full">
        <div className="flex justify-between w-full text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <a href="#about" className="hover:opacity-70 transition-opacity duration-200">
            About
          </a>
          <a href="#services" className="hover:opacity-70 transition-opacity duration-200">
            Price
          </a>
          <a href="#projects" className="hover:opacity-70 transition-opacity duration-200">
            Projects
          </a>
          <button
            onClick={(e) => {
              e.preventDefault();
              onContactClick();
            }}
            className="hover:opacity-70 transition-opacity duration-200 uppercase cursor-pointer outline-none"
          >
            Contact
          </button>
        </div>
      </div>
    </FadeIn>
  );
};

export default Navbar;
