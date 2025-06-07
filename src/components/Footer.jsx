import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1c293a] text-beige px-6 pt-20 pb-10 border-t border-beige/30 mt-20 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 flex-wrap justify-between">

        {/* Info og kontakt */}
        <div className="flex-1 min-w-[250px] text-center md:text-left">
          <div className="mb-6">
            <p className="text-lg font-semibold tracking-wide">Christian Westby</p>
            <p className="text-sm opacity-80">Frontend Developer</p>
          </div>
          <div className="space-y-1">
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
        <div className="flex-1 min-w-[250px]">
          <p className="uppercase font-semibold mb-4">Lenker</p>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Hjem
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:underline">
                Prosjekter
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                Om meg
              </Link>
            </li>
          </ul>
        </div>

        {/* Sosiale lenker */}
        <div className="flex-1 min-w-[250px]">
          <p className="uppercase font-semibold mb-4">Følg meg</p>
          <ul className="space-y-2">
            <li>
              <a
                href="https://linkedin.com/in/christianwestby"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ChristianWestby"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 border-t border-beige/30 pt-6 text-center text-xs text-beige/70 max-w-md mx-auto">
        &copy; {new Date().getFullYear()} Christian Westby. Alle rettigheter reservert.
      </div>
    </footer>
  );
}