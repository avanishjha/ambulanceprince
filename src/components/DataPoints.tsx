'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += 1;
      const progress = current / steps;
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      
      if (current >= steps) {
        setCount(target);
        clearInterval(timer);
      }
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="font-poppins font-black text-7xl md:text-9xl tracking-tighter text-primary leading-none">
      {count}{suffix}
    </div>
  );
}

const metrics = [
  { value: 10, suffix: "", metric: "MIN / ETA", desc: "MAXIMUM URBAN DISPATCH TIME. NO EXCEPTIONS.", highlight: true },
  { value: 24, suffix: "/7", metric: "ACTIVE", desc: "ROUND-THE-CLOCK FLEET READINESS AND SURVEILLANCE.", highlight: false },
  { value: 50, suffix: "+", metric: "UNITS", desc: "ADVANCED LIFE SUPPORT VEHICLES IN ACTIVE ROTATION.", highlight: false },
];

export default function DataPoints() {
  return (
    <section className="bg-gray-50 text-gray-900 py-16 md:py-32 border-b border-gray-200 relative overflow-hidden">
      
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/[0.02] -skew-x-12 transform origin-top-right" />
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <div className="relative lg:sticky lg:top-[30vh]">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-inter text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block"
            >
              OUR NUMBERS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-poppins font-black text-5xl md:text-8xl leading-none tracking-tighter uppercase mb-8"
            >
              THE <br/><span className="text-primary italic">MATH</span> OF <br/>RESCUE.
            </motion.h2>
            <p className="font-inter text-lg text-gray-500 max-w-md">
              We don&apos;t deal in promises. We deal in brutal efficiency. Every second is measured, every unit tracked.
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
                className="flex flex-col md:flex-row items-start md:items-baseline gap-2 md:gap-12 pb-8 border-b border-gray-200 group"
              >
                <AnimatedCounter target={item.value} suffix={item.suffix} />
                <div>
                  <h3 className="font-poppins font-bold text-2xl md:text-3xl tracking-tight uppercase mb-2 group-hover:text-primary transition-colors">{item.metric}</h3>
                  <p className="font-inter text-sm md:text-base text-gray-500 max-w-xs">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
