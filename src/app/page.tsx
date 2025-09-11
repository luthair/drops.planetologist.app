"use client";

import { StreamerGrid } from "~/components/streamer-grid";
import { DropsAccordion } from "~/components/drops-accordion";
import { CountdownBanner } from "~/components/countdown-banner";
import { getDropsCampaigns, getSiteContent } from "~/lib/content";
import { useStreamers } from "~/hooks/use-streamers";
import { Twitch, Gamepad2 } from "lucide-react";

export default function HomePage() {
  const { duneStreamers, nonDuneStreamers, isLoading, error } = useStreamers();
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
            
            {/* Campaign Countdown Banner */}
            <CountdownBanner 
              targetDate={new Date("2025-09-11T14:00:00.000Z")}
              message="New Drops Campaign unlocks in"
            />
            
            {/* Dune Streamers Section */}
            <section>
              <StreamerGrid 
                streamers={duneStreamers} 
                isLoading={isLoading} 
                error={error}
                title="Dune: Awakening Streamers"
                subtitle="Live streamers playing on Arrakis"
                emptyMessage="No streamers currently playing Dune: Awakening"
              />
            </section>

            {/* Drops Section */}
            <section>
              <DropsAccordion periods={dropsCampaigns} />
            </section>
            
            {/* Non-Dune Streamers Section */}
            <section className="pt-6 mt-12 border-t border-planet-accent/30">
              <StreamerGrid 
                streamers={nonDuneStreamers} 
                isLoading={isLoading}
                title="Our Streamers NOT playing Dune: Awakening"
                subtitle="Check what else they're playing"
                emptyMessage="All our streamers are currently playing Dune: Awakening"
              />
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
