"use client";

import { StreamerGrid } from "~/components/streamer-grid";
import { DropsAccordion } from "~/components/drops-accordion";
import { getDropsCampaigns, getSiteContent } from "~/lib/content";
import { useStreamers } from "~/hooks/use-streamers";
import { Twitch, Gamepad2 } from "lucide-react";

export default function HomePage() {
  const { streamers, isLoading, error } = useStreamers();
  const dropsCampaigns = getDropsCampaigns();
  const content = getSiteContent();

  return (
    <div className="min-h-screen bg-planet-background">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 30px 30px, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}
      />
      
      <div className="relative">
        {/* Header */}
        <header className="border-b border-planet-border bg-planet-secondary/90 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Twitch className="h-8 w-8 text-planet-accent" />
                <h1 className="text-2xl font-bold text-planet-accent">
                  {content.header.title}
                </h1>
              </div>
              <div className="hidden sm:flex items-center gap-2 ml-4">
                <Gamepad2 className="h-4 w-4 text-planet-accent/70" />
                <span className="text-planet-accent/70 text-sm">
                  {content.header.subtitle}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="space-y-12">
            {/* Hero Section */}
            
                          {/* Live Streamers Section */}
              <section>
                <StreamerGrid streamers={streamers} isLoading={isLoading} error={error} />
              </section>

            {/* Drops Section */}
            <section>
              <DropsAccordion periods={dropsCampaigns} />
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-planet-border bg-planet-secondary mt-16">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-planet-accent/70">
                <Twitch className="h-5 w-5 text-planet-accent" />
                <span className="text-sm">
                  {content.footer.text}
                </span>
              </div>
              <div className="text-planet-accent/50 text-sm">
                {content.footer.disclaimer}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
