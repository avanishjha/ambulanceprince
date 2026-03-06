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
    <section className="bg-white text-black py-32 border-b border-black">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="font-poppins font-black text-5xl md:text-7xl leading-none tracking-tighter uppercase">
            ACTIVE <span className="text-primary italic">ZONES.</span>
          </h2>
          <p className="font-inter text-lg text-black/60 max-w-sm uppercase tracking-widest font-bold">
            Dispatched globally. Stationed locally.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="font-poppins font-bold text-2xl tracking-tighter uppercase mb-8 border-b border-black pb-4">Ground Fleet Coverage</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-black">
            {locations.map((loc, i) => (
              <motion.div 
                key={loc}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-8 group hover:bg-black hover:text-white transition-colors cursor-crosshair flex flex-col justify-between aspect-square relative"
              >
                <div className="flex justify-between items-start">
                  <span className="font-poppins font-bold text-sm tracking-widest text-black/30 group-hover:text-white/30 transition-colors uppercase">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <MapPin className="w-5 h-5 text-black/20 group-hover:text-white/40 transition-colors" />
                </div>
                <h4 className="font-poppins font-black text-xl md:text-2xl tracking-tighter uppercase mt-auto">
                  {loc}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-poppins font-bold text-2xl tracking-tighter uppercase mb-8 border-b border-black pb-4">Aeromedical Routes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black">
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
                  <span className="font-poppins font-bold text-sm tracking-widest text-black/30 group-hover:text-white/50 transition-colors uppercase">
                    AIR-{i + 1}
                  </span>
                  <div className="flex items-center gap-4">
                    <Plane className="w-5 h-5 text-black/20 group-hover:text-white/60 transition-colors" />
                    <span className="bg-black text-white px-2 py-1 text-xs uppercase tracking-widest font-bold group-hover:bg-white group-hover:text-primary transition-colors">
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
