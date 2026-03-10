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
    title: "ICU AMBULANCE",
    desc: "When time is of the essence, specialized medical care on wheels featuring ventilators and intensive monitoring.",
    img: "https://plus.unsplash.com/premium_photo-1661608670417-104c9302ca14?w=1200&q=80"
  },
  {
    num: "03",
    title: "AIR AMBULANCE",
    desc: "Rapid aeromedical evacuation for inter-city and international emergencies. Reach the best hospitals in record time.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80"
  },
  {
    num: "04",
    title: "DEADBODY TRANSPORTATION",
    desc: "Respectful and timely mortuary ambulance services for the deceased.",
    img: "https://images.unsplash.com/photo-1535399596356-8a9d18b6e6c7?w=1200&q=80"
  },
  {
    num: "05",
    title: "HEARSE VAN SERVICES",
    desc: "Dignified transportation with fully equipped hearse vans for final journeys.",
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80"
  },
  {
    num: "06",
    title: "FREEZER BOX SERVICES",
    desc: "Preservation services ensuring the utmost care during longer waiting periods or transport.",
    img: "https://images.unsplash.com/photo-1519494026892-80ba4c017ebb?w=1200&q=80"
  },
  {
    num: "07",
    title: "CREMATION SERVICES",
    desc: "Compassionate, end-to-end assistance with final rites and necessary arrangements.",
    img: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?w=1200&q=80"
  }
];

export default function ServiceManifesto() {
  return (
    <section id="services-manifesto" className="bg-white text-gray-900 overflow-hidden">

      {/* Header Area */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-inter text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block"
            >
              COMPREHENSIVE FLEET
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
            From critical ICU care on wheels to dignified final rites — our services cover the entire spectrum of necessity.
          </motion.p>
        </div>
      </div>

      {/* Services 50/50 Layout */}
      <div className="flex flex-col w-full">
        {services.map((service, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group flex flex-col md:flex-row min-h-[500px] border-b border-gray-200"
            >
              {/* Text Side */}
              <div className={`w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center ${isEven ? 'md:order-1 border-r border-gray-200' : 'md:order-2 border-l border-gray-200'} bg-gray-50 hover:bg-white transition-colors duration-500`}>
                <div className="flex items-start gap-4 mb-6">
                  <span className="font-poppins text-xl md:text-2xl text-gray-400 font-light">{service.num}</span>
                  <h3 className="font-poppins font-black text-3xl md:text-5xl uppercase tracking-tighter text-gray-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="font-inter text-base md:text-lg text-gray-500 max-w-md pl-[3.5rem] mb-10">
                  {service.desc}
                </p>

                <div className="pl-[3.5rem]">
                  <a href="https://wa.me/918810616863?text=Hi%2C%20I%27m%20in%20need%20of%20your%20service" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 group/btn font-poppins font-bold uppercase tracking-widest text-sm text-gray-900 hover:text-primary transition-colors">
                    <span className="border-b-2 border-gray-900 group-hover/btn:border-primary pb-1">INQUIRE NOW</span>
                    <div className="w-8 h-8 rounded-full border border-gray-300 group-hover/btn:border-primary flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover/btn:text-primary group-hover/btn:rotate-45 transition-all" />
                    </div>
                  </a>
                </div>
              </div>

              {/* Image Side */}
              <div className={`w-full md:w-1/2 h-[400px] md:h-auto relative overflow-hidden ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                <div className="absolute inset-0 bg-gray-900/10 z-10 group-hover:bg-transparent transition-colors duration-700" />
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale blur-[1px] group-hover:grayscale-0 group-hover:blur-0 group-hover:scale-105 transition-all duration-700 origin-center"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
