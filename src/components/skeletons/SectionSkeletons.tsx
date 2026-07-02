import React from 'react';

// 1. Header Skeleton
export const HeaderSkeleton: React.FC = () => {
  return (
    <div className="h-16 w-full bg-gray-200/90 flex items-center justify-between px-4 md:px-8 z-[100] shadow-header select-none">
      {/* Left side dropdown placeholders */}
      <div className="flex items-center gap-4">
        {/* Mobile/Desktop Location Indicator */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-300/75 animate-pulse shrink-0" />
          <div className="hidden lg:flex flex-col gap-1">
            <div className="w-16 h-2 rounded bg-gray-300/60 animate-pulse" />
            <div className="w-28 h-3.5 rounded bg-gray-300/80 animate-pulse" />
          </div>
        </div>
        
        {/* Phone badge indicator */}
        <div className="hidden lg:flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-300/75 animate-pulse" />
          <div className="w-24 h-3.5 rounded bg-gray-300/80 animate-pulse" />
        </div>
      </div>

      {/* Center: Restaurant Logo pill */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
        <div className="w-12 h-12 md:w-[52px] md:h-[52px] rounded-full bg-white shadow-md flex items-center justify-center p-0.5 animate-pulse">
          <div className="w-full h-full rounded-full bg-gray-200/50" />
        </div>
      </div>

      {/* Right side Cart Indicator */}
      <div className="flex items-center gap-3">
        <div className="lg:hidden flex flex-col items-end gap-1">
          <div className="w-16 h-2 rounded bg-gray-300/60 animate-pulse" />
          <div className="w-12 h-3 rounded bg-gray-300/80 animate-pulse" />
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-300/75 animate-pulse" />
      </div>
    </div>
  );
};

// 2. Hero Banner Skeleton (perfectly styled as in the reference image)
export const HeroBannerSkeleton: React.FC = () => {
  return (
    <div className="w-full bg-transparent lg:px-6 lg:mt-6 select-none shrink-0">
      <div className="relative w-full h-[220px] md:h-[calc(100dvh-162px)] lg:rounded-[2rem] bg-gray-200/80 animate-pulse overflow-hidden shadow-xl flex items-center justify-between px-6">
        {/* Left Arrow */}
        <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm border border-white/20" />
        
        {/* Center Text block place-holders */}
        <div className="flex flex-col items-center gap-3 w-full max-w-lg mx-auto">
          <div className="w-24 h-2 rounded bg-white/30" />
          <div className="w-3/4 h-8 md:h-12 rounded bg-white/30" />
          <div className="w-1/2 h-4 rounded bg-white/30" />
        </div>

        {/* Right Arrow */}
        <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm border border-white/20" />

        {/* Dots Pagination indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <div className="w-5 h-2 rounded-full bg-white/60" />
          <div className="w-2 h-2 rounded-full bg-white/30" />
          <div className="w-2 h-2 rounded-full bg-white/30" />
        </div>
      </div>
    </div>
  );
};

// 3. Category Nav Skeleton
export const CategoryNavSkeleton: React.FC = () => {
  return (
    <div className="sticky top-0 bg-gray-100 h-12 w-full z-90 border-b border-gray-200 shadow-sm select-none overflow-hidden">
      <div className="h-full max-w-[1280px] mx-auto flex items-center px-4 overflow-x-auto no-scrollbar">
        <div className="flex gap-4 md:gap-6">
          <div className="w-16 h-4 rounded bg-gray-300 animate-pulse" />
          <div className="w-20 h-4 rounded bg-gray-300 animate-pulse" />
          <div className="w-14 h-4 rounded bg-gray-200 animate-pulse" />
          <div className="w-24 h-4 rounded bg-gray-200 animate-pulse" />
          <div className="w-16 h-4 rounded bg-gray-200 animate-pulse" />
          <div className="w-20 h-4 rounded bg-gray-200 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

// 4. Search Bar Skeleton
export const SearchBarSkeleton: React.FC = () => {
  return (
    <div className="w-full flex justify-center px-4 my-6 select-none shrink-0">
      <div className="relative w-full max-w-[480px] h-12 rounded-full bg-gray-100/80 animate-pulse border border-gray-200/40 flex items-center px-4">
        <div className="w-4 h-4 rounded-full border-2 border-gray-300 mr-3 shrink-0" />
        <div className="w-32 h-4 rounded bg-gray-200/60" />
      </div>
    </div>
  );
};

// 5. Promo Banner Skeleton
export const PromoBannerSkeleton: React.FC = () => {
  return (
    <div className="max-w-[480px] mx-auto bg-white border border-gray-100 rounded-xl p-3.5 my-5 flex items-center gap-3 shadow-sm select-none animate-pulse">
      <div className="w-8 h-8 rounded-full bg-gray-200/60 shrink-0" />
      <div className="w-48 h-4 rounded bg-gray-200/50" />
    </div>
  );
};

// 6. Menu Card Skeleton
export const MenuCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100/80 overflow-hidden relative flex flex-col justify-between shadow-card h-full select-none animate-pulse">
      {/* Image Block placeholder */}
      <div className="relative w-full aspect-square bg-gray-100/70" />

      {/* Content Block placeholders */}
      <div className="p-3 flex-1 flex flex-col justify-between gap-3">
        <div className="space-y-2">
          {/* Item Name */}
          <div className="w-4/5 h-4 rounded bg-gray-200/60" />
          {/* Servings notes */}
          <div className="w-1/3 h-3 rounded bg-gray-100/80" />
          {/* Description line 1 */}
          <div className="w-full h-3 rounded bg-gray-100/60" />
        </div>

        {/* Pricing & Button area */}
        <div className="space-y-3 pt-1">
          <div className="w-1/2 h-4 rounded bg-gray-200/70" />
          <div className="w-full h-9 rounded-lg bg-gray-200/50" />
        </div>
      </div>
    </div>
  );
};

// 7. Popular Items (Horizontal Carousel) Skeleton
export const PopularItemsSkeleton: React.FC = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 py-8 select-none">
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-2">
          <div className="w-48 h-6 rounded bg-gray-200 animate-pulse" />
          <div className="w-32 h-3.5 rounded bg-gray-100 animate-pulse" />
        </div>
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-150 animate-pulse" />
          <div className="w-8 h-8 rounded-full bg-gray-150 animate-pulse" />
        </div>
      </div>

      {/* Row of cards */}
      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        {[1, 2, 3, 4, 5].map((idx) => (
          <div key={idx} className="w-[200px] md:w-[240px] shrink-0">
            <MenuCardSkeleton />
          </div>
        ))}
      </div>
    </div>
  );
};

// 8. Menu Grid Skeleton (used in the main menu categories)
export const MenuGridSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
        <MenuCardSkeleton key={idx} />
      ))}
    </div>
  );
};

// 9. Menu Section Skeleton (Title + Grid)
export const MenuSectionSkeleton: React.FC = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 py-8 select-none">
      {/* Category Header Title Centered */}
      <div className="mb-6 space-y-2 flex flex-col items-center">
        <div className="w-48 h-7 rounded bg-gray-200 animate-pulse" />
        <div className="w-1/3 h-4 rounded bg-gray-100 animate-pulse" />
      </div>

      {/* Grid of cards */}
      <MenuGridSkeleton />
    </div>
  );
};

// 10. Complete Layout Skeleton (the overall fallback matched to the UI)
export const CompleteAppSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-gray-900 flex flex-col font-sans">
      {/* Announcement bar skeleton placeholder */}
      <div className="bg-gray-300 h-8 w-full animate-pulse" />
      
      <HeaderSkeleton />
      <HeroBannerSkeleton />
      <CategoryNavSkeleton />
      <SearchBarSkeleton />
      <PromoBannerSkeleton />
      <PopularItemsSkeleton />
      
      <main className="flex-1 max-w-[1280px] w-full mx-auto px-4 md:px-8 py-4">
        <MenuSectionSkeleton />
      </main>
    </div>
  );
};
