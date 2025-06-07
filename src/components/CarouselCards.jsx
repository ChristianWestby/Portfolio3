import { Link } from 'react-router-dom';
import ProjectLinks from '@components/ProjectLinks';
import Profilbilde2 from '@images/Profilbilde2.png'; // Importer profilbildet

export default function CarouselCards() {
  return (
    <div className="flex overflow-x-auto gap-6 py-12 px-4 scrollbar-hide">
      {/* Card 1 – Om meg */}
      <div className="min-w-[300px] bg-[#1c293a] text-beige border border-beige/30 rounded-2xl p-6 shadow-lg flex flex-col items-center justify-between">
        <img
            src={Profilbilde2}
            alt="Christian Westby"
            className="w-24 h-24 rounded-full object-cover mb-4 border border-beige/30"
          />
        <h3 className="text-xl font-semibold mb-2">Om meg</h3>
        <p className="text-sm text-beige/80 text-center">
          Frontend-utvikler med interesse for visuell kode, design og digitale opplevelser.
        </p>
        <Link
          to="/about"
          className="mt-6 text-sm underline hover:opacity-80 transition"
        >
          Les mer
        </Link>
      </div>

      {/* Card 2 – Prosjekter med ProjectLinks */}
      <div className="min-w-[300px] max-w-[350px] bg-[#1c293a] text-beige border border-beige/30 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
        <h3 className="text-xl font-semibold mb-4 text-center">Prosjekter</h3>
        <div className="flex-1">
          <ProjectLinks />
        </div>
        <Link
          to="/projects"
          className="mt-6 text-sm underline hover:opacity-80 transition text-center block"
        >
          Se alle prosjekter
        </Link>
      </div>

      {/* Card 3 – Tom plass */}
      <div className="min-w-[300px] bg-[#1c293a] text-beige border border-beige/30 rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center">
        <span className="text-sm text-beige/60 italic">Mer innhold kommer snart...</span>
      </div>
    </div>
  );
}