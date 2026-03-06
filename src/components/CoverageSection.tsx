'use client';
import { MapPin } from 'lucide-react';

export default function CoverageSection() {
  return (
    <section className="py-24 bg-support relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden grid lg:grid-cols-2">
          
          <div className="p-12 lg:p-20 flex flex-col justify-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
              <MapPin className="w-8 h-8 animate-bounce" />
            </div>
            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-foreground mb-6">
              City-Wide <br/> <span className="text-primary">Coverage Area</span>
            </h2>
            <p className="text-foreground/70 font-inter text-lg mb-8 leading-relaxed">
              Our network spans across the entire city and surrounding regions, ensuring a vehicle can be dispatched to your location within minutes.
            </p>
            <ul className="space-y-4 mb-10">
              {["Central Business District", "Suburban Neighborhoods", "Highway Accidental Zones", "Airport & Transport Hubs"].map((area, i) => (
                <li key={i} className="flex items-center gap-3 font-poppins font-medium text-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary" /> {area}
                </li>
              ))}
            </ul>
            <button className="self-start text-primary font-bold font-poppins border-b-2 border-primary pb-1 hover:text-primary-hover hover:border-primary-hover transition-colors">
              Check Pin Code Availability
            </button>
          </div>
          
          <div className="bg-gray-200 h-96 lg:h-auto relative">
            {/* Real map implementation can replace this placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(20%) contrast(1.1) brightness(0.9)" }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.1)]" />
          </div>

        </div>
      </div>
    </section>
  );
}
