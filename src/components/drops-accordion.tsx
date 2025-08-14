"use client";

import type { DropsPeriod } from "~/types";
import { DropsPeriodComponent } from "./drops-period";
import * as Accordion from "@radix-ui/react-accordion";

interface DropsAccordionProps {
  periods: DropsPeriod[];
}

export function DropsAccordion({ periods }: DropsAccordionProps) {
  const sortedPeriods = periods.sort((a, b) => {
    // Active periods first, then upcoming, then ended
    if (a.isActive && !b.isActive) return -1;
    if (!a.isActive && b.isActive) return 1;
    
    const aEnded = new Date() > a.endDate;
    const bEnded = new Date() > b.endDate;
    
    if (!aEnded && bEnded) return -1;
    if (aEnded && !bEnded) return 1;
    
    // Within same status, sort by start date (newest first for active/upcoming, oldest first for ended)
    if (a.isActive || (!aEnded && !bEnded)) {
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    } else {
      return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    }
  });

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Twitch Drops</h2>
        <p className="text-gray-400">
          Discover active and upcoming drop campaigns. Click on any period to see details.
        </p>
      </div>

      <div className="bg-gray-900/50 rounded-xl border border-gray-700 backdrop-blur-sm">
        <Accordion.Root type="multiple" className="divide-y divide-gray-700">
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
