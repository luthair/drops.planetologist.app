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

    // Mock data response for demo
    const mockStreamers: Streamer[] = [
      {
        id: "1",
        username: "shroud",
        displayName: "shroud",
        avatarUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c3-0477-4a10-bfbf-f87bbe4dcc75-profile_image-300x300.png",
        isOnline: Math.random() > 0.5,
        viewerCount: Math.floor(Math.random() * 50000) + 5000,
        gameCategory: "VALORANT",
        streamTitle: "Ranked grind with the team | !settings !crosshair",
        thumbnailUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop"
      },
      {
        id: "2",
        username: "summit1g",
        displayName: "summit1g",
        avatarUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/99aa4739-21d2-40eb-8a8e-7d6e8e8a5c8e-profile_image-300x300.png",
        isOnline: Math.random() > 0.5,
        viewerCount: Math.floor(Math.random() * 30000) + 5000,
        gameCategory: "Grand Theft Auto V",
        streamTitle: "NoPixel WL | Charles Johnson | GTARP",
        thumbnailUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=1080&fit=crop"
      },
      {
        id: "3",
        username: "pokimane",
        displayName: "pokimane",
        avatarUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/f2592817-2c8a-4472-a9f8-d3e1f6c3b8f7-profile_image-300x300.png",
        isOnline: Math.random() > 0.5,
        viewerCount: Math.floor(Math.random() * 20000) + 5000,
        gameCategory: "Just Chatting",
        streamTitle: "good morning gamers ☀️ react content later",
        thumbnailUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&h=1080&fit=crop"
      }
    ];

    return NextResponse.json({ streamers: mockStreamers });

  } catch (error) {
    console.error('Error fetching streamers:', error);
    return NextResponse.json(
      { error: "Failed to fetch streamers" }, 
      { status: 500 }
    );
  }
}
