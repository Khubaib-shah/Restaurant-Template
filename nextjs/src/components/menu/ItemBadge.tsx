import React from "react";
import { BadgeType } from "../../types/menu";

interface ItemBadgeProps {
  badge?: BadgeType;
}

export const ItemBadge: React.FC<ItemBadgeProps> = ({ badge }) => {
  console.log(badge);
  if (!badge) return null;
  return (
    <div
      className="absolute top-2 left-2 z-10 rounded px-2 py-0.5 text-[9px] font-medium uppercase tracking-widest shadow-sm select-none whitespace-nowrap text-text-inverse"
      style={{
        backgroundColor: badge.color || "var(--primary)",
      }}
    >
      {badge.text}
    </div>
  );
};
