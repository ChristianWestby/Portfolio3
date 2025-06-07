import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-[#1c293a] text-beige min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-8 text-lg">
        <h1 className="text-4xl font-bold text-center uppercase tracking-widest">Om meg</h1>

        <p>
          Hei! Jeg heter Christian Westby, og er en frontend-utvikler med interesse for visuell kode og digitale opplevelser. Jeg studerer ved Noroff i Oslo, og har bakgrunn fra akuttpsykiatri og sikkerhet.
        </p>

        <p>
          Jeg brenner for å lage løsninger som er både vakre og funksjonelle. Jeg liker å jobbe strukturert, og bruker moderne verktøy som React, Tailwind CSS, Vite, og Git. Jeg har også erfaring med API-integrasjoner og tilgjengelighet.
        </p>

        <p>
          Målet mitt er å utvikle brukergrensesnitt som føles naturlige, elegante og presise – med fokus på både brukeropplevelse og kodekvalitet.
        </p>

        <p>
          Når jeg ikke koder, er jeg opptatt av filosofi, teknologi, og å lære nye ting. Jeg håper porteføljen min gir deg et innblikk i hvordan jeg jobber og tenker.
        </p>

        <p>
          Ta gjerne kontakt på:{" "}
          <a
            href="mailto:christianwestby@stud.noroff.no"
            className="underline hover:opacity-80"
          >
            christianwestby@stud.noroff.no
          </a>
        </p>

        {/* 🔲 Seksjon for bilder */}
        <div className="pt-10">
          <h2 className="text-xl font-semibold text-center mb-6">Profilbilder / Personlig stil</h2>
          <div className="flex justify-center gap-6">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="w-32 h-32 rounded-full bg-beige/20 hover:bg-beige/40 transition duration-300 flex items-center justify-center text-sm font-light text-beige/60 shadow-inner"
              >
                Bilde {n}
              </div>
            ))}
          </div>
        </div>

        {/* Tilbake-knapp */}
        <div className="pt-12 text-center">
          <Link
            to="/"
            className="inline-block bg-beige text-[#1c293a] px-6 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition"
          >
            Tilbake til forsiden
          </Link>
        </div>
      </div>
    </div>
  );
}