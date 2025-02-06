import { NextRequest, NextResponse } from 'next/server';
import { Server } from '@/models/server';
import connectDB from '@/utils/db';
import log from '@/utils/logger';

export async function GET(
  request: NextRequest,
  { params }: { params: { data: string } }
) {
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

    const data = decodeURI(params.data.toLowerCase());

    if (!data || !data.includes('.')) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid data provided." }), 
        { status: 400 }
      );
    }

    // Log request
    log('servers', request, NextResponse.next());

    // Find server
    const server = await Server.findOne({ 
      server: data 
    }).lean();

    if (!server) {
      return new NextResponse(null, { status: 404 });
    }

    // Remove _id field from response
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, ...serverData } = server;

    return NextResponse.json(serverData);
  } catch (error) {
    console.error(error);
    return new NextResponse(null, { status: 500 });
  }
}