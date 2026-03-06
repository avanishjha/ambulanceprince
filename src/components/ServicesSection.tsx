'use client';
import { motion, Variants } from 'framer-motion';
import { HeartPulse, Stethoscope, Activity, Plane, Box, UserPlus } from 'lucide-react';

const services = [
  {
    title: 'Basic Life Support',
    description: 'Equipped with medical essentials for stable patients needing transport.',
    icon: <HeartPulse className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Advanced Life Support',
    description: 'ALS ambulances with comprehensive emergency medical equipment.',
    icon: <Stethoscope className="w-8 h-8 text-primary" />,
  },
  {
    title: 'ICU Ambulance',
    description: 'Mobile intensive care unit with ventilators and cardiac monitors.',
    icon: <Activity className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Air Ambulance',
    description: 'Rapid aeromedical transport for critical out-of-city emergencies.',
    icon: <Plane className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Dead Body Transport',
    description: 'Respectful mortuary freeze box ambulance services.',
    icon: <Box className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Patient Transport',
    description: 'Non-emergency transport for hospital visits and discharges.',
    icon: <UserPlus className="w-8 h-8 text-primary" />,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-foreground mb-6">
            Comprehensive <span className="text-primary">Emergency Care</span>
          </h2>
          <p className="text-gray-500 font-inter text-lg">
            Our state-of-the-art fleet is equipped to handle any medical emergency with speed and professionalism.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="group bg-support rounded-3xl p-8 hover:bg-accent hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-2xl cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-poppins font-bold text-foreground mb-3 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-foreground/70 font-inter group-hover:text-white/80 transition-colors mb-6">
                {service.description}
              </p>
              
              <div className="mt-auto flex items-center font-bold text-primary group-hover:text-white">
                Book to Dispatch <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
