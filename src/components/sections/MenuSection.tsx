import React from 'react';
import { Category, MenuItem } from '../../types/menu';
import { MenuGrid } from '../menu/MenuGrid';
import { useRestaurant } from '@/src/context/RestaurantContext';


interface MenuSectionProps {
  category: Category;
  items: MenuItem[];

  onCustomizeClick?: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  category,
  items,
  onCustomizeClick
}) => {
  const { config } = useRestaurant();
  if (items.length === 0) return null;


  return (
    <section
      id={category.slug}
      className="w-full max-w-[1280px] mx-auto px-2 sm:px-4 md:px-8 py-3 md:py-8 scroll-mt-[80px]"
    >
      {/* Category Header Title Info */}
      <div className="mb-3 md:mb-6">
        {config.theme.assets.categoryBackground && config.theme.assets.categoryBackground !== null ? (
          <div className="relative flex flex-col items-center text-center space-y-2 py-2 md:py-4 select-none">
            <img
              src={config.theme.assets.categoryBackground}
              alt="Starters Category"
              className="object-contain mb-2"
              referrerPolicy="no-referrer"
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">
                {category.name}
              </h2>

              {category.description && (
                <p className="text-xs sm:text-sm md:text-lg  text-gray-700 font-semibold md:font-bold leading-relaxed max-w-xl mx-auto">
                  {category.description}
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center space-y-2 py-2 md:py-4 select-none">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-wider">
              {category.name}
            </h2>
            {category.description && (
              <p className="text-xs md:text-sm text-gray-700 font-semibold md:font-bold leading-relaxed max-w-xl mx-auto">
                {category.description}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Grid of Food cards */}
      <MenuGrid items={items} onCustomizeClick={onCustomizeClick} cardStyle={category.cardStyle} />
    </section >
  );
};
