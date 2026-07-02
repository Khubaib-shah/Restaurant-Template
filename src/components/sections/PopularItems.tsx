import React, { useRef } from 'react';
import { MenuItem } from '../../types/menu';
import { MenuCard } from '../menu/MenuCard';
import { ChevronLeft, ChevronRight, Flame } from 'lucide-react';

interface PopularItemsProps {
  items: MenuItem[];
  onCustomizeClick?: (item: MenuItem) => void;
}

export const PopularItems: React.FC<PopularItemsProps> = ({ items, onCustomizeClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Extract items with special badges (Best Sellers, Chef's Special, Hot Selling)
  const popularItems = items.filter(
    (item) =>
      item.badge === 'BEST_SELLER' ||
      item.badge === 'CHEFS_SPECIAL' ||
      item.badge === 'HOT_SELLING'
  );

  if (popularItems.length === 0) return null;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 260 : scrollLeft + 260;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div id="popular-items-section" className="w-full max-w-[1280px] mx-auto px-2 sm:px-4 md:px-8 pt-2 pb-6 md:py-8 select-none">
      <div className="flex items-center justify-between mb-4 md:mb-6 gap-2">
        <div className="space-y-1 min-w-0">
          <h2 className="text-[13px] min-[400px]:text-base sm:text-lg md:text-2xl font-extrabold text-gray-950 flex items-center gap-1.5 uppercase tracking-wide whitespace-nowrap">
            <span className="text-base md:text-2xl">🔥</span>
            Signature Best Sellers
          </h2>
          <p className="text-[9px] sm:text-xs text-gray-700 font-bold uppercase tracking-wider leading-none">
            Top recommendations from Ghalib kitchen
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50 active:scale-90 transition-all cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-8 h-8 rounded-full bg-brand-primary text-white hover:bg-brand-primary-hover flex items-center justify-center active:scale-90 transition-all cursor-pointer shadow-sm"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Mobile 2x2 Grid View */}
      <div className="grid grid-cols-2 gap-2 md:hidden">
        {popularItems.slice(0, 4).map((item) => (
          <MenuCard key={item.id} item={item} onCustomizeClick={onCustomizeClick} />
        ))}
      </div>

      {/* Desktop Horizontal scrolling track */}
      <div
        ref={scrollRef}
        className="hidden md:flex gap-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth"
      >
        {popularItems.map((item) => (
          <div key={item.id} className="w-[200px] md:w-[240px] shrink-0">
            <MenuCard item={item} onCustomizeClick={onCustomizeClick} />
          </div>
        ))}
      </div>
    </div>
  );
};
