"use client";

import type { Streamer } from "~/types";
import { Users, Eye } from "lucide-react";
import Image from "next/image";

interface StreamerCardProps {
  streamer: Streamer;
}

export function StreamerCard({ streamer }: StreamerCardProps) {
  const formatViewerCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <div className="group relative overflow-hidden rounded-xl bg-planet-card border border-planet-accent/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-planet-accent hover:shadow-xl hover:shadow-planet-accent/20">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={streamer.thumbnailUrl ?? "/api/placeholder/320/180"}
          alt={`${streamer.displayName} stream thumbnail`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Live indicator */}
        <div className="absolute left-3 top-3">
          <div className="flex items-center gap-1.5 rounded-full bg-planet-highlight/90 px-2 py-1 text-xs font-semibold text-black">
            <div className="h-2 w-2 rounded-full bg-black animate-pulse" />
            LIVE
          </div>
        </div>

        {/* Viewer count */}
        {streamer.viewerCount && (
          <div className="absolute right-3 top-3">
            <div className="flex items-center gap-1 rounded-full bg-planet-background/80 px-2 py-1 text-xs font-medium text-planet-accent backdrop-blur-sm">
              <Users className="h-3 w-3" />
              {formatViewerCount(streamer.viewerCount)}
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-planet-accent/30">
            <Image
              src={streamer.avatarUrl ?? "/api/placeholder/40/40"}
              alt={`${streamer.displayName} avatar`}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-planet-accent truncate">
              {streamer.displayName}
            </h3>
            <p className="text-sm text-planet-accent/70 truncate">
              @{streamer.username}
            </p>
          </div>
        </div>

        {streamer.streamTitle && (
          <p className="text-sm text-planet-accent mb-2 line-clamp-2">
            {streamer.streamTitle}
          </p>
        )}

        {streamer.gameCategory && (
          <div className="flex items-center gap-1 text-xs text-planet-accent">
            <Eye className="h-3 w-3" />
            <span className="truncate">{streamer.gameCategory}</span>
          </div>
        )}
      </div>
    </div>
  );
}
