import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1c293a] text-beige px-4 sm:px-6 pt-14 pb-8 border-t border-beige/30 mt-20 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 sm:gap-12 flex-wrap justify-between text-center md:text-left">
        
        {/* Info og kontakt */}
        <div className="flex-1 min-w-[220px]">
          <div className="mb-4">
            <p className="text-base font-semibold tracking-wide">Christian Westby</p>
            <p className="text-sm opacity-80">Frontend Developer</p>
          </div>
          <div className="space-y-1 text-sm">
            <p>
              E-post:{' '}
              <a href="mailto:christianwestby@stud.noroff.no" className="underline">
                christianwestby@stud.noroff.no
              </a>
            </p>
            <p>Basert i Oslo, Norge</p>
          </div>
        </div>

        {/* Navigasjon */}
        <div className="flex-1 min-w-[220px]">
          <p className="uppercase font-semibold mb-3">Lenker</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/home" className="hover:underline">Hjem</Link></li>
            <li><Link to="/projectspage" className="hover:underline">Prosjekter</Link></li>
            <li><Link to="/about" className="hover:underline">Om meg</Link></li>
          </ul>
        </div>

        {/* Sosiale lenker */}
        <div className="flex-1 min-w-[220px]">
          <p className="uppercase font-semibold mb-3">Følg meg</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://linkedin.com/in/christianwestby" target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/ChristianWestby" target="_blank" rel="noopener noreferrer" className="hover:underline">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-beige/30 pt-5 text-center text-xs text-beige/60 max-w-md mx-auto">
        &copy; {new Date().getFullYear()} Christian Westby. Alle rettigheter reservert.
      </div>
    </footer>
  );
}