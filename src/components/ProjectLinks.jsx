import Holidaze from "@projects/Holidaze.png";
import Ecomshop from "@projects/Ecomshop.png";

export default function ProjectLinks() {
  return (
    <section className="w-full max-w-5xl mt-28 px-4 mx-auto bg-[#1c293a] rounded-xl py-8">
      <div className="space-y-6">
        {/* Holidaze */}
        <a
          href="https://holidaze-christian.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-[#f5f5dc] text-[#1c293a] hover:opacity-90 transition rounded-lg p-4"
        >
          <img
            src={Holidaze}
            alt="Holidaze prosjekt"
            className="w-20 h-20 object-cover rounded-lg border border-[#1c293a]/20"
          />
          <div>
            <h4 className="font-semibold text-lg">Holidaze – Bookingplattform</h4>
            <p className="text-sm opacity-80">Frontend med React og Noroff API</p>
          </div>
        </a>

        {/* eComShop */}
        <a
          href="https://tiny-beijinho-ef8822.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-[#f5f5dc] text-[#1c293a] hover:opacity-90 transition rounded-lg p-4"
        >
          <img
            src={Ecomshop}
            alt="eComShop prosjekt"
            className="w-20 h-20 object-cover rounded-lg border border-[#1c293a]/20"
          />
          <div>
            <h4 className="font-semibold text-lg">eComShop – Nettbutikk</h4>
            <p className="text-sm opacity-80">JavaScript + Netlify + Strukturelt API</p>
          </div>
        </a>
      </div>
    </section>
  );
}