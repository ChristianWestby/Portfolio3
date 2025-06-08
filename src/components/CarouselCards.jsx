import { Link } from 'react-router-dom';
import ProjectLinks from '@components/ProjectLinks';
import Profilbilde2 from '@images/Profilbilde2.png';
import BrLineLight from './BrLineLight';

export default function CarouselCards() {
  return (
   <div className="flex overflow-x-auto gap-4 sm:gap-6 py-10 px-4 scrollbar-hide lg:justify-center lg:mx-auto lg:w-full lg:max-w-6xl">
      {/* Kort 1 – Om meg */}
      <div className="w-[220px] sm:w-[260px] md:w-[300px] bg-[#1c293a] text-white border border-beige/30 p-4 sm:p-5 shadow-lg flex flex-col items-center justify-between rounded-xl">
        <img
          src={Profilbilde2}
          alt="Christian Westby"
          className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover mb-4 border border-beige/30"
        />
        <h3 className="text-base md:text-lg font-thin mb-2">Om meg</h3>
        <BrLineLight />
        <p className="text-xs sm:text-sm text-white text-center">
          Frontend-utvikler med interesse for visuell kode, design og digitale opplevelser.
        </p>
        <Link
          to="/about"
          className="mt-5 text-sm underline hover:opacity-80 transition"
        >
          Les mer
        </Link>
      </div>

      {/* Kort 2 – Prosjekter */}
      <div className="w-[220px] sm:w-[260px] md:w-[300px] bg-[#1c293a] text-white border border-beige/30 p-4 sm:p-5 shadow-lg flex flex-col justify-between rounded-xl">
        <h3 className="text-base md:text-lg font-thin mb-4 text-center">Prosjekter</h3>
        <BrLineLight />
        <div className="flex-1 mt-2">
          <ProjectLinks />
        </div>
        <Link
          to="/projectspage"
          className="mt-4 text-sm underline hover:opacity-80 transition text-center block"
        >
          Se alle prosjekter
        </Link>
      </div>

      {/* Kort 3 – Plassholder */}
      <div className="w-[220px] sm:w-[260px] md:w-[300px] bg-[#1c293a] text-beige border border-beige/30 rounded-xl p-4 sm:p-5 shadow-lg flex flex-col items-center justify-center">
        <span className="text-sm text-beige/60 italic text-center">
          Mer innhold kommer snart...
        </span>
      </div>
    </div>
  );
}