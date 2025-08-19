"use client";

import { useState, useEffect } from "react";
import { Copy, Check, Gamepad2, Palette } from "lucide-react";

// Inline Carousel Component
function DropsCarouselPreview({ borderColor, textColor, speed, font }: { 
  borderColor: string; 
  textColor: string; 
  speed: string; 
  font: string;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
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
            alt={`Dune Awakening Drop ${index + 1}`}
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

export default function StreamerPage() {
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [borderColor, setBorderColor] = useState('C1995B');
  const [textColor, setTextColor] = useState('C1995B');
  const [speed, setSpeed] = useState('normal');
  const [font, setFont] = useState('default');

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const carouselUrl = `${baseUrl}/streamer/drops-carousel?borderColor=${borderColor}&textColor=${textColor}&speed=${speed}&font=${font}`;

  return (
    <div className="min-h-screen bg-planet-background">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 30px 30px, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}
      />
      
      <div className="relative">
        {/* Header */}
        <header className="border-b border-planet-border bg-planet-secondary/90 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Gamepad2 className="h-8 w-8 text-planet-accent" />
                <h1 className="text-2xl font-bold text-planet-accent">
                  Drops Carousel for OBS
                </h1>
              </div>
              <div className="hidden sm:flex items-center gap-2 ml-4">
                <Palette className="h-4 w-4 text-planet-accent/70" />
                <span className="text-planet-accent/70 text-sm">
                  Customize & Preview
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 space-y-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Preview */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-planet-accent mb-4">
                  Live Preview
                </h2>
                <p className="text-planet-accent/70 mb-6">
                  See how your carousel will look with your custom colors. Size: 300x450px
                </p>
              </div>
              
              {/* Preview Container */}
              <div className="flex justify-center">
                <div className="bg-planet-card border border-planet-border rounded-lg p-6">
                  <DropsCarouselPreview 
                    borderColor={borderColor}
                    textColor={textColor}
                    speed={speed}
                    font={font}
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Controls */}
            <div className="space-y-6 flex flex-col">
              <div>
                <h2 className="text-2xl font-bold text-planet-accent mb-4">
                  Customization
                </h2>
                <p className="text-planet-accent/70 mb-6">
                  Adjust colors and speed to match your stream&apos;s aesthetic.
                </p>
              </div>

              {/* Color Controls - Match height of preview */}
              <div className="bg-planet-card border border-planet-border rounded-lg p-6 space-y-6 flex-1 flex flex-col justify-center">
                {/* Border Color */}
                <div>
                  <label className="block text-sm font-medium text-planet-accent mb-3">
                    Border Color
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={`#${borderColor}`}
                      onChange={(e) => setBorderColor(e.target.value.replace('#', ''))}
                      className="w-12 h-10 rounded border border-planet-border bg-planet-secondary cursor-pointer"
                    />
                    <input
                      type="text"
                      value={borderColor}
                      onChange={(e) => setBorderColor(e.target.value.replace('#', ''))}
                      placeholder="C1995B"
                      className="flex-1 bg-planet-secondary border border-planet-border rounded px-3 py-2 text-sm text-planet-accent font-mono"
                    />
                  </div>
                  <p className="text-xs text-planet-accent/60 mt-1">
                    Hex color without # (e.g., C1995B for gold)
                  </p>
                </div>

                {/* Text Color */}
                <div>
                  <label className="block text-sm font-medium text-planet-accent mb-3">
                    Text Color
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={`#${textColor}`}
                      onChange={(e) => setTextColor(e.target.value.replace('#', ''))}
                      className="w-12 h-10 rounded border border-planet-border bg-planet-secondary cursor-pointer"
                    />
                    <input
                      type="text"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value.replace('#', ''))}
                      placeholder="C1995B"
                      className="flex-1 bg-planet-secondary border border-planet-border rounded px-3 py-2 text-sm text-planet-accent font-mono"
                    />
                  </div>
                  <p className="text-xs text-planet-accent/60 mt-1">
                    Hex color without # (e.g., C1995B for gold, FFFFFF for white)
                  </p>
                </div>

                {/* Font Style */}
                <div>
                  <label className="block text-sm font-medium text-planet-accent mb-3">
                    Font Style
                  </label>
                  <select
                    value={font}
                    onChange={(e) => setFont(e.target.value)}
                    className="w-full bg-planet-secondary border border-planet-border rounded px-3 py-2 text-sm text-planet-accent"
                  >
                    <option value="default">Default (System Font)</option>
                    <option value="goblin">Goblin (Comic Sans)</option>
                    <option value="monospace">Monospace (Code Font)</option>
                  </select>
                </div>

                {/* Animation Speed */}
                <div>
                  <label className="block text-sm font-medium text-planet-accent mb-3">
                    Animation Speed
                  </label>
                  <select
                    value={speed}
                    onChange={(e) => setSpeed(e.target.value)}
                    className="w-full bg-planet-secondary border border-planet-border rounded px-3 py-2 text-sm text-planet-accent"
                  >
                    <option value="slow">Slow (4 seconds)</option>
                    <option value="normal">Normal (3 seconds)</option>
                    <option value="fast">Fast (2 seconds)</option>
                  </select>
                </div>

                {/* Preset Colors */}
                <div>
                  <label className="block text-sm font-medium text-planet-accent mb-3">
                    Quick Presets
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        setBorderColor('C1995B');
                        setTextColor('C1995B');
                        setFont('default');
                      }}
                      className="bg-planet-secondary border border-planet-border rounded px-3 py-2 text-xs text-planet-accent hover:bg-planet-accent/10 transition-colors"
                    >
                      Default (Gold)
                    </button>
                    <button
                      onClick={() => {
                        setBorderColor('ff6b35');
                        setTextColor('ff6b35');
                        setFont('goblin');
                      }}
                      className="bg-planet-secondary border border-planet-border rounded px-3 py-2 text-xs text-planet-accent hover:bg-planet-accent/10 transition-colors"
                    >
                      Orange + Goblin
                    </button>
                    <button
                      onClick={() => {
                        setBorderColor('6366f1');
                        setTextColor('6366f1');
                        setFont('monospace');
                      }}
                      className="bg-planet-secondary border border-planet-border rounded px-3 py-2 text-xs text-planet-accent hover:bg-planet-accent/10 transition-colors"
                    >
                      Blue + Mono
                    </button>
                    <button
                      onClick={() => {
                        setBorderColor('22c55e');
                        setTextColor('FFFFFF');
                        setFont('default');
                      }}
                      className="bg-planet-secondary border border-planet-border rounded px-3 py-2 text-xs text-planet-accent hover:bg-planet-accent/10 transition-colors"
                    >
                      Green + White
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* URL Section - Full Width */}
          <div className="bg-planet-card border border-planet-accent rounded-lg p-6">
            <h3 className="text-xl font-bold text-planet-accent mb-6 flex items-center gap-2">
              <Copy className="h-6 w-6" />
              OBS Browser Source Setup
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - URL */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-planet-accent mb-2">
                    Browser Source URL (copy this):
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={carouselUrl}
                      readOnly
                      className="flex-1 bg-planet-secondary border border-planet-border rounded px-3 py-2 text-sm text-planet-accent/90 font-mono"
                    />
                    <button
                      onClick={() => copyToClipboard(carouselUrl)}
                      className="bg-planet-accent text-black px-4 py-2 rounded hover:bg-planet-accent-hover transition-colors flex items-center gap-2 whitespace-nowrap"
                    >
                      {copiedUrl ? (
                        <>
                          <Check className="h-4 w-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          Copy URL
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="bg-planet-secondary border border-planet-border rounded p-4">
                  <h4 className="font-semibold text-planet-accent mb-2 text-sm">
                    📐 Recommended OBS Settings:
                  </h4>
                  <ul className="text-sm text-planet-accent/80 space-y-1">
                    <li>• <strong>Width:</strong> 300 pixels</li>
                    <li>• <strong>Height:</strong> 450 pixels</li>
                    <li>• <strong>FPS:</strong> 30 (default is fine)</li>
                    <li>• ✅ Check &quot;Shutdown source when not visible&quot;</li>
                    <li>• ✅ Check &quot;Refresh browser when scene becomes active&quot;</li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Instructions */}
              <div className="space-y-4">
                <h4 className="font-semibold text-planet-accent text-sm mb-3">
                  📋 Step-by-Step Instructions:
                </h4>
                
                <div className="space-y-3 text-sm text-planet-accent/80">
                  <div className="flex gap-3">
                    <span className="bg-planet-accent text-black rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-planet-accent">Add Browser Source</strong>
                      <p>In OBS Studio, click the <strong>+</strong> button in your Sources panel and select <strong>&quot;Browser Source&quot;</strong></p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="bg-planet-accent text-black rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-planet-accent">Name Your Source</strong>
                      <p>Give it a name like &quot;Dune Drops Carousel&quot; and click <strong>OK</strong></p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="bg-planet-accent text-black rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-planet-accent">Paste URL & Set Size</strong>
                      <p>Paste the copied URL above into the <strong>&quot;URL&quot;</strong> field, then set Width to <strong>300</strong> and Height to <strong>450</strong></p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="bg-planet-accent text-black rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-planet-accent">Optimize Performance</strong>
                      <p>Check both performance options mentioned above, then click <strong>OK</strong></p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <span className="bg-planet-accent text-black rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-planet-accent">Position & Go Live!</strong>
                      <p>Drag the carousel to your desired position on stream. The animation will start automatically!</p>
                    </div>
                  </div>
                </div>

                <div className="bg-planet-highlight/20 border border-planet-highlight/50 rounded p-3 mt-4">
                  <p className="text-xs text-planet-accent/90">
                    💡 <strong>Pro Tip:</strong> The carousel updates automatically when you change colors above - just refresh the Browser Source in OBS to see your changes!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-planet-border bg-planet-secondary mt-16">
          <div className="container mx-auto px-4 py-6">
            <div className="text-center text-planet-accent/70 text-sm">
              Perfect for showcasing Dune: Awakening Observer Drops 3 on your stream!
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
