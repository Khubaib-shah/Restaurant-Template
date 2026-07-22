import React, { useRef } from "react";
import { MenuItem } from "../../types/menu";
import { MenuGrid } from "../menu/MenuGrid";
import { Flame } from "lucide-react";
import { useRestaurant } from "@/context/RestaurantContext";

interface PopularItemsProps {
  items: MenuItem[];
  onCustomizeClick?: (item: MenuItem) => void;
}

export const PopularItems: React.FC<PopularItemsProps> = ({
  items,
  onCustomizeClick,
}) => {
  const { config } = useRestaurant();
  const popularItems = items.filter((item) => item.isFeatured);
  const sectionCardStyle = config.theme.popularItemsCardStyle || config.theme.cardStyle || "default";

  if (popularItems.length === 0) return null;

  return (
    <div
      id="popular-items-section"
      className="container px-2 sm:px-4 md:px-6 mx-auto max-w-[1220px] select-none"
    >
      <div className="flex items-center justify-between mb-4 md:mb-6 gap-2 p-2 sm:p-4">
        <div className="space-y-1 min-w-0">
          <h2 className="text-[13px] min-[400px]:text-base sm:text-lg md:text-2xl font-extrabold text-text-primary flex items-center gap-1.5 uppercase tracking-wide whitespace-nowrap">
            <span className="text-base md:text-2xl"></span>
            {config.copy?.featuredSectionTitle || "Signature Best Sellers"}
          </h2>
          <p className="text-[9px] sm:text-xs text-gray-700 font-bold uppercase tracking-wider leading-none">
            Top recommendations from {config.name}
          </p>
        </div>

      </div>

      <div className="mt-2">
        <MenuGrid
          items={popularItems}
          onCustomizeClick={onCustomizeClick}
          cardStyle={sectionCardStyle}
        />
      </div>
    </div>
  );
};

