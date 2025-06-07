import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 border-b h-[180px] ${
        scrolled
          ? 'bg-beige text-[#1c293a] border-gray-300 shadow-md'
          : 'bg-[#1c293a] text-white border-beige/30'
      }`}
    >
      {/* LogoSlimfunk – helt til venstre */}
      <div className="absolute top-1/2 left-20 transform -translate-y-1/2 z-10">
        <LogoSlimfunk className="scale-90" />
      </div>

      {/* LogoChristian – alltid sentrert */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <LogoChristian scrolled={scrolled} />
      </div>

      {/* Navigasjon – helt til høyre */}
      <nav className="absolute top-1/2 right-20 transform -translate-y-1/2 hidden md:flex space-x-6 text-sm font-light tracking-wide">
        <Link to="/" className="hover:underline">Hjem</Link>
        <Link to="/projectspage" className="hover:underline">Prosjekter</Link>
        <Link to="/about" className="hover:underline">Om meg</Link>
        <a href="mailto:christianwestby@stud.noroff.no" className="hover:underline">Kontakt</a>
      </nav>
    </header>
  );
}