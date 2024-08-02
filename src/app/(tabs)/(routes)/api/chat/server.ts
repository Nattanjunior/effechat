import { NextResponse, NextRequest } from 'next/server';

export async function GET() {
  console.log('API encontrada');
  return NextResponse.json({message: "api nova encontrada"});
}