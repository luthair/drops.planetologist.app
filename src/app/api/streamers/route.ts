import { NextResponse } from "next/server";
import type { Streamer } from "~/types";

// This would typically use environment variables for API credentials
// For demo purposes, we'll simulate the API response
// const TWITCH_CLIENT_ID = process.env.TWITCH_CLIENT_ID;
// const TWITCH_ACCESS_TOKEN = process.env.TWITCH_ACCESS_TOKEN;

// Sample streamer usernames to check
// const STREAMER_USERNAMES = ["shroud", "summit1g", "pokimane", "xqcow", "ninja", "tfue"];

export async function GET() {
  try {
    // In a real implementation, you would:
    // 1. Fetch from Twitch API using the streamer usernames
    // 2. Check which ones are currently live
    // 3. Transform the API response into your Streamer type
    
    // For demo purposes, we'll return mock data
    // Uncomment the below code when you have actual Twitch API credentials:
    
    /*
    if (!TWITCH_CLIENT_ID || !TWITCH_ACCESS_TOKEN) {
      return NextResponse.json(
        { error: "Twitch API credentials not configured" }, 
        { status: 500 }
      );
    }

    const streamResponse = await fetch(
      `https://api.twitch.tv/helix/streams?user_login=${STREAMER_USERNAMES.join('&user_login=')}`,
      {
        headers: {
          'Client-ID': TWITCH_CLIENT_ID,
          'Authorization': `Bearer ${TWITCH_ACCESS_TOKEN}`,
        },
      }
    );

    if (!streamResponse.ok) {
      throw new Error('Failed to fetch from Twitch API');
    }

    const streamData: TwitchApiResponse = await streamResponse.json();

    // Get user info for all streamers (including offline ones)
    const userResponse = await fetch(
      `https://api.twitch.tv/helix/users?login=${STREAMER_USERNAMES.join('&login=')}`,
      {
        headers: {
          'Client-ID': TWITCH_CLIENT_ID,
          'Authorization': `Bearer ${TWITCH_ACCESS_TOKEN}`,
        },
      }
    );

    const userData = await userResponse.json();

    // Transform API data to match our Streamer interface
    const streamers: Streamer[] = userData.data.map((user: any) => {
      const liveStream = streamData.data.find((stream: any) => stream.user_id === user.id);
      
      return {
        id: user.id,
        username: user.login,
        displayName: user.display_name,
        avatarUrl: user.profile_image_url,
        isOnline: !!liveStream,
        viewerCount: liveStream?.viewer_count || 0,
        gameCategory: liveStream?.game_name || "",
        streamTitle: liveStream?.title || "",
        thumbnailUrl: liveStream?.thumbnail_url?.replace('{width}', '1920').replace('{height}', '1080') || ""
      };
    });
    */

    // Mock data response for demo - Only Dune: Awakening streamers
    const duneStreamers: Streamer[] = [
      {
        id: "1",
        username: "cohh",
        displayName: "CohhCarnage",
        avatarUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/cohh-profile_image-f4fb1ff7f3b1cbd6-300x300.png",
        isOnline: Math.random() > 0.3,
        viewerCount: Math.floor(Math.random() * 15000) + 3000,
        gameCategory: "Dune: Awakening",
        streamTitle: "🏜️ DUNE: AWAKENING - Building our desert empire! New survival MMO",
        thumbnailUrl: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1920&h=1080&fit=crop"
      },
      {
        id: "2", 
        username: "lirik",
        displayName: "LIRIK",
        avatarUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/lirik-profile_image-b480f5a17a948c78-300x300.png",
        isOnline: Math.random() > 0.3,
        viewerCount: Math.floor(Math.random() * 25000) + 8000,
        gameCategory: "Dune: Awakening",
        streamTitle: "DUNE AWAKENING - Spice must flow! First playthrough",
        thumbnailUrl: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=1920&h=1080&fit=crop"
      },
      {
        id: "3",
        username: "shroud",
        displayName: "shroud",
        avatarUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c3-0477-4a10-bfbf-f87bbe4dcc75-profile_image-300x300.png",
        isOnline: Math.random() > 0.3,
        viewerCount: Math.floor(Math.random() * 45000) + 15000,
        gameCategory: "Dune: Awakening",
        streamTitle: "Learning Dune: Awakening mechanics - New survival MMO!",
        thumbnailUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&h=1080&fit=crop"
      },
      {
        id: "4",
        username: "summit1g",
        displayName: "summit1g", 
        avatarUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/99aa4739-21d2-40eb-8a8e-7d6e8e8a5c8e-profile_image-300x300.png",
        isOnline: Math.random() > 0.3,
        viewerCount: Math.floor(Math.random() * 35000) + 10000,
        gameCategory: "Dune: Awakening",
        streamTitle: "DUNE AWAKENING - Desert survival with the boys",
        thumbnailUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
      },
      {
        id: "5",
        username: "asmongold",
        displayName: "Asmongold",
        avatarUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png",
        isOnline: Math.random() > 0.3,
        viewerCount: Math.floor(Math.random() * 30000) + 12000,
        gameCategory: "Dune: Awakening",
        streamTitle: "DUNE AWAKENING REVIEW - Is this the MMO we've been waiting for?",
        thumbnailUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1920&h=1080&fit=crop"
      },
      {
        id: "6",
        username: "xqcow",
        displayName: "xQcOW",
        avatarUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/xqcow-profile_image-9298dca608632101-300x300.jpeg",
        isOnline: Math.random() > 0.4,
        viewerCount: Math.floor(Math.random() * 40000) + 18000,
        gameCategory: "Dune: Awakening",
        streamTitle: "DÜNE AWAKENING - ACTUAL GOOD SURVIVAL GAME? PogChamp",
        thumbnailUrl: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1920&h=1080&fit=crop"
      }
    ];

    // Filter to only return streamers that are online and playing Dune: Awakening
    const mockStreamers = duneStreamers.filter(streamer => 
      streamer.isOnline && streamer.gameCategory === "Dune: Awakening"
    );

    return NextResponse.json({ streamers: mockStreamers });

  } catch (error) {
    console.error('Error fetching streamers:', error);
    return NextResponse.json(
      { error: "Failed to fetch streamers" }, 
      { status: 500 }
    );
  }
}
