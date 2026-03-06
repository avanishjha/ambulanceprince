'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { HeartPulse, Stethoscope, Activity, Plane, ArrowRight, CheckCircle2 } from 'lucide-react';

const vehicles = [
  {
    id: 'basic',
    title: 'Basic Life Support',
    icon: <HeartPulse className="w-6 h-6" />,
    description: 'For patients who need an ambulance supportive of oxygen & basic medical facilities for non-critical transport.',
    bullets: [
      'Stable condition transport',
      'Oxygen & basic medical gear',
      'Hospital discharge & inter-facility transfer',
    ],
    image: 'https://images.unsplash.com/photo-1587556201565-2ea642111eb3?w=800&q=80',
  },
  {
    id: 'advanced',
    title: 'Advanced Life Support',
    icon: <Stethoscope className="w-6 h-6" />,
    description: 'For critical patients requiring a professional paramedic, EMT, and intensive medical facilities while moving.',
    bullets: [
      'Cardiac monitoring facilities',
      'Ventilator support (ICU on wheels)',
      'State-of-the-art life saving equipment',
    ],
    image: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?w=800&q=80',
  },
  {
    id: 'air',
    title: 'Air Ambulance',
    icon: <Plane className="w-6 h-6" />,
    description: 'Rapid aeromedical transport for critical out-of-city emergencies providing treatments across global borders.',
    bullets: [
      'Specialized on-air medical assistance',
      'Remote area to city transfers',
      'Prompt, safe, and comfortable',
    ],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
  },
];

export default function FindAmbulance() {
  const [activeTab, setActiveTab] = useState(vehicles[0].id);
  const activeVehicle = vehicles.find((v) => v.id === activeTab)!;

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-foreground mb-4">
            Find Your <span className="text-primary">Right Ambulance</span>
          </h2>
          <p className="text-foreground/60 font-inter text-lg">We maintain a diverse fleet tailored for any medical necessity.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Tabs Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {vehicles.map((vehicle) => (
              <button
                key={vehicle.id}
                onClick={() => setActiveTab(vehicle.id)}
                className={`flex items-center gap-4 p-6 rounded-2xl transition-all duration-300 text-left ${
                  activeTab === vehicle.id 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' 
                    : 'bg-support text-foreground hover:bg-gray-100'
                }`}
              >
                <div className={`p-3 rounded-xl ${activeTab === vehicle.id ? 'bg-white/20' : 'bg-primary/10 text-primary'}`}>
                  {vehicle.icon}
                </div>
                <span className="font-poppins font-bold text-lg">{vehicle.title}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8 bg-support rounded-[2.5rem] p-8 md:p-12 min-h-[500px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-12 w-full"
              >
                <div>
                  <h3 className="text-3xl font-poppins font-bold text-foreground mb-4">{activeVehicle.title}</h3>
                  <p className="text-foreground/70 font-inter text-lg mb-8 leading-relaxed">
                    {activeVehicle.description}
                  </p>
                  <ul className="space-y-4 mb-10">
                    {activeVehicle.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                        <span className="font-inter text-foreground/80">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="flex items-center gap-2 bg-foreground text-white px-8 py-4 rounded-full font-poppins font-semibold hover:bg-primary transition-colors group">
                    Book Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="relative h-64 md:h-full min-h-[300px] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={activeVehicle.image} 
                    alt={activeVehicle.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
