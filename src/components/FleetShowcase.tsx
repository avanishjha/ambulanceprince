'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const fleet = [
  { id: "01", name: "ALS INTERCEPTOR", img: "https://images.unsplash.com/photo-1516841273335-e39b37888115?w=1200&q=80", type: "ADVANCED LIFE SUPPORT" },
  { id: "02", name: "ICU TRANSPORT", img: "https://plus.unsplash.com/premium_photo-1661608670417-104c9302ca14?w=1200&q=80", type: "MOBILE INTENSIVE CARE" },
  { id: "03", name: "NIGHTHAWK ROTOR", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80", type: "AEROMEDICAL EVACUATION" },
];

export default function FleetShowcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-gray-50">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden border-b border-gray-200">
        
        <div className="absolute top-12 left-6 md:left-12 z-20">
          <span className="font-inter text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3 block">
            OUR FLEET
          </span>
          <h2 className="font-poppins font-black text-4xl md:text-5xl uppercase tracking-tighter text-gray-900">
            THE <span className="text-primary italic">ASSETS.</span>
          </h2>
          <p className="font-inter text-sm md:text-base text-gray-500 w-64 mt-3">
            Scroll to explore our arsenal of survival vehicles.
          </p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 mt-24">
          {fleet.map((vehicle) => (
            <div key={vehicle.id} className="relative w-[85vw] md:w-[60vw] h-[60vh] md:h-[75vh] flex-shrink-0 group overflow-hidden border-2 border-gray-200 hover:border-primary transition-colors">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 transition-colors group-hover:from-black/40 group-hover:via-transparent" />
              <img 
                src={vehicle.img} 
                alt={vehicle.name} 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute bottom-8 left-8 z-20 flex flex-col group-hover:-translate-y-4 transition-transform duration-500">
                <span className="font-inter text-primary font-bold tracking-widest text-sm mb-2">{vehicle.type}</span>
                <span className="font-poppins font-black text-white text-3xl md:text-5xl uppercase tracking-tighter">{vehicle.name}</span>
              </div>
              <div className="absolute top-8 right-8 z-20 font-poppins font-black text-white/10 text-7xl md:text-9xl tracking-tighter">
                {vehicle.id}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
