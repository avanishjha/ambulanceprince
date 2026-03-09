'use client';
import { motion } from 'framer-motion';
import { Clock, Shield, Truck, Heart } from 'lucide-react';

const features = [
  {
    icon: Clock,
    stat: "10",
    unit: "MIN",
    title: "RAPID RESPONSE",
    desc: "Maximum urban dispatch time. Our fleet reaches you faster than any competitor.",
    accent: "bg-primary/5 border-primary/20",
    iconColor: "text-primary"
  },
  {
    icon: Shield,
    stat: "24/7",
    unit: "",
    title: "ALWAYS ACTIVE",
    desc: "Round-the-clock emergency readiness. We never sleep so you stay safe.",
    accent: "bg-gray-900/5 border-gray-900/20",
    iconColor: "text-gray-900"
  },
  {
    icon: Truck,
    stat: "50+",
    unit: "UNITS",
    title: "MASSIVE FLEET",
    desc: "Advanced life support vehicles in active rotation across Delhi NCR.",
    accent: "bg-primary/5 border-primary/20",
    iconColor: "text-primary"
  },
  {
    icon: Heart,
    stat: "100%",
    unit: "",
    title: "PATIENT FIRST",
    desc: "Compassionate care with trained paramedics on every single call.",
    accent: "bg-gray-900/5 border-gray-900/20",
    iconColor: "text-gray-900"
  }
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  }
};

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-32 border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-inter text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block"
            >
              WHY CHOOSE US?
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-poppins font-black text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter"
            >
              BUILT FOR{' '}
              <span className="text-primary italic">SURVIVAL.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-inter text-base text-gray-500 max-w-sm"
          >
            Every second counts in an emergency. Here&apos;s why thousands trust Prince Ambulance with their lives.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className={`group relative p-8 border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 cursor-pointer overflow-hidden`}
            >
              {/* Hover fill effect */}
              <div className="absolute inset-0 bg-gray-900 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 ${feature.accent} border flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-all duration-300`}>
                  <feature.icon className={`w-7 h-7 ${feature.iconColor} group-hover:text-white transition-colors duration-300`} />
                </div>

                {/* Stat */}
                <div className="font-poppins font-black text-5xl md:text-6xl tracking-tighter text-gray-900 group-hover:text-white transition-colors duration-300 leading-none mb-1">
                  {feature.stat}
                  {feature.unit && <span className="text-xl ml-1 text-gray-400 group-hover:text-white/60">{feature.unit}</span>}
                </div>

                {/* Title */}
                <h3 className="font-poppins font-bold text-lg uppercase tracking-tight mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300 leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-primary" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
