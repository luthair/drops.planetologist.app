export interface Streamer {
  id: string;
  username: string;
  displayName: string;
  avatarUrl: string;
  isOnline: boolean;
  viewerCount?: number;
  gameCategory?: string;
  streamTitle?: string;
  thumbnailUrl?: string;
}

export interface DropsPeriod {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  imageUrl: string;
  gameTitle: string;
  requirements: string[];
}

export interface TwitchApiResponse {
  data: Array<{
    id: string;
    user_id: string;
    user_login: string;
    user_name: string;
    game_id: string;
    game_name: string;
    type: string;
    title: string;
    viewer_count: number;
    started_at: string;
    language: string;
    thumbnail_url: string;
  }>;
}
