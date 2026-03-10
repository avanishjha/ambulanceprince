'use client';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function ContactMapSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const messageContent = formData.get('message');

    const message = `*New Contact Message* 💬\n\n*Name:* ${name}\n*Email:* ${email}\n\n*Message:*\n${messageContent}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918810616863?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="bg-white text-gray-900 py-16 md:py-32 border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
        
        {/* Contact Information & Map */}
        <div className="lg:w-1/2 flex flex-col justify-between">
          <div>
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

          <div className="w-full h-80 bg-gray-100 border-2 border-gray-200 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.213197143997!2d77.23467667623956!3d28.65334408314115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfce1df9bb77b%3A0x6bbaec4ac397d953!2sSushruta%20Trauma%20Centre!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full border-0" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Message Form */}
        <div className="lg:w-1/2 bg-gray-50 p-8 md:p-12 border-2 border-gray-200">
          <h3 className="font-poppins font-black text-3xl uppercase tracking-tighter mb-2">Send Us a Message</h3>
          <p className="font-inter text-sm text-gray-400 mb-8 uppercase tracking-widest">Your email address will not be published*</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-poppins font-bold text-xs tracking-widest text-gray-400 uppercase">Name</label>
              <input 
                type="text" 
                name="name"
                className="bg-white border-2 border-gray-200 px-4 py-4 outline-none font-inter text-lg text-gray-900 placeholder-gray-300 w-full focus:border-primary transition-colors"
                placeholder="JOHN DOE"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-poppins font-bold text-xs tracking-widest text-gray-400 uppercase">E-Mail</label>
              <input 
                type="email" 
                name="email"
                className="bg-white border-2 border-gray-200 px-4 py-4 outline-none font-inter text-lg text-gray-900 placeholder-gray-300 w-full focus:border-primary transition-colors"
                placeholder="JOHN@EXAMPLE.COM"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-poppins font-bold text-xs tracking-widest text-gray-400 uppercase">Message</label>
              <textarea 
                name="message"
                className="bg-white border-2 border-gray-200 px-4 py-4 outline-none font-inter text-lg text-gray-900 placeholder-gray-300 w-full resize-none h-32 focus:border-primary transition-colors"
                placeholder="HOW CAN WE HELP?"
                required
              />
            </div>

            <button 
              type="submit" 
              className="group mt-4 w-full flex items-center justify-center gap-3 bg-gray-900 text-white font-poppins font-black text-xl tracking-tighter uppercase py-6 hover:bg-primary transition-colors"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              SEND MESSAGE
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
