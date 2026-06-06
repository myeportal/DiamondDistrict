'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <nav className="bg-white border-b border-[#d4c9b0] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-20 flex items-center justify-between">
          <div className="flex items-center gap-x-12">
            <Link href="/" className="flex items-center gap-x-3">
              <span className="text-4xl">💎</span>
              <span className="logo-font text-3xl tracking-tight text-[#4a7043]">Diamond District</span>
            </Link>
            <div className="hidden md:flex items-center gap-x-9 text-sm font-medium text-[#4a7043]">
              <Link href="#agents" className="hover:text-black">AI STUDIO</Link>
              <Link href="#mall" className="hover:text-black">SHOP ALL</Link>
              <Link href="/4cs-education" className="hover:text-black">4Cs EDUCATION</Link>
              <Link href="/sustainability" className="hover:text-black">SUSTAINABILITY</Link>
              <Link href="/about" className="hover:text-black">OUR STORY</Link>
            </div>
          </div>
          <div className="flex items-center gap-x-8">
            <input 
              type="text" 
              placeholder="Search diamonds & gold..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white border border-[#d4c9b0] focus:border-[#c5a05e] rounded-3xl px-8 py-3 w-80 outline-none text-sm"
            />
            <Link href="/contact" className="text-xs px-6 py-3 border border-[#c5a05e] rounded-full cursor-pointer hover:bg-[#c5a05e] hover:text-white transition-colors">GET IN TOUCH</Link>
            <div className="text-xs px-6 py-3 border border-[#c5a05e] rounded-full cursor-pointer hover:bg-[#c5a05e] hover:text-white transition-colors">ADMIN</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
