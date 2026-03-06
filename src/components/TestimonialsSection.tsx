'use client';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rajeev Sharma",
    role: "Patient's Son",
    text: "Fastest ambulance service in the city. They arrived in exactly 10 minutes and handled my father's cardiac emergency precisely like hospital staff.",
    rating: 5,
  },
  {
    name: "Dr. Ananya Iyer",
    role: "Attending Physician",
    text: "I always recommend Prince Ambulance for inter-hospital transfers. Their ICU units are impeccably maintained and their paramedics are highly trained.",
    rating: 5,
  },
  {
    name: "Meera Desai",
    role: "Local Resident",
    text: "Very professional team. Transparent pricing and no stress during the booking process. The WhatsApp booking feature saved us crucial time.",
    rating: 5,
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-foreground mb-4">
            Trusted by <span className="text-primary">Thousands</span>
          </h2>
          <p className="text-foreground/60 font-inter text-lg">Real stories from the people whose lives we've touched.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-support p-8 rounded-3xl relative top-0 hover:-top-2 transition-all duration-300 hover:shadow-xl"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-6" />
              <div className="flex gap-1 mb-6">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-inter text-foreground/80 leading-relaxed mb-8 text-lg italic">
                "{test.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center font-bold text-accent text-xl">
                  {test.name[0]}
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-foreground">{test.name}</h4>
                  <p className="text-sm font-inter text-foreground/50">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
