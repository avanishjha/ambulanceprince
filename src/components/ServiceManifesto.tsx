'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    num: "01",
    title: "BASIC LIFE SUPPORT",
    desc: "Essential transport designed to provide critical care and emergency medical assistance for non-critical patients.",
    img: "https://images.unsplash.com/photo-1587556201565-2ea642111eb3?w=1200&q=80"
  },
  {
    num: "02",
    title: "ADVANCE LIFE SUPPORT",
    desc: "Fully equipped mobile medical units for critical care, featuring ventilators and intensive monitoring.",
    img: "https://images.unsplash.com/photo-1516841273335-e39b37888115?w=1200&q=80"
  },
  {
    num: "03",
    title: "ICU AMBULANCE",
    desc: "When time is of the essence, specialized medical care on wheels can make all the difference in life-threatening emergencies.",
    img: "https://plus.unsplash.com/premium_photo-1661608670417-104c9302ca14?w=1200&q=80"
  },
  {
    num: "04",
    title: "AIR AMBULANCE",
    desc: "Rapid aeromedical evacuation for inter-city and remote area emergencies. Reach the best hospitals in record time.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80"
  }
];

export default function ServiceManifesto() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section id="services" className="bg-gray-50 text-gray-900 py-24 md:py-32 border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-inter text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block"
            >
              OUR SERVICES
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-poppins font-black text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter"
            >
              A MANIFESTO OF{' '}
              <span className="text-primary italic">SURVIVAL.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-inter text-base text-gray-500 max-w-sm"
          >
            From basic transport to full ICU on wheels — we have the right vehicle for every emergency scenario.
          </motion.p>
        </div>

        <div className="w-full flex flex-col">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onMouseEnter={() => setHoveredIndex(idx)}
              className="relative border-t border-gray-200 py-8 md:py-12 group cursor-pointer transition-colors hover:bg-white"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
                <div className="flex items-start gap-6 md:gap-12 lg:w-1/2">
                  <span className="font-poppins text-xl md:text-3xl text-gray-300 font-light">{service.num}</span>
                  <h3 className="font-poppins font-black text-2xl md:text-4xl lg:text-5xl uppercase tracking-tighter group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <div className="lg:w-1/3 flex items-start gap-6 justify-between w-full">
                  <p className="font-inter text-sm md:text-base text-gray-500 max-w-sm">
                    {service.desc}
                  </p>
                  <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-gray-200 group-hover:border-primary group-hover:bg-primary flex items-center justify-center flex-shrink-0 transition-all">
                    <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-white transition-all group-hover:rotate-45" />
                  </div>
                </div>
              </div>

              {/* Image Reveal */}
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "350px", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden mt-8 w-full hidden md:block"
                  >
                    <div className="w-full h-full relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent z-10" />
                      <img 
                        src={service.img} 
                        alt={service.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </section>
  );
}
