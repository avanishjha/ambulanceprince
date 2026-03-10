'use client';
import { motion } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';

export default function CinematicHero() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col justify-center pt-24 pb-12 selection:bg-primary selection:text-white">

      {/* Grid Background Brutalist */}
      <div className="absolute inset-0 border-x border-gray-100 max-w-[1600px] mx-auto grid grid-cols-4 md:grid-cols-12 pointer-events-none opacity-40">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-r border-gray-100 h-full" />
        ))}
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 mt-10 lg:mt-0">

        {/* Left Side: Typography */}
        <div className="w-full lg:w-[45%] flex flex-col z-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-1 bg-primary" />
            <span className="font-inter font-bold text-xs sm:text-sm tracking-[0.2em] uppercase text-gray-500">
              PRINCE AMBULANCE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-poppins font-black text-5xl sm:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] leading-[0.85] tracking-tight uppercase text-gray-900 mb-8"
          >
            WE<br />
            SAVE<br />
            <span className="text-primary mix-blend-multiply">LIVES.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-inter font-medium text-sm sm:text-base md:text-lg text-gray-500 max-w-lg mb-10 leading-relaxed border-l-4 border-gray-200 pl-4 sm:pl-6"
          >
            Fast, reliable, and compassionate emergency medical transport 24/7.
            From critical ICU situations to non-emergency transfers, our highly
            trained team ensures safe and timely care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a href="tel:+918178231291" className="group flex items-center justify-center gap-3 bg-primary text-white border-4 border-primary px-6 sm:px-8 py-4 font-poppins font-black text-base sm:text-lg uppercase tracking-wider hover:bg-gray-900 hover:border-gray-900 transition-colors shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">
              <Phone className="w-5 h-5 group-hover:animate-ping" />
              CALL NOW
            </a>
            <a href="#appointment" className="group flex items-center justify-center gap-3 bg-white text-gray-900 border-4 border-gray-900 px-6 sm:px-8 py-4 font-poppins font-black text-base sm:text-lg uppercase tracking-wider hover:bg-gray-100 transition-colors shadow-[4px_4px_0px_0px_rgba(230,57,70,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">
              <Calendar className="w-5 h-5" />
              BOOKING
            </a>
          </motion.div>

        </div>

        {/* Right Side: Visible Image */}
        <div className="w-full lg:w-[55%] relative flex items-center justify-center lg:justify-end z-10 mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full flex justify-center lg:justify-end"
          >
            {/* The Image */}
            <img
              src="/images/ambulance.png"
              alt="Prince Ambulance"
              className="w-full max-w-[600px] lg:max-w-[700px] xl:max-w-[850px] h-auto object-contain relative z-20 drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
            />

            {/* 24/7 Brutalist Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
              className="absolute top-0 left-0 xl:left-10 z-30 bg-primary border-4 border-gray-900 text-white p-3 md:p-6 transform -rotate-3 hover:rotate-0 transition-transform shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] md:shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]"
            >
              <div className="font-poppins font-black text-2xl md:text-5xl leading-none">24/7</div>
              <div className="font-inter font-black text-[9px] md:text-xs tracking-[0.2em] uppercase mt-1">EMERGENCY</div>
            </motion.div>

            {/* 10 Min ETA Brutalist Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1, type: "spring" }}
              className="absolute bottom-4 right-0 lg:bottom-10 lg:right-4 z-30 bg-white border-4 border-gray-900 text-gray-900 p-3 md:p-6 transform rotate-3 hover:rotate-0 transition-transform shadow-[6px_6px_0px_0px_rgba(230,57,70,1)] md:shadow-[8px_8px_0px_0px_rgba(230,57,70,1)]"
            >
              <div className="font-poppins font-black text-2xl md:text-4xl text-primary leading-none">10 MIN</div>
              <div className="font-inter font-black text-[9px] md:text-xs tracking-[0.2em] uppercase mt-1">AVG ETA</div>
            </motion.div>
          </motion.div>
        </div>

      </div>

    </section>
  );
}
