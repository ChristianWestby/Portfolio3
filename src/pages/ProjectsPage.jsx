// src/pages/ProjectsPage.jsx

import { Link } from 'react-router-dom';
import Operations from '@projects/Operations.png';
import Holidaze from '@projects/Holidaze.png';
import Petadoption from '@projects/Petadoption.png';
import Ecomshop from '@projects/Ecomshop.png';
import Portfolio from '@projects/Portfolio.png';
import Sience from '@projects/Sience.png';
import BrLine from '@components/BrLine';
import BrLine200 from '../components/BrLine200';

const projects = [
  {
    title: 'Agent Dashboard',
    description: 'Mission feed, post-op logging og kontrollrom i militær stil. Brukt Tailwind, API og autentisering.',
    image: Operations,
    link: 'https://christiancatailwind.netlify.app',
  },
  {
    title: 'Holidaze Booking',
    description: 'Komplett bookingsystem med venue admin. Laget med React, Noroff API og Tailwind.',
    image: Holidaze,
    link: 'https://holidaze-christian.netlify.app',
  },
  {
    title: 'Pet Adoption Shelter',
    description: 'Front-end eksamen. Fokus på tilgjengelighet, filter og API-integrasjon.',
    image: Petadoption,
    link: 'https://delicate-empanada-a9f173.netlify.app',
  },
  {
    title: 'eCom Shop',
    description: 'Enkel nettbutikk laget i JavaScript med produktvisning og handlekurv.',
    image: Ecomshop,
    link: 'https://tiny-beijinho-ef8822.netlify.app',
  },
  {
    title: 'Portfolio',
    description: 'Mitt første porteføljeprosjekt med retro CSS og HTML-design. Inspirert av gamle terminaler.',
    image: Portfolio,
    link: 'https://slimfunkdesignanddevelopment.netlify.app',
  },
  {
    title: 'Science Museum',
    description: 'Utstillingsside med fokus på kontrast og tilgjengelighet. Laget i HTML/CSS.',
    image: Sience,
    link: 'https://stupendous-shortbread-72ec79.netlify.app',
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-[#1c293a] text-beige font-Montserrat font-light min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-Montserrat font-thin text-center tracking-widest uppercase mb-16">
          Mine Prosjekter
        </h1>
       <BrLine200 />

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-beige/30 rounded-xl overflow-hidden shadow-lg bg-[#1f2e40] hover:bg-[#26384e] transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between min-h-[180px]">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-sm text-beige/80">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm underline hover:opacity-80 transition"
                >
                  Se prosjekt
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-block bg-beige text-[#1c293a] py-2 px-6 rounded-full text-sm font-medium tracking-wide hover:opacity-90 transition"
          >
            Tilbake til forsiden
          </Link>
        </div>
      </div>
    </div>
  );
}