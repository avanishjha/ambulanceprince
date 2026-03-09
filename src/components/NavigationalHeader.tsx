'use client';
import Link from 'next/link';

export default function NavigationalHeader() {
  return (
    <header className="w-full fixed top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-4 pl-4 md:pl-8 py-4 md:py-6 group">
          <div className="w-12 h-12 md:w-16 md:h-16 relative flex-shrink-0 bg-white rounded-full flex items-center justify-center p-1 shadow-sm">
             <img 
               src="/images/prince-logo.png" 
               alt="Prince Ambulance Logo" 
               className="w-full h-full object-contain"
             />
          </div>
          <div className="flex flex-col">
            <span className="font-poppins font-black text-xl md:text-2xl leading-none tracking-tighter uppercase text-gray-900 group-hover:text-primary transition-colors">
              PRINCE AMBULANCE
            </span>
            <span className="font-inter text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-1">SERVICES</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex gap-8 font-inter text-xs tracking-[0.2em] uppercase text-gray-700 font-bold">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact Us</Link>
        </nav>

        {/* CTA Section */}
        <div className="flex items-center gap-4 pr-4 md:pr-8">
          {/* Appointment Button */}
          <a href="#appointment" className="hidden md:block font-inter text-xs font-bold tracking-widest uppercase text-gray-800 bg-gray-100 hover:bg-gray-200 transition-colors px-6 py-3.5 rounded-sm border-b-4 border-gray-300 active:border-b-0 active:translate-y-1">
            Book Appointment
          </a>

          {/* Call Button */}
          <a href="tel:+918178231291" className="flex items-center bg-primary text-white pl-6 pr-2 py-2 rounded-sm hover:brightness-110 transition-all group border-b-4 border-[#C1121F] active:border-b-0 active:translate-y-1">
            <span className="font-poppins font-bold text-base md:text-xl tracking-tight mr-4">+91 817 823 1291</span>
            <span className="bg-white text-primary px-5 py-2 rounded-full text-[10px] md:text-xs tracking-widest font-bold shadow-sm">CALL</span>
          </a>
        </div>
        
      </div>
    </header>
  );
}
