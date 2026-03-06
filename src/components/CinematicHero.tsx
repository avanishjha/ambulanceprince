'use client';
import { motion } from 'framer-motion';

export default function CinematicHero() {
  return (
    <section className="relative w-full h-[100vh] min-h-[800px] flex flex-col justify-between overflow-hidden bg-black text-white px-6 md:px-8 py-8 pt-32">
      
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-40 grayscale"
        >
          {/* Using a high-quality relevant medical/urban video placeholder */}
          <source src="https://cdn.pixabay.com/vimeo/328940142/ambulance-22879.mp4?width=1280&hash=8de0b1dbfb888f4e2fbd0fbe3d2bf260907e1eb0" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        {/* Grain overlay for cinematic texture */}
        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')]" />
      </div>

      <div className="relative z-10 w-full flex justify-between items-start font-inter text-sm md:text-base uppercase tracking-widest text-white/50">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          [ COMPASSIONATE CARE, ANYTIME, ANYWHERE ]
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-primary font-bold">
          15+ YEARS EXPERIENCE
        </motion.div>
      </div>

      <div className="relative z-10 w-full">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-poppins font-black text-[12vw] leading-[0.85] tracking-tighter uppercase max-w-7xl"
        >
          WE SAVE <br/>
          <span className="text-primary italic pr-4">LIVES.</span>
        </motion.h1>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-end border-t border-white/20 pt-8 gap-8">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="font-inter text-lg md:text-xl max-w-xl text-white/70"
          >
            We are committed to providing fast, reliable, and compassionate emergency medical transport 24/7. From critical ICU situations to non-emergency transfers, our highly trained team ensures safe and timely care.
          </motion.p>
          
          <motion.a 
            href="tel:+918178231291"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="flex items-center justify-center w-full md:w-auto px-12 py-6 bg-white text-black font-poppins font-black text-xl uppercase tracking-wider hover:bg-primary hover:text-white transition-colors"
          >
            CALL +91 817 823 1291
          </motion.a>
        </div>
      </div>
      
    </section>
  );
}
