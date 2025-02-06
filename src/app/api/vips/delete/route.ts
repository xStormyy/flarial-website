import { NextRequest, NextResponse } from 'next/server';
import { ensureVIPDocument } from '@/models/vip';
import connectDB from '@/utils/db';
import log from '@/utils/logger';

export async function DELETE(request: NextRequest) {
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
    log('vips/delete', request, NextResponse.next());

    // Get request body
    const body = await request.json();
    const { name } = body;

    if (!name) {
      return new NextResponse('Name is required', { status: 400 });
    }

    // Get VIP document
    const vipDoc = await ensureVIPDocument();

    // Check all VIP categories for the name
    const categories = ['Dev', 'Booster', 'Gamer', 'Supporter'];
    let itemFound = false;

    for (const category of categories) {
      const index = vipDoc[category].indexOf(name);
      if (index !== -1) {
        // Remove the name from the category
        vipDoc[category].splice(index, 1);
        itemFound = true;
        break;
      }
    }

    if (!itemFound) {
      console.log(`${name} not found in the VIP list.`);
      return new NextResponse(null, { status: 404 });
    }

    // Save the updated document
    await vipDoc.save();
    console.log(`${name} removed successfully.`);
    return new NextResponse(null, { status: 200 });
  } catch (error) {
    console.error('Error deleting VIP:', error);
    return new NextResponse(null, { status: 500 });
  }
}