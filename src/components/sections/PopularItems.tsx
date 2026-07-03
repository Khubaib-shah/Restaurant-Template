import React, { useRef } from "react";
import { MenuItem } from "../../types/menu";
import { MenuCard } from "../menu/MenuCard";
import { ChevronLeft, ChevronRight, Flame } from "lucide-react";
import { useRestaurant } from "@/src/context/RestaurantContext";

interface PopularItemsProps {
  items: MenuItem[];
  onCustomizeClick?: (item: MenuItem) => void;
}

export const PopularItems: React.FC<PopularItemsProps> = ({
  items,
  onCustomizeClick,
}) => {
  const { config } = useRestaurant();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Extract items with special badges (Best Sellers, Chef's Special, Hot Selling)
  const popularItems = items.filter(
    (item) =>
      item.badge === "BEST_SELLER" ||
      item.badge === "CHEFS_SPECIAL" ||
      item.badge === "HOT_SELLING",
  );

  if (popularItems.length === 0) return null;

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo =
        direction === "left" ? scrollLeft - 260 : scrollLeft + 260;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div
      id="popular-items-section"
      className="container mx-auto max-w-[1220px] select-none"
    >
      <div className="flex items-center justify-between mb-4 md:mb-6 gap-2 p-2 sm:p-4">
        <div className="space-y-1 min-w-0">
          <h2 className="text-[13px] min-[400px]:text-base sm:text-lg md:text-2xl font-extrabold text-text-primary flex items-center gap-1.5 uppercase tracking-wide whitespace-nowrap">
            <span className="text-base md:text-2xl">🔥</span>
            Signature Best Sellers
          </h2>
          <p className="text-[9px] sm:text-xs text-gray-700 font-bold uppercase tracking-wider leading-none">
            Top recommendations from {config.name}
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-8 h-8 rounded-full border border-brand-primary/20 bg-background-card flex items-center justify-center text-gray-600 hover:text-text-primary hover:border-brand-primary/25 hover:divide-brand-primary/5 active:scale-90 transition-all cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-8 h-8 rounded-full bg-brand-primary  text-text-inverse hover:bg-brand-primary-hover flex items-center justify-center active:scale-90 transition-all cursor-pointer shadow-sm"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Mobile Grid View */}
      <div
        className={`grid ${config.theme.cardStyle === "list" ? "grid-cols-1" : "grid-cols-2"}  gap-2 md:hidden`}
      >
        {popularItems.slice(0, 4).map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            onCustomizeClick={onCustomizeClick}
          />
        ))}
      </div>

      {/* Desktop Horizontal scrolling track */}
      <div
        ref={scrollRef}
        className="hidden md:flex gap-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth"
      >
        {popularItems.map((item) => (
          <div
            key={item.id}
            className={`shrink-0 ${config.theme.cardStyle === "list" ? "w-full md:w-1/3" : "w-[240px]"}`}
          >
            <MenuCard item={item} onCustomizeClick={onCustomizeClick} />
          </div>
        ))}
      </div>
    </div>
  );
};
