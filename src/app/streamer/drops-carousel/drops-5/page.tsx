"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function DropsCarouselContent() {
  const searchParams = useSearchParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Customization parameters
  const borderColor = searchParams.get('borderColor') ?? 'FAA9FF';
  const textColor = searchParams.get('textColor') ?? 'FAA9FF';
  const rawBackgroundColor = searchParams.get('backgroundColor') ?? '29292C';
  const backgroundColor = rawBackgroundColor === 'transparent' ? '29292C' : rawBackgroundColor;
  const transparentBackground =
    searchParams.get('transparentBackground') === 'true' || rawBackgroundColor === 'transparent';
  const speed = searchParams.get('speed') ?? 'normal';
  const font = searchParams.get('font') ?? 'default';
  
  // Speed mapping
  const speedMap = {
    slow: 20000,  // 20 seconds
    normal: 15000, // 15 seconds
    fast: 10000   // 10 seconds
  };
  
  const interval = speedMap[speed as keyof typeof speedMap] ?? speedMap.normal;
  
  // Campaign 5 images with metadata
  const images = [
    {
      path: '/images/campaigns/streamer/drops-5/drops_5_1.png',
      name: 'Triangle Walls',
      watchTime: '1h'
    },
    {
      path: '/images/campaigns/streamer/drops-5/drops_5_2.png',
      name: 'Half Wall & Half Triangles',
      watchTime: '2h'
    },
    {
      path: '/images/campaigns/streamer/drops-5/drops_5_3.png',
      name: 'Hatch Frame & Hatch Door',
      watchTime: '3h'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

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

  const currentImage = images[currentImageIndex];

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
          border-radius: 0.75rem;
          overflow: hidden;
          border: 3px solid ${hexToColor(borderColor)};
          background-color: transparent;
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
          color: ${hexToColor(textColor)};
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
          font-family: ${getFontFamily(font)};
        }

        .item-name {
          font-size: 1.5rem;
          font-weight: bold;
          margin-top: 0rem;
        }

        .watch-time {
          font-size: 1.1rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
      `}</style>

      <div className="carousel-frame">
        <div className="carousel-shell">
          <div className="carousel-rotator">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.path}
                alt={`Dune: Awakening ${image.name}`}
                className={`cycling-image absolute inset-0 w-full h-full object-contain ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          <div className="carousel-overlay">
            <div className="text-center">
              <p className="drops-subtitle item-name">
                {currentImage?.name ?? ""}
              </p>
            </div>

            <div className="text-center">
              <div className="drops-subtitle watch-time">
                Watch for {currentImage?.watchTime ?? ""}
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
