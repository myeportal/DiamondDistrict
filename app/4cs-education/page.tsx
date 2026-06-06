import Link from 'next/link';

export const metadata = {
  title: "4C's Education • Diamond District",
  description: "Master the GIA 4Cs - Carat, Cut, Color, Clarity. Your guide to choosing timeless heirloom diamonds.",
};

export default function FourCsEducation() {
  return (
    <div className="min-h-screen bg-[#f8f4eb] text-[#2c2c2c]">
      {/* Shared Nav - Matching main site */}
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
                <Link href="/4cs-education" className="text-[#4a7043] font-semibold">4Cs EDUCATION</Link>
                <Link href="/sustainability" className="hover:text-black">SUSTAINABILITY</Link>
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
            GIA CERTIFIED • UNIVERSAL STANDARD
          </div>
          <h1 className="text-7xl tracking-tighter logo-font text-[#4a7043] mb-6">The 4C&apos;s of Diamonds</h1>
          <p className="text-2xl text-[#4a7043]/80 max-w-2xl mx-auto">Master the universal language of diamond quality. Created by the Gemological Institute of America (GIA). Cut, Color, Clarity, Carat — your guide to heirloom pieces that last generations.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {/* Carat, Cut, Color, Clarity cards - rich content from GIA standards */}
          <div className="bg-white p-10 rounded-3xl border border-[#d4c9b0] hover:border-[#c5a05e] transition-all group">
            <div className="text-6xl mb-6">⚖️</div>
            <h3 className="text-4xl font-light text-[#4a7043] mb-4">Carat</h3>
            <p className="text-[#4a7043]/70 mb-6">Weight, not size. 1 carat = 0.2 grams. Larger stones are exponentially rarer. A well-cut 1ct can look bigger than a poorly cut 1.2ct.</p>
            <div className="text-xs uppercase tracking-widest text-[#c5a05e] font-mono">RARITY SCALE</div>
          </div>

          <div className="bg-white p-10 rounded-3xl border border-[#d4c9b0] hover:border-[#c5a05e] transition-all group">
            <div className="text-6xl mb-6">✨</div>
            <h3 className="text-4xl font-light text-[#4a7043] mb-4">Cut</h3>
            <p className="text-[#4a7043]/70 mb-6">The most important C for beauty. Determines brilliance, fire, and scintillation. GIA Excellent cut is our minimum standard for maximum sparkle.</p>
            <div className="text-xs uppercase tracking-widest text-[#c5a05e] font-mono">EXCELLENT ONLY</div>
          </div>

          <div className="bg-white p-10 rounded-3xl border border-[#d4c9b0] hover:border-[#c5a05e] transition-all group">
            <div className="text-6xl mb-6">🌈</div>
            <h3 className="text-4xl font-light text-[#4a7043] mb-4">Color</h3>
            <p className="text-[#4a7043]/70 mb-6">D (colorless/rarest) to Z. D-F are colorless. G-J offer excellent value and appear colorless in most settings. We prioritize eye-clean stones.</p>
            <div className="text-xs uppercase tracking-widest text-[#c5a05e] font-mono">D-J RANGE</div>
          </div>

          <div className="bg-white p-10 rounded-3xl border border-[#d4c9b0] hover:border-[#c5a05e] transition-all group">
            <div className="text-6xl mb-6">🔎</div>
            <h3 className="text-4xl font-light text-[#4a7043] mb-4">Clarity</h3>
            <p className="text-[#4a7043]/70 mb-6">FL to I. Most of our diamonds are VS or SI — eye-clean with no visible inclusions to the naked eye. Always GIA certified.</p>
            <div className="text-xs uppercase tracking-widest text-[#c5a05e] font-mono">VS-SI EYE CLEAN</div>
          </div>
        </div>

        <div className="bg-white border border-[#d4c9b0] rounded-3xl p-16 text-center">
          <h3 className="text-5xl logo-font text-[#4a7043] mb-8">How the 4C&apos;s Work Together</h3>
          <p className="max-w-2xl mx-auto text-lg text-[#4a7043]/80 leading-relaxed">
            Cut is king for sparkle. Balance carat size with excellent cut. Choose color and clarity that are eye-clean in your chosen setting. 
            Every Diamond District stone exceeds GIA standards and comes with full documentation and provenance.
          </p>
          <Link 
            href="/"
            className="mt-12 inline-block px-12 py-4 bg-[#4a7043] text-white rounded-3xl hover:bg-black transition-colors text-lg font-medium"
          >
            ← Return to Diamond District
          </Link>
        </div>
      </div>
    </div>
  );
}
