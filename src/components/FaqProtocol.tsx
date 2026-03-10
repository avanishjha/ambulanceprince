'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "How do I contact Prince Ambulance Service in an emergency?",
    a: "You can reach Prince Ambulance Service 24/7 by calling our emergency hotline at +91-8810616863. Our dispatch team will immediately send the nearest available ambulance to your location."
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
    <section className="bg-white text-gray-900 py-16 md:py-32 border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
        
        {/* FAQ Accordion */}
        <div className="lg:w-[60%]">
          <div className="mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-inter text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block"
            >
              FAQ
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-poppins font-black text-4xl md:text-6xl lg:text-7xl leading-none tracking-tighter uppercase mb-2"
            >
              CRITICAL{' '}
              <span className="text-primary italic">INTEL.</span>
            </motion.h2>
            <p className="font-inter text-base text-gray-500">Frequently Asked Questions</p>
          </div>

          <div className="flex flex-col border-t-2 border-gray-200">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b-2 border-gray-200">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left py-6 flex justify-between items-center group gap-4"
                >
                  <span className="font-inter text-lg md:text-xl font-bold pr-4 group-hover:text-primary transition-colors">
                    {faq.q}
                  </span>
                  <span className={`w-10 h-10 flex items-center justify-center border-2 shrink-0 transition-all ${
                    openIndex === i 
                      ? 'bg-primary border-primary text-white rotate-180' 
                      : 'border-gray-300 text-gray-400 group-hover:border-primary group-hover:text-primary'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
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
                      <p className="font-inter text-base text-gray-600 pb-6 pr-16 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-[40%]">
          <div className="sticky top-32 w-full aspect-[3/4] overflow-hidden border-2 border-gray-200 grayscale hover:grayscale-0 transition-all duration-700 relative group">
            <img 
              src="https://images.unsplash.com/photo-1516841273335-e39b37888115?w=800&q=80" 
              alt="Inside ICU Ambulance" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <span className="font-poppins font-bold text-sm tracking-widest text-white uppercase">
                ADVANCED ICU INTERIOR
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
