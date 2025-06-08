// src/pages/Home.jsx
import BrLine from '@components/BrLine';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import CarouselCards from '@components/CarouselCards';
import Section from '@components/Section'; 
import SkillsSection from '@components/SkillSection'; 
// Importer video først
import blinkendevann from "../videos/blinkendevann.mp4";


export default function Home() {
  return (
    <>
      <Navbar />
        <div className="bg-[#1c293a] text-white min-h-screen px-6 pt-[180px] pb-20 flex flex-col items-start">
        <section className="w-full max-w-4xl mb-20 text-center md:text-left md:pl-20 mx-auto lg:mt-10 lg:-ml-9">
        <p className="text-lg md:text-5xl font-light tracking-wide">
            Frontend Developer
        </p>
        <BrLine />
        <p className="text-lg md:text-xl font-light tracking-wide">
            med lidenskap for design, inovative løsninger og funksjoner og digitale opplevelser.
        </p>
        <BrLine />
        </section>
        </div>

       <section className="relative w-full text-center mb-20 overflow-hidden">
        {/* Bakgrunnsvideo i fullskjermbredde */}
        <video
            src={blinkendevann}
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
        />

        {/* Innhold oppå video */}
        <div className="relative z-10 max-w-4xl px-6 mx-auto">
            <BrLine />
            <SkillsSection />
            <BrLine />
        </div>
        </section>

      {/* Carousel Cards seksjon */}
      <Section className="bg-[#1c293a] text-beige border-gray-800 py-12 lg:flex lg:justify-center">
        <CarouselCards />
      </Section>

      {/* Prosjekter */}
      <section className="w-full max-w-5xl mt-28 px-4 mx-auto">
       
         
      
      </section>

      <Footer />
    </>
  );
}