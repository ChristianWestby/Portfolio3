import { useEffect, useState } from 'react';
import LogoSlimfunk from './LogoSlimfunk';
import LogoChristian from './LogoChristian';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 border-b ${
        scrolled
          ? 'bg-beige text-[#1c293a] border-gray-300 shadow-md'
          : 'bg-[#1c293a] text-beige border-beige/30'
      }`}
    >
      <div className="relative max-w-6xl mx-auto px-6 py-4 flex items-center justify-center">
        {/* LogoSlimfunk – helt til venstre med 80px margin */}
        <div className="absolute left-0 pl-20">
          <LogoSlimfunk />
        </div>

        {/* LogoChristian – alltid sentrert */}
        <LogoChristian scrolled={scrolled} />

        {/* Navigasjon – høyrejustert */}
        <nav
          className="absolute right-0 hidden md:flex space-x-6 text-sm font-light tracking-wide"
        >
          <a href="#" className="hover:underline">Hjem</a>
          <a href="#prosjekter" className="hover:underline">Prosjekter</a>
          <a href="#om" className="hover:underline">Om meg</a>
          <a href="mailto:christianwestby@stud.noroff.no" className="hover:underline">Kontakt</a>
        </nav>
      </div>
    </header>
  );
}