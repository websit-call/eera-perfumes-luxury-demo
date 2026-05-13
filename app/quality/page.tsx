export const metadata = {
  title: 'Quality & Formulation | EERA PERFUMES',
  description: 'Our stringent quality tests, olfactive stability, and formulation standards.',
};

import Image from 'next/image';

export default function QualityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-hidden pt-28">
      
      {/* Header */}
      <section className="relative px-6 py-20 lg:py-32 flex justify-center items-center">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          <span className="font-sans text-[10px] tracking-[0.4em] text-[#D4AF37] font-semibold uppercase mb-6 block">The Standard</span>
          <h1 className="font-serif text-[40px] md:text-[70px] lg:text-[90px] leading-[0.9] text-white tracking-tight">
            Uncompromising <br />
            <span className="italic text-white/70 font-light">Purity</span>
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center">
           <p className="font-sans text-white/50 leading-relaxed font-light text-lg md:text-xl">
            In the perfume business, consistency is everything. A client&apos;s signature scent must smell identical today as it did a year ago. We achieve this through a rigorous, multi-tiered quality assurance protocol.
           </p>
        </div>
      </section>

      {/* Grid of standards */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 p-[1px]">
          
          <div className="bg-[#050505] p-12 lg:p-20 relative overflow-hidden group">
             <div className="relative z-10">
               <span className="text-[#D4AF37] font-serif text-3xl mb-6 block">01 / GC/MS Profiling</span>
               <h3 className="font-serif text-[28px] text-white mb-6">Molecular Precision</h3>
               <p className="text-white/50 leading-relaxed font-light">
                 Every batch of imported oil is subjected to Gas Chromatography-Mass Spectrometry (GC/MS). This ensures that the compound profile matches our master standard perfectly, guaranteeing zero olfactive drift.
               </p>
             </div>
          </div>

          <div className="bg-[#0a0a0a] p-12 lg:p-20 relative overflow-hidden group">
             <div className="relative z-10">
               <span className="text-[#D4AF37] font-serif text-3xl mb-6 block">02 / Stability Testing</span>
               <h3 className="font-serif text-[28px] text-white mb-6">Thermal & Light Endurance</h3>
               <p className="text-white/50 leading-relaxed font-light">
                 Perfumes must survive variable climates. We test our variants for UV resilience and temperature fluctuations, ensuring the oil does not turn cloudy or lose its top notes when exposed to heat.
               </p>
             </div>
          </div>

          <div className="bg-[#0a0a0a] p-12 lg:p-20 relative overflow-hidden group">
             <div className="relative z-10">
               <span className="text-[#D4AF37] font-serif text-3xl mb-6 block">03 / Fixative Maturation</span>
               <h3 className="font-serif text-[28px] text-white mb-6">The Art of Sillage</h3>
               <p className="text-white/50 leading-relaxed font-light">
                 A perfume is only as good as its dry-down. Our specialized fixative blends are aged and macerated to ensure they lock in volatile top notes, projecting deeply for 12+ hours without smelling harsh or synthetic.
               </p>
             </div>
          </div>

          <div className="bg-[#050505] p-12 lg:p-20 relative overflow-hidden group">
             <div className="relative z-10">
               <span className="text-[#D4AF37] font-serif text-3xl mb-6 block">04 / Ethical Sourcing</span>
               <h3 className="font-serif text-[28px] text-white mb-6">Traceable Extracts</h3>
               <p className="text-white/50 leading-relaxed font-light">
                 From French Lavender to Cambodian Oud, we verify the origin of our raw materials. Pure extraction methods (like CO2 and enfleurage) yield an olfactive depth that cheap synthetic diluents simply cannot replicate.
               </p>
             </div>
          </div>

        </div>
      </section>

      {/* Full width image banner */}
      <section className="relative h-[500px] w-full border-t border-white/5">
         <Image src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1920&q=80" alt="Laboratory testing" fill className="object-cover opacity-30 mix-blend-luminosity" referrerPolicy="no-referrer" />
         <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
         <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <h2 className="font-serif text-4xl text-white mb-6">Request our CoA</h2>
            <p className="font-sans text-white/50 max-w-lg mb-8">Certificate of Analysis and Material Safety Data Sheets (MSDS) are available for our B2B partners upon request.</p>
         </div>
      </section>
    </div>
  );
}
