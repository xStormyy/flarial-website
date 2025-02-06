import { NextRequest, NextResponse } from 'next/server';
import { Server } from '@/models/server';
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
    log('servers', request, NextResponse.next());

    // Get all servers
    const servers = await Server.find({}).lean();

    // Format response - only include servers with players
    const formattedServers = servers.reduce((acc, server) => {
      if (server.players.length > 0) {
        acc[server.server] = {
          players: server.players
        };
      }
      return acc;
    }, {});

    return NextResponse.json(formattedServers);
  } catch (error) {
    console.error(error);
    return new NextResponse(null, { status: 500 });
  }
}