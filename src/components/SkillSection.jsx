import React from 'react';
import {
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiAdobeillustrator,
  SiCanva,
  SiTailwindcss,
  SiVite,
  SiTypescript,
  SiPostman,
 
  SiNetlify,
} from 'react-icons/si';
import BrLine200 from './BrLine200';

export default function SkillsSection() {
  return (
    <section
      className="bg-[#1c293a] text-white px-6 py-20 font-montserrat rounded-xl"
      id="skills"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-thin text-center mb-16 tracking-widest uppercase">
          Min Frontend Kompetanse
        </h2>
        <BrLine200 />
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 text-left">
          {/* UI/UX */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-[#f5f5dc]">
              🎨 UI/UX & Designverktøy
            </h3>
            <p className="text-sm text-beige/80">
              Jeg designer med brukeren i fokus og trives med verktøy for prototyping og visuell design.
            </p>
            <ul className="text-sm text-beige/70 space-y-1">
              <li className="flex items-center gap-2"><FaFigma /> Figma</li>
              <li className="flex items-center gap-2"><SiAdobeillustrator /> Adobe XD</li>
              <li className="flex items-center gap-2"><SiCanva /> Canva</li>
            </ul>
          </div>

          {/* HTML / CSS / JS */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-[#f5f5dc]">
              💻 HTML / CSS / JS
            </h3>
            <p className="text-sm text-beige/80">
              Solid grunnlag i webens kjerneteknologier, med moderne JavaScript.
            </p>
            <ul className="text-sm text-beige/70 space-y-1">
              <li className="flex items-center gap-2"><FaHtml5 /> HTML5 & Semantikk</li>
              <li className="flex items-center gap-2"><FaCss3Alt /> CSS3 / Tailwind</li>
              <li className="flex items-center gap-2"><FaJsSquare /> JavaScript ES6+</li>
              <li className="flex items-center gap-2"><SiTypescript /> TypeScript (grunnleggende)</li>
            </ul>
          </div>

          {/* Frameworks */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-[#f5f5dc]">
              ⚛️ Rammeverk & Biblioteker
            </h3>
            <p className="text-sm text-beige/80">
              Erfaring med React og relaterte verktøy fra prosjektarbeid og eksamen.
            </p>
            <ul className="text-sm text-beige/70 space-y-1">
              <li className="flex items-center gap-2"><FaReact /> React</li>
              <li className="flex items-center gap-2"><SiVite /> Vite</li>
              <li className="flex items-center gap-2"><SiTailwindcss /> Tailwind CSS</li>
              <li className="flex items-center gap-2"><FaReact /> React Router</li>
            </ul>
          </div>

          {/* Dev Tools */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-[#f5f5dc]">
              🛠️ Workflow & Testing
            </h3>
            <p className="text-sm text-beige/80">
              Gode utviklingsrutiner og kontroll på deploy og versjonering.
            </p>
            <ul className="text-sm text-beige/70 space-y-1">
              <li className="flex items-center gap-2"><FaGitAlt /> Git & <FaGithub /> GitHub</li>
              <li className="flex items-center gap-2"><SiNetlify /> Netlify</li>
              
              <li className="flex items-center gap-2"><SiPostman /> Postman</li>
            </ul>
          </div>

          {/* Teknisk hobby & utforskning */}
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-[#f5f5dc]">
              🧩 Teknisk hobby & utforskning
            </h3>
            <p className="text-sm text-beige/80">
              Jeg har stor interesse for teknologi, og liker å eksperimentere og bygge ting selv.
            </p>
            <ul className="text-sm text-beige/70 space-y-1">
              <li className="flex items-center gap-2">🔧 Bygger egne PC-er</li>
              <li className="flex items-center gap-2">🦾 Lego Technic med motorer</li>
              <li className="flex items-center gap-2">🍏 Erfaring med både Mac og Windows</li>
              <li className="flex items-center gap-2">🧠 Utforsker Raspberry Pi 5.0</li>
              <li className="flex items-center gap-2">🗄️ Grunnleggende SQL og databaser</li>
              <li className="flex items-center gap-2">🐧 Interessert i Linux og terminalbruk</li>
              <li className="flex items-center gap-2">🐍 Lærer meg Python</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}