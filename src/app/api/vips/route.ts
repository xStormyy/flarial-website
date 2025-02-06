import { NextRequest, NextResponse } from 'next/server';
import { ensureVIPDocument } from '@/models/vip';
import connectDB from '@/utils/db';
import log from '@/utils/logger';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const allowedAgents = [
      "Samsung Smart Fridge",
      "Posting/2.3.0 (Terminal-based API client)",
      "Samsung AI-Powered Washing Machine"
    ];

    const agent = request.headers.get('user-agent') || '';

    if (!allowedAgents.includes(agent)) {
      return new NextResponse(null, { status: 403 });
    }

    // Log request
    log('vips', request, NextResponse.next());

    // Ensure VIP document exists and get it
    const vips = await ensureVIPDocument();

    // Return the VIP data without the _id field
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, ...vipData } = vips.toObject();
    return NextResponse.json(vipData);
  } catch (error) {
    console.error(error);
    return new NextResponse(null, { status: 500 });
  }
}