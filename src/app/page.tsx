"use client";

import { StreamerGrid } from "~/components/streamer-grid";
import { DropsAccordion } from "~/components/drops-accordion";
import { sampleDropsPeriods } from "~/data/sample-data";
import { useStreamers } from "~/hooks/use-streamers";
import { Twitch, Gamepad2 } from "lucide-react";

export default function HomePage() {
  const { streamers, isLoading } = useStreamers();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 30px 30px, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="relative">
        {/* Header */}
        <header className="border-b border-gray-800 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Twitch className="h-8 w-8 text-purple-400" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Drops Tracker
                </h1>
              </div>
              <div className="hidden sm:flex items-center gap-2 ml-4">
                <Gamepad2 className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm">
                  Your ultimate companion for Twitch drops and streamers
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="space-y-12">
            {/* Hero Section */}
            <section className="text-center py-8">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Never Miss A 
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}Drop
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Track your favorite streamers and discover the latest Twitch drops campaigns. 
                Get notified when streamers go live and earn exclusive rewards.
              </p>
            </section>

            {/* Live Streamers Section */}
            <section>
              <StreamerGrid streamers={streamers} isLoading={isLoading} />
            </section>

            {/* Drops Section */}
            <section>
              <DropsAccordion periods={sampleDropsPeriods} />
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800 bg-black/20 backdrop-blur-sm mt-16">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Twitch className="h-5 w-5" />
                <span className="text-sm">
                  Drops Tracker - Built with Next.js and Tailwind CSS
                </span>
              </div>
              <div className="text-gray-500 text-sm">
                Not affiliated with Twitch Interactive, Inc.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
