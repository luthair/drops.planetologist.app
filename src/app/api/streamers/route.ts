import { NextResponse } from "next/server";
import type { Streamer } from "~/types";
import { WHITELISTED_STREAMERS } from "~/config/streamers";
import { getTwitchUsers, getTwitchStreams } from "~/lib/twitch-api";

// This would typically use environment variables for API credentials
// For demo purposes, we'll simulate the API response
// const TWITCH_CLIENT_ID = process.env.TWITCH_CLIENT_ID;
// const TWITCH_ACCESS_TOKEN = process.env.TWITCH_ACCESS_TOKEN;

// Streamer usernames come from the whitelist
// const STREAMER_USERNAMES = WHITELISTED_STREAMERS;

export async function GET() {
  try {
    console.log('Fetching streamers from Twitch API...');
    
    // Get user info for all whitelisted streamers
    const userData = await getTwitchUsers([...WHITELISTED_STREAMERS]);
    console.log(`Found ${userData.length} users from Twitch API`);

    // Get stream data for whitelisted streamers
    const streamData = await getTwitchStreams([...WHITELISTED_STREAMERS]);
    console.log(`Found ${streamData.length} live streams`);

    // Transform API data to match our Streamer interface
    const streamers: Streamer[] = userData.map((user) => {
      const liveStream = streamData.find((stream) => stream.user_id === user.id);
      
      return {
        id: user.id,
        username: user.login,
        displayName: user.display_name,
        avatarUrl: user.profile_image_url,
        isOnline: !!liveStream,
        viewerCount: liveStream?.viewer_count ?? 0,
        gameCategory: liveStream?.game_name ?? "",
        streamTitle: liveStream?.title ?? "",
        thumbnailUrl: liveStream?.thumbnail_url?.replace('{width}', '1920').replace('{height}', '1080') ?? ""
      };
    });

    // Define Dune game name
    const DUNE_GAME_NAME = "DUNE AWAKENING";
    
    // Filter for streamers that are online
    const allOnlineStreamers = streamers.filter(streamer => streamer.isOnline);
    
    // Split into Dune streamers and non-Dune streamers
    const duneStreamers = allOnlineStreamers.filter(streamer => 
      streamer.gameCategory?.toLowerCase() === DUNE_GAME_NAME.toLowerCase()
    );
    
    const nonDuneStreamers = allOnlineStreamers.filter(streamer => 
      streamer.gameCategory?.toLowerCase() !== DUNE_GAME_NAME.toLowerCase()
    );
    
    console.log(`Returning ${duneStreamers.length} Dune streamers and ${nonDuneStreamers.length} non-Dune streamers`);
    return NextResponse.json({ 
      duneStreamers,
      nonDuneStreamers
    });

  } catch (error) {
    console.error('Error fetching streamers:', error);
    return NextResponse.json(
      { 
        error: "Failed to fetch streamers from Twitch API",
        details: error instanceof Error ? error.message : "Unknown error"
      }, 
      { status: 500 }
    );
  }
}
