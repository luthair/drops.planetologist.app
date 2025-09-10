"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface CountdownBannerProps {
  targetDate: Date;
  message: string;
}

export function CountdownBanner({ targetDate, message }: CountdownBannerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        setIsExpired(true);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    };
    
    // Initial calculation
    setTimeLeft(calculateTimeLeft());
    
    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);
  
  // Don't show the banner if the date has passed
  if (isExpired) {
    return null;
  }
  
  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="bg-planet-highlight/20 border border-planet-highlight/30 rounded-lg p-3 mb-6 animate-pulse">
      <div className="flex items-center justify-center gap-3">
        <Clock className="h-5 w-5 text-planet-highlight" />
        <div className="text-planet-highlight font-medium">
          {message}
          <span className="font-mono ml-2">
            {timeLeft.days > 0 && (
              <span className="mr-2">{timeLeft.days}d</span>
            )}
            <span>{formatNumber(timeLeft.hours)}:</span>
            <span>{formatNumber(timeLeft.minutes)}:</span>
            <span>{formatNumber(timeLeft.seconds)}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
