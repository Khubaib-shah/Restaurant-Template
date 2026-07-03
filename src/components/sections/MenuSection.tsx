import React from 'react';
import { Category, MenuItem } from '../../types/menu';
import { MenuGrid } from '../menu/MenuGrid';

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
  if (items.length === 0) return null;

  const isStarters = category.id === 'cat-starters' || category.slug === 'starters';

  return (
    <section
      id={category.slug}
      className="w-full max-w-[1280px] mx-auto px-2 sm:px-4 md:px-8 py-3 md:py-8 scroll-mt-[80px]"
    >
      {/* Category Header Title Info */}
      <div className="mb-3 md:mb-6">
        {isStarters ? (
          <div className="flex flex-col items-center text-center space-y-2 py-2 md:py-4 select-none">
            <img
              src="https://res.cloudinary.com/dvyhnxnpq/image/upload/v1782763294/1713771799-_0009_Starters_tsh1ns.webp"
              alt="Starters Category"
              className="max-h-[64px] md:max-h-[72px] object-contain mb-2"
              referrerPolicy="no-referrer"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center text-center space-y-2 py-2 md:py-4 select-none">
            <h2 className="text-2xl md:text-3xl font-black text-text-primary uppercase tracking-wider">
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
    </section>
  );
};
