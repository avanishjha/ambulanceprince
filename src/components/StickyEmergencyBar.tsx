'use client';
import { Phone } from 'lucide-react';

export default function StickyEmergencyBar() {
  return (
    <div className="bg-primary text-secondary w-full py-2 px-4 sticky top-0 z-50 flex items-center justify-center shadow-md">
      <div className="flex items-center gap-2 group cursor-pointer hover:scale-105 transition-transform duration-300">
        <Phone className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
        <span className="font-poppins font-bold text-sm md:text-base tracking-wide">
          Emergency? Call Now: <a href="tel:+919999999999" className="underline decoration-transparent group-hover:decoration-secondary transition-all">+91-9999999999</a>
        </span>
      </div>
    </div>
  );
}
