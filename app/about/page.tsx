'use client';

import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-[#f8f4eb] text-[#2c2c2c]">
      <nav className="bg-white border-b border-[#d4c9b0] sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-8">
          <div className="h-20 flex items-center justify-between">
            <div className="flex items-center gap-x-12">
              <Link href="/" className="flex items-center gap-x-3">
                <span className="text-4xl">💎</span>
                <span className="logo-font text-3xl tracking-tight text-[#4a7043]">Diamond District</span>
              </Link>
              <div className="hidden md:flex items-center gap-x-9 text-sm font-medium text-[#4a7043]">
                <Link href="/" className="hover:text-black">SHOP ALL</Link>
                <Link href="/about" className="hover:text-black">ABOUT US</Link>
                <Link href="#education" className="hover:text-black">4Cs EDUCATION</Link>
                <Link href="#sustainability" className="hover:text-black">SUSTAINABILITY</Link>
                <Link href="/contact" className="hover:text-black">CONTACT</Link>
              </div>
            </div>
            <div className="flex items-center gap-x-8">
              <Link href="/contact" className="text-xs px-6 py-3 border border-[#c5a05e] rounded-full cursor-pointer hover:bg-[#c5a05e] hover:text-white transition-colors">GET CUSTOM QUOTE</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-8 py-24">
        <h1 className="text-6xl logo-font tracking-tighter mb-12">Our Story</h1>
        
        <div className="prose prose-lg max-w-none text-[#4a7043]">
          <p className="text-xl leading-relaxed">Diamond District was founded on a simple belief: every piece of jewelry should tell a story of legacy, craftsmanship, and uncompromising integrity. From the ancient mines of Botswana and Canada to the skilled hands of master cutters in Antwerp and Surat, we trace every diamond and gram of gold with complete transparency.</p>
          
          <h2 className="text-4xl logo-font tracking-tighter mt-16 mb-6">The Diamond District Quality Guarantee 💯</h2>
          <ul className="list-none space-y-6 text-lg">
            <li className="flex gap-4"><span className="text-2xl">✅</span> <span><strong>GIA Certified</strong> — Every stone is independently graded for exceptional color, clarity, cut, and carat weight.</span></li>
            <li className="flex gap-4"><span className="text-2xl">🌍</span> <span><strong>Fully Traceable</strong> — Blockchain-documented journey from ethical mine to your finger. No conflict diamonds, ever.</span></li>
            <li className="flex gap-4"><span className="text-2xl">🛡️</span> <span><strong>Lifetime Warranty</strong> — Free resizing, cleaning, and repairs for as long as you own the piece.</span></li>
            <li className="flex gap-4"><span className="text-2xl">💎</span> <span><strong>Heirloom Standard</strong> — Designed to be passed down for generations with the same brilliance it had on day one.</span></li>
            <li className="flex gap-4"><span className="text-2xl">🌱</span> <span><strong>Ethical & Sustainable</strong> — Fairmined gold, responsible mining practices, and carbon-negative operations.</span></li>
          </ul>

          <p className="text-xl leading-relaxed mt-12">Our AI Design Agents are an extension of this promise. They don\'t just calculate prices or suggest shapes — they guide you toward creations that embody the values we stand for. Whether you\'re designing a custom engagement ring with a private family engraving, a pendant that captures a personal milestone, or a bracelet that celebrates a legacy, every recommendation is grounded in our Quality Guarantee.</p>

          <p className="text-xl leading-relaxed">This is more than jewelry. It is a multi-generational bond between the earth, the artisan, and the wearer. Welcome to Diamond District — where every piece is a promise kept.</p>
        </div>
      </div>

      <footer className="bg-[#2c2c2c] text-white/60 py-12 text-center text-xs">
        Diamond District • All changes pushed to Git for review • Quality Guaranteed Since 2026
      </footer>
    </div>
  );
}
