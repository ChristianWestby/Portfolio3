// src/components/BrLineLight.jsx
export default function BrLineLight({ className = '' }) {
  return (
    <div
      className={`w-32 h-[2px] bg-gradient-to-r from-beige to-transparent opacity-80 my-6 mx-auto ${className}`}
    />
  );
}