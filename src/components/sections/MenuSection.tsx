import React from "react";
import { Category, MenuItem } from "../../types/menu";
import { MenuGrid } from "../menu/MenuGrid";
import { useRestaurant } from "@/src/context/RestaurantContext";
import MenuCategory from "../menu/MenuCategory";

interface MenuSectionProps {
  category: Category;
  items: MenuItem[];
  onCustomizeClick?: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  category,
  items,
  onCustomizeClick,
}) => {
  if (items.length === 0) return null;

  return (
    <section
      id={category.slug}
      className=" container mx-auto py-3 md:py-8 scroll-mt-[80px]"
    >
      {/* Category Header Title Info */}
      <MenuCategory category={category} />
      {/* Grid of Food cards */}
      <MenuGrid
        items={items}
        onCustomizeClick={onCustomizeClick}
        cardStyle={category.cardStyle}
      />
    </section>
  );
};
