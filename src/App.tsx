import { useState } from 'react';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import SoftwareProjectsSection from './sections/SoftwareProjectsSection';
import Footer from './sections/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="w-full bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
      <HeroSection         onContactClick={openContact} />
      <MarqueeSection />
      <AboutSection        onContactClick={openContact} />
      <ServicesSection />
      <ProjectsSection />
      <SoftwareProjectsSection />
      <Footer              onContactClick={openContact} />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
}

export default App;
