'use client';
import { motion } from 'framer-motion';
import { MapPin, Plane } from 'lucide-react';

const locations = [
  "ROHINI", "PITAMPURA", "PASCHIM VIHAR", "PUNJABI BAGH",
  "DWARKA", "JANAKPURI", "TILAK NAGAR", "RAJOURI GARDEN",
  "KAROL BAGH", "SOUTH DELHI", "NOIDA", "GURGAON"
];

const airRoutes = [
  "RUDRAPRAYAG", "RISHIKESH", "HARIDWAR"
];

export default function ServiceLocations() {
  return (
    <section className="bg-white text-gray-900 py-16 md:py-32 border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-inter text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block"
            >
              COVERAGE AREA
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-poppins font-black text-4xl md:text-6xl lg:text-7xl leading-none tracking-tighter uppercase"
            >
              ACTIVE <span className="text-primary italic">ZONES.</span>
            </motion.h2>
          </div>
          <p className="font-inter text-base text-gray-500 max-w-sm uppercase tracking-widest font-bold">
            Dispatched globally. Stationed locally.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="font-poppins font-bold text-xl tracking-tighter uppercase mb-8 border-b-2 border-gray-200 pb-4">Ground Fleet Coverage</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-gray-200">
            {locations.map((loc, i) => (
              <motion.div 
                key={loc}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-white p-6 md:p-8 group hover:bg-gray-900 hover:text-white transition-colors cursor-crosshair flex flex-col justify-between aspect-square relative"
              >
                <div className="flex justify-between items-start">
                  <span className="font-poppins font-bold text-sm tracking-widest text-gray-300 group-hover:text-white/30 transition-colors uppercase">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <MapPin className="w-5 h-5 text-gray-200 group-hover:text-primary transition-colors" />
                </div>
                <h4 className="font-poppins font-black text-lg md:text-2xl tracking-tighter uppercase mt-auto">
                  {loc}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-poppins font-bold text-xl tracking-tighter uppercase mb-8 border-b-2 border-gray-200 pb-4">Aeromedical Routes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
            {airRoutes.map((route, i) => (
              <motion.div 
                key={route}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 group hover:bg-primary hover:text-white transition-colors cursor-crosshair flex flex-col justify-between"
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="font-poppins font-bold text-sm tracking-widest text-gray-300 group-hover:text-white/50 transition-colors uppercase">
                    AIR-{i + 1}
                  </span>
                  <div className="flex items-center gap-4">
                    <Plane className="w-5 h-5 text-gray-300 group-hover:text-white/60 transition-colors" />
                    <span className="bg-gray-900 text-white px-3 py-1 text-xs uppercase tracking-widest font-bold group-hover:bg-white group-hover:text-primary transition-colors">
                      ACTIVE
                    </span>
                  </div>
                </div>
                <h4 className="font-poppins font-black text-3xl tracking-tighter uppercase mt-auto">
                  {route}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
