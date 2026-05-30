import { NextResponse } from 'next/server';
import products from '../../../products.json';

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const newProduct = await request.json();
  // In a real app this would write to the JSON file or database
  products.push(newProduct);
  return NextResponse.json({ success: true, product: newProduct });
}