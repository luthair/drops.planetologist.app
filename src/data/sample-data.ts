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
    title: "Dune: Awakening Launch Celebration Drops",
    description: "Experience the desert planet of Arrakis and earn exclusive in-game rewards! Get unique stillsuits, ornithopter skins, and desert survival gear by watching Dune: Awakening streams during launch week.",
    startDate: new Date("2024-01-15"),
    endDate: new Date("2024-02-28"),
    isActive: true,
    imageUrl: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=450&fit=crop&crop=center",
    gameTitle: "Dune: Awakening",
    requirements: [
      "Watch for 2 hours to unlock exclusive stillsuit skin",
      "Watch for 4 hours to unlock ornithopter customization",
      "Watch for 6 hours to unlock legendary desert gear set",
      "Must have linked Steam and Twitch accounts"
    ]
  },
  {
    id: "2",
    title: "House Atreides Loyalty Drops",
    description: "Show your allegiance to House Atreides and earn faction-specific rewards. This campaign features exclusive banners, weapons, and base decorations themed around Duke Leto's noble house.",
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-03-15"),
    isActive: true,
    imageUrl: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800&h=450&fit=crop&crop=center",
    gameTitle: "Dune: Awakening",
    requirements: [
      "Watch Dune: Awakening streams for 1 hour to earn House Atreides banner",
      "Watch for 3 hours to earn Duke's ceremonial blade",
      "Watch for 5 hours to earn Atreides base decoration pack",
      "Watch for 8 hours to unlock exclusive hawk companion"
    ]
  },
  {
    id: "3",
    title: "Spice Harvester Drops Campaign",
    description: "The spice must flow! Earn industrial-themed rewards including harvester blueprints, mining equipment skins, and exclusive worker outfits. Perfect for players focused on resource gathering.",
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-03-31"),
    isActive: false,
    imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=450&fit=crop&crop=center",
    gameTitle: "Dune: Awakening",
    requirements: [
      "Watch for 2 hours to unlock spice harvester skin",
      "Watch for 4 hours to unlock mining equipment blueprints",
      "Watch for 6 hours to unlock industrial worker outfit",
      "Watch for 10 hours to unlock legendary harvester blueprint"
    ]
  },
  {
    id: "4",
    title: "Sandworm Encounter Event",
    description: "Survive the desert's greatest predator and earn commemorative rewards. This limited-time event celebrates the most dangerous encounters on Arrakis with exclusive sandworm-themed cosmetics.",
    startDate: new Date("2024-04-01"),
    endDate: new Date("2024-04-15"),
    isActive: false,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop&crop=center",
    gameTitle: "Dune: Awakening",
    requirements: [
      "Watch for 1 hour to unlock sandworm warning charm",
      "Watch for 3 hours to unlock desert camouflage skin",
      "Watch for 5 hours to unlock tremor detection device",
      "Watch for 8 hours to unlock legendary 'Worm Rider' title"
    ]
  },
  {
    id: "5",
    title: "Fremen Secrets Drops",
    description: "Learn the ways of the desert dwellers and unlock authentic Fremen gear. This campaign features traditional stilltents, water reclamation systems, and the coveted blue-within-blue eye cosmetic.",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-01-31"),
    isActive: false,
    imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=450&fit=crop&crop=center",
    gameTitle: "Dune: Awakening",
    requirements: [
      "Watch for 2 hours to unlock Fremen stilltent blueprint",
      "Watch for 4 hours to unlock water reclamation system",
      "Watch for 6 hours to unlock traditional Fremen robes",
      "Watch for 10 hours to unlock blue-within-blue eye cosmetic"
    ]
  }
];
