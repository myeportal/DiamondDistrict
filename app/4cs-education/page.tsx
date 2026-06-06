import Link from 'next/link';

export const metadata = {
  title: "4C's Education • Diamond District",
  description: "Master the GIA 4Cs - Carat, Cut, Color, Clarity. In-depth guide to choosing timeless heirloom diamonds with full traceability, ethical sourcing, and lifetime quality guarantee. South Carolina's luxury standard.",
};

export default function FourCsEducation() {
  return (
    <div className="min-h-screen bg-[#f8f4eb] text-[#2c2c2c]">
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-8 py-3 bg-white border border-[#d4c9b0] rounded-3xl text-xs font-mono tracking-widest mb-8">
            GIA CERTIFIED • UNIVERSAL STANDARD • HEIRLOOM LEGACY
          </div>
          <h1 className="text-7xl tracking-tighter logo-font text-[#4a7043] mb-6">The 4C&apos;s of Diamonds</h1>
          <p className="text-2xl text-[#4a7043]/80 max-w-3xl mx-auto leading-tight">Master the universal language of diamond quality created by the Gemological Institute of America (GIA). Cut, Color, Clarity, and Carat are your roadmap to selecting stones that will be treasured for generations. At Diamond District, we go far beyond the basics — every stone is vetted against these standards with complete mine-to-finger traceability.</p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#deep-dive" className="px-8 py-3 bg-[#4a7043] text-white rounded-3xl hover:bg-black transition-all text-sm font-medium">DEEP DIVE INTO THE 4CS</a>
            <Link href="/#mall" className="px-8 py-3 border border-[#c5a05e] text-[#4a7043] rounded-3xl hover:bg-[#c5a05e] hover:text-white transition-all text-sm font-medium">BROWSE OUR COLLECTION</Link>
          </div>
        </div>

        {/* Video Placeholder - GIA Education Style */}
        <div className="mb-20 rounded-3xl overflow-hidden border border-[#d4c9b0] shadow-xl">
          <div className="aspect-video bg-[#2c2c2c] flex items-center justify-center relative">
            <div className="text-center text-white">
              <div className="text-6xl mb-6">🎥</div>
              <p className="text-xl font-medium">GIA 4C&apos;s Educational Video</p>
              <p className="text-[#c5a05e] mt-2">Watch how light interacts with exceptional diamonds (placeholder — replace with real GIA or in-house video)</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>
          </div>
        </div>

        {/* Deep Dive Section */}
        <div id="deep-dive" className="mb-24">
          <h2 className="text-5xl logo-font text-[#4a7043] mb-4 text-center">The 4C&apos;s Explained In Depth</h2>
          <p className="text-center text-[#4a7043]/70 max-w-2xl mx-auto mb-16">Our comprehensive guide goes well beyond surface level. These are the exact criteria our gemologists use when selecting every stone for the Diamond District collection.</p>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Carat Deep */}
            <div className="bg-white p-10 rounded-3xl border border-[#d4c9b0]">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">⚖️</div>
                <div>
                  <h3 className="text-4xl font-light text-[#4a7043]">Carat</h3>
                  <div className="text-xs uppercase tracking-widest text-[#c5a05e] font-mono mt-1">WEIGHT • RARITY • VALUE MULTIPLIER</div>
                </div>
              </div>
              <p className="text-[#4a7043]/70 mb-8 leading-relaxed">Carat measures a diamond&apos;s weight, not its visual size. One carat equals 0.2 grams or 200 milligrams. Because larger rough diamonds are exponentially rarer in nature, price does not increase linearly — it jumps dramatically at key thresholds (1ct, 2ct, 3ct+). A masterfully cut 0.9ct stone can visually outshine a poorly proportioned 1.1ct.</p>
              <div className="space-y-6">
                <div>
                  <div className="font-semibold text-[#4a7043] mb-3 flex items-center gap-2">KEY FACTS FOR BUYERS</div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-3"><span className="text-[#c5a05e] font-mono text-lg leading-none mt-0.5">•</span>Price per carat increases non-linearly. The jump from 0.99ct to 1.00ct can be 20-30%.</li>
                    <li className="flex gap-3"><span className="text-[#c5a05e] font-mono text-lg leading-none mt-0.5">•</span>Balance carat weight with cut quality. A well-cut 1.0ct can appear larger than a heavy but shallow 1.3ct.</li>
                    <li className="flex gap-3"><span className="text-[#c5a05e] font-mono text-lg leading-none mt-0.5">•</span>GIA reports weight to the hundredth of a carat (e.g. 1.23ct). We only accept stones with precise documentation.</li>
                    <li className="flex gap-3"><span className="text-[#c5a05e] font-mono text-lg leading-none mt-0.5">•</span>Our South Carolina clients often choose 1.5-3.0ct center stones for engagement rings that make a statement without excess.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cut Deep */}
            <div className="bg-white p-10 rounded-3xl border border-[#d4c9b0]">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">✨</div>
                <div>
                  <h3 className="text-4xl font-light text-[#4a7043]">Cut</h3>
                  <div className="text-xs uppercase tracking-widest text-[#c5a05e] font-mono mt-1">THE MOST IMPORTANT C • BRILLIANCE CREATOR</div>
                </div>
              </div>
              <p className="text-[#4a7043]/70 mb-8 leading-relaxed">Cut is the only C determined by human hands. It dictates how effectively a diamond returns light as brilliance (white light), fire (colored flashes), and scintillation (sparkle as it moves). GIA&apos;s Excellent cut grade for round brilliants is our strict minimum. Poor cut can make even flawless, colorless stones look dull and lifeless.</p>
              <div className="space-y-6">
                <div>
                  <div className="font-semibold text-[#4a7043] mb-3 flex items-center gap-2">OUR STANDARD &amp; WHY IT MATTERS</div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-3"><span className="text-[#c5a05e] font-mono text-lg leading-none mt-0.5">•</span>Excellent/Ideal cut returns maximum light. We reject anything lower for center stones.</li>
                    <li className="flex gap-3"><span className="text-[#c5a05e] font-mono text-lg leading-none mt-0.5">•</span>Proportions (table %, depth %, crown angle, pavilion angle) are measured with laser precision by GIA.</li>
                    <li className="flex gap-3"><span className="text-[#c5a05e] font-mono text-lg leading-none mt-0.5">•</span>Hearts &amp; Arrows symmetry is a hallmark of our premium rounds — visible under magnification as perfect 8 hearts and 8 arrows.</li>
                    <li className="flex gap-3"><span className="text-[#c5a05e] font-mono text-lg leading-none mt-0.5">•</span>A superior cut can make a diamond appear up to 20% larger than its actual carat weight.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Color and Clarity in second row with more depth */}
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <div className="bg-white p-10 rounded-3xl border border-[#d4c9b0]">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">🌈</div>
                <div>
                  <h3 className="text-4xl font-light text-[#4a7043]">Color</h3>
                  <div className="text-xs uppercase tracking-widest text-[#c5a05e] font-mono mt-1">D (COLORLESS) — Z (TINTED)</div>
                </div>
              </div>
              <p className="text-[#4a7043]/70 leading-relaxed mb-6">The color grade measures the absence of color. D is completely colorless and the rarest. Most diamonds have slight yellow or brown tints. For white metals, D-G are preferred. In yellow or rose gold, H-J often appear colorless to the unaided eye and offer exceptional value. Fancy colored diamonds (pink, blue, yellow) are graded on a different intensity scale.</p>
              <ul className="text-sm space-y-3 text-[#4a7043]/70">
                <li>• D-F: Investment grade colorless — highest demand for solitaire engagement rings</li>
                <li>• G-J: Excellent value, appear colorless in most jewelry settings when paired with good cut</li>
                <li>• We maintain strict in-house standards beyond the GIA report — eye-clean and beautiful in the setting is non-negotiable</li>
                <li>• Our live pricing API reflects the dramatic premium for top color grades</li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-[#d4c9b0]">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">🔎</div>
                <div>
                  <h3 className="text-4xl font-light text-[#4a7043]">Clarity</h3>
                  <div className="text-xs uppercase tracking-widest text-[#c5a05e] font-mono mt-1">FLAWLESS TO IMPERFECT</div>
                </div>
              </div>
              <p className="text-[#4a7043]/70 leading-relaxed mb-6">Clarity grades the size, number, location, and visibility of internal inclusions and external blemishes under 10x magnification. FL/IF are flawless. Most commercial diamonds are VS or SI. For heirloom pieces, we prioritize eye-clean stones (no inclusions visible to the naked eye even in ideal lighting).</p>
              <ul className="text-sm space-y-3 text-[#4a7043]/70">
                <li>• VS1-VS2: Minor inclusions, always eye-clean — our sweet spot for value and quality</li>
                <li>• SI1 and above often pass as eye-clean in mounted jewelry</li>
                <li>• Inclusions can tell the unique story of a stone&apos;s 3+ billion year journey from deep earth</li>
                <li>• Every Diamond District stone over 0.30ct comes with a GIA report confirming its clarity grade</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How the 4Cs Interact + Buying Guide */}
        <div className="bg-white border border-[#d4c9b0] rounded-3xl p-16 mb-20">
          <h3 className="text-5xl logo-font text-[#4a7043] mb-8 text-center">How the 4C&apos;s Work Together</h3>
          <div className="max-w-4xl mx-auto text-lg text-[#4a7043]/80 leading-relaxed space-y-8">
            <p>Cut is universally considered the most important C because it determines the diamond&apos;s beauty and light performance. A perfectly cut stone with slightly lower color or clarity can outperform a poorly cut flawless diamond. The interaction between all four creates the final emotional impact.</p>
            
            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-[#d4c9b0]">
              <div className="text-center">
                <div className="text-4xl mb-4">1</div>
                <p className="font-medium">Start with Cut</p>
                <p className="text-sm text-[#4a7043]/60 mt-2">Excellent cut is non-negotiable for heirloom sparkle</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">2</div>
                <p className="font-medium">Balance Color &amp; Clarity</p>
                <p className="text-sm text-[#4a7043]/60 mt-2">Choose eye-clean and near-colorless for your setting</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">3</div>
                <p className="font-medium">Select Carat Last</p>
                <p className="text-sm text-[#4a7043]/60 mt-2">Within your budget for maximum visual impact</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="text-4xl logo-font text-center text-[#4a7043] mb-12">What Our Clients Say About the 4C&apos;s Process</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-[#d4c9b0]">
              <p className="italic text-[#4a7043]/80 mb-6">"The education session on the 4Cs completely changed how I shop for diamonds. I now understand why that 'bargain' stone was actually a poor investment. My ring is perfect and will be passed to my daughter one day."</p>
              <div className="text-sm font-medium">— Elizabeth R., Charleston, SC</div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-[#d4c9b0]">
              <p className="italic text-[#4a7043]/80 mb-6">"The team walked us through the GIA report line by line. The difference between SI1 and VS2 in real life was eye-opening. We ended up with a stone that sparkles like nothing we&apos;ve seen in mall stores."</p>
              <div className="text-sm font-medium">— Michael &amp; Sarah T., Hilton Head</div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-[#d4c9b0]">
              <p className="italic text-[#4a7043]/80 mb-6">"As someone who bought a diamond before without understanding the 4Cs, this guide prevented me from making the same mistake twice. The live pricing and custom builder gave me confidence in my purchase."</p>
              <div className="text-sm font-medium">— James K., Greenville, SC</div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white border border-[#d4c9b0] rounded-3xl p-12 mb-20">
          <h3 className="text-4xl logo-font text-[#4a7043] mb-10 text-center">Frequently Asked Questions</h3>
          <div className="space-y-10 max-w-3xl mx-auto">
            <div>
              <div className="font-semibold text-lg mb-3">Should I prioritize cut over carat weight?</div>
              <p className="text-[#4a7043]/70">Yes. An excellently cut 1.0ct diamond will almost always outperform a poorly cut 1.5ct stone in beauty and value retention. We help you find the optimal balance.</p>
            </div>
            <div>
              <div className="font-semibold text-lg mb-3">What is the minimum clarity you recommend?</div>
              <p className="text-[#4a7043]/70">VS2 or better for center stones. SI1 can work beautifully if the inclusions are not in critical locations and the stone is eye-clean. We never compromise on visible flaws.</p>
            </div>
            <div>
              <div className="font-semibold text-lg mb-3">Does Diamond District only sell D color diamonds?</div>
              <p className="text-[#4a7043]/70">No. While we stock top colors, we believe in value. Many clients choose G-H color with excellent cut for stunning results at a more accessible price point. The live pricing in our AI builder shows you the real differences.</p>
            </div>
          </div>
        </div>

        {/* Diamond District Guarantee */}
        <div className="bg-gradient-to-br from-[#4a7043] to-[#2c2c2c] text-white rounded-3xl p-16 text-center mb-20">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-6 py-2 rounded-3xl text-xs tracking-widest mb-8">OUR UNCOMPROMISING PROMISE</div>
            <h3 className="text-5xl logo-font mb-8">Diamond District Quality Guarantee</h3>
            <p className="text-xl leading-relaxed opacity-90">Every diamond we offer is GIA certified (for stones 0.30ct+), 100% conflict-free, fully traceable from responsible mines, and meets or exceeds our strict in-house standards for cut, color, and eye-clean clarity. We stand behind every piece with a lifetime warranty, free resizing for the first year, and a 30-day satisfaction guarantee. Your heirloom is protected.</p>
            <Link href="/#agents" className="mt-12 inline-flex items-center gap-x-3 px-10 py-4 bg-white text-[#4a7043] rounded-3xl font-semibold hover:bg-amber-100 transition-all">
              START YOUR CUSTOM BUILD WITH LIVE PRICING →
            </Link>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center py-12">
          <p className="text-[#4a7043]/70 mb-6">Ready to apply everything you&apos;ve learned?</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/"
              className="px-10 py-4 bg-[#4a7043] text-white rounded-3xl text-lg font-medium hover:bg-black transition-colors inline-block"
            >
              Return to Diamond District Home
            </Link>
            <Link 
              href="/contact"
              className="px-10 py-4 border-2 border-[#4a7043] text-[#4a7043] rounded-3xl text-lg font-medium hover:bg-[#4a7043] hover:text-white transition-all inline-block"
            >
              Schedule a Private 4C&apos;s Consultation
            </Link>
          </div>
          <p className="text-xs text-[#4a7043]/50 mt-12">All content based on current GIA standards • Updated June 2026 • South Carolina based luxury experience</p>
        </div>
      </div>
    </div>
  );
}
