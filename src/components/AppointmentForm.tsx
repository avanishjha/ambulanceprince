'use client';

export default function AppointmentForm() {
  return (
    <section id="appointment" className="bg-background text-white py-32 border-b border-border-sharp">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
        
        <div className="lg:w-1/3">
          <h2 className="font-poppins font-black text-5xl md:text-7xl leading-none tracking-tighter uppercase mb-6">
            REQUEST <br/> <span className="text-primary italic">DISPATCH.</span>
          </h2>
          <p className="font-inter text-lg text-white/50 max-w-sm">
            For non-emergency transport or scheduled medical assistance, submit an appointment request below. <strong>For immediate life-threatening emergencies, call +91-8178231291.</strong>
          </p>
        </div>

        <div className="lg:w-2/3">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            
            <div className="flex flex-col border-b border-white/20 pb-2 focus-within:border-primary transition-colors">
              <label className="font-poppins font-bold text-xs tracking-widest text-white/40 uppercase mb-2">Your Name</label>
              <input 
                type="text" 
                className="bg-transparent border-none outline-none font-inter text-xl md:text-2xl text-white placeholder-white/20 w-full"
                placeholder="JOHN DOE"
                required
              />
            </div>

            <div className="flex flex-col border-b border-white/20 pb-2 focus-within:border-primary transition-colors">
              <label className="font-poppins font-bold text-xs tracking-widest text-white/40 uppercase mb-2">Email Address</label>
              <input 
                type="email" 
                className="bg-transparent border-none outline-none font-inter text-xl md:text-2xl text-white placeholder-white/20 w-full"
                placeholder="JOHN@EXAMPLE.COM"
                required
              />
            </div>

            <div className="flex flex-col border-b border-white/20 pb-2 focus-within:border-primary transition-colors">
              <label className="font-poppins font-bold text-xs tracking-widest text-white/40 uppercase mb-2">Select Date & Time</label>
              <input 
                type="datetime-local" 
                className="bg-transparent border-none outline-none font-inter text-xl md:text-2xl text-white placeholder-white/20 w-full [color-scheme:dark]"
                required
              />
            </div>

            <div className="flex flex-col border-b border-white/20 pb-2 focus-within:border-primary transition-colors">
              <label className="font-poppins font-bold text-xs tracking-widest text-white/40 uppercase mb-2">Choose Doctor / Unit</label>
              <select className="bg-transparent border-none outline-none font-inter text-xl md:text-2xl text-white w-full appearance-none cursor-pointer placeholder-white/20">
                <option value="" disabled selected className="text-black">SELECT UNIT</option>
                <option value="paramedic" className="text-black">Paramedic Team</option>
                <option value="doctor" className="text-black">Specialized Doctor</option>
                <option value="general" className="text-black">General Transport</option>
              </select>
            </div>

            <div className="flex flex-col border-b border-white/20 pb-2 focus-within:border-primary transition-colors md:col-span-2">
              <label className="font-poppins font-bold text-xs tracking-widest text-white/40 uppercase mb-2">Select Services</label>
              <select className="bg-transparent border-none outline-none font-inter text-xl md:text-2xl text-white w-full appearance-none cursor-pointer placeholder-white/20">
                <option value="" disabled selected className="text-black">SELECT SERVICE</option>
                <option value="bls" className="text-black">Basic Life Support (BLS)</option>
                <option value="als" className="text-black">Advance Life Support (ALS)</option>
                <option value="icu" className="text-black">ICU Ambulance</option>
                <option value="air" className="text-black">Air Ambulance</option>
              </select>
            </div>

            <div className="md:col-span-2 mt-8">
              <button 
                type="submit" 
                className="w-full bg-white text-black font-poppins font-black text-2xl tracking-tighter uppercase py-8 hover:bg-primary hover:text-white transition-colors"
              >
                Make Appointment
              </button>
            </div>
            
          </form>
        </div>

      </div>
    </section>
  );
}
