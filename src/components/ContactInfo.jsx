export default function ContactInfo() {
  return (
    <div className="bg-[#0f172a] text-white p-6 rounded-xl mt-10 w-full max-w-xl">
      <p className="text-sm md:text-base mb-2">Ta gjerne kontakt:</p>
      <p className="text-sm md:text-base">
        <a
          href="mailto:christianwestby@stud.noroff.no"
          className="underline hover:opacity-80 transition"
        >
          christianwestby@stud.noroff.no
        </a>
      </p>
      <p className="text-sm md:text-base">
        <a
          href="mailto:chriswes@online.no"
          className="underline hover:opacity-80 transition"
        >
          chriswes@online.no
        </a>
      </p>
    </div>
  );
}