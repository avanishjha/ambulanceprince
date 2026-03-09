'use client';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function AppointmentForm() {
  return (
    <section id="appointment" className="bg-gray-50 text-gray-900 py-16 md:py-32 border-b border-gray-200 relative overflow-hidden">
      
      {/* Accent block */}
      <div className="absolute bottom-0 left-0 w-2 h-full bg-primary" />
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
        
        <div className="lg:w-1/3">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-inter text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block"
          >
            BOOK NOW
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-poppins font-black text-4xl md:text-6xl lg:text-7xl leading-none tracking-tighter uppercase mb-6"
          >
            REQUEST{' '}
            <br className="hidden md:block" />
            <span className="text-primary italic">DISPATCH.</span>
          </motion.h2>
          <p className="font-inter text-base text-gray-500 max-w-sm mb-6">
            For non-emergency transport or scheduled medical assistance, submit an appointment request below.
          </p>
          <div className="p-4 bg-primary/5 border border-primary/20">
            <p className="font-inter text-sm text-primary font-bold">
              ⚠ For immediate life-threatening emergencies, call{' '}
              <a href="tel:+918178231291" className="underline">+91-8178231291</a>
            </p>
          </div>
        </div>

        <div className="lg:w-2/3">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            
            <div className="flex flex-col gap-2">
              <label className="font-poppins font-bold text-xs tracking-widest text-gray-400 uppercase">Your Name</label>
              <input 
                type="text" 
                className="bg-white border-2 border-gray-200 px-4 py-4 outline-none font-inter text-lg text-gray-900 placeholder-gray-300 w-full focus:border-primary transition-colors"
                placeholder="JOHN DOE"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-poppins font-bold text-xs tracking-widest text-gray-400 uppercase">Email Address</label>
              <input 
                type="email" 
                className="bg-white border-2 border-gray-200 px-4 py-4 outline-none font-inter text-lg text-gray-900 placeholder-gray-300 w-full focus:border-primary transition-colors"
                placeholder="JOHN@EXAMPLE.COM"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-poppins font-bold text-xs tracking-widest text-gray-400 uppercase">Select Date & Time</label>
              <input 
                type="datetime-local" 
                className="bg-white border-2 border-gray-200 px-4 py-4 outline-none font-inter text-lg text-gray-900 placeholder-gray-300 w-full focus:border-primary transition-colors"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-poppins font-bold text-xs tracking-widest text-gray-400 uppercase">Choose Doctor / Unit</label>
              <select defaultValue="" className="bg-white border-2 border-gray-200 px-4 py-4 outline-none font-inter text-lg text-gray-900 w-full appearance-none cursor-pointer focus:border-primary transition-colors">
                <option value="" disabled>SELECT UNIT</option>
                <option value="paramedic">Paramedic Team</option>
                <option value="doctor">Specialized Doctor</option>
                <option value="general">General Transport</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-poppins font-bold text-xs tracking-widest text-gray-400 uppercase">Select Services</label>
              <select defaultValue="" className="bg-white border-2 border-gray-200 px-4 py-4 outline-none font-inter text-lg text-gray-900 w-full appearance-none cursor-pointer focus:border-primary transition-colors">
                <option value="" disabled>SELECT SERVICE</option>
                <option value="bls">Basic Life Support (BLS)</option>
                <option value="als">Advance Life Support (ALS)</option>
                <option value="icu">ICU Ambulance</option>
                <option value="air">Air Ambulance</option>
              </select>
            </div>

            <div className="md:col-span-2 mt-4">
              <button 
                type="submit" 
                className="group w-full flex items-center justify-center gap-3 bg-primary text-white font-poppins font-black text-xl tracking-tighter uppercase py-6 hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                MAKE APPOINTMENT
              </button>
            </div>
            
          </form>
        </div>

      </div>
    </section>
  );
}
