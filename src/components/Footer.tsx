'use client';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-32 pb-8 overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <div className="flex items-center gap-6 mb-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-2">
                 <img 
                   src="/images/prince-logo.png" 
                   alt="Prince Ambulance Logo" 
                   className="w-full h-full object-contain"
                 />
              </div>
              <h3 className="font-poppins font-black text-4xl uppercase tracking-tighter">PRINCE 24 HRS.</h3>
            </div>
            <p className="font-inter text-white/60 max-w-sm">
              Critical extraction and advanced life support division. Operating globally, stationed in Delhi NCR.
            </p>
            <a href="tel:+918178231291" className="font-poppins font-black text-5xl md:text-7xl text-white hover:text-black transition-colors block mb-4">
              +91 817 823 1291
            </a>
            <a href="mailto:princeamb.ssp@gmail.com" className="font-inter text-xl font-bold uppercase underline decoration-white/30 hover:decoration-white transition-colors">
              princeamb.ssp@gmail.com
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 font-inter font-bold uppercase text-sm">
            <ul className="space-y-4">
              <li className="text-white/50 mb-6">SERVICES</li>
              <li><a href="#" className="hover:text-black transition-colors">Ambulance Service</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Basic Life Support</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Advance Life Support</a></li>
              <li><a href="#" className="hover:text-black transition-colors">ICU Ambulance</a></li>
            </ul>
            <ul className="space-y-4">
              <li className="text-white/50 mb-6">COMMAND CENTER</li>
              <li>Civil line, Sushruta</li>
              <li>Trauma Centre Hospital</li>
              <li>Delhi-110054</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-end gap-8 font-inter font-bold uppercase text-xs">
          <p>&copy; {new Date().getFullYear()} PRINCE AMBULANCE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-black transition-colors">PRIVACY PROTOCOL</a>
            <a href="#" className="hover:text-black transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>

      </div>

      <div className="w-full mt-16 flex justify-center pointer-events-none opacity-10">
        <h1 className="font-poppins font-black text-[20vw] leading-[0.7] tracking-tighter text-white whitespace-nowrap">
          PRINCE AMB.
        </h1>
      </div>
    </footer>
  );
}
