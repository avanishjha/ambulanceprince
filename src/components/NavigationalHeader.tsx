'use client';
import Link from 'next/link';

export default function NavigationalHeader() {
  return (
    <header className="w-full fixed top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">

        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-4 pl-4 md:pl-8 py-4 md:py-6 group">
          <div className="w-10 h-10 md:w-16 md:h-16 relative flex-shrink-0 bg-white rounded-full flex items-center justify-center p-1 shadow-sm">
            <img
              src="/images/prince-logo.png"
              alt="Prince Ambulance Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-poppins font-black text-[1.1rem] md:text-2xl leading-none tracking-tighter uppercase text-gray-900 group-hover:text-primary transition-colors">
              PRINCE AMBULANCE
            </span>
            <span className="font-inter text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-1">SERVICES</span>
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
          <a href="#appointment" className="hidden lg:block font-inter text-xs font-bold tracking-widest uppercase text-gray-800 bg-gray-100 hover:bg-gray-200 transition-colors px-6 py-3.5 rounded-sm border-b-4 border-gray-300 active:border-b-0 active:translate-y-1">
            Chat Now
          </a>

          {/* Call Button */}
          <a href="tel:+918810616863" className="flex items-center bg-primary text-white pl-4 pr-4 sm:pl-6 sm:pr-2 py-2 sm:py-2 rounded-sm hover:brightness-110 transition-all group border-b-4 border-[#C1121F] active:border-b-0 active:translate-y-1">
            <span className="hidden sm:inline-block font-poppins font-bold text-base md:text-xl tracking-tight mr-4">+91 881 061 6863</span>
            <span className="bg-white text-primary px-5 sm:px-5 py-2 rounded-full text-[10px] md:text-xs tracking-widest font-bold shadow-sm flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="sm:hidden"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              CALL
            </span>
          </a>
        </div>

      </div>
    </header>
  );
}
