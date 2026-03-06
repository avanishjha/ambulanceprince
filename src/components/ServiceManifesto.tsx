'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    num: "01",
    title: "EMERGENCY DISPATCH",
    desc: "10-minute extraction in urban centers. Advanced Life Support protocols activated immediately upon call.",
    img: "https://images.unsplash.com/photo-1587556201565-2ea642111eb3?w=1200&q=80"
  },
  {
    num: "02",
    title: "AEROMEDICAL TRANSIT",
    desc: "Global border crossing with ICU-equipped fixed-wing aircraft and helicopter rescue operations.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80"
  },
  {
    num: "03",
    title: "CORPORATE INFRASTRUCTURE",
    desc: "Permanent on-site medical units, event coverage, and subscription-based enterprise health networks.",
    img: "https://images.unsplash.com/photo-1516841273335-e39b37888115?w=1200&q=80"
  }
];

export default function ServiceManifesto() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section className="bg-background text-foreground py-32 border-b border-border-sharp">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <h2 className="font-poppins font-black text-4xl md:text-7xl uppercase tracking-tighter mb-24 max-w-4xl">
          A MANIFESTO OF <span className="text-primary italic">SURVIVAL.</span>
        </h2>

        <div className="w-full flex flex-col">
          {services.map((service, idx) => (
            <div 
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              className="relative border-t border-border-sharp py-8 md:py-16 group cursor-pointer transition-colors hover:bg-white/5"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
                <div className="flex items-start gap-8 md:gap-16 lg:w-1/2">
                  <span className="font-poppins text-xl md:text-3xl text-white/30 font-light">{service.num}</span>
                  <h3 className="font-poppins font-black text-3xl md:text-5xl lg:text-6xl uppercase tracking-tighter group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <div className="lg:w-1/3 flex items-start gap-8 justify-between w-full">
                  <p className="font-inter text-sm md:text-lg text-white/60 max-w-sm">
                    {service.desc}
                  </p>
                  <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 text-white/20 group-hover:text-primary transition-all group-hover:rotate-45" />
                </div>
              </div>

              {/* Cinematic Image Reveal */}
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "400px", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden mt-12 w-full hidden md:block"
                  >
                    <div className="w-full h-full relative">
                      <div className="absolute inset-0 bg-black/20 z-10 mix-blend-multiply" />
                      <img 
                        src={service.img} 
                        alt={service.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <div className="border-t border-border-sharp" />
        </div>
      </div>
    </section>
  );
}
