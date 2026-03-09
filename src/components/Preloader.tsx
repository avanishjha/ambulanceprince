'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Simulate loading time (e.g., waiting for fonts/images or just a fast dramatic delay)
    // 2.5 seconds gives enough time for a beautiful sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-950 text-white"
        >
          {/* Animated Background Grid Pattern */}
          <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Mark Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              className="relative w-24 h-24 sm:w-32 sm:h-32 mb-8 bg-primary flex items-center justify-center -skew-x-12 overflow-hidden shadow-[0_0_40px_rgba(235,10,30,0.4)]"
            >
              <motion.div
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
                className="font-poppins font-black text-5xl sm:text-7xl text-white skew-x-12 tracking-tighter"
              >
                +
              </motion.div>
              {/* Shine effect */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-1/2 bg-white/20 skew-x-[30deg]"
              />
            </motion.div>

            {/* Text Reveal */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
                className="font-poppins font-black text-3xl sm:text-5xl tracking-tighter uppercase mb-2 text-center"
              >
                PRINCE <span className="text-primary">AMBULANCE</span>
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-12">
              <motion.p
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="font-inter text-xs sm:text-sm font-bold tracking-[0.3em] text-gray-400 uppercase text-center"
              >
                Emergency Medical Services
              </motion.p>
            </div>

            {/* Loading Bar */}
            <div className="w-48 sm:w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-primary"
              />
            </div>

            {/* System Status Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-4 font-inter text-[10px] tracking-widest text-gray-500 uppercase"
            >
              INITIALIZING SYSTEMS...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
