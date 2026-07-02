import React from 'react';
import { MenuItem } from '../../types/menu';
import { MenuCard } from './MenuCard';

interface MenuGridProps {
  items: MenuItem[];
  onCustomizeClick?: (item: MenuItem) => void;
  cardStyle?: 'default' | 'minimal' | 'list';
}

export const MenuGrid: React.FC<MenuGridProps> = ({ items, onCustomizeClick, cardStyle }) => {
  return (
    <div
      className={
        cardStyle === 'list'
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4'
          : 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4'
      }
    >
      {items.map((item) => (
        <MenuCard
          key={item.id}
          item={item}
          onCustomizeClick={onCustomizeClick}
          cardStyle={cardStyle}
        />
      ))}
    </div>
  );
};
