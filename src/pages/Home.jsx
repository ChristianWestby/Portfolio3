import BrLine from '@components/BrLine';
import ProjectLinks from '@components/ProjectLinks';
import LogoSlimfunk from '@components/LogoSlimfunk';
import LogoChristian from '@components/LogoChristian';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import CarouselCards from '@components/CarouselCards';
import Section from '@components/Section'; 

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="bg-[#1c293a] mt-[180px] text-beige min-h-screen px-6 pt-32 pb-20 flex flex-col items-center">
        {/* Introseksjon */}
        <section className="w-full max-w-4xl text-center space-y-8">
          <LogoSlimfunk />
          <LogoChristian scrolled={false} />
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest">
            Christian Westby
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wide">
            Jr. Frontend Developer med interesse for visuell kode og digitale opplevelser.
          </p>

          <BrLine />

          <p className="text-sm md:text-base">
            Velkommen til min portefølje. Her finner du prosjektene og erfaringene mine.
          </p>
          <p className="text-sm md:text-base">Ta gjerne kontakt:</p>
          <p className="text-sm md:text-base">
            <a
              href="mailto:christianwestby@stud.noroff.no"
              className="underline hover:opacity-80 transition"
            >
              christianwestby@stud.noroff.no
            </a>
          </p>

          <BrLine />
        </section>

        {/* Carousel Cards seksjon */}
        <Section className="bg-[#1c293a] text-beige border-t border-beige/20">
          <CarouselCards />
        </Section>

        {/* Prosjekter */}
        <section className="w-full max-w-5xl mt-28 px-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-center mb-10">
            Utvalgte prosjekter
          </h2>
          <ProjectLinks />
        </section>
      </div>

      <Footer />
    </>
  );
}