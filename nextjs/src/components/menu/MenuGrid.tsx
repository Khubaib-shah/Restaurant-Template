"use client";

import React, { useRef, useEffect, useState } from "react";
import { MenuItem } from "../../types/menu";
import { MenuCard } from "./MenuCard";
import { useRestaurant } from "@/context/RestaurantContext";
import { useWindowVirtualizer } from "@tanstack/react-virtual";

interface MenuGridProps {
  items: MenuItem[];
  onCustomizeClick?: (item: MenuItem) => void;
  cardStyle?: "default" | "minimal" | "list" | "list-alt";
}

export const MenuGrid: React.FC<MenuGridProps> = ({
  items,
  onCustomizeClick,
  cardStyle,
}) => {
  const { config } = useRestaurant();
  const resolvedStyle = cardStyle || config.theme.cardStyle || "default";

  // Responsive column calculation
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (resolvedStyle === "list") {
        setColumns(width >= 768 ? 2 : 1);
      } else if (resolvedStyle === "list-alt") {
        setColumns(width >= 1024 ? 3 : width >= 768 ? 2 : 1);
      } else {
        setColumns(width >= 1024 ? 4 : width >= 768 ? 3 : 2);
      }
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, [resolvedStyle]);

  const rowCount = Math.ceil(items.length / columns);
  
  // Only virtualize if items > 50
  const isVirtual = items.length > 50;

  const virtualizer = useWindowVirtualizer({
    count: rowCount,
    estimateSize: () => (resolvedStyle === "list" || resolvedStyle === "list-alt" ? 180 : 300),
    overscan: 2,
  });

  if (!isVirtual) {
    return (
      <div
        className={
          resolvedStyle === "list"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4"
            : resolvedStyle === "list-alt"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
              : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4"
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
  }

  // Virtualized Grid
  return (
    <div
      style={{
        height: `${virtualizer.getTotalSize()}px`,
        width: "100%",
        position: "relative",
      }}
    >
      {virtualizer.getVirtualItems().map((virtualRow) => {
        const startIndex = virtualRow.index * columns;
        const rowItems = items.slice(startIndex, startIndex + columns);

        return (
          <div
            key={virtualRow.index}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`,
              paddingBottom: "16px", // gap equivalent
            }}
          >
            <div
              className={
                resolvedStyle === "list"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4 h-full"
                  : resolvedStyle === "list-alt"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 h-full"
                    : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 h-full"
              }
            >
              {rowItems.map((item) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  onCustomizeClick={onCustomizeClick}
                  cardStyle={cardStyle}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
