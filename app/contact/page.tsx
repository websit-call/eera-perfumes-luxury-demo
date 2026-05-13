export const metadata = {
  title: 'Contact | EERA PERFUMES',
  description: 'Get in touch with EERA Perfumes for wholesale inquiries and support.',
};

import { MapPin, Phone, Instagram, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-hidden pt-28">
      {/* Header */}
      <section className="relative px-6 py-20 lg:py-24 text-center">
        <span className="font-sans text-[10px] tracking-[0.4em] text-[#D4AF37] font-semibold uppercase mb-6 block">Reach Out</span>
        <h1 className="font-serif text-[40px] md:text-[70px] leading-[0.9] text-white tracking-tight mb-8">
          Contact <span className="italic text-white/70 font-light">Us</span>
        </h1>
      </section>

      {/* Main Layout */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          
          {/* Info Panel */}
          <div className="w-full lg:w-1/3 bg-[#050505] border border-white/5 p-12 text-center lg:text-left flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-3xl text-white mb-10">Direct Lines</h3>
              
              <div className="space-y-12">
                <div>
                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                    <Phone className="w-5 h-5 text-[#D4AF37]" />
                    <span className="font-sans text-[10px] tracking-[0.2em] text-white/50 uppercase">Phone & WhatsApp</span>
                  </div>
                  <p className="font-sans text-white text-lg font-light">+91 9833789519</p>
                  <p className="font-sans text-white text-lg font-light">+91 9221461038</p>
                </div>

                <div>
                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                    <span className="font-sans text-[10px] tracking-[0.2em] text-white/50 uppercase">Headquarters</span>
                  </div>
                  <p className="font-sans text-white/80 leading-relaxed font-light max-w-[250px] mx-auto lg:mx-0">
                    Gala no 122, 1st Floor, Reliance Industries Estate, Near Maruti Suzuki Showroom, Vitthalwadi, Ulhasnagar 421306
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                    <Instagram className="w-5 h-5 text-[#D4AF37]" />
                    <span className="font-sans text-[10px] tracking-[0.2em] text-white/50 uppercase">Social</span>
                  </div>
                  <a href="https://instagram.com/eera.perfumes" target="_blank" rel="noopener noreferrer" className="font-sans text-white hover:text-[#D4AF37] transition-colors font-light italic text-lg">
                    @eera.perfumes
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="w-full lg:w-2/3 bg-[#0a0a0a] border border-white/5 p-12 lg:p-20 relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>

            <h3 className="font-serif text-[28px] text-white mb-12 relative z-10">Send a Message</h3>
            
            <form className="space-y-12 relative z-10 w-full max-w-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-[#D4AF37] mb-3">Your Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 pb-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" />
                </div>
                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-[#D4AF37] mb-3">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/10 pb-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" />
                </div>
              </div>

              <div>
                <label className="block font-sans text-xs uppercase tracking-widest text-[#D4AF37] mb-3">Subject</label>
                <input type="text" className="w-full bg-transparent border-b border-white/10 pb-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" />
              </div>

              <div>
                <label className="block font-sans text-xs uppercase tracking-widest text-[#D4AF37] mb-3">Message</label>
                <textarea rows={5} className="w-full bg-transparent border-b border-white/10 pb-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"></textarea>
              </div>

              <div>
                <button type="button" className="group inline-flex items-center gap-4 text-[11px] tracking-[0.2em] font-bold uppercase text-white hover:text-[#D4AF37] transition-colors border-b border-white/20 hover:border-[#D4AF37] pb-2">
                  Send Message
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
