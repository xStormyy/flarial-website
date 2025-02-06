import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { Server } from '@/models/server';
import connectDB from '@/utils/db';
import log from '@/utils/logger';

type ServerDocument = {
  _id: mongoose.Types.ObjectId;
  server: string;
  players: string[];
};

export async function GET( request: NextRequest ) {
  const data = request.nextUrl.searchParams.get('data');

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

    const decodedData = decodeURI(data?.toLowerCase() || '');

    if (!decodedData || !decodedData.includes('.')) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid data provided." }), 
        { status: 400 }
      );
    }

    // Log request
    log('servers', request, NextResponse.next());

    // Find server
    const serverDoc = await Server.findOne({ 
      server: decodedData 
    }).lean();

    if (!serverDoc) {
      return new NextResponse(null, { status: 404 });
    }

    const server = serverDoc as unknown as ServerDocument;

    // Remove _id field from response
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, ...serverData } = server;

    return NextResponse.json(serverData);
  } catch (error) {
    console.error(error);
    return new NextResponse(null, { status: 500 });
  }
}