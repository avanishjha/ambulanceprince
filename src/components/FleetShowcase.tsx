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
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden border-b border-border-sharp">
        
        <div className="absolute top-12 left-6 md:left-12 z-20 mix-blend-difference text-white">
          <h2 className="font-poppins font-black text-4xl md:text-5xl uppercase tracking-tighter">
            THE <span className="text-primary italic">ASSETS.</span>
          </h2>
          <p className="font-inter text-sm md:text-base text-white/50 w-64 mt-4">
            HORIZONTAL SCROLL. OUR ARSENAL OF SURVIVAL VEHICLES.
          </p>
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-6 md:px-12 mt-24">
          {fleet.map((vehicle) => (
            <div key={vehicle.id} className="relative w-[85vw] md:w-[60vw] h-[60vh] md:h-[75vh] flex-shrink-0 group">
              <div className="absolute inset-0 bg-black/40 z-10 transition-colors group-hover:bg-black/10" />
              <img 
                src={vehicle.img} 
                alt={vehicle.name} 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
              />
              <div className="absolute bottom-8 left-8 z-20 flex flex-col group-hover:-translate-y-4 transition-transform duration-500">
                <span className="font-inter text-primary font-bold tracking-widest text-sm mb-2">{vehicle.type}</span>
                <span className="font-poppins font-black text-white text-4xl md:text-6xl uppercase tracking-tighter">{vehicle.name}</span>
              </div>
              <div className="absolute top-8 right-8 z-20 font-poppins font-black text-white/20 text-7xl md:text-9xl tracking-tighter mix-blend-overlay">
                {vehicle.id}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
