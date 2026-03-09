'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "SHUBHAM KUMAR",
    text: "I can't thank Prince Ambulance Service enough for their quick response during my emergency. The paramedics were professional, compassionate, and made me feel safe throughout the entire process. Highly recommend their service!",
    rating: 5,
    location: "Delhi"
  },
  {
    name: "AKASH",
    text: "When my mother needed immediate medical attention, Prince Ambulance Service was there in no time. The staff were not only skilled but also very reassuring. Their care made a stressful situation much easier for our family.",
    rating: 5,
    location: "Noida"
  }
];

export default function GroundTruth() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-white text-gray-900 py-16 md:py-32 border-b border-gray-200 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* Header */}
          <div className="lg:w-1/3 flex flex-col justify-between">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-inter text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block"
              >
                TESTIMONIALS
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-poppins font-black text-4xl md:text-6xl lg:text-7xl leading-none tracking-tighter uppercase mb-6"
              >
                HAPPY{' '}
                <span className="text-primary italic">CUSTOMERS.</span>
              </motion.h2>
              <p className="font-inter text-base text-gray-500 max-w-sm mb-12">
                Real feedback from real patients. Trust is earned through action, not words.
              </p>
            </div>

            {/* Controls */}
            <div className="flex gap-4">
              <button 
                onClick={prev}
                className="w-16 h-16 md:w-20 md:h-20 border-2 border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
                aria-label="Previous Testimonial"
              >
                <span className="font-poppins font-bold text-lg">&larr;</span>
              </button>
              <button 
                onClick={next}
                className="w-16 h-16 md:w-20 md:h-20 border-2 border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
                aria-label="Next Testimonial"
              >
                <span className="font-poppins font-bold text-lg">&rarr;</span>
              </button>
              <div className="flex items-center ml-4 font-inter text-sm text-gray-400 font-bold tracking-widest">
                {String(currentIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </div>
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
                {/* Quote icon */}
                <div className="w-16 h-16 bg-primary/10 border border-primary/20 flex items-center justify-center mb-8">
                  <Quote className="w-7 h-7 text-primary" />
                </div>
                
                <div className="relative z-10 w-full md:w-4/5">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <span key={i} className="text-primary text-xl">★</span>
                    ))}
                  </div>
                  
                  <p className="font-inter text-xl md:text-3xl lg:text-4xl leading-tight text-gray-800 mb-10">
                    &ldquo;{testimonials[currentIndex].text}&rdquo;
                  </p>
                  
                  <div className="border-t-2 border-gray-200 pt-6 flex items-center gap-6">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center font-poppins font-black text-primary text-lg">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-poppins font-black text-xl tracking-tighter uppercase">
                        {testimonials[currentIndex].name}
                      </h4>
                      <span className="font-inter text-xs tracking-widest uppercase text-gray-400 font-bold">
                        Verified Patient • {testimonials[currentIndex].location}
                      </span>
                    </div>
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
