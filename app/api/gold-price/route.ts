import { NextResponse } from 'next/server';

const CACHE_DURATION = 60; // seconds

let cachedPrice: number | null = null;
let cacheTimestamp: number = 0;

export async function GET() {
  const now = Date.now() / 1000;
  
  // Return cached value if fresh
  if (cachedPrice && (now - cacheTimestamp < CACHE_DURATION)) {
    return NextResponse.json({ 
      spotPrice: cachedPrice, 
      currency: 'USD',
      timestamp: new Date(cacheTimestamp * 1000).toISOString(),
      source: 'cached'
    });
  }

  try {
    const response = await fetch('https://query1.finance.yahoo.com/v7/finance/quote?symbols=GC=F', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; DiamondDistrict/1.0)',
      },
      next: { revalidate: CACHE_DURATION }
    });

    if (!response.ok) {
      throw new Error(`Yahoo API error: ${response.status}`);
    }

    const data = await response.json();
    const result = data.quoteResponse?.result?.[0];
    
    if (!result?.regularMarketPrice) {
      throw new Error('No price data received');
    }

    const spotPrice = Math.round(result.regularMarketPrice * 100) / 100; // to 2 decimals
    
    // Update cache
    cachedPrice = spotPrice;
    cacheTimestamp = now;

    return NextResponse.json({
      spotPrice,
      currency: result.currency || 'USD',
      change: result.regularMarketChange,
      changePercent: result.regularMarketChangePercent,
      timestamp: new Date().toISOString(),
      source: 'yahoo-finance-gc-f'
    });
  } catch (error) {
    console.error('Gold price fetch error:', error);
    
    // Fallback to reasonable default (~$2650/oz as of recent data)
    const fallbackPrice = cachedPrice || 2650;
    return NextResponse.json({
      spotPrice: fallbackPrice,
      currency: 'USD',
      timestamp: new Date().toISOString(),
      source: 'fallback',
      note: 'Using cached/fallback price due to API issue'
    }, { status: 200 });
  }
}
