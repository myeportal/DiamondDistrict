import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diamond District • Timeless Heirloom Jewelry",
  description: "GIA certified diamonds and ethical heirloom jewelry. Live pricing, custom builder, 4Cs education, and full traceability. South Carolina's premier luxury destination.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#f8f4eb] text-[#2c2c2c] flex flex-col">
        {/* Shared Luxury Nav - Consistent across all pages for seamless within-page navigation */}
        <nav className="bg-white border-b border-[#d4c9b0] sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-8">
            <div className="h-20 flex items-center justify-between">
              <div className="flex items-center gap-x-12">
                <div className="flex items-center gap-x-3">
                  <span className="text-4xl">💎</span>
                  <Link href="/" className="logo-font text-3xl tracking-tight text-[#4a7043] hover:text-black transition-colors">Diamond District</Link>
                </div>
                <div className="hidden md:flex items-center gap-x-9 text-sm font-medium text-[#4a7043]">
                  <Link href="/#agents" className="hover:text-black transition-colors">AI STUDIO</Link>
                  <Link href="/#mall" className="hover:text-black transition-colors">SHOP ALL</Link>
                  <Link href="/4cs-education" className="text-[#4a7043] font-semibold hover:text-black transition-colors">4C's EDUCATION</Link>
                  <Link href="/sustainability" className="hover:text-black transition-colors">SUSTAINABILITY</Link>
                  <Link href="/about" className="hover:text-black transition-colors">OUR STORY</Link>
                </div>
              </div>
              <div className="flex items-center gap-x-8">
                <Link 
                  href="/contact" 
                  className="text-xs px-6 py-3 border border-[#c5a05e] rounded-full hover:bg-[#c5a05e] hover:text-white transition-all"
                >
                  GET IN TOUCH
                </Link>
                <Link href="/#mall" className="text-xs px-6 py-3 bg-[#4a7043] text-white rounded-full hover:bg-black transition-all">SHOP NOW</Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
