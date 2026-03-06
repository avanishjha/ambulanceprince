'use client';
import { motion } from 'framer-motion';
import { MapPin, PhoneCall } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-support pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-support via-support/90 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1587556201565-2ea642111eb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Modern Ambulance team" 
          className="w-full h-full object-cover object-right"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20 backdrop-blur-sm">
              🚨 Available 24/7 Nationwide
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-poppins font-bold text-foreground leading-[1.1] tracking-tight mb-6"
          >
            Always with you, <br />
            <span className="text-primary relative inline-block mt-2">
              beside you!
              <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/20 -z-10 rounded-sm" />
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-foreground/70 mb-10 font-inter max-w-xl leading-relaxed"
          >
            24x7 Medical Emergency Response Service providing rapid life-saving assistance across the entire city network.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="https://api.whatsapp.com/send/?phone=+919999999999&text&app_absent=0" className="group flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-poppins font-bold text-lg hover:bg-[#128C7E] transition-all shadow-xl hover:-translate-y-1 hover:shadow-green-500/30">
              Message on WhatsApp
            </a>
            <a href="tel:+919999999999" className="group flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-poppins font-bold text-lg hover:bg-primary-hover transition-all border shadow-xl hover:-translate-y-1">
              <PhoneCall className="w-5 h-5 group-hover:animate-ping" />
              Call Ambulance Now
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex items-center gap-6 text-sm font-medium text-foreground/60"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-support bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p>Trusted by <span className="text-foreground font-bold">10,000+</span> patients.</p>
          </motion.div>
        </div>
      </div>
      
      {/* Mobile Floating CTA - Visible only on small screens */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a href="tel:+919999999999" className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full shadow-[0_0_20px_rgba(230,57,70,0.5)] animate-bounce">
          <PhoneCall className="w-7 h-7" />
        </a>
      </div>
    </section>
  );
}
