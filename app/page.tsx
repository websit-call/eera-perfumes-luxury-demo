'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, Filter, Droplet, Search, Globe } from 'lucide-react';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="flex flex-col min-h-screen bg-black overflow-hidden" ref={containerRef}>
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-[100svh] flex justify-center items-center overflow-hidden">
        {/* Animated ambient light / smoke */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            style={{ y: y1 }}
            className="absolute inset-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1920&q=80"
              alt="Luxury Perfume Cinematic"
              fill
              className="object-cover opacity-20 mix-blend-screen scale-105"
              referrerPolicy="no-referrer"
              priority
            />
          </motion.div>
          {/* Gradients to blend into black */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black"></div>
          
          {/* Gold Glow Aura */}
          <motion.div 
            animate={{ 
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.1, 1] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/10 rounded-full blur-[150px] pointer-events-none"
          ></motion.div>
        </div>

        {/* Hero Content */}
        <motion.div 
          style={{ opacity }}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-4 text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#D4AF37] font-semibold mb-8">
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]"></span>
              Since 1975
              <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]"></span>
            </span>

            <h1 className="font-serif text-[clamp(3rem,8vw,6rem)] leading-[0.9] text-white tracking-tight mb-8">
              Luxury Fragrance <br />
              <span className="italic font-light text-white/80">Oils</span>
            </h1>

            <p className="max-w-2xl mx-auto text-white/50 text-sm md:text-base tracking-wide font-light leading-relaxed mb-12">
              Third-generation master perfumery. Sourcing premium botanical extracts from Europe and the Middle East to craft the world&apos;s most stable business fragrance solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/products" className="group relative px-10 py-4 bg-[#D4AF37] text-black text-[11px] tracking-[0.2em] font-bold uppercase overflow-hidden">
                <span className="relative z-10">Explore Variants</span>
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              </Link>
              <Link href="/wholesale" className="group relative px-10 py-4 bg-transparent border border-white/20 text-white text-[11px] tracking-[0.2em] font-bold uppercase overflow-hidden hover:border-[#D4AF37] transition-colors duration-500">
                Wholesale Inquiry
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. TRUST / CAPABILITIES SECTION */}
      <section className="relative z-20 -mt-10 sm:-mt-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10 p-[1px]">
          {[
            { icon: Sparkles, title: "Legacy", subtitle: "3rd Gen Kannauj" },
            { icon: Globe, title: "Sourcing", subtitle: "Imported Extracts" },
            { icon: Filter, title: "Purity", subtitle: "100% Concentrated" },
            { icon: Droplet, title: "Supply", subtitle: "Wholesale Partner" },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="bg-[#0a0a0a] p-10 flex flex-col items-center text-center group hover:bg-[#0f0f0f] transition-colors duration-500"
            >
              <item.icon className="w-8 h-8 text-[#D4AF37] mb-6 stroke-[1]" />
              <h3 className="font-serif text-xl tracking-wide text-white mb-2">{item.title}</h3>
              <p className="text-[10px] uppercase font-sans tracking-[0.2em] text-white/40">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. SPLIT ABOUT SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative min-h-[500px]"
          >
            <div className="absolute inset-0 bg-[#D4AF37]/5 translate-x-4 -translate-y-4 rounded-sm"></div>
            <div className="relative w-full h-full border border-white/10 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80"
                alt="Perfume Creation"
                fill
                className="object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] font-semibold uppercase mb-6">Our Heritage</span>
            <h2 className="font-serif text-[40px] md:text-[50px] leading-tight text-white mb-8">
              A symphony of <br /> <span className="italic text-white/70">rare extracts.</span>
            </h2>
            <div className="h-[1px] w-12 bg-[#D4AF37] mb-8"></div>
            <p className="text-white/60 font-light leading-relaxed mb-6">
              Founded in India&apos;s perfume capital, Kannauj, we grew from a small traditional attar house to a premier supplier of imported fragrance oils. We bridge age-old distillation secrets with modern olfactory science.
            </p>
            <p className="text-white/60 font-light leading-relaxed mb-10">
              Our curated library consists of the highest-grade raw materials sourced directly from ethical producers in Europe and the Middle East, ensuring unparalleled depth and longevity.
            </p>
            <Link href="/about" className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-white hover:text-[#D4AF37] transition-colors">
              Discover Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. PRODUCTS SHOWCASE SECTION */}
      <section className="py-32 bg-[#111111] border-y border-white/5 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] font-semibold uppercase mb-4 block">The Collection</span>
              <h2 className="font-serif text-[40px] text-white">Premium Curations</h2>
            </div>
            <Link href="/products" className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] border-b border-[#D4AF37]/30 pb-1 hover:border-[#D4AF37] transition-colors">
              View Full Library
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "European Imports", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80", desc: "Fine designer-inspired fragrance oils." },
              { title: "Middle Eastern", img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80", desc: "Rich Oud, Amber, and Mukhallat blends." },
              { title: "Fixatives & Compounds", img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80", desc: "Specialty bases for maximum longevity." }
            ].map((prod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
              >
                <Link
                  href="/products"
                  className="group block relative h-[450px] bg-black border border-white/5 overflow-hidden"
                >
                  <Image
                    src={prod.img}
                    alt={prod.title}
                    fill
                    className="object-cover opacity-40 mix-blend-luminosity group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-serif text-2xl text-white mb-2">{prod.title}</h3>
                    <p className="text-sm font-light text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{prod.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. QUALITY & WHOLESALE (B2B FOCUS) */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Search className="w-10 h-10 text-[#D4AF37] mx-auto mb-8 stroke-[1]" />
          <h2 className="font-serif text-[36px] md:text-[48px] text-white mb-8">
            Formulated for <span className="italic text-white/70">Business Success</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/60 font-light leading-relaxed mb-12">
            Whether you are expanding an existing retail line or launching a startup brand, our stringent quality assurance guarantees stability, sillage, and exact consistency across every bulk volume order.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left max-w-4xl mx-auto mb-16">
             <div className="border border-white/10 p-8 hover:bg-white/5 transition-colors">
                <span className="text-[#D4AF37] font-serif text-2xl block mb-2">01</span>
                <h4 className="text-white text-sm tracking-wider uppercase mb-4">Bulk Scaling</h4>
                <p className="text-white/40 text-sm font-light">From 500ml carboys to 25kg aluminum drums, we supply reliably.</p>
             </div>
             <div className="border border-white/10 p-8 hover:bg-white/5 transition-colors">
                <span className="text-[#D4AF37] font-serif text-2xl block mb-2">02</span>
                <h4 className="text-white text-sm tracking-wider uppercase mb-4">Olfactive Testing</h4>
                <p className="text-white/40 text-sm font-light">Every batch is tested against master GC/MS profiles.</p>
             </div>
             <div className="border border-white/10 p-8 hover:bg-white/5 transition-colors">
                <span className="text-[#D4AF37] font-serif text-2xl block mb-2">03</span>
                <h4 className="text-white text-sm tracking-wider uppercase mb-4">Consultation</h4>
                <p className="text-white/40 text-sm font-light">Expert advice on DPG ratios, stabilizers, and maceration.</p>
             </div>
          </div>

          <Link href="/wholesale" className="px-12 py-4 bg-white text-black text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-[#D4AF37] transition-colors inline-block">
            Request Business Catalog
          </Link>
        </div>
      </section>

      {/* 6. IG GALLERY CTA */}
      <section className="border-t border-white/5 flex flex-col md:flex-row h-auto md:h-[400px]">
         <div className="w-full md:w-1/3 bg-[#0a0a0a] p-12 flex flex-col justify-center items-center text-center">
            <span className="text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase mb-4">Follow Us</span>
            <h3 className="font-serif text-3xl text-white mb-6 italic">@eera.perfumes</h3>
            <p className="text-white/50 text-sm font-light mb-8 max-w-[250px]">
              Discover behind-the-scenes formulation, new variant arrivals, and olfactory art.
            </p>
         </div>
         <div className="w-full md:w-2/3 grid grid-cols-2 lg:grid-cols-4">
            {[
              "1583445013765-46c20c4a6772",
              "1594035910387-fea47794261f",
              "1592945403244-b3fbafd7f539",
              "1522337660859-02fbefca4702"
            ].map((id, n) => (
              <a href="#" key={n} className="relative aspect-square md:aspect-auto h-full overflow-hidden group block">
                <Image
                  src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=400&q=80`}
                  alt="Instagram snippet"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </a>
            ))}
         </div>
      </section>

    </div>
  );
}
