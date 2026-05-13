import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'EERA PERFUMES | Luxury Perfume Oils',
  description: 'Premium luxury perfume oil wholesaler and fragrance supplier importing high quality perfume oils from Europe and the Middle East while continuing a traditional Kannauj fragrance legacy since 1975.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} dark`} style={{ colorScheme: 'dark' }}>
      <body className="bg-[#0A0A0A] text-[#F5F2ED] font-sans antialiased selection:bg-[#C5A059]/30 selection:text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
