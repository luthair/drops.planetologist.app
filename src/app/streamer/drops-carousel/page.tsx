"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function DropsCarouselContent() {
  const searchParams = useSearchParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Customization parameters
  const borderColor = searchParams.get('borderColor') ?? 'C1995B';
  const textColor = searchParams.get('textColor') ?? 'C1995B';
  const speed = searchParams.get('speed') ?? 'normal';
  const font = searchParams.get('font') ?? 'default';
  
  // Speed mapping
  const speedMap = {
    slow: 4000,
    normal: 3000,
    fast: 2000
  };
  
  const interval = speedMap[speed as keyof typeof speedMap] ?? speedMap.normal;
  
  // Campaign 3 images
  const images = [
    '/images/campaigns/streamer/drops-3/observer-drops-streamer-3-1.jpg',
    '/images/campaigns/streamer/drops-3/observer-drops-streamer-3-2.jpg',
    '/images/campaigns/streamer/drops-3/observer-drops-streamer-3-3.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const hexToBorderColor = (hex: string) => `#${hex.replace('#', '')}`;
  const hexToTextColor = (hex: string) => `#${hex.replace('#', '')}`;
  
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

  return (
    <div className="w-[300px] h-[450px] overflow-hidden">
      <style jsx>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: scale(1.05); }
          10% { opacity: 1; transform: scale(1); }
          90% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.95); }
        }
        
        .image-container {
          border: 3px solid ${hexToBorderColor(borderColor)};
          position: relative;
          overflow: hidden;
        }
        
        .cycling-image {
          transition: opacity 500ms ease-in-out;
        }
        
        .drops-subtitle {
          color: ${hexToTextColor(textColor)};
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
          font-family: ${getFontFamily(font)};
        }
      `}</style>
      
      <div className="image-container w-full h-full rounded-lg relative">
        {/* Background Images */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Dune: Awakening Drop ${index + 1}`}
            className={`cycling-image absolute inset-0 w-full h-full object-cover ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 flex flex-col justify-between p-4 z-10">
          {/* Top Section */}
          <div className="text-center">
            <p className="drops-subtitle text-lg font-bold mb-1">
              Observer Drops 3
            </p>
          </div>
          
          {/* Bottom Section */}
          <div className="text-center">
            <div className="drops-subtitle text-s font-bold mb-6">
              Watch & Earn Rewards
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DropsCarousel() {
  return (
    <Suspense fallback={<div className="w-[300px] h-[450px] bg-gray-900 rounded-lg flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>}>
      <DropsCarouselContent />
    </Suspense>
  );
}
