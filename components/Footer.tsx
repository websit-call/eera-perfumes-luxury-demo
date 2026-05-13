import Link from 'next/link';
import { Instagram, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-32 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
          
          <div className="md:col-span-2">
            <Link href="/" className="inline-block flex flex-col items-start group relative z-50 mb-8">
               <span className="font-serif text-[28px] tracking-[0.4em] uppercase text-white transition-colors duration-500 group-hover:text-[#D4AF37]">
                  Eera
               </span>
               <span className="font-sans text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase font-medium mt-1">
                  Perfumes
               </span>
            </Link>
            <p className="font-sans text-white/50 text-sm font-light leading-relaxed max-w-sm mb-8">
              A trusted premium perfume oil wholesaler, blending the heritage of Kannauj since 1975 with imported fragrances from Europe and the Middle East.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/eera.perfumes" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all bg-[#0a0a0a]">
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-8">Navigation</h4>
            <ul className="flex flex-col gap-4 font-sans text-xs uppercase tracking-widest text-white/50">
              <li><Link href="/about" className="hover:text-[#D4AF37] transition-colors">Our Heritage</Link></li>
              <li><Link href="/products" className="hover:text-[#D4AF37] transition-colors">The Collection</Link></li>
              <li><Link href="/wholesale" className="hover:text-[#D4AF37] transition-colors">Wholesale B2B</Link></li>
              <li><Link href="/quality" className="hover:text-[#D4AF37] transition-colors">Formulation Standard</Link></li>
              <li><Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-8">Contact</h4>
            <ul className="flex flex-col gap-6 font-sans text-sm text-white/50 font-light">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="leading-relaxed">Gala no 122, 1st Floor, Reliance Industries Estate, Near Maruti Suzuki Showroom, Vitthalwadi, Ulhasnagar 421306</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" strokeWidth={1.5} />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919833789519" className="hover:text-white transition-colors">+91 9833789519</a>
                  <a href="tel:+919221461038" className="hover:text-white transition-colors">+91 9221461038</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="font-sans text-[10px] uppercase tracking-widest text-white/30">
            &copy; {new Date().getFullYear()} EERA PERFUMES. All rights reserved.
          </p>
          <div className="flex gap-6 font-sans text-[10px] uppercase tracking-widest text-white/30">
            <span className="hover:text-[#D4AF37] transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#D4AF37] transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
