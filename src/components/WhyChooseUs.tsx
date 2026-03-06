'use client';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Navigation, Zap, Banknote, Sparkles } from 'lucide-react';

const reasons = [
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Safest", desc: "Hospital-grade safety protocols for every zero-risk transfer." },
  { icon: <Zap className="w-6 h-6" />, title: "Fast", desc: "10-minute maximum dispatch time within city limits." },
  { icon: <Navigation className="w-6 h-6" />, title: "Reliable", desc: "Real-time tracking and constant communication with hospitals." },
  { icon: <Sparkles className="w-6 h-6" />, title: "Modern Amenities", desc: "Fitted with state-of-the-art ICU-level medical equipment." },
  { icon: <Banknote className="w-6 h-6" />, title: "Cost Efficient", desc: "Transparent, honest pricing with absolutely no hidden emergency fees." },
  { icon: <Clock className="w-6 h-6" />, title: "24x7 On Call Support", desc: "Dedicated emergency dispatch agents available round the clock." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-accent text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold leading-tight mb-6">
              Why Trust <br/><span className="text-primary">Prince Ambulance?</span>
            </h2>
            <p className="text-white/80 font-inter text-lg mb-8 max-w-lg">
              When it comes to medical emergencies, there is no room for error. We operate with hospital-grade protocols, ensuring you reach safety exactly when it matters most.
            </p>
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/20 w-max">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-xl">
                10m
              </div>
              <div>
                <p className="font-poppins font-bold text-lg">Average ETA</p>
                <p className="text-sm text-white/70">From the time of call</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors backdrop-blur-sm group"
              >
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-poppins font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-white/60 text-sm font-inter leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
