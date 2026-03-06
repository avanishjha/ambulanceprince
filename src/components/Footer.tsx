'use client';

export default function Footer() {
  return (
    <footer className="bg-primary text-black pt-32 pb-8 overflow-hidden relative border-t border-black">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h3 className="font-poppins font-black text-4xl uppercase tracking-tighter mb-6">
              INITIALIZE <br/> DISPATCH.
            </h3>
            <a href="tel:+919999999999" className="font-poppins font-black text-5xl md:text-7xl text-white hover:text-black transition-colors block mb-4">
              +91 999 999 9999
            </a>
            <a href="mailto:dispatch@princeambulance.in" className="font-inter text-xl font-bold uppercase underline decoration-black/30 hover:decoration-black transition-colors">
              dispatch@princeambulance.in
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 font-inter font-bold uppercase text-sm">
            <ul className="space-y-4">
              <li className="text-black/50 mb-6">SERVICES</li>
              <li><a href="#" className="hover:text-white transition-colors">Emergency Protocol</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Aeromedical</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Corporate Subs</a></li>
            </ul>
            <ul className="space-y-4">
              <li className="text-black/50 mb-6">COMMAND CENTER</li>
              <li>Terminal 3, Block A</li>
              <li>Sector 12, Apollo District</li>
              <li>New Delhi, India 110001</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/20 flex flex-col md:flex-row justify-between items-end gap-8 font-inter font-bold uppercase text-xs">
          <p>&copy; {new Date().getFullYear()} PRINCE AMBULANCE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">PRIVACY PROTOCOL</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>

      </div>

      <div className="w-full mt-16 flex justify-center pointer-events-none opacity-20">
        <h1 className="font-poppins font-black text-[20vw] leading-[0.7] tracking-tighter text-black whitespace-nowrap">
          PRINCE AMB.
        </h1>
      </div>
    </footer>
  );
}
