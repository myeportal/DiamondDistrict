import { NextResponse } from 'next/server';
import diamondData from '../../../public/diamond-pricing-global.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const carat = parseFloat(searchParams.get('carat') || '1.0');
  const shape = searchParams.get('shape') || 'Round';
  const color = searchParams.get('color') || 'F';
  const clarity = searchParams.get('clarity') || 'VS1';
  const cut = searchParams.get('cut') || 'Excellent';

  const baseEntry = diamondData.pricingTable.find(p => 
    Math.abs(p.carat - carat) < 0.3
  ) || diamondData.pricingTable[2];

  const basePricePerCarat = baseEntry.pricePerCarat;

  const multipliers = diamondData.multipliers;
  const shapeMult = multipliers.shape[shape as keyof typeof multipliers.shape] || 1.0;
  const colorMult = multipliers.color[color as keyof typeof multipliers.color] || 1.0;
  const clarityMult = multipliers.clarity[clarity as keyof typeof multipliers.clarity] || 1.0;
  const cutMult = multipliers.cut[cut as keyof typeof multipliers.cut] || 1.0;

  const retailPrice = Math.round(basePricePerCarat * carat * shapeMult * colorMult * clarityMult * cutMult);

  return NextResponse.json({
    carat,
    shape,
    color,
    clarity,
    cut,
    basePricePerCarat,
    multipliers: { shape: shapeMult, color: colorMult, clarity: clarityMult, cut: cutMult },
    retailPrice,
    sourcesAggregated: diamondData.metadata.sources,
    globalNote: diamondData.metadata.description,
    exampleSources: baseEntry.sourcesSample,
    formula: "Retail = BaseStonePricePerCarat × Carat × ShapeMult × ColorMult × ClarityMult × CutMult (aggregated from 124 global sources)"
  });
}

// Also support listing the full table
export async function POST() {
  return NextResponse.json(diamondData);
}
