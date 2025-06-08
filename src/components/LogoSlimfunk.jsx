export default function LogoSlimfunk({ className = '' }) {
  return (
    <div className={`border border-[#d4af73]/60 bg-[#0f172a] shadow-sm inline-block ${className}`}>
      <div className="flex flex-col items-center gap-1 px-2 py-1.5 lg:gap-1.5 lg:px-3 lg:py-2 text-[#d4af73]">
        <div className="text-2xl lg:text-3xl font-montserrat leading-none">S</div>
        <div className="text-[0.55rem] lg:text-[0.65rem] tracking-widest font-montserrat">SLIMFUNK</div>
        <div className="text-[0.45rem] lg:text-[0.55rem] uppercase tracking-wider font-light">Design & Dev</div>
        <div className="w-10 lg:w-12 h-[1px] bg-[#d4af73] mt-1" />
      </div>
    </div>
  );
}