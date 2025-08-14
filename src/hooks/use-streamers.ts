"use client";

import { useState, useEffect, useCallback } from "react";
import type { Streamer } from "~/types";

interface UseStreamersReturn {
  streamers: Streamer[];
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useStreamers(refreshInterval = 30000): UseStreamersReturn {
  const [streamers, setStreamers] = useState<Streamer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStreamers = useCallback(async () => {
    try {
      const response = await fetch("/api/streamers");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json() as { streamers: Streamer[] };
      setStreamers(data.streamers);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch streamers");
      console.error("Error fetching streamers:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const refetch = useCallback(async () => {
    setIsLoading(true);
    await fetchStreamers();
  }, [fetchStreamers]);

  useEffect(() => {
    // Initial fetch
    void fetchStreamers();

    // Set up interval for periodic updates
    const interval = setInterval(() => { void fetchStreamers(); }, refreshInterval);

    return () => {
      clearInterval(interval);
    };
  }, [fetchStreamers, refreshInterval]);

  return {
    streamers,
    isLoading,
    error,
    refetch,
  };
}
