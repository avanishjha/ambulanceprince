'use client';
import { motion } from 'framer-motion';

const fleetImages = [
  { img: "https://images.unsplash.com/photo-1516841273335-e39b37888115?w=800&q=80", label: "Advanced Life Support Unit" },
  { img: "https://plus.unsplash.com/premium_photo-1661608670417-104c9302ca14?w=800&q=80", label: "ICU Ventilator Setup" },
  { img: "https://images.unsplash.com/photo-1587556201565-2ea642111eb3?w=800&q=80", label: "Paramedic Ready" },
  { img: "https://images.unsplash.com/photo-1538350813735-3b994801b608?w=800&q=80", label: "High-grade Medical Equipment" },
];

export default function FleetGallery() {
  return (
    <section id="fleet" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-foreground mb-4">
              Our <span className="text-primary">Medical Fleet</span>
            </h2>
            <p className="text-foreground/60 font-inter text-lg">Hospital-grade care on wheels, equipped for rapid response and stabilization.</p>
          </div>
          <button className="hidden md:flex bg-foreground text-white px-8 py-3 rounded-full font-poppins font-semibold hover:bg-foreground/90 transition-colors shadow-md">
            View All Vehicles
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fleetImages.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group ${idx === 0 || idx === 3 ? 'md:col-span-1 h-64 md:h-96' : 'md:col-span-1 h-64 md:h-96'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
              <img 
                src={item.img} 
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-white font-poppins font-bold text-xl drop-shadow-lg">{item.label}</p>
                <div className="w-0 h-1 bg-primary mt-2 group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
