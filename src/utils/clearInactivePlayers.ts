import { Player } from '@/models/player';
import { Server } from '@/models/server';
import connectDB from './db';

const INACTIVE_TIMEOUT = 60000; // 60 seconds in milliseconds

export async function clearInactivePlayers() {
  try {
    await connectDB();

    // Get all players and servers
    const players = await Player.find({}).lean();
    const servers = await Server.find({}).lean();

    // Prepare operations for removing inactive players from servers
    const writeOps = [];

    // Check each server and its players
    for (const server of servers) {
      for (const player of server.players) {
        // Find the player's last heartbeat
        const playerDoc = players.find(p => p.player === player);
        const lastBeat = playerDoc?.lastbeat || Date.now();

        // If player is inactive (no heartbeat for more than 60 seconds)
        if ((Date.now() - lastBeat) > INACTIVE_TIMEOUT) {
          writeOps.push({
            updateOne: {
              filter: { server: server.server },
              update: { $pull: { players: player } }
            }
          });
        }
      }
    }

    // Execute all operations in bulk if there are any
    if (writeOps.length > 0) {
      await Server.bulkWrite(writeOps);
      console.log(`Cleared ${writeOps.length} inactive players from servers`);
    }
  } catch (error) {
    console.error('Error clearing inactive players:', error);
  }
}

// Helper function to start the cleanup interval
export function startInactivePlayerCleanup(intervalMs = 60000) { // Default to running every minute
  return setInterval(clearInactivePlayers, intervalMs);
}