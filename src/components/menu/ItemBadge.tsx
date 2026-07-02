import React from 'react';
import { BadgeType } from '../../types/menu';

interface ItemBadgeProps {
  type?: BadgeType;
  className?: string;
}

export const ItemBadge: React.FC<ItemBadgeProps> = ({ type, className = '' }) => {
  if (!type) return null;

  const config = {
    NEW_ARRIVAL: { label: 'NEW ARRIVAL', style: 'bg-green-600 text-white' },
    BEST_SELLER: { label: 'BEST SELLER', style: 'bg-yellow-600 text-white' },
    TRENDING: { label: 'TRENDING', style: 'bg-orange-600 text-white' },
    POPULAR: { label: 'POPULAR', style: 'bg-yellow-600 text-white' },
    HOT_SELLING: { label: 'HOT SELLING', style: 'bg-red-600 text-white' },
    MOST_FAVOURITE: { label: 'MOST FAVOURITE', style: 'bg-amber-600 text-white' },
    SPECIAL_FLAVORS: { label: 'SPECIAL FLAVORS', style: 'bg-cyan-600 text-white' },
    CHEFS_SPECIAL: { label: "CHEF'S SPECIAL", style: 'bg-teal-700 text-white' },
    CHEFS_RECOMMENDATION: { label: "CHEF'S REC", style: 'bg-green-600 text-white' }
  };

  const badge = config[type];
  if (!badge) return null;

  return (
    <div
      className={`absolute top-2 left-2 z-10 rounded px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-widest shadow-sm select-none whitespace-nowrap ${badge.style} ${className}`}
    >
      {badge.label}
    </div>
  );
};
