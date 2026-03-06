'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full glass sticky top-10 z-40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-poppins font-bold text-xl">
              P
            </div>
            <Link href="/" className="font-poppins font-bold text-xl md:text-2xl text-accent tracking-tight">
              Prince<span className="text-primary">Ambulance</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Services</Link>
            <Link href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</Link>
            <Link href="#fleet" className="text-foreground hover:text-primary transition-colors font-medium">Our Fleet</Link>
          </div>
          
          <div className="flex items-center">
            <a href="tel:+919999999999" className="bg-primary text-white px-6 py-2.5 rounded-full font-poppins font-semibold hover:bg-primary-hover shadow-[0_0_20px_rgba(230,57,70,0.4)] hover:shadow-[0_0_30px_rgba(230,57,70,0.6)] transition-all transform hover:-translate-y-1">
              Call Ambulance
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
