"use client";

import type { DropsPeriod } from "~/types";
import { Calendar, Clock, Trophy, ChevronDown } from "lucide-react";
import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";
import { useState } from "react";
import { Modal } from "./ui/modal";

interface DropsPeriodProps {
  period: DropsPeriod;
  value: string;
}

export function DropsPeriodComponent({ period, value }: DropsPeriodProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  const now = new Date();
  const isActive = now >= period.startDate && now <= period.endDate;
  const hasEnded = now > period.endDate;

  return (
    <>
      <Accordion.Item value={value} className="border-b border-planet-accent/30 last:border-b-0">
        <Accordion.Header>
          <Accordion.Trigger className="group flex w-full items-center justify-between py-6 px-6 text-left transition-colors hover:bg-planet-accent-faded">
            <div className="flex items-center gap-4">
              <div className={`rounded-full p-2 ${
                isActive 
                  ? "bg-planet-highlight/20 text-planet-highlight" 
                  : hasEnded 
                    ? "bg-planet-accent/10 text-planet-accent/50"
                    : "bg-planet-accent/20 text-planet-accent"
              }`}>
                <Trophy className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-planet-accent group-hover:text-planet-accent-hover transition-colors">
                  {period.title}
                </h3>
                <div className="flex items-center gap-4 mt-1 text-sm text-planet-accent/70">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(period.startDate)} - {formatDate(period.endDate)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span className={`font-medium ${
                      isActive 
                        ? "text-planet-highlight" 
                        : hasEnded 
                          ? "text-planet-accent/50"
                          : "text-planet-accent"
                    }`}>
                      {isActive ? "Active" : hasEnded ? "Ended" : "Upcoming"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <ChevronDown className="h-5 w-5 text-planet-accent/50 transition-transform group-data-[state=open]:rotate-180" />
          </Accordion.Trigger>
        </Accordion.Header>

        <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          <div className="px-6 pb-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/2">
                <div 
                  className="relative aspect-video overflow-hidden rounded-lg border border-planet-accent/30 cursor-pointer group"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Image
                    src={period.imageUrl}
                    alt={`${period.title} drops preview`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-planet-background/80 text-planet-accent px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
                      Click to enlarge
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div>
                  <h4 className="font-semibold text-planet-accent mb-2">Requirements</h4>
                  <ul className="space-y-1">
                    {period.requirements.map((requirement, index) => (
                      <li key={index} className="text-planet-accent text-xl flex items-start gap-2">
                        <div className="w-1 h-1 bg-planet-accent rounded-full mt-2.5 flex-shrink-0" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Item>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={period.title}>
        <div className="relative w-full h-full">
          <Image
            src={period.imageUrl}
            alt={`${period.title} drops preview`}
            fill
            className="object-contain rounded-lg"
          />
        </div>
      </Modal>
    </>
  );
}
