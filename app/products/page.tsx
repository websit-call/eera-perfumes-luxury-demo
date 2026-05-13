import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Our Collection | EERA PERFUMES',
  description: 'Premium imported perfume oils, attar blends, and fixative solutions.',
};

const CATEGORIES = [
  {
    title: 'European Imports',
    description: 'Niche and designer-inspired fragrance oils sourced directly from elite laboratories. Known for their complex top notes and sophisticated dry-downs.',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80',
    details: ['100% Concentrated', 'Alcohol Free', 'Designer Profiles']
  },
  {
    title: 'Middle Eastern Attars',
    description: 'Deep, resonant blends of Cambodian Oud, Ambergris, and delicate Taif Rose. Formulated for remarkable sillage and cultural authenticity.',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
    details: ['Pure Oud Integrations', 'Long-lasting Sillage', 'Rich Base Notes']
  },
  {
    title: 'Kannauj Masterpieces',
    description: 'The soul of our heritage. We still supply select traditional Shamama, Khus, and Mitti attars distilled using the ancient deg-bhapka method.',
    image: '/kannauj.jpg',
    details: ['Traditional Distillation', 'Earth-based', 'Rare Heritage']
  },
  {
    title: 'Fixatives & Compounds',
    description: 'High-performance bases that anchor volatile top notes and ensure your final product lasts upwards of 12 hours on skin.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    details: ['Longevity Enhancers', 'Custom Bases', 'Purity Tested']
  }
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-hidden pt-28">
      
      {/* Header */}
      <section className="relative px-6 py-20 lg:py-24 text-center">
        <span className="font-sans text-[10px] tracking-[0.4em] text-[#D4AF37] font-semibold uppercase mb-6 block">The Library</span>
        <h1 className="font-serif text-[40px] md:text-[70px] leading-[0.9] text-white tracking-tight mb-8">
          Olfactory <span className="italic text-white/70 font-light">Variants</span>
        </h1>
        <p className="max-w-2xl mx-auto text-white/50 text-sm md:text-base tracking-wide font-light leading-relaxed">
          An extensive library of meticulously crafted and sourced perfume oils for the discerning business.
        </p>
      </section>

      {/* Grid */}
      <section className="px-6 pb-32 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/10 p-[1px]">
          {CATEGORIES.map((cat, i) => (
            <div key={i} className="group relative bg-[#050505] overflow-hidden min-h-[500px] flex flex-col">
              <div className="absolute inset-0 h-[60%] w-full">
                <Image
                   src={cat.image}
                   alt={cat.title}
                   fill
                   className="object-cover opacity-30 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-70 transition-all duration-1000"
                   referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#050505]"></div>
              </div>
              
              <div className="mt-auto relative z-10 p-10 flex flex-col items-start bg-gradient-to-t from-[#050505] via-[#050505] to-transparent">
                <span className="text-[#D4AF37] font-serif text-2xl mb-4 opacity-50">0{i + 1}</span>
                <h2 className="font-serif text-3xl text-white mb-4">{cat.title}</h2>
                <p className="text-white/50 font-light text-sm mb-8 leading-relaxed max-w-md">
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {cat.details.map((detail, j) => (
                    <span key={j} className="px-3 py-1 bg-white/5 text-white/40 text-[10px] uppercase tracking-widest border border-white/5">
                      {detail}
                    </span>
                  ))}
                </div>
                <Link href="/wholesale" className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] font-bold uppercase text-white hover:text-[#D4AF37] transition-colors border-b border-white/20 hover:border-[#D4AF37] pb-1">
                  Request Pricing
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Presentation Banner */}
      <section className="py-32 px-6 border-y border-white/5 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <h2 className="font-serif text-[30px] md:text-[40px] text-white mb-6">Wholesale Presentation</h2>
            <div className="w-12 h-[1px] bg-[#D4AF37]/50 mb-8"></div>
            <p className="font-sans text-white/50 font-light text-base md:text-lg leading-relaxed mb-12 max-w-2xl">
              All our variants are supplied in premium, leak-proof export-grade packaging ensuring complete olfactive integrity from our warehouse to your laboratory. Aluminum canisters and amber glass options available.
            </p>
            <Link href="/contact" className="px-10 py-4 border border-[#D4AF37] text-[#D4AF37] text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-[#D4AF37] hover:text-black transition-all">
               Contact for Samples
            </Link>
        </div>
      </section>

    </div>
  );
}
