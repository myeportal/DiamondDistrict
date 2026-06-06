'use client';
// @ts-ignore
import Nav from '../components/Nav';
import Link from 'next/link';


export default function Sustainability() {
  return (
    <div className="min-h-screen bg-[#f8f4eb] text-[#2c2c2c]">
      {/* Shared Nav */}
      <nav className="bg-white border-b border-[#d4c9b0] sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-8">
          <div className="h-20 flex items-center justify-between">
            <div className="flex items-center gap-x-12">
              <div className="flex items-center gap-x-3">
                <span className="text-4xl">💎</span>
                <Link href="/" className="logo-font text-3xl tracking-tight text-[#4a7043] hover:text-black">Diamond District</Link>
              </div>
              <div className="hidden md:flex items-center gap-x-9 text-sm font-medium text-[#4a7043]">
                <Link href="/#agents" className="hover:text-black">AI STUDIO</Link>
                <Link href="/#mall" className="hover:text-black">SHOP ALL</Link>
                <Link href="/4cs-education" className="hover:text-black">4Cs EDUCATION</Link>
                <Link href="/sustainability" className="text-[#4a7043] font-semibold">SUSTAINABILITY</Link>
              </div>
            </div>
            <div className="flex items-center gap-x-8">
              <Link href="/#mall" className="text-xs px-6 py-3 border border-[#c5a05e] rounded-full hover:bg-[#c5a05e] hover:text-white transition-colors">SHOP NOW</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-3 bg-white border border-[#d4c9b0] rounded-3xl text-xs font-mono tracking-widest mb-8">
            TRACEABLE • RJC CERTIFIED • RESPONSIBLE MINING
          </div>
          <h1 className="text-7xl tracking-tighter logo-font text-[#4a7043] mb-6">Sustainability &amp; Ethical Sourcing</h1>
          <p className="text-2xl text-[#4a7043]/80 max-w-2xl mx-auto">Every diamond and gram of gold is chosen with respect for people, planet, and provenance. Kimberley Process, Responsible Jewellery Council, Tracr blockchain, and partnerships with responsible producers.</p>
        </div>

        <div className="prose prose-lg max-w-none bg-white border border-[#d4c9b0] rounded-3xl p-16">
          <h2 className="text-4xl text-[#4a7043] mb-8">Our Standards</h2>
          <ul className="list-none space-y-8">
            <li className="flex gap-6">
              <div className="w-12 h-12 bg-[#4a7043] text-white rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl">🛡️</div>
              <div>
                <strong>Kimberley Process (KP)</strong><br />
                Baseline certification that blocks conflict diamonds. We go well beyond this with full due diligence.
              </div>
            </li>
            <li className="flex gap-6">
              <div className="w-12 h-12 bg-[#4a7043] text-white rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl">📍</div>
              <div>
                <strong>Responsible Jewellery Council (RJC)</strong><br />
                Independent audits for human rights, labor, environment, and ethical business practices across the entire supply chain.
              </div>
            </li>
            <li className="flex gap-6">
              <div className="w-12 h-12 bg-[#4a7043] text-white rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl">🔗</div>
              <div>
                <strong>Tracr Blockchain Traceability</strong><br />
                Tamper-proof digital passports from mine to your finger (backed by De Beers and GIA).
              </div>
            </li>
          </ul>

          <div className="my-16 border-t border-[#d4c9b0] pt-12">
            <h3 className="text-3xl text-[#4a7043] mb-6">Stories from the Source</h3>
            <p className="text-lg text-[#4a7043]/80">In Botswana, diamonds fund education, healthcare, and infrastructure while maintaining high environmental and community standards. We prioritize stones from jurisdictions with strong governance and verifiable benefits to local people.</p>
          </div>

          <Link 
            href="/"
            className="inline-block px-12 py-4 bg-[#4a7043] text-white rounded-3xl hover:bg-black transition-colors text-lg font-medium mt-8"
          >
            ← Return to Diamond District
          </Link>
        </div>
      </div>
    </div>
  );
}
