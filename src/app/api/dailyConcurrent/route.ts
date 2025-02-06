import { NextRequest, NextResponse } from 'next/server';
import { Server } from '@/models/server';
import connectDB from '@/utils/db';
import log from '@/utils/logger';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const allowedAgents = [
      "Samsung Smart Fridge",
      "Posting/2.3.0 (Terminal-based API client)"
    ];

    const agent = request.headers.get('user-agent') || '';

    if (!allowedAgents.includes(agent)) {
      return new NextResponse(null, { status: 403 });
    }

    // Log request
    log('concurrent', request, NextResponse.next());

    // Get all servers
    const servers = await Server.find({}).lean();

    let serverCount = 0;
    let playerCount = 0;

    // Calculate counts
    servers.forEach(server => {
      if (server.players.length > 0) {
        serverCount++;
        playerCount += server.players.length;
      }
    });

    return NextResponse.json({
      players: playerCount,
      servers: serverCount
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(null, { status: 500 });
  }
}