'use client';
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';

export default function EmergencyCtaSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(230,57,70,0.3)]"
        >
          {/* Background circles */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-6 leading-tight">
              Emergency? Don't Wait. <br/> Request an Ambulance Now.
            </h2>
            <p className="text-white/80 font-inter text-lg md:text-xl mb-12">
              Our operators are standing by. We guarantee a dispatch within 2 minutes of your call.
            </p>
            
            <motion.a 
              href="tel:+919999999999"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-4 bg-white text-primary px-10 py-5 rounded-full font-poppins font-bold text-xl md:text-2xl shadow-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all cursor-pointer group"
            >
              <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                <PhoneCall className="w-6 h-6 md:w-8 md:h-8 animate-pulse" />
              </div>
              +91-9999999999
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
