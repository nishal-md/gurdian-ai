import { motion } from 'motion/react';

export default function Logo({ className = "", showTagline = false, invert = false }: { className?: string; showTagline?: boolean, invert?: boolean }) {
  const textColor = invert ? "text-white" : "text-primary-navy";
  const subTextColor = invert ? "text-white/60" : "text-text-secondary";
  const strokeColor = invert ? "#FFFFFF" : "#0B1F3A";
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-11 shrink-0">
        {/* Shield Shape */}
        <svg viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_8px_rgba(37,99,235,0.2)]">
          <path 
            d="M20 0L2 8V20C2 31.0457 20 44 20 44C20 44 38 31.0457 38 20V8L20 0Z" 
            fill="#0B1F3A" 
            stroke={invert ? "#3B82F6" : strokeColor} 
            strokeWidth="1.5"
          />
          {/* Inner Circle / Target */}
          <circle cx="20" cy="20" r="6" fill="#1E40AF" stroke="#2563EB" strokeWidth="1" />
          <circle cx="20" cy="20" r="2" fill="#2563EB" />
          {/* Crosshairs */}
          <line x1="20" y1="12" x2="20" y2="15" stroke="#2563EB" strokeWidth="0.5" />
          <line x1="20" y1="25" x2="20" y2="28" stroke="#2563EB" strokeWidth="0.5" />
          <line x1="12" y1="20" x2="15" y2="20" stroke="#2563EB" strokeWidth="0.5" />
          <line x1="25" y1="20" x2="28" y2="20" stroke="#2563EB" strokeWidth="0.5" />
        </svg>
      </div>
      
      <div className="flex flex-col">
        <h1 className={`text-xl md:text-2xl font-bold tracking-[0.05em] uppercase leading-tight font-serif ${textColor}`}>
          Guardian AI
        </h1>
        {showTagline && (
          <>
            <div className={`h-px w-full my-0.5 ${invert ? 'bg-white/20' : 'bg-border/50'}`} />
            <p className={`text-[10px] tracking-[0.1em] font-sans font-medium uppercase ${subTextColor}`}>
              Where Safety Meets Technology
            </p>
          </>
        )}
      </div>
    </div>
  );
}

