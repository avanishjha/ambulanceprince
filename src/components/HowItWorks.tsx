'use client';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Call Emergency",
    desc: "Dial our 24/7 hotline or use the 1-click booking.",
    icon: "📞"
  },
  {
    number: "02",
    title: "Fast Dispatch",
    desc: "Nearest ambulance is assigned with GPS tracking.",
    icon: "🚑"
  },
  {
    number: "03",
    title: "Safe Care",
    desc: "Paramedics stabilize the patient and transport safely.",
    icon: "🏥"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-support relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-foreground/60 font-inter text-lg">Seamless booking for critical moments.</p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-[45%] left-[10%] w-[80%] h-1 bg-gradient-to-r from-support via-primary/50 to-support" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-28 h-28 bg-white rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.05)] border-8 border-support flex items-center justify-center text-4xl mb-6 relative z-10 hover:scale-110 transition-transform duration-300">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-2xl font-poppins font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-foreground/70 font-inter max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
