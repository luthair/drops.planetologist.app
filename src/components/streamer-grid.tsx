"use client";

import type { Streamer } from "~/types";
import { StreamerCard } from "./streamer-card";

interface StreamerGridProps {
  streamers: Streamer[];
  isLoading?: boolean;
  error?: string | null;
}

export function StreamerGrid({ streamers, isLoading, error }: StreamerGridProps) {
  const onlineStreamers = streamers.filter(streamer => streamer.isOnline);

  if (error) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-planet-accent">Dune: Awakening Streamers</h2>
        </div>
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/20 flex items-center justify-center">
            <div className="w-6 h-6 bg-destructive rounded-full" />
          </div>
          <h3 className="text-lg font-semibold text-destructive mb-2">
            Failed to load streamers
          </h3>
          <p className="text-planet-accent/70 max-w-md mx-auto">
            {error}
          </p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-planet-accent">Live Streamers</h2>
          <div className="flex items-center gap-2 text-planet-accent/70">
            <div className="h-2 w-2 rounded-full bg-planet-highlight animate-pulse" />
            <span className="text-sm">Loading...</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-video bg-planet-card rounded-xl mb-4" />
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 bg-planet-card rounded-full" />
                <div className="flex-1">
                  <div className="h-4 bg-planet-card rounded mb-1" />
                  <div className="h-3 bg-planet-card rounded w-2/3" />
                </div>
              </div>
              <div className="h-3 bg-planet-card rounded mb-2" />
              <div className="h-3 bg-planet-card rounded w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-planet-accent">Dune: Awakening Streamers</h2>
          <p className="text-sm text-planet-accent/70 mt-1">Live streamers playing on Arrakis</p>
        </div>
        <div className="flex items-center gap-2 text-planet-accent/70">
          <div className="h-2 w-2 rounded-full bg-planet-highlight animate-pulse" />
          <span className="text-sm">
            {onlineStreamers.length} online
          </span>
        </div>
      </div>

      {onlineStreamers.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-planet-accent-faded flex items-center justify-center">
            <div className="w-6 h-6 bg-planet-accent/30 rounded-full" />
          </div>
          <h3 className="text-lg font-semibold text-planet-accent/70 mb-2">
            No Dune: Awakening streamers online
          </h3>
          <p className="text-planet-accent/50">
            The desert is quiet... Check back later for active streams from Arrakis
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {onlineStreamers.map((streamer) => (
            <StreamerCard key={streamer.id} streamer={streamer} />
          ))}
        </div>
      )}
    </div>
  );
}
