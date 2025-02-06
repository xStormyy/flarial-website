import { NextRequest, NextResponse } from 'next/server';
import { ensureVIPDocument } from '@/models/vip';
import connectDB from '@/utils/db';
import log from '@/utils/logger';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const allowedAgents = [
      "Samsung Smart Toaster V5 Pro Edition",
      "Posting/2.3.0 (Terminal-based API client)",
      "Samsung AI-Powered Washing Machine"
    ];

    const agent = request.headers.get('user-agent') || '';

    if (!allowedAgents.includes(agent)) {
      return new NextResponse(null, { status: 403 });
    }

    // Log request
    log('vips/add', request, NextResponse.next());

    // Get request body
    const body = await request.json();
    const { name, type } = body;

    if (!name || !type) {
      return new NextResponse('Missing name or type', { status: 400 });
    }

    // Get VIP document
    const vipDoc = await ensureVIPDocument();

    // Validate VIP type and check for duplicates
    const validTypes = ['dev', 'booster', 'gamer', 'supporter'];
    const vipType = type.toLowerCase();

    if (!validTypes.includes(vipType)) {
      return new NextResponse(null, { status: 403 });
    }

    // Map type to correct case for MongoDB
    const typeMap = {
      dev: 'Dev',
      booster: 'Booster',
      gamer: 'Gamer',
      supporter: 'Supporter'
    };

    const properType = typeMap[vipType];

    // Check if user already exists in the category
    if (vipDoc[properType].includes(name)) {
      return new NextResponse(null, { status: 409 });
    }

    // Add the new VIP
    vipDoc[properType].push(name);
    await vipDoc.save();

    return new NextResponse(null, { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(null, { status: 500 });
  }
}