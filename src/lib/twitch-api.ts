import { env } from "~/env";
import type { TwitchApiResponse } from "~/types";

interface TwitchUser {
  id: string;
  login: string;
  display_name: string;
  profile_image_url: string;
}

interface TwitchUsersResponse {
  data: TwitchUser[];
}

interface TwitchAuthResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
}

let cachedAccessToken: string | null = null;
let tokenExpiresAt = 0;

/**
 * Get a valid Twitch access token (App Access Token for API requests)
 */
async function getTwitchAccessToken(): Promise<string> {
  // Credentials are guaranteed to exist due to env validation

  // Return cached token if it's still valid (with 5 minute buffer)
  if (cachedAccessToken && Date.now() < tokenExpiresAt - 300000) {
    return cachedAccessToken;
  }

  try {
    const response = await fetch('https://id.twitch.tv/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: env.TWITCH_CLIENT_ID,
        client_secret: env.TWITCH_CLIENT_SECRET,
        grant_type: 'client_credentials',
      }),
    });

    if (!response.ok) {
      throw new Error(`Twitch auth failed: ${response.status}`);
    }

    const data = await response.json() as TwitchAuthResponse;
    
    cachedAccessToken = data.access_token;
    tokenExpiresAt = Date.now() + (data.expires_in * 1000);
    
    return cachedAccessToken;
  } catch (error) {
    console.error('Failed to get Twitch access token:', error);
    throw new Error('Failed to authenticate with Twitch API');
  }
}

/**
 * Make authenticated requests to Twitch API
 */
async function twitchApiRequest<T>(endpoint: string): Promise<T> {
  const accessToken = await getTwitchAccessToken();
  
  const response = await fetch(`https://api.twitch.tv/helix/${endpoint}`, {
    headers: {
      'Client-ID': env.TWITCH_CLIENT_ID,
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Twitch API request failed: ${response.status} - ${await response.text()}`);
  }

  return response.json() as Promise<T>;
}

/**
 * Get user information for multiple streamers
 */
export async function getTwitchUsers(usernames: string[]): Promise<TwitchUser[]> {
  if (usernames.length === 0) return [];
  
  const loginParams = usernames.map(username => `login=${encodeURIComponent(username)}`).join('&');
  const response = await twitchApiRequest<TwitchUsersResponse>(`users?${loginParams}`);
  
  return response.data;
}

/**
 * Get live stream information for multiple streamers
 */
export async function getTwitchStreams(usernames: string[]): Promise<TwitchApiResponse['data']> {
  if (usernames.length === 0) return [];
  
  const loginParams = usernames.map(username => `user_login=${encodeURIComponent(username)}`).join('&');
  const response = await twitchApiRequest<TwitchApiResponse>(`streams?${loginParams}`);
  
  return response.data;
}

/**
 * Get game information by name
 */
export async function getTwitchGameByName(gameName: string) {
  try {
    const response = await twitchApiRequest<{ data: Array<{ id: string; name: string }> }>(`games?name=${encodeURIComponent(gameName)}`);
    return response.data[0] ?? null;
  } catch (error) {
    console.error('Failed to get game info:', error);
    return null;
  }
}
