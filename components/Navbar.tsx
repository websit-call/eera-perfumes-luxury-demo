'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Wholesale', href: '/wholesale' },
  { name: 'Quality', href: '/quality' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
        ? 'py-4 bg-black/70 backdrop-blur-3xl border-b border-white/5' 
        : 'py-8 bg-gradient-to-b from-black/80 via-black/20 to-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2 mt-1 md:mt-0">
          <span className="font-serif text-[28px] leading-[1] tracking-[0.4em] uppercase text-white transition-colors duration-500 group-hover:text-[#D4AF37] block pl-1">
            Eera
          </span>
          <div className="h-4 w-[1px] bg-[#D4AF37]/30 mx-2 hidden md:block"></div>
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-60 font-medium hidden md:block group-hover:opacity-100 transition-opacity">
            Perfumes
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[11px] tracking-[0.2em] uppercase font-semibold transition-colors relative group ${
                pathname === link.href ? 'text-[#D4AF37]' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1.5 left-0 h-[1px] bg-[#D4AF37] transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center">
              <Link href="/contact" className="px-6 py-2.5 bg-transparent border border-white/20 text-white text-[10px] tracking-[0.2em] uppercase font-bold hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-500">
                  Inquiries
              </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100svh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 md:hidden border-t border-white/5 overflow-hidden -z-10 pt-20"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-serif text-4xl uppercase tracking-widest transition-colors ${
                    pathname === link.href ? 'text-[#D4AF37] italic' : 'text-white hover:text-[#D4AF37]'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
