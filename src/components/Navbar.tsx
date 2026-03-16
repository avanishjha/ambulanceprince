'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="#services-manifesto" className="text-foreground hover:text-primary transition-colors font-medium">Services</Link>
            <Link href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</Link>
            <Link href="#fleet" className="text-foreground hover:text-primary transition-colors font-medium">Our Fleet</Link>
          </div>
          
          <div className="hidden md:flex items-center">
            <a href="tel:+918810616863" className="bg-primary text-white px-6 py-2.5 rounded-full font-poppins font-semibold hover:bg-primary-hover shadow-[0_0_20px_rgba(230,57,70,0.4)] hover:shadow-[0_0_30px_rgba(230,57,70,0.6)] transition-all transform hover:-translate-y-1">
              Call Ambulance
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col py-4 px-6 space-y-4 rounded-b-2xl">
          <Link 
            href="#services-manifesto" 
            onClick={() => setIsOpen(false)}
            className="text-foreground hover:text-primary transition-colors font-poppins font-medium py-2 border-b border-gray-50"
          >
            Services
          </Link>
          <Link 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="text-foreground hover:text-primary transition-colors font-poppins font-medium py-2 border-b border-gray-50"
          >
            About
          </Link>
          <Link 
            href="#fleet" 
            onClick={() => setIsOpen(false)}
            className="text-foreground hover:text-primary transition-colors font-poppins font-medium py-2 border-b border-gray-50"
          >
            Our Fleet
          </Link>
          <div className="pt-2">
            <a 
              href="tel:+918810616863" 
              onClick={() => setIsOpen(false)}
              className="block w-full bg-primary text-white px-6 py-3 rounded-full font-poppins font-semibold text-center hover:bg-primary-hover shadow-[0_0_15px_rgba(230,57,70,0.3)]"
            >
              Call Ambulance Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
