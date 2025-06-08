import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoSlimfunk from './LogoSlimfunk';
import LogoChristian from './LogoChristian';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 overflow-x-hidden transition-colors duration-300 border-b ${
        scrolled
          ? 'bg-beige text-[#1c293a] border-gray-300 shadow-md'
          : 'bg-[#1c293a] text-white border-beige/30'
      }`}
    >
      <div className="relative h-[100px] md:h-[140px] lg:h-[180px] px-4 sm:px-6 lg:px-12">
        {/* Logo venstre – skjules på mobil */}
        <div className="hidden md:block absolute top-1/2 left-4 sm:left-6 lg:left-20 transform -translate-y-1/2 z-10">
          <LogoSlimfunk className="scale-90 lg:scale-100" />
        </div>

        {/* Logo midt */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <LogoChristian scrolled={scrolled} />
        </div>

        {/* Navigasjon desktop – vises kun fra lg */}
        <nav className="hidden lg:flex absolute top-1/2 right-4 sm:right-6 lg:right-20 transform -translate-y-1/2 space-x-6 text-sm font-light tracking-wide">
          <Link to="/home" className="hover:underline">Hjem</Link>
          <Link to="/projectspage" className="hover:underline">Prosjekter</Link>
          <Link to="/about" className="hover:underline">Om meg</Link>
          <a href="mailto:christianwestby@stud.noroff.no" className="hover:underline">Kontakt</a>
        </nav>

        {/* Hamburger-knapp – vises under lg */}
        <button
          className="lg:hidden absolute top-[75px] right-4 sm:right-6 z-20"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-current"></span>
            <span className="block w-6 h-0.5 bg-current"></span>
            <span className="block w-6 h-0.5 bg-current"></span>
          </div>
        </button>
      </div>

      {/* Mobilmeny */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#1c293a] text-white py-8 text-center space-y-4 overflow-x-hidden">
          <Link to="/home" onClick={() => setMenuOpen(false)} className="block text-lg">Hjem</Link>
          <Link to="/projectspage" onClick={() => setMenuOpen(false)} className="block text-lg">Prosjekter</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block text-lg">Om meg</Link>
          <a href="mailto:christianwestby@stud.noroff.no" className="block text-lg">Kontakt</a>
        </div>
      )}
    </header>
  );
}