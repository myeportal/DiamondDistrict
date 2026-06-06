'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const build = searchParams.get('build') || 'Your custom design';

  return (
    <div className="min-h-screen bg-[#f8f4eb] text-[#2c2c2c] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-8 text-center py-24">
        <div className="text-7xl mb-8">💎</div>
        <h1 className="text-6xl logo-font tracking-tighter mb-8">Thank You</h1>
        <p className="text-2xl text-[#4a7043] mb-12">Your custom build has been received.</p>
        
        <div className="bg-white rounded-3xl p-12 mb-16 border border-[#d4af37]/30">
          <p className="text-sm uppercase tracking-widest text-[#c5a05e] mb-4">SUBJECT: CUSTOM RFQ -DD</p>
          <p className="font-medium text-lg mb-8">Build Summary: {build}</p>
          <p className="text-[#4a7043] leading-relaxed">Our team is reviewing your parameters under the Diamond District Quality Guarantee. You will receive a detailed quote, vendor options, and 3D render within 24 hours. Every piece we create is GIA certified, fully traceable, conflict-free, and crafted to be cherished for generations.</p>
        </div>

        <div className="space-y-6 text-sm text-[#4a7043]">
          <p>💎 GIA Certified • 🌍 100% Traceable • 🛡️ Lifetime Warranty • 💎 Heirloom Quality</p>
          <Link href="/" className="inline-block mt-8 px-12 py-5 bg-[#4a7043] text-white rounded-3xl text-sm tracking-widest hover:bg-black transition-colors">
            RETURN TO DIAMOND DISTRICT STUDIO
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ThankYou() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8f4eb] flex items-center justify-center">Loading your confirmation...</div>}>
      <ThankYouContent />
    </Suspense>
  );
}
