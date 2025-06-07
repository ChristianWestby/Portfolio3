// src/pages/Home.jsx
import BrLine from '@components/BrLine';
import ProjectLinks from '@components/ProjectLinks';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import CarouselCards from '@components/CarouselCards';
import Section from '@components/Section'; 
import SkillsSection from '@components/SkillSection'; 
import ContactInfo from '@components/ContactInfo';

export default function Home() {
  return (
    <>
      <Navbar />
        <div className="bg-[#1c293a] mt-[180px] text-white min-h-screen px-6 pt-32 pb-20 flex flex-col items-start">
        <section className="w-full max-w-4xl mb-20 text-left pl-20">
            <p className="text-lg md:text-5xl font-light tracking-wide">
            Frontend Developer
            </p>
            <BrLine />
            <p className="text-lg md:text-xl font-light tracking-wide">
            med interesse for design, funksjon og digitale opplevelser.
            </p>
            <BrLine />
        </section>
        </div>

      <section className="w-full max-w-4xl text-center mb-20 px-6 mx-auto">
        <BrLine />
        
        <SkillsSection />
       
        <BrLine />
      </section>

      {/* Carousel Cards seksjon */}
      <Section className="bg-[#1c293a] text-beige border-gray-800  py-12">
        <CarouselCards />
      </Section>

      {/* Prosjekter */}
      <section className="w-full max-w-5xl mt-28 px-4 mx-auto">
       
         
      
      </section>

      <Footer />
    </>
  );
}