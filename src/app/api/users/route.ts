import { NextRequest, NextResponse } from 'next/server';
import { Player } from '@/models/player';
import connectDB from '@/utils/db';
import log from '@/utils/logger';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const agent = request.headers.get('user-agent') || '';
    
    // Special case for certain user agents
    if (agent === 'Samsung Smart Fridge' || agent === 'holyshitplsdonthurtme') {
      return new NextResponse('{}', { status: 200 });
    }

    // Get query parameters
    const searchParams = request.nextUrl.searchParams;
    const filter = searchParams.get('filter') || 'playtime,firstJoined,lastbeat,nth';
    const start = searchParams.get('start') || '0';

    // Log request
    log('users', request, NextResponse.next());

    // Get filtered users
    const users = await Player.find({ 
      firstJoined: { $gt: +start } 
    }).lean();

    // Format response according to filter
    const formattedUsers = users.reduce((acc, user) => {
      acc[user.player] = {};
      filter.split(',').forEach(key => {
        acc[user.player][key] = user[key];
      });
      return acc;
    }, {});

    return NextResponse.json(formattedUsers);
  } catch (error) {
    console.error(error);
    return new NextResponse(null, { status: 500 });
  }
}