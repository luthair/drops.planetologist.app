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

  const isActive = period.isActive;
  const hasEnded = new Date() > period.endDate;

  return (
    <>
      <Accordion.Item value={value} className="border-b border-gray-700 last:border-b-0">
        <Accordion.Header>
          <Accordion.Trigger className="group flex w-full items-center justify-between py-6 px-6 text-left transition-colors hover:bg-gray-800/30">
            <div className="flex items-center gap-4">
              <div className={`rounded-full p-2 ${
                isActive 
                  ? "bg-green-500/20 text-green-400" 
                  : hasEnded 
                    ? "bg-gray-500/20 text-gray-400"
                    : "bg-blue-500/20 text-blue-400"
              }`}>
                <Trophy className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                  {period.title}
                </h3>
                <div className="flex items-center gap-4 mt-1 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(period.startDate)} - {formatDate(period.endDate)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span className={`font-medium ${
                      isActive 
                        ? "text-green-400" 
                        : hasEnded 
                          ? "text-gray-500"
                          : "text-blue-400"
                    }`}>
                      {isActive ? "Active" : hasEnded ? "Ended" : "Upcoming"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <ChevronDown className="h-5 w-5 text-gray-400 transition-transform group-data-[state=open]:rotate-180" />
          </Accordion.Trigger>
        </Accordion.Header>

        <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          <div className="px-6 pb-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/2">
                <div 
                  className="relative aspect-video overflow-hidden rounded-lg border border-gray-600 cursor-pointer group"
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
                    <div className="bg-black/60 text-white px-3 py-2 rounded-lg text-sm font-medium">
                      Click to enlarge
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Description</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {period.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">Game</h4>
                  <p className="text-purple-300 font-medium">
                    {period.gameTitle}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">Requirements</h4>
                  <ul className="space-y-1">
                    {period.requirements.map((requirement, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                        <div className="w-1 h-1 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
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
        <div className="relative">
          <Image
            src={period.imageUrl}
            alt={`${period.title} drops preview`}
            width={1200}
            height={675}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </Modal>
    </>
  );
}
