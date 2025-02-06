import { NextRequest, NextResponse } from 'next/server';
import { Player } from '@/models/player';
import { Server } from '@/models/server';
import { Types } from 'mongoose';
import connectDB from '@/utils/db';
import log from '@/utils/logger';

export async function GET( request: NextRequest ) {
  const user = request.nextUrl.searchParams.get('user');
  const ip = request.nextUrl.searchParams.get('ip');

  try {
    await connectDB();

    const data = [decodeURI(user || ''), decodeURI(ip || '')];
    const agent = request.headers.get('user-agent') || '';

    const allowedAgents = ["Samsung Smart Fridge", "holyshitplsdonthurtme"];

    if (!allowedAgents.includes(agent)) {
      return new NextResponse(null, { status: 403 });
    }

    // Convert IP to lowercase
    data[1] = data[1].toLowerCase();

    // Validate data
    if (data[1] === 'world') data[1] = 'in.singleplayer';
    if (!data[0] || !data[1] || !data[1].includes('.')) {
      return new NextResponse(null, { status: 400 });
    }

    // Clean data
    data[0] = data[0].replace(/\*/g, '');
    data[1] = data[1].replace(/\*/g, '');

    if (data[0].length > 25) {
      return new NextResponse('Nice try', { status: 400 });
    }

    // Log heartbeat
    log('heartbeat', request, NextResponse.next());

    // Find or create player
    let player = await Player.findOne({ player: data[0] });

    if (!player) {
      const lastPlayer = await Player.findOne().sort({ _id: -1 });
      const nth = lastPlayer ? lastPlayer.nth + 1 : 1;

      player = await Player.create({
        _id: new Types.ObjectId(),
        player: data[0],
        playtime: 0,
        firstJoined: Date.now(),
        lastbeat: Date.now(),
        nth
      });
    } else {
      await player.updateOne({
        $inc: { playtime: 60 },
        $set: { lastbeat: Date.now() }
      });
    }

    // Handle server assignment
    const server = await Server.findOne({ server: data[1] });
    const otherServers = await Server.find({ 
      players: data[0], 
      server: { $ne: data[1] } 
    }).lean();

    // Remove player from other servers
    if (otherServers.length) {
      const operations = otherServers.map(s => ({
        updateOne: {
          filter: { server: s.server },
          update: { $pull: { players: data[0] } }
        }
      }));

      await Server.bulkWrite(operations);
    }

    // Add player to current server
    if (!server) {
      await Server.create({
        _id: new Types.ObjectId(),
        server: data[1],
        players: [data[0]]
      });
    } else if (!server.players.includes(data[0])) {
      await server.updateOne({
        $push: { players: data[0] }
      });
    }

    return new NextResponse('', { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(null, { status: 500 });
  }
}