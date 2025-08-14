import type { Streamer, DropsPeriod } from "~/types";

export const sampleStreamers: Streamer[] = [
  {
    id: "1",
    username: "shroud",
    displayName: "shroud",
    avatarUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c3-0477-4a10-bfbf-f87bbe4dcc75-profile_image-300x300.png",
    isOnline: true,
    viewerCount: 45821,
    gameCategory: "VALORANT",
    streamTitle: "Ranked grind with the team | !settings !crosshair",
    thumbnailUrl: "https://static-cdn.jtvnw.net/previews-ttv/live_user_shroud-1920x1080.jpg"
  },
  {
    id: "2",
    username: "summit1g",
    displayName: "summit1g",
    avatarUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/99aa4739-21d2-40eb-8a8e-7d6e8e8a5c8e-profile_image-300x300.png",
    isOnline: true,
    viewerCount: 28463,
    gameCategory: "Grand Theft Auto V",
    streamTitle: "NoPixel WL | Charles Johnson | GTARP",
    thumbnailUrl: "https://static-cdn.jtvnw.net/previews-ttv/live_user_summit1g-1920x1080.jpg"
  },
  {
    id: "3",
    username: "pokimane",
    displayName: "pokimane",
    avatarUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/f2592817-2c8a-4472-a9f8-d3e1f6c3b8f7-profile_image-300x300.png",
    isOnline: true,
    viewerCount: 19847,
    gameCategory: "Just Chatting",
    streamTitle: "good morning gamers ☀️ react content later",
    thumbnailUrl: "https://static-cdn.jtvnw.net/previews-ttv/live_user_pokimane-1920x1080.jpg"
  },
  {
    id: "4",
    username: "xqcow",
    displayName: "xQcOW",
    avatarUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/xqcow-profile_image-9298dca608632101-300x300.jpeg",
    isOnline: false,
    viewerCount: 0,
    gameCategory: "",
    streamTitle: "",
    thumbnailUrl: ""
  },
  {
    id: "5",
    username: "ninja",
    displayName: "Ninja",
    avatarUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/61ad4c8f-24e1-4a96-b2d7-2ba0b5d6d3f4-profile_image-300x300.png",
    isOnline: true,
    viewerCount: 15632,
    gameCategory: "Fortnite",
    streamTitle: "COMPETITIVE FORTNITE WITH THE BOYS!",
    thumbnailUrl: "https://static-cdn.jtvnw.net/previews-ttv/live_user_ninja-1920x1080.jpg"
  },
  {
    id: "6",
    username: "tfue",
    displayName: "Tfue",
    avatarUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/bc0d9bbf-e91b-4b45-b7bc-c8b8fd0c8f7a-profile_image-300x300.png",
    isOnline: false,
    viewerCount: 0,
    gameCategory: "",
    streamTitle: "",
    thumbnailUrl: ""
  }
];

export const sampleDropsPeriods: DropsPeriod[] = [
  {
    id: "1",
    title: "Cyberpunk 2077: Phantom Liberty Drops",
    description: "Earn exclusive Cyberpunk 2077 in-game items by watching eligible streams. Get weapon skins, character outfits, and vehicle modifications by supporting your favorite streamers playing the latest expansion.",
    startDate: new Date("2024-01-15"),
    endDate: new Date("2024-02-15"),
    isActive: true,
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop&crop=center",
    gameTitle: "Cyberpunk 2077",
    requirements: [
      "Watch for 2 hours to unlock weapon skin",
      "Watch for 4 hours to unlock character outfit",
      "Watch for 6 hours to unlock vehicle modification",
      "Must have linked Twitch and game accounts"
    ]
  },
  {
    id: "2",
    title: "VALORANT Champions Tour Drops",
    description: "Support your favorite VALORANT teams and earn exclusive tournament-themed cosmetics. Features limited-time gun buddies, player cards, and sprays commemorating the championship matches.",
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-02-28"),
    isActive: true,
    imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=450&fit=crop&crop=center",
    gameTitle: "VALORANT",
    requirements: [
      "Watch VCT streams for 1 hour to earn gun buddy",
      "Watch for 3 hours to earn player card",
      "Watch for 5 hours to earn exclusive spray",
      "Riot account must be linked to Twitch"
    ]
  },
  {
    id: "3",
    title: "World of Warcraft: Dragonflight Drops",
    description: "Journey through the Dragon Isles and earn mystical rewards. This drop campaign celebrates the new expansion with unique mounts, pets, and transmog items that can only be obtained through Twitch.",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-01-31"),
    isActive: false,
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop&crop=center",
    gameTitle: "World of Warcraft",
    requirements: [
      "Watch for 2 hours to unlock battle pet",
      "Watch for 4 hours to unlock transmog set",
      "Watch for 8 hours to unlock exclusive mount",
      "Battle.net account linking required"
    ]
  },
  {
    id: "4",
    title: "Apex Legends: Resurrection Event",
    description: "The legends return with a vengeance! Earn limited-time weapon skins, legend skins, and exclusive badges during this special event period. Don't miss out on these rare cosmetics.",
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-03-15"),
    isActive: false,
    imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=450&fit=crop&crop=center",
    gameTitle: "Apex Legends",
    requirements: [
      "Watch for 1 hour to unlock weapon charm",
      "Watch for 3 hours to unlock legend skin",
      "Watch for 5 hours to unlock weapon skin",
      "EA account must be connected"
    ]
  }
];
