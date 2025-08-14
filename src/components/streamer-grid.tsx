"use client";

import type { Streamer } from "~/types";
import { StreamerCard } from "./streamer-card";

interface StreamerGridProps {
  streamers: Streamer[];
  isLoading?: boolean;
}

export function StreamerGrid({ streamers, isLoading }: StreamerGridProps) {
  const onlineStreamers = streamers.filter(streamer => streamer.isOnline);

  if (isLoading) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Live Streamers</h2>
          <div className="flex items-center gap-2 text-gray-400">
            <div className="h-2 w-2 rounded-full bg-gray-400 animate-pulse" />
            <span className="text-sm">Loading...</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-video bg-gray-700 rounded-xl mb-4" />
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 bg-gray-700 rounded-full" />
                <div className="flex-1">
                  <div className="h-4 bg-gray-700 rounded mb-1" />
                  <div className="h-3 bg-gray-700 rounded w-2/3" />
                </div>
              </div>
              <div className="h-3 bg-gray-700 rounded mb-2" />
              <div className="h-3 bg-gray-700 rounded w-1/2" />
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
          <h2 className="text-2xl font-bold text-white">Dune: Awakening Streamers</h2>
          <p className="text-sm text-gray-400 mt-1">Live streamers playing on Arrakis</p>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-sm">
            {onlineStreamers.length} online
          </span>
        </div>
      </div>

      {onlineStreamers.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-700 flex items-center justify-center">
            <div className="w-6 h-6 bg-gray-500 rounded-full" />
          </div>
          <h3 className="text-lg font-semibold text-gray-400 mb-2">
            No Dune: Awakening streamers online
          </h3>
          <p className="text-gray-500">
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
