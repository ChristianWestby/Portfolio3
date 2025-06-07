import { Link } from 'react-router-dom';
import ContactInfo from '../components/ContactInfo';
import BrLine200 from '../components/BrLine200';

// Bildene importeres
import Profilbilde2 from '@images/Profilbilde2.png';
import Profilbilde5 from '@images/Profilbilde5.jpg';
import ProfilbildeAndreas from '@images/ProfilbildeAndreas.jpg';
import ProfilbildeVivino from '@images/ProfilbildeVivino.jpg';

export default function About() {
  return (
    <div className="bg-[#f5f5dc] min-h-screen px-6 py-20 text-[#1c293a] font-montserrat">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl md:text-5xl font-thin text-center mb-8">
          Om meg
        </h1>
        <BrLine200 />

        <p>
          Hei! Jeg heter Christian Westby, og er en frontend-utvikler med interesse for utvikling av nye digitale løsninger og funksjoner. Er ferdig med 2 årig FrontEnd Development utdanning ved Noroff Campus Oslo, og har videre bred erfaring fra akuttpsykiatri, sikkerhet og analyse og detaljvare-handelen i Norge. Både som leder og som kurs og foredragsholder.
        </p>

        <p>
          Jeg brenner for å lage løsninger som er både vakre og funksjonelle. Jeg liker å jobbe strukturert, og bruker moderne verktøy som React, Tailwind CSS, Vite, og Git. Jeg har også erfaring med API-integrasjoner og tilgjengelighet.
        </p>

        <p>
          Målet mitt er å utvikle brukergrensesnitt som føles naturlige, elegante og presise – med fokus på både brukeropplevelse og kodekvalitet.
        </p>

        <p>
          Når jeg ikke koder, er jeg opptatt av teknologi, og å lære nye ting og utvikle meg i kodehverdagen.
        </p>

        <p>Med Vennelig Hilsen</p>
        <p>Christian Westby</p>
        <div className="mt-4">
          <ContactInfo />
        </div>

        {/* 🔲 Seksjon for bilder */}
        <div className="pt-10 bg-[#0f172a] rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-white text-center mb-6">
            Profilbilder / Personlig stil 
          </h2>
          <BrLine200 />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
            {[Profilbilde2, Profilbilde5, ProfilbildeAndreas, ProfilbildeVivino].map(
              (img, index) => (
                <div
                  key={index}
                  className="w-full h-40 rounded-xl overflow-hidden shadow-inner"
                >
                  <img
                    src={img}
                    alt={`Profilbilde ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* Tilbake-knapp */}
        <div className="pt-12 text-center">
          <Link
            to="/"
            className="inline-block bg-[#0f172a] text-[#f3f4e9] px-6 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition"
          >
            Tilbake til forsiden
          </Link>
        </div>
      </div>
    </div>
  );
}