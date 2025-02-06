import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { Player } from '@/models/player';
import connectDB from '@/utils/db';
import log from '@/utils/logger';

type PlayerDocument = {
  _id: mongoose.Types.ObjectId;
  player: string;
  playtime: number;
  firstJoined: number;
  lastbeat: number;
  nth: number;
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

    if (!decodedData) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid data provided." }), 
        { status: 400 }
      );
    }

    // Log request
    log('users', request, NextResponse.next());

    // Find user with case-insensitive match
    const userDoc = await Player.findOne({ 
      player: new RegExp(`^${decodedData}$`, 'i') 
    }).lean();

    if (!userDoc) {
      return new NextResponse(null, { status: 400 });
    }

    const user = userDoc as unknown as PlayerDocument;

    // Remove _id field from response
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, ...userData } = user;

    return NextResponse.json(userData);
  } catch (error) {
    console.error(error);
    return new NextResponse(null, { status: 500 });
  }
}