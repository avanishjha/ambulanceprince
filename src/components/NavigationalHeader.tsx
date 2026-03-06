'use client';
import Link from 'next/link';

export default function NavigationalHeader() {
  return (
    <header className="w-full fixed top-0 z-50 mix-blend-difference bg-black/10 backdrop-blur-sm border-b border-white/20">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-4 pl-4 md:pl-8 py-4 md:py-6 group">
          <div className="w-12 h-12 md:w-16 md:h-16 relative flex-shrink-0 bg-white rounded-full flex items-center justify-center p-1">
             <img 
               src="/images/prince-logo.png" 
               alt="Prince Ambulance Logo" 
               className="w-full h-full object-contain"
             />
          </div>
          <div className="flex flex-col">
            <span className="font-poppins font-black text-xl md:text-2xl leading-none tracking-tighter uppercase text-white group-hover:text-primary transition-colors">
              PRINCE
            </span>
            <span className="font-inter text-[10px] uppercase tracking-widest text-white/50 font-bold mt-1">24 Hrs Emergency</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex gap-8 font-inter text-xs tracking-[0.2em] uppercase text-white font-bold">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact Us</Link>
        </nav>

        {/* CTA Section */}
        <div className="flex items-center gap-6 pr-4 md:pr-8">
          {/* Appointment Button */}
          <a href="#appointment" className="hidden md:block font-inter text-xs font-bold tracking-widest uppercase text-white hover:text-primary transition-colors">
            Book Appointment
          </a>

          {/* Call Button */}
          <a href="tel:+918178231291" className="flex items-center bg-primary text-white pl-4 pr-1 py-1 rounded-sm hover:brightness-110 transition-all group">
            <span className="font-poppins font-bold text-sm md:text-xl tracking-tight mr-3">+91 817 823 1291</span>
            <span className="bg-black text-white px-4 py-1.5 rounded-full text-[10px] md:text-xs tracking-widest font-bold">CALL</span>
          </a>
        </div>
        
      </div>
    </header>
  );
}
