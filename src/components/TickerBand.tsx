'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function TickerBand() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phrases = [
    "EMERGENCY HOTLINE +91-8178231291",
    "• ADVANCED LIFE SUPPORT",
    "• RAPID URBAN DISPATCH",
    "• AIR AMBULANCE ON CALL",
    "EMERGENCY HOTLINE +91-8178231291",
    "• 24/7 MEDICAL NETWORK",
    "• ZERO HIDDEN COSTS",
  ];

  return (
    <div className="w-full bg-primary text-white border-y border-black overflow-hidden py-4 flex items-center">
      <motion.div 
        className="flex whitespace-nowrap gap-12 font-poppins font-black text-2xl md:text-4xl tracking-tighter uppercase"
        style={{ x: -offset * 0.5 }}
      >
        {/* Repeat array to ensure infinite feeling */}
        {[...phrases, ...phrases, ...phrases].map((phrase, i) => (
          <span key={i}>{phrase}</span>
        ))}
      </motion.div>
    </div>
  );
}
