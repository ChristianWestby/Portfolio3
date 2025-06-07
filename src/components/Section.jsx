export default function Section({ title, children, className = '' }) {
  return (
    <section className={`w-full min-h-[80vh] bg-[#f5f5dc] text-[#1c293a] py-24 px-6 flex flex-col items-center justify-center ${className}`}>
      <div className="w-full max-w-6xl mx-auto space-y-12 text-center">
        {title && (
          <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-wide">
            {title}
          </h2>
        )}

        {/* Placeholder for bilde */}
        <div className="w-full h-64 bg-[#d9d6cc] rounded-xl flex items-center justify-center">
          <span className="text-[#1c293a] text-lg opacity-70">[Plassholder for bilde]</span>
        </div>

        {/* Eventuelt ekstra innhold */}
        {children}
      </div>
    </section>
  );
}