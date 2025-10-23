# Next.js Image Optimization Plan

## Current Issue
The site currently uses standard HTML `<img>` tags throughout the application, particularly in:
- Carousel components
- Overview image displays
- Campaign thumbnails

This triggers linting warnings: "Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image`..."

## Benefits of Next.js Image Component

1. **Performance Improvements**:
   - Automatic image optimization (resizing, compression)
   - Lazy loading out-of-viewport images
   - Prevents layout shifts with automatic size calculation
   - Modern image formats (WebP, AVIF) when browser supported

2. **Bandwidth Savings**:
   - Serves correctly sized images based on device
   - Reduces unnecessary data transfer
   - Optimizes image quality vs. file size

## Implementation Plan

### 1. Import the Image Component
```typescript
import Image from 'next/image';
```

### 2. Replace Carousel Images
In `src/app/streamer/drops-carousel/drops-5/page.tsx` and similar files:

```typescript
// FROM:
<img
  key={index}
  src={image.path}
  alt={`Dune: Awakening ${image.name}`}
  className={`cycling-image absolute inset-0 w-full h-full object-contain ${
    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
  }`}
/>

// TO:
<Image
  key={index}
  src={image.path}
  alt={`Dune: Awakening ${image.name}`}
  fill
  sizes="(max-width: 768px) 100vw, 300px"
  className={`cycling-image absolute inset-0 object-contain ${
    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
  }`}
  priority={index === 0} // Load first image immediately
/>
```

### 3. Replace Overview Images
In `src/app/streamer/page.tsx`:

```typescript
// FROM:
<img 
  src="/images/campaigns/streamer/drops-5/drops_5_campaign.jpeg"
  alt="Dune: Awakening Drops 5 Overview"
  className="max-w-full h-auto rounded-lg"
/>

// TO:
<div className="relative w-full aspect-[16/9]">
  <Image
    src="/images/campaigns/streamer/drops-5/drops_5_campaign.jpeg"
    alt="Dune: Awakening Drops 5 Overview"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-contain rounded-lg"
  />
</div>
```

### 4. Update CSS
- Remove unnecessary width/height attributes when using `fill`
- Ensure parent containers have `position: relative` and defined dimensions

### 5. Configure next.config.js
Add image optimization settings:

```javascript
module.exports = {
  // Other Next.js config...
  images: {
    domains: [], // Add external domains if needed
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
```

### 6. Test Performance
- Verify loading performance using Chrome DevTools
- Check Lighthouse scores before and after
- Ensure proper rendering on different devices/viewports

### 7. Consider Local Image Loader
For self-hosted images, consider using a custom loader to optimize further:

```javascript
// next.config.js
module.exports = {
  images: {
    loader: 'custom',
    loaderFile: './src/lib/image-loader.js',
  },
};
```

This optimization will significantly improve page loading performance, reduce bandwidth usage, and eliminate the current linting warnings while maintaining the same visual appearance.
