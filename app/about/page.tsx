export const metadata = {
  title: 'Our Story | EERA PERFUMES',
  description: 'Three generations of olfactory artistry from Kannauj to global imported oils.',
};

import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-hidden pt-28">
      
      {/* HEADER TItle */}
      <section className="relative px-6 py-20 lg:py-32 flex justify-center items-center">
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          <span className="font-sans text-[10px] tracking-[0.4em] text-[#D4AF37] font-semibold uppercase mb-6 block">The Heritage</span>
          <h1 className="font-serif text-[40px] md:text-[70px] lg:text-[90px] leading-[0.9] text-white tracking-tight">
            A Journey of <br />
            <span className="italic text-white/70 font-light">Scent</span>
          </h1>
        </div>
      </section>

      {/* LUXURY SPLIT */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-32 items-center">
          
          <div className="w-full md:w-1/2 relative h-[600px] lg:h-[800px] group">
             {/* Glow */}
             <div className="absolute inset-0 bg-[#D4AF37]/5 translate-x-3 -translate-y-3 pointer-events-none hidden md:block"></div>
             
             <div className="relative w-full h-full border border-white/5 overflow-hidden">
               <Image
                 src="https://images.unsplash.com/photo-1583445013765-46c20c4a6772?auto=format&fit=crop&w=800&q=80"
                 alt="Vintage Kannauj Distillation"
                 fill
                 className="object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-80 transition-all duration-1000"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
             </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#D4AF37] font-serif text-3xl">01</span>
                <h2 className="font-serif text-3xl md:text-4xl text-white">The Kannauj Roots</h2>
              </div>
              <p className="font-sans text-white/50 leading-relaxed font-light text-base md:text-lg">
                Rooted in the ancient soil of Kannauj—the perfume capital of India—EERA Perfumes represents three generations of olfactory artistry. What began in 1975 as a traditional distillation house focusing on pure Ruhs and Shams, has evolved into a premier luxury supplier.
              </p>
            </div>
            
            <div className="w-8 h-[1px] bg-[#D4AF37]/50"></div>
            
            <div>
               <div className="flex items-center gap-4 mb-4">
                <span className="text-[#D4AF37] font-serif text-3xl">02</span>
                <h2 className="font-serif text-3xl md:text-4xl text-white">Global Horizons</h2>
              </div>
              <p className="font-sans text-white/50 leading-relaxed font-light text-base md:text-lg">
                We observed a stark shift in the market: a demand for superior, stable, and niche-inspired oils that could not be met locally. We bridged this gap by partnering with the finest laboratories in Grasse and elite perfume houses in the Middle East to import world-class fragrance oils.
              </p>
            </div>

            <div className="w-8 h-[1px] bg-[#D4AF37]/50"></div>

            <div>
               <div className="flex items-center gap-4 mb-4">
                <span className="text-[#D4AF37] font-serif text-3xl">03</span>
                <h2 className="font-serif text-3xl md:text-4xl text-white">Uncompromising Purity</h2>
              </div>
              <p className="font-sans text-white/50 leading-relaxed font-light text-base md:text-lg">
                We believe in the unseen architecture of a scent. From exact GC/MS matching to testing fixative stability, we supply businesses with oils that do not merely smell luxurious on a blotter, but perform consistently in real-world retail applications.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FOUNDER QUOTE / PHILOSOPHY */}
      <section className="bg-[#050505] py-32 px-6 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="font-serif text-[24px] md:text-[40px] text-white/90 leading-tight mb-8">
            <span className="text-[#D4AF37] italic">&quot;</span>
            A great fragrance is a silent introduction. Our mission is to provide businesses with the finest invisible signatures.
            <span className="text-[#D4AF37] italic">&quot;</span>
          </p>
          <p className="text-[10px] tracking-[0.3em] font-bold text-[#D4AF37] uppercase">The Founder&apos;s Vision</p>
        </div>
      </section>

    </div>
  );
}
