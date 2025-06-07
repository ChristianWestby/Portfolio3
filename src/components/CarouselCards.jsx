import { Link } from 'react-router-dom';
import ProjectLinks from '@components/ProjectLinks';
import Profilbilde2 from '@images/Profilbilde2.png'; 
import BrLine200 from './BrLine200';
import BrLineLight from './BrLineLight';

export default function CarouselCards() {
  return (
    <div className="flex overflow-x-auto gap-6 py-12 px-4 scrollbar-hide">
      
      {/* Kort 1 – Om meg */}
      <div className="min-w-[300px] bg-[#1c293a] text-white border border-beige/30 p-6 shadow-lg flex flex-col items-center justify-between rounded-xl">
        <img
          src={Profilbilde2}
          alt="Christian Westby"
          className="w-40 h-40 rounded-full object-cover mb-4 border border-beige/30"
        />
        <h3 className="text-xl font-thin mb-2">Om meg</h3>
        <BrLineLight />
        <p className="text-sm text-white text-center">
          Frontend-utvikler med interesse for visuell kode, design og digitale opplevelser.
        </p>
        <Link
          to="/about"
          className="mt-6 text-sm underline hover:opacity-80 transition"
        >
          Les mer
        </Link>
      </div>

      {/* Kort 2 – Prosjekter */}
      <div className="min-w-[300px] max-w-[350px] bg-[#1c293a] text-white border border-beige/30 p-6 shadow-lg flex flex-col justify-between rounded-xl">
        <h3 className="text-xl font-thin mb-4 text-center">Prosjekter</h3>
        <BrLineLight />
        <div className="flex-1">
          <ProjectLinks />
        </div>
          <Link to="/projectspage"
           className="mt-6 text-sm underline hover:opacity-80 transition text-center block"
         >
      Se alle prosjekter
    </Link>
      </div>

      {/* Kort 3 – Plassholder */}
      <div className="min-w-[300px] bg-[#1c293a] text-beige border border-beige/30 rounded-xl p-6 shadow-lg flex flex-col items-center justify-center">
        <span className="text-sm text-beige/60 italic">Mer innhold kommer snart...</span>
      </div>
    </div>
  );
}