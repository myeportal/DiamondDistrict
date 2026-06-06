'use client';

import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  specs: string;
  description: string;
}

const elegantJewelryImages = [
  '/assets/diamond-cartier1.jpg',
  '/assets/diamond-cartier2.jpg',
  '/assets/diamond-pendant.jpg',
  '/assets/gold-choker.jpg',
  '/assets/heart-pendant.jpg',
];

const generateProducts = (): Product[] => {
  const products: Product[] = [];
  const descriptions = [
    "GIA certified 2.81ct round brilliant with D color, VVS1 clarity and Ideal cut. Sourced from a responsible Botswana mine with full traceability. The master cutter spent 14 hours perfecting every facet to achieve maximum fire and hearts & arrows symmetry. Paired with heirloom 18K yellow gold. A true family legacy piece that will be cherished for generations.",
    "1.42ct total cascade drop earrings in 18K white gold with F color VS1 diamonds. Inspired by Canadian waterfalls. Each stone personally inspected by a 27-year veteran gemologist. Passed through three generations at major life events. Full documented journey from rough to finished heirloom.",
    "1.21ct heritage signet ring with G color SI1 diamond in 18K rose gold. Custom engraving available. The stone's 3.2 billion year journey from Sierra Leone is fully documented. Substantial weight communicates quiet authority and permanence. Perfect for leaders who value substance over flash.",
    "3.12ct celestial oval pendant in platinum. The stone appears to float, creating a breathtaking illusion of a captured star. Sourced from a Canadian mine with the strictest environmental standards. Cut over 9 weeks to create a unique light-pooling effect. Comes with handwritten letter from the master cutter.",
    "8.4ct aurora borealis tennis bracelet with 17 perfectly matched E-F color VVS diamonds in 18K white gold. Each stone hand-selected from the same rough parcel. Micro-flex joints allow it to drape like fabric. Survived a skiing accident without a single stone shifting. True heirloom quality."
  ];

  const basePrices = [28500, 12400, 8900, 36700, 45200];

  for (let i = 0; i < 25; i++) {
    const image = elegantJewelryImages[i % elegantJewelryImages.length];
    const desc = descriptions[i % descriptions.length];
    const basePrice = basePrices[i % basePrices.length];
    products.push({
      id: i + 1,
      name: `Elegant ${['Round Brilliant', 'Cascade Drop', 'Heritage Signet', 'Celestial Oval', 'Aurora Tennis'][i % 5]} Piece`,
      price: Math.round(basePrice * (0.8 + Math.random() * 0.6)),
      image,
      specs: "GIA Certified • Traceable • Conflict-Free • Heirloom Quality",
      description: desc
    });
  }
  return products;
};

export default function DiamondDistrict() {
  const [products] = useState<Product[]>(generateProducts());
  const [searchTerm, setSearchTerm] = useState('');
  const [spotPrice, setSpotPrice] = useState(4853);
  const [currentBuild, setCurrentBuild] = useState<any>(null);

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetch('/api/gold-price')
      .then(res => res.json())
      .then(data => {
        if (data.spotPrice && data.spotPrice > 3000) {
          setSpotPrice(data.spotPrice);
        }
      })
      .catch(console.error);
  }, []);

  const handleCustomBuilder = () => {
    const walletValue = 18500; // Example customer wallet/budget value for fence line risk calc
    const buildParams = {
      type: "Custom Ring",
      metal: "18K Rose Gold",
      carat: 2.8,
      shape: "Oval",
      color: "D",
      clarity: "VVS1",
      cut: "Excellent",
      engraving: "Love You Always",
      estPrice: Math.round(spotPrice * 2.8 * 1.2 + 4500), // simple formula example
      walletValue,
      fenceLineRule: "middle-of-the-road low risk <25% over wallet value"
    };
    setCurrentBuild(buildParams);
    const guarantee = "Diamond District Quality Guarantee: GIA certified, fully traceable from mine to finger, conflict-free, heirloom standard with lifetime warranty.";
    alert(`Custom Build Started

Bespoke pavé halo with milgrain edging and secret gallery engraving now active.
Live gold pricing at $${spotPrice}/oz applied automatically to your specifications.

Fence line configured per spec: middle-of-the-road low risk, less than 25% over wallet value (base $${walletValue}).

${guarantee}

Your multi-generational heirloom piece is taking shape with full traceability, ethical sourcing, and conservative risk fence.`);
  };

  const handleGetCustomQuote = () => {
    if (!currentBuild) {
      alert("Please start a Custom Build first to generate parameters.");
      return;
    }
    const guarantee = "Diamond District Quality Guarantee: GIA certified, fully traceable from mine to finger, conflict-free, heirloom standard with lifetime warranty.";
    const paramsText = Object.entries(currentBuild).map(([k,v]) => `${k}: ${v}`).join(' | ');

    // Fence line rule (per founder spec): middle-of-the-road low risk, capped at less than 25% over wallet value.
    // Integrated into Custom Builder → Quote flow for conservative RFQ risk management.
    const walletValue = currentBuild.walletValue || (currentBuild.estPrice * 0.8) || 15000;
    const fenceLine = Math.round(walletValue * 1.25);
    const riskAssessment = (currentBuild.estPrice || 0) > fenceLine 
      ? "MEDIUM RISK - Adjust parameters downward to stay under low-risk fence line" 
      : "LOW RISK - Compliant with middle-of-the-road fence (<25% over wallet value)";

    alert(`Get Custom Quote

Subject: custom rfq -dd

Build Parameters: ${paramsText}
Estimated Retail: $${currentBuild.estPrice}
Wallet Value: ~$${Math.round(walletValue)}
Fence Line (Low Risk): $${fenceLine} (middle-of-road, <25% over wallet)
Risk Assessment: ${riskAssessment}

${guarantee}

Quote request with full parameters, live pricing from global sources, custom engraving, and conservative risk fence sent to our master team. Formal response with complete documentation and options within 24 hours.`);
  };

  return (
    <div className="min-h-screen bg-[#f8f4eb] text-[#2c2c2c]">
      {/* Top Nav - Brand First */}
      <nav className="bg-white border-b border-[#d4c9b0] sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-8">
          <div className="h-20 flex items-center justify-between">
            <div className="flex items-center gap-x-12">
              <div className="flex items-center gap-x-3">
                <span className="text-4xl">💎</span>
                <span className="logo-font text-3xl tracking-tight text-[#4a7043]">Diamond District</span>
              </div>
              <div className="hidden md:flex items-center gap-x-9 text-sm font-medium text-[#4a7043]">
                <a href="#agents" className="hover:text-black">AI STUDIO</a>
                <a href="#mall" className="hover:text-black">SHOP ALL</a>
                <a href="#education" className="hover:text-black">4Cs EDUCATION</a>
                <a href="#sustainability" className="hover:text-black">SUSTAINABILITY</a>
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
              <div className="text-xs px-6 py-3 border border-[#c5a05e] rounded-full cursor-pointer hover:bg-[#c5a05e] hover:text-white transition-colors">ADMIN</div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero with clean video - VSL benchmark quality */}
      <header className="bg-[#4a7043] text-white py-20">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <div className="inline-flex bg-white/10 px-8 py-3 rounded-3xl text-sm mb-8 tracking-widest">GIA CERTIFIED • CONFLICT FREE • FULLY TRACEABLE • LIFETIME WARRANTY</div>
          <h1 className="text-6xl md:text-7xl logo-font tracking-tighter leading-none mb-6">The World's Most Beautiful Diamonds, ONLY AT DIAMOND DISTRICT!</h1>
          <p className="max-w-lg mx-auto text-lg text-white/80">Family legacy from the mines to your finger. Ethical sourcing. Master craftsmanship. Heirloom pieces that tell your story.</p>
        </div>

        <div className="max-w-4xl mx-auto mt-16 px-8">
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white/20 bg-black">
            <video 
              controls 
              autoPlay 
              muted 
              loop
              className="w-full h-full object-cover"
            >
              <source src="/diamond-district-mine-reporter-intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </header>

      {/* Clean Brand-First AI Design Studio - Removed all Hermes, orchestrator, kanban, wordy demo meta, old Gold Pricing + 4C cards per founder instructions. Now price-only popups + short guarantee + luxury context only. Custom Builder flows to Quote with parameter passing + custom rfq -dd. */}
      <section id="agents" className="bg-gradient-to-b from-[#f8f4eb] to-white py-20 border-b-2 border-[#d4af37]/30">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="inline-flex bg-[#4a7043] text-amber-100 text-xs tracking-[2px] px-8 py-3 rounded-3xl mb-6 items-center gap-3">
              💎 DIAMOND DISTRICT QUALITY GUARANTEE 💯
            </div>
            <h2 className="text-5xl logo-font tracking-tighter text-[#2c2c2c] mb-4">Diamond District AI Design Studio</h2>
            <p className="max-w-3xl mx-auto text-lg text-[#4a7043] leading-relaxed">Experience the Diamond District difference. Every creation is backed by our uncompromising Quality Guarantee: GIA certified stones, complete mine-to-finger traceability, conflict-free sourcing, and heirloom craftsmanship that will be cherished for generations. Our AI agents put that guarantee in your hands with live spot pricing at current rates, interactive custom builders with engraving preview, and instant personalized quotes that flow directly into our quote engine.</p>
            <div className="inline-flex items-center gap-8 text-xs text-[#c5a05e] mt-10 border border-[#d4af37]/30 rounded-3xl px-10 py-4">
              <div>✅ GIA Certified</div>
              <div>🌍 100% Traceable</div>
              <div>🛡️ Lifetime Warranty</div>
              <div>💎 Heirloom Quality</div>
              <div>🌱 Ethical Sourcing</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Custom Builder Agent Card */}
            <div 
              onClick={handleCustomBuilder}
              className="group bg-white rounded-3xl shadow-sm border border-[#d4c9b0] p-8 hover:shadow-xl hover:border-[#c5a05e] transition-all cursor-pointer flex flex-col"
            >
              <div className="text-5xl mb-6">🛠️</div>
              <h3 className="text-3xl font-semibold mb-3 text-[#2c2c2c]">Custom Builder</h3>
              <p className="text-[#4a7043] flex-1">Bespoke pavé halo, secret engraving, virtual try-on simulation. Live ${spotPrice}/oz gold and 4C multipliers applied in real time.</p>
              <button className="mt-8 w-full bg-[#4a7043] hover:bg-[#3a5a35] text-white py-4 rounded-2xl font-medium transition-colors">
                Start Custom Build →
              </button>
            </div>

            {/* Get Custom Quote Agent Card */}
            <div 
              onClick={handleGetCustomQuote}
              className="group bg-white rounded-3xl shadow-sm border border-[#d4c9b0] p-8 hover:shadow-xl hover:border-[#c5a05e] transition-all cursor-pointer flex flex-col"
            >
              <div className="text-5xl mb-6">📋</div>
              <h3 className="text-3xl font-semibold mb-3 text-[#2c2c2c]">Get Custom Quote</h3>
              <p className="text-[#4a7043] flex-1">Parameter-driven RFQ with full build specs, live pricing, and traceability report. Subject: custom rfq -dd. Team response guaranteed within 24hrs.</p>
              <button className="mt-8 w-full bg-[#4a7043] hover:bg-[#3a5a35] text-white py-4 rounded-2xl font-medium transition-colors">
                Get Custom Quote →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Rich Product Mall Grid - 5-wide on large, responsive, high-content per v4 standards */}
      <section id="mall" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="uppercase tracking-[3px] text-xs text-[#c5a05e] mb-2">CURATED COLLECTION</div>
              <h2 className="text-5xl logo-font tracking-tighter">Heirloom Jewelry Mall</h2>
            </div>
            <div className="text-right text-sm text-[#4a7043]">Live pricing • 25+ pieces with full provenance stories</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group bg-white border border-[#e8e0d0] rounded-3xl overflow-hidden hover:border-[#c5a05e] transition-all flex flex-col">
                <div className="relative aspect-square bg-[#f8f4eb]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 text-[#2c2c2c] text-xs font-mono px-3 py-1 rounded-full shadow">
                    ${product.price.toLocaleString()}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="font-medium text-lg leading-tight mb-3 line-clamp-2">{product.name}</div>
                  <div className="text-xs uppercase tracking-widest text-[#c5a05e] mb-3">{product.specs}</div>
                  <p className="text-sm text-[#555] line-clamp-4 flex-1">{product.description}</p>
                  <button 
                    onClick={() => alert(`Added to quote flow: ${product.name} at $${product.price}. Full 4C story and provenance report available on request.`)}
                    className="mt-6 text-xs border border-[#4a7043] hover:bg-[#4a7043] hover:text-white py-3.5 rounded-2xl transition-all"
                  >
                    ADD TO CUSTOM QUOTE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2c2c2c] text-white/70 py-16 text-center text-sm">
        <div className="max-w-md mx-auto px-6">
          Diamond District — Ethical luxury with complete transparency. Every piece carries our Quality Guarantee.<br />
          © 2026 • All heirlooms hand-finished in New York and Antwerp.
        </div>
      </footer>
    </div>
  );
}
