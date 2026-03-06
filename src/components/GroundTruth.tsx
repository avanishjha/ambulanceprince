'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    name: "SHUBHAM KUMAR",
    text: "I can't thank Prince Ambulance Service enough for their quick response during my emergency. The paramedics were professional, compassionate, and made me feel safe throughout the entire process. Highly recommend their service!",
    rating: 5
  },
  {
    name: "AKASH",
    text: "When my mother needed immediate medical attention, Prince Ambulance Service was there in no time. The staff were not only skilled but also very reassuring. Their care made a stressful situation much easier for our family.",
    rating: 5
  }
];

export default function GroundTruth() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-background text-foreground py-32 border-b border-border-sharp overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* Header */}
          <div className="lg:w-1/3 flex flex-col justify-between">
            <div>
              <h2 className="font-poppins font-black text-5xl md:text-7xl leading-none tracking-tighter uppercase mb-6">
                GROUND <span className="text-primary italic">TRUTH.</span>
              </h2>
              <p className="font-inter text-lg text-white/50 max-w-sm uppercase tracking-widest font-bold mb-12">
                Unfiltered feedback from critical extractions.
              </p>
            </div>

            {/* Controls */}
            <div className="flex gap-4">
              <button 
                onClick={prev}
                className="w-24 h-24 md:w-32 md:h-32 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="Previous Testimonial"
              >
                <span className="font-poppins tracking-widest text-sm md:text-lg uppercase font-bold text-white group-hover:text-black transition-colors">&larr; PREV</span>
              </button>
              <button 
                onClick={next}
                className="w-24 h-24 md:w-32 md:h-32 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="Next Testimonial"
              >
                <span className="font-poppins tracking-widest text-sm md:text-lg uppercase font-bold text-white group-hover:text-black transition-colors">NEXT &rarr;</span>
              </button>
            </div>
          </div>

          {/* Slider */}
          <div className="lg:w-2/3 relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                {/* Massive Quote Mark */}
                <div className="font-poppins font-black text-[15rem] leading-none text-white/5 absolute -top-12 -left-8 select-none pointer-events-none">
                  "
                </div>
                
                <div className="relative z-10 w-full md:w-4/5 pt-12">
                  <div className="flex gap-2 mb-8">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <span key={i} className="text-primary text-2xl">★</span>
                    ))}
                  </div>
                  
                  <p className="font-inter text-2xl md:text-4xl leading-tight text-white mb-12">
                    {testimonials[currentIndex].text}
                  </p>
                  
                  <div className="border-t border-white/20 pt-6">
                    <h4 className="font-poppins font-black text-2xl tracking-tighter uppercase">
                      {testimonials[currentIndex].name}
                    </h4>
                    <span className="font-inter text-xs tracking-widest uppercase text-white/40 font-bold">Verified Patient</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
