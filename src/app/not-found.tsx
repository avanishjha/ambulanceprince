'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, ArrowLeft, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      
      {/* Background Video/Image Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/images/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Animated Error Code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-block mb-6"
        >
          <h1 className="font-poppins font-black text-[120px] md:text-[180px] leading-none text-white tracking-tighter drop-shadow-2xl">
            4<span className="text-primary">0</span>4
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-3xl rounded-full z-[-1]"
          />
        </motion.div>

        {/* Messaging */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="text-primary w-8 h-8 md:w-10 md:h-10 animate-pulse" />
            <h2 className="font-poppins font-bold text-2xl md:text-4xl text-white uppercase tracking-wider">
              Signal Lost
            </h2>
          </div>
          <p className="font-inter text-gray-300 text-lg md:text-xl max-w-xl mx-auto">
            The route you're attempting to navigate doesn't exist on our map. If this is a medical emergency, do not wait.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 w-full max-w-md mx-auto sm:max-w-none justify-center"
        >
          <a 
            href="tel:+918810616863" 
            className="group relative flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-poppins font-bold text-lg uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_0_30px_rgba(230,57,70,0.4)] hover:shadow-[0_0_50px_rgba(230,57,70,0.6)] transform hover:-translate-y-1 active:translate-y-0"
          >
            <span className="absolute inset-0 w-full h-full bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
            <Phone className="w-5 h-5 relative z-10 animate-bounce" />
            <span className="relative z-10">Call Emergency</span>
          </a>

          <Link 
            href="/" 
            className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-poppins font-bold text-sm uppercase tracking-widest hover:bg-white/20 transition-all"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Base</span>
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
