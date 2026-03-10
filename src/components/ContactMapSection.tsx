'use client';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function ContactMapSection() {
  return (
    <section id="contact" className="bg-white text-gray-900 py-16 md:py-32 border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Information */}
        <div className="flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-inter text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block"
            >
              CONTACT
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-poppins font-black text-4xl md:text-6xl lg:text-7xl leading-none tracking-tighter uppercase mb-6"
            >
              WE ARE HERE{' '}
              <br className="hidden md:block" />
              <span className="text-primary italic">FOR YOU.</span>
            </motion.h2>
            <p className="font-inter text-base text-gray-500 max-w-md mb-12">
              With a strong focus on timely response and patient care, our services are designed to ensure that medical emergencies are handled efficiently.
            </p>

            <div className="mb-10">
              <h4 className="font-poppins font-bold text-lg uppercase tracking-widest text-primary mb-2">Address</h4>
              <p className="font-inter text-base text-gray-600">
                Civil line, shushruta trauma centre hospital, <br/> Delhi-110054
              </p>
            </div>

            <div className="mb-12">
              <h4 className="font-poppins font-bold text-lg uppercase tracking-widest text-primary mb-4">Customer Support</h4>
              <div className="flex flex-col gap-2 font-inter text-2xl font-black tracking-tighter">
                <a href="tel:+918810616863" className="hover:text-primary transition-colors">+91-8810616863</a>
                <a href="tel:+919717946941" className="hover:text-primary transition-colors">+91-9717946941</a>
              </div>
            </div>
        </div>

        {/* Map */}
        <div className="w-full h-[400px] lg:h-auto bg-gray-100 border-2 border-gray-200 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.213197143997!2d77.23467667623956!3d28.65334408314115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfce1df9bb77b%3A0x6bbaec4ac397d953!2sSushruta%20Trauma%20Centre!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
            className="absolute inset-0 w-full h-full border-0" 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
