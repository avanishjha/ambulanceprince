'use client';
import { motion } from 'framer-motion';

const metrics = [
  { value: "10", metric: "MIN / ETA", desc: "MAXIMUM URBAN DISPATCH TIME. NO EXCEPTIONS." },
  { value: "24/7", metric: "ACTIVE", desc: "ROUND-THE-CLOCK FLEET READINESS AND SURVEILLANCE." },
  { value: "50+", metric: "UNITS", desc: "ADVANCED LIFE SUPPORT VEHICLES IN ACTIVE ROTATION." },
];

export default function DataPoints() {
  return (
    <section className="bg-background text-white py-32 border-b border-border-sharp">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          <div className="sticky top-[30vh]">
            <h2 className="font-poppins font-black text-5xl md:text-8xl leading-none tracking-tighter uppercase mb-8">
              THE <br/><span className="text-primary italic">MATH</span> OF <br/>RESCUE.
            </h2>
            <p className="font-inter text-lg text-white/50 max-w-md">
              We don't deal in promises. We deal in brutal efficiency. Every second is measured, every unit tracked.
            </p>
          </div>

          <div className="flex flex-col gap-16">
            {metrics.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col md:flex-row items-baseline gap-6 md:gap-12 pb-8 border-b border-white/10"
              >
                <div className="font-poppins font-black text-7xl md:text-9xl tracking-tighter text-primary leading-none">
                  {item.value}
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-2xl md:text-3xl tracking-tight uppercase mb-2">{item.metric}</h3>
                  <p className="font-inter text-sm md:text-base text-white/50 max-w-xs">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
