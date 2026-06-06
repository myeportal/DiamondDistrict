'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    buildDetails: 'Custom Ring - 18K Rose Gold - 2.8ct Oval D VVS1 Excellent Cut - Engraving: Love You Always - Est. $14,850',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending email with custom build parameters
    console.log("Sending custom RFQ -dd with parameters:", formData);
    setSubmitted(true);
    setTimeout(() => {
      window.location.href = '/thank-you?build=' + encodeURIComponent(formData.buildDetails);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f8f4eb] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-8">✉️</div>
          <h1 className="text-5xl logo-font tracking-tighter mb-6">Quote Request Received</h1>
          <p className="text-xl text-[#4a7043] max-w-md mx-auto">Your custom build has been received with our Diamond District Quality Guarantee. Our team will respond within 24 hours with a formal quote and vendor options.</p>
          <Link href="/" className="inline-block mt-12 px-10 py-4 bg-[#4a7043] text-white rounded-3xl text-sm tracking-widest hover:bg-black transition-colors">RETURN TO STUDIO</Link>
        </div>
      </div>
    );
  }

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
                <Link href="/contact" className="hover:text-black font-semibold">CONTACT</Link>
              </div>
            </div>
            <div className="flex items-center gap-x-8">
              <Link href="/" className="text-xs px-6 py-3 border border-[#c5a05e] rounded-full cursor-pointer hover:bg-[#c5a05e] hover:text-white transition-colors">BACK TO STUDIO</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-8 py-24">
        <h1 className="text-6xl logo-font tracking-tighter mb-6">Get Custom Quote</h1>
        <p className="text-xl text-[#4a7043] mb-12">Share your custom build from our AI agents. Our team will prepare a formal quote with full traceability and our Diamond District Quality Guarantee.</p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-sm font-medium mb-2 text-[#4a7043]">Your Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-6 py-4 border border-[#d4c9b0] rounded-3xl focus:border-[#c5a05e] outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-[#4a7043]">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-6 py-4 border border-[#d4c9b0] rounded-3xl focus:border-[#c5a05e] outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-[#4a7043]">Custom Build Details (pre-filled from your design)</label>
            <textarea
              value={formData.buildDetails}
              onChange={(e) => setFormData({...formData, buildDetails: e.target.value})}
              rows={6}
              className="w-full px-6 py-4 border border-[#d4c9b0] rounded-3xl focus:border-[#c5a05e] outline-none font-mono text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-[#4a7043]">Additional Notes</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={4}
              className="w-full px-6 py-4 border border-[#d4c9b0] rounded-3xl focus:border-[#c5a05e] outline-none"
              placeholder="Any special requests or family story for engraving..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-5 bg-[#4a7043] text-white rounded-3xl text-lg tracking-widest hover:bg-black transition-colors"
          >
            SEND CUSTOM RFQ (SUBJECT: CUSTOM RFQ -DD)
          </button>
        </form>

        <p className="text-center text-xs text-[#4a7043]/60 mt-12">Your build will be reviewed under our Diamond District Quality Guarantee. Expect a detailed quote within 24 hours.</p>
      </div>
    </div>
  );
}
