"use client";

import { useState, useEffect, Suspense } from "react";
import { Clock } from "lucide-react";
import { useSearchParams } from "next/navigation";

function CountdownShortContent() {
  const searchParams = useSearchParams();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isExpired, setIsExpired] = useState(false);
  
  // Customization parameters
  const borderColor = searchParams.get('borderColor') ?? 'FAA9FF';
  const textColor = searchParams.get('textColor') ?? 'FAA9FF';
  const font = searchParams.get('font') ?? 'default';
  const title = searchParams.get('title') ?? 'New Drops Campaign unlocks in';
  const showBorder = searchParams.get('showBorder') !== 'false';
  const size = searchParams.get('size') ?? 'medium';
  
  // Target date string (October 23rd, 2025 at 4:00 PM UTC+2 / 2:00 PM UTC)
  const targetDateString = "2025-10-23T14:00:00.000Z";

  useEffect(() => {
    const targetDate = new Date(targetDateString);
    
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
  }, [targetDateString]);
  
  // Don't show anything if the date has passed
  if (isExpired) {
    return (
      <div className="flex items-center justify-center p-2">
        <div className="text-center">
          <span className="text-sm font-bold">Campaign is now LIVE!</span>
        </div>
      </div>
    );
  }
  
  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  const hexToColor = (hex: string) => `#${hex.replace('#', '')}`;
  
  const getFontFamily = (fontType: string) => {
    switch (fontType) {
      case 'goblin':
        return 'Comic Sans MS, cursive';
      case 'monospace':
        return 'monospace';
      default:
        return 'inherit';
    }
  };
  
  // Size classes
  const sizeClasses = {
    small: {
      container: "px-2 py-1",
      text: "text-xs",
      icon: "h-3 w-3"
    },
    medium: {
      container: "px-3 py-2",
      text: "text-sm",
      icon: "h-4 w-4"
    },
    large: {
      container: "px-4 py-2",
      text: "text-base",
      icon: "h-5 w-5"
    }
  };
  
  const currentSize = sizeClasses[size as keyof typeof sizeClasses] || sizeClasses.medium;

  return (
    <div 
      className={`${showBorder ? 'border animate-pulse' : ''} rounded-lg ${currentSize.container} inline-flex`}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(10px)',
        borderColor: showBorder ? hexToColor(borderColor) : 'transparent',
        color: hexToColor(textColor),
        fontFamily: getFontFamily(font)
      }}
    >
      <div className="flex items-center gap-2">
        <Clock className={currentSize.icon} />
        <div className={`flex items-center gap-1 ${currentSize.text}`}>
          <span className="font-medium whitespace-nowrap">{title}</span>
          <span className="font-mono font-bold whitespace-nowrap">
            {timeLeft.days > 0 && (
              <span className="mr-1">{timeLeft.days}d</span>
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

export default function CountdownShortPage() {
  return (
    <Suspense fallback={<div className="p-2 text-center">Loading...</div>}>
      <CountdownShortContent />
    </Suspense>
  );
}
