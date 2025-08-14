"use client";

import type { DropsPeriod } from "~/types";
import { DropsPeriodComponent } from "./drops-period";
import * as Accordion from "@radix-ui/react-accordion";

interface DropsAccordionProps {
  periods: DropsPeriod[];
}

export function DropsAccordion({ periods }: DropsAccordionProps) {
  const sortedPeriods = periods.sort((a, b) => {
    const now = new Date();
    
    // Determine campaign status dynamically based on dates
    const aIsActive = now >= a.startDate && now <= a.endDate;
    const bIsActive = now >= b.startDate && now <= b.endDate;
    
    // Active campaigns always come first
    if (aIsActive && !bIsActive) return -1;
    if (!aIsActive && bIsActive) return 1;
    
    // For campaigns with same active status, sort by start date (newest to oldest)
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-planet-accent mb-2">Twitch Drops</h2>
        <p className="text-planet-accent/70">
          Discover active and upcoming drop campaigns. Click on any period to see details.
        </p>
      </div>

      <div className="bg-planet-card rounded-xl border border-planet-accent/30 backdrop-blur-sm">
        <Accordion.Root type="multiple" className="divide-y divide-planet-accent/30">
          {sortedPeriods.map((period) => (
            <DropsPeriodComponent
              key={period.id}
              period={period}
              value={period.id}
            />
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}
