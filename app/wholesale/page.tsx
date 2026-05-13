export const metadata = {
  title: 'Wholesale & B2B | EERA PERFUMES',
  description: 'Premium perfume oil wholesale supply, bulk pricing, and fragrance business support.',
};

export default function WholesalePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-hidden pt-28">
       {/* Header */}
       <section className="relative px-6 py-20 lg:py-24 text-center">
        <span className="font-sans text-[10px] tracking-[0.4em] text-[#D4AF37] font-semibold uppercase mb-6 block">B2B Opportunities</span>
        <h1 className="font-serif text-[40px] md:text-[70px] leading-[0.9] text-white tracking-tight mb-8">
          Wholesale <span className="italic text-white/70 font-light">Supply</span>
        </h1>
        <p className="max-w-2xl mx-auto text-white/50 text-sm md:text-base tracking-wide font-light leading-relaxed">
          Empowering your fragrance business with exceptional quality oils, competitive volume pricing, and dedicated support.
        </p>
      </section>

      {/* Features Grid */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/10 p-[1px]">
          
          <div className="p-10 lg:p-14 bg-[#0a0a0a] group hover:bg-[#0f0f0f] transition-colors duration-500">
            <span className="text-[#D4AF37] font-serif text-3xl block mb-6 opacity-50">01</span>
            <h3 className="font-serif text-2xl text-white mb-4">Bulk Pricing</h3>
            <p className="font-sans text-white/50 font-light leading-relaxed text-sm">
              Tiered volume discounts designed to scale with your business. The more you grow, the better your margins.
            </p>
          </div>

          <div className="p-10 lg:p-14 bg-[#0a0a0a] group hover:bg-[#0f0f0f] transition-colors duration-500">
            <span className="text-[#D4AF37] font-serif text-3xl block mb-6 opacity-50">02</span>
            <h3 className="font-serif text-2xl text-white mb-4">Consistent Quality</h3>
            <p className="font-sans text-white/50 font-light leading-relaxed text-sm">
              Rigorous batch testing ensures your signature scents smell the exact same, order after order, year after year.
            </p>
          </div>

          <div className="p-10 lg:p-14 bg-[#0a0a0a] group hover:bg-[#0f0f0f] transition-colors duration-500">
            <span className="text-[#D4AF37] font-serif text-3xl block mb-6 opacity-50">03</span>
            <h3 className="font-serif text-2xl text-white mb-4">Formulation Support</h3>
            <p className="font-sans text-white/50 font-light leading-relaxed text-sm">
              Access true expertise. We advise on fixatives, dilution ratios, and blending techniques to perfect your final product.
            </p>
          </div>

        </div>
      </section>

      {/* Inquiry Form Area */}
      <section className="py-32 px-6 bg-[#050505] border-y border-white/5 relative">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-[30px] md:text-[40px] text-white mb-4">Start a Partnership</h2>
            <div className="w-12 h-[1px] bg-[#D4AF37]/50 mx-auto mt-6 mb-6"></div>
            <p className="font-sans text-white/50 font-light">Fill out the form below to receive our latest price list and catalog.</p>
          </div>

          <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-16">
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-[#D4AF37] mb-3">Company Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 pb-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="Enter your business name" />
                </div>
                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-[#D4AF37] mb-3">Contact Person</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 pb-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="Your full name" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-[#D4AF37] mb-3">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/10 pb-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block font-sans text-xs uppercase tracking-widest text-[#D4AF37] mb-3">Phone Number</label>
                  <input type="tel" className="w-full bg-transparent border-b border-white/10 pb-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="+91" />
                </div>
              </div>

              <div>
                <label className="block font-sans text-xs uppercase tracking-widest text-[#D4AF37] mb-3">Business Type</label>
                <select className="w-full bg-transparent border-b border-white/10 pb-3 text-white/70 focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none">
                  <option value="" className="bg-[#0F0F0F] text-white">Select your primary business</option>
                  <option value="retailer" className="bg-[#0F0F0F] text-white">Perfume Retailer</option>
                  <option value="attar_seller" className="bg-[#0F0F0F] text-white">Attar Seller</option>
                  <option value="startup" className="bg-[#0F0F0F] text-white">Startup Brand</option>
                  <option value="manufacturer" className="bg-[#0F0F0F] text-white">Cosmetics Manufacturer</option>
                  <option value="other" className="bg-[#0F0F0F] text-white">Other</option>
                </select>
              </div>

              <div>
                <label className="block font-sans text-xs uppercase tracking-widest text-[#D4AF37] mb-3">Inquiry Details</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/10 pb-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors resize-none" placeholder="Tell us about your requirements, specific oils, or volume needs..."></textarea>
              </div>

              <div className="text-center pt-8">
                <button type="button" className="px-12 py-5 bg-[#D4AF37] text-black font-sans text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-white transition-colors">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
