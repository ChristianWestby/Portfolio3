import BrLine200 from "./BrLine200";
import BrLine from "./BrLine";

export default function Section({ title, children, className = '' }) {
  return (
    <section className={`w-full min-h-[80vh] border-x-gray-800 bg-[#f5f5dc] text-[#1c293a] py-32 px-6 flex flex-col items-center justify-center ${className}`}>
      <div className="w-full max-w-6xl mx-auto space-y-16 text-center">
        {title && (
          <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-wide mb-8">
            {title}
          </h2>
        )}

        {/* Erfaring og utdanning */}
        <div className="w-full border border-orange bg-[#1c293a] text-white px-8 py-10 rounded-xl text-left space-y-10">
          <div>
            <h3 className="text-2xl font-thin mb-6 text-center font-montserrat">Erfaring og utdannelse</h3>
            <BrLine200 />
            <ul className="text-sm space-y-6 font-light font-montserrat mt-6">
              <li>
                <strong>Sikkerhetsrådgiver</strong> – 10 år<br />
                <span>Utdannelse: BI – Sikkerhetsledelse</span>
                <BrLine />
              </li>
              <li>
                <strong>Akutt- og sikkerhetspsykiatri</strong>, Blakstad Sykehus, Vestre Viken HF – 10 år<br />
                <span>Utdannelse: Helsefagarbeider m/autorisasjon</span>
                <BrLine />
              </li>
              <li>
                <strong>Frontend-utvikler</strong> – 2 år skole<br />
                <span>Utdannelse: Frontend Development, Noroff Campus Oslo</span>
                <BrLine />
              </li>
              <li>
                <strong>Cybersikkerhet</strong> – påbegynnes høsten 2025<br />
                <span>Gokstad Akademiet – 2-årig utdanning (nettbasert m/samlinger)</span>
                <BrLine />
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-thin mb-6 mt-12 text-center font-montserrat">Særlige ferdigheter</h3>
            <BrLine200 />
            <ul className="flex flex-wrap gap-4 mt-6 justify-center text-sm font-light font-montserrat">
              {[
                'Nysgjerrig', 'Kreativ', 'Løsningsorientert', 'Analytisk', 'Strukturert', 'Nøye',
                'Lederegenskaper', 'Selvgående', 'Omstillingsevne', 'Inkluderende', 'Samarbeidende', 'Samlende',
              ].map((skill, index) => (
                <li key={index} className="bg-[#728094] text-white px-4 py-2 rounded-full">{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ekstra innhold */}
        {children}
      </div>
    </section>
  );
}