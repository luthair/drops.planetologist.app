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
    slow: 20000,  // 20 seconds
    normal: 15000, // 15 seconds
    fast: 10000   // 10 seconds
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
    <div className="carousel-root">
      <style jsx>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: scale(1.05); }
          10% { opacity: 1; transform: scale(1); }
          90% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.95); }
        }

        .carousel-root {
          position: relative;
          width: 300px;
          height: 450px;
        }

        .carousel-frame {
          position: relative;
          width: 100%;
          height: 100%;
          border: 3px solid ${hexToBorderColor(borderColor)};
          border-radius: 0.75rem;
          overflow: hidden;
          background: transparent;
        }

        .carousel-shell {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: inherit;
          overflow: hidden;
        }

        .carousel-background {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background-color: ${hexToBorderColor(borderColor)}11;
          z-index: 0;
        }

        .carousel-rotator {
          position: absolute;
          inset: 0;
          z-index: 1;
          border-radius: inherit;
        }

        .carousel-overlay {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1rem;
          background-image: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent, rgba(0, 0, 0, 0.3));
          z-index: 2;
        }

        .cycling-image {
          transition: opacity 2000ms ease-in-out;
          border-radius: inherit;
        }

        .drops-subtitle {
          color: ${hexToTextColor(textColor)};
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
          font-family: ${getFontFamily(font)};
        }
      `}</style>

      <div className="carousel-frame">
        <div className="carousel-shell">
          <div className="carousel-background" />
          <div className="carousel-rotator">
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
          </div>

          <div className="carousel-overlay">
            <div className="text-center">
              <p className="drops-subtitle text-lg font-bold mb-1">
                Observer Drops 3
              </p>
            </div>

            <div className="text-center">
              <div className="drops-subtitle text-s font-bold mb-6">
                Watch & Earn Rewards
              </div>
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
