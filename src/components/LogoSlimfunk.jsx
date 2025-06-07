export default function LogoSlimfunk({ className = '' }) {
  return (
    <div className={`border-2 border-gray inline-block ${className}`}>
      <div className="flex flex-col items-center gap-2 text-[#d4af73] bg-[#0f172a] p-4">
        <div className="text-[3.5rem] font-montserra leading-none">S</div>
        <div className="text-lg font-montserra tracking-widest">SLIMFUNK</div>
        <div className="text-xs uppercase tracking-wider font-light">Design and Development</div>
        <div className="w-24 h-[1px] bg-[#d4af73] mt-1" />
      </div>
    </div>
  );
}