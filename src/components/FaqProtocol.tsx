'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "How do I contact Prince Ambulance Service in an emergency?",
    a: "You can reach Prince Ambulance Service 24/7 by calling our emergency hotline at +91-8178231291. Our dispatch team will immediately send the nearest available ambulance to your location."
  },
  {
    q: "What types of medical emergencies do you handle?",
    a: "We handle all degrees of severity. From basic transport needs to life-threatening scenarios requiring Advanced Life Support (ALS), ICU on wheels, and specialized doctor transit."
  },
  {
    q: "Are your ambulances equipped to handle critical patients?",
    a: "Yes. Our Advanced Life Support and ICU ambulances are fully equipped with ventilators, defibrillators, oxygen supply, and critical monitoring systems managed by trained paramedics."
  },
  {
    q: "Can I schedule non-emergency transport in advance?",
    a: "Absolutely. Use the 'Book Appointment' form on our site or call our non-emergency line to schedule regular check-up or inter-hospital transfers."
  },
  {
    q: "What areas do you serve?",
    a: "We serve the entire Delhi NCR region rapidly through our dense network of ground fleets, and offer nationwide/global extraction via our Aeromedical services."
  }
];

export default function FaqProtocol() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white text-black py-32 border-b border-black">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
        
        {/* FAQ Accordion */}
        <div className="lg:w-[60%] border-t border-black">
          <div className="mb-16 pt-8">
            <h2 className="font-poppins font-black text-5xl md:text-7xl leading-none tracking-tighter uppercase mb-2">
              CRITICAL <br/> <span className="text-primary italic">INTEL.</span>
            </h2>
            <p className="font-inter text-sm uppercase tracking-widest font-bold text-black/50">Frequently Asked Questions</p>
          </div>

          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-black">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left py-8 flex justify-between items-center group"
                >
                  <span className="font-inter text-xl md:text-2xl font-bold pr-8 group-hover:text-primary transition-colors">
                    {faq.q}
                  </span>
                  <span className={`w-8 h-8 flex items-center justify-center border border-black rounded-none shrink-0 transition-all ${openIndex === i ? 'bg-black text-white' : 'group-hover:bg-primary group-hover:text-white group-hover:border-primary'}`}>
                    {openIndex === i ? '-' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="font-inter text-lg text-black/70 pb-8 pr-12">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Cinematic Image */}
        <div className="lg:w-[40%]">
          <div className="sticky top-32 w-full aspect-[3/4] overflow-hidden border border-black grayscale hover:grayscale-0 transition-all duration-700">
            <img 
              src="https://images.unsplash.com/photo-1516841273335-e39b37888115?w=800&q=80" 
              alt="Inside ICU Ambulance" 
              className="w-full h-full object-cover"
            />
            {/* Minimalist Overlay */}
            <div className="absolute inset-0 flex items-start justify-end p-6 pointer-events-none mix-blend-difference">
              <span className="font-poppins font-bold text-sm tracking-widest text-white uppercase border border-white px-3 py-1">
                INTERIOR VIEW
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
