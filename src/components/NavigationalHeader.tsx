'use client';
import Link from 'next/link';

export default function NavigationalHeader() {
  return (
    <header className="w-full fixed top-0 z-50 mix-blend-difference">
      <div className="flex border-b border-white/20">
        
        {/* Logo Section */}
        <div className="w-1/2 p-6 md:p-8 flex items-center border-r border-white/20 backdrop-blur-sm">
          <Link href="/" className="font-poppins font-black text-2xl md:text-3xl tracking-tighter uppercase text-white hover:italic transition-all">
            Prince<span className="text-primary tracking-normal">Amb</span>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="w-1/2 flex items-center justify-end p-6 md:p-8 backdrop-blur-sm group hover:bg-white hover:text-black transition-colors cursor-pointer">
          <a href="tel:+919999999999" className="w-full flex justify-end gap-4 items-center font-poppins font-bold text-lg md:text-2xl tracking-tight uppercase group-hover:text-black text-white transition-colors">
            <span className="hidden md:inline-block">Emergency</span>
            <span className="bg-primary group-hover:bg-black text-white px-4 py-1 rounded-full text-base tracking-widest transition-colors font-medium">10 MIN ETA</span>
          </a>
        </div>
        
      </div>
    </header>
  );
}
