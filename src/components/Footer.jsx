export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-beige text-sm py-8 px-4 md:px-8 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div className="font-semibold tracking-wide">© {new Date().getFullYear()} Christian Westby</div>
        <div className="space-x-4">
          <a href="/" className="hover:underline transition">Hjem</a>
          <a href="#prosjekter" className="hover:underline transition">Prosjekter</a>
          <a href="mailto:christianwestby@stud.noroff.no" className="hover:underline transition">Kontakt</a>
        </div>
      </div>
    </footer>
  );
}