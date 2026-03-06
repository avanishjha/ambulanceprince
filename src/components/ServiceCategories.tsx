'use client';
import { motion } from 'framer-motion';
import { Activity, Building2, HeartPulse } from 'lucide-react';

const pillars = [
  {
    title: "Emergency Services",
    icon: <Activity className="w-8 h-8 text-primary" />,
    desc: "Rapid deployment for critical moments.",
    items: ["On Call Ambulance", "Out Station Transfer", "Life Support ICU"],
    colSpan: "md:col-span-2 lg:col-span-1",
    bg: "bg-white border-gray-100"
  },
  {
    title: "Corporate Services",
    icon: <Building2 className="w-8 h-8 text-blue-600" />,
    desc: "Health infrastructure for modern businesses.",
    items: ["Fixed / Rental Ambulances", "Mobile Medical Units", "Sports & Events Coverage", "Private Charters"],
    colSpan: "md:col-span-1 lg:col-span-1",
    bg: "bg-[#F8FAFC] border-blue-100" // Light blue tint
  },
  {
    title: "Wellness Services",
    icon: <HeartPulse className="w-8 h-8 text-emerald-600" />,
    desc: "Ongoing care and medical supervision.",
    items: ["Telehealth Consultations", "Disease Management", "Cashless OPD"],
    colSpan: "md:col-span-1 lg:col-span-1",
    bg: "bg-[#F0FDF4] border-emerald-100" // Light emerald tint
  }
];

export default function ServiceCategories() {
  return (
    <section className="py-24 bg-support relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-foreground mb-4">
            Beyond Emergencies
          </h2>
          <p className="text-foreground/60 font-inter text-lg max-w-2xl mx-auto">
            A comprehensive suite of medical services designed to support individuals, corporations, and events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`p-10 rounded-[2rem] border shadow-sm hover:shadow-xl transition-all duration-300 ${pillar.bg} ${pillar.colSpan} group`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-poppins font-bold text-foreground mb-3">{pillar.title}</h3>
              <p className="text-foreground/70 font-inter mb-8 h-12">{pillar.desc}</p>
              
              <ul className="space-y-4">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-poppins font-medium text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="mt-10 font-bold text-sm tracking-wide uppercase text-foreground/50 group-hover:text-primary transition-colors flex items-center gap-2">
                Learn More <span className="text-xl leading-none">&rarr;</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
