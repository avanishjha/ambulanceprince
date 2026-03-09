'use client';
import { useRef, useEffect, useState } from 'react';

export default function TickerBand() {
  const phrases = [
    "EMERGENCY HOTLINE +91-8178231291",
    "● ADVANCED LIFE SUPPORT",
    "● RAPID URBAN DISPATCH",
    "● AIR AMBULANCE ON CALL",
    "EMERGENCY HOTLINE +91-8178231291",
    "● 24/7 MEDICAL NETWORK",
    "● ZERO HIDDEN COSTS",
    "● ICU ON WHEELS",
  ];

  const content = [...phrases, ...phrases].join("   ");

  return (
    <div className="w-full bg-primary text-white border-y-2 border-primary overflow-hidden py-5 flex items-center relative">
      {/* Double content for seamless loop */}
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="font-poppins font-black text-xl md:text-3xl tracking-tighter uppercase mr-8">
          {content}
        </span>
        <span className="font-poppins font-black text-xl md:text-3xl tracking-tighter uppercase mr-8">
          {content}
        </span>
      </div>
    </div>
  );
}
