// Whitelist of approved streamers for Dune: Awakening drops
// Only these streamers will be displayed on the site
export const WHITELISTED_STREAMERS = [
  // Popular streamers known for playing Dune: Awakening
  'khronosvii',
  'MrGregles',
  'viiki', 
  'anniefuchsia',
  'admiralbahroo',
  'piratesoftware',
  'winky',
  'HelpingHans',
  'JayTheBard',
  // Add more streamers here as needed
] as const;

// Type for whitelisted streamer names
export type WhitelistedStreamer = typeof WHITELISTED_STREAMERS[number];

// Helper function to check if a streamer is whitelisted
export function isStreamerWhitelisted(username: string): boolean {
  return WHITELISTED_STREAMERS.includes(username.toLowerCase() as WhitelistedStreamer);
}

// Get all whitelisted streamers as a regular array
export function getWhitelistedStreamers(): string[] {
  return [...WHITELISTED_STREAMERS];
}
