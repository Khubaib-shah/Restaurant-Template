import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { MenuItem } from "../../../types/menu";
import { formatPrice } from "../../../lib/price";
import { ItemBadge } from "../ItemBadge";
import { ImagePlaceholder } from "../../ui/ImagePlaceholder";
import { motion } from "motion/react";

export interface CardStyleComponentProps {
  item: MenuItem;
  onCustomizeClick?: (item: MenuItem) => void;
  totalQuantity: number;
  hasCustomization: boolean;
  simpleCartItem: any;
  handleAddToCart: (e: React.MouseEvent) => void;
  handleIncrement: (e: React.MouseEvent) => void;
  handleDecrement: (e: React.MouseEvent) => void;
  handleCardClick: () => void;
}

const MinimalCard: React.FC<CardStyleComponentProps> = ({
  item,
  onCustomizeClick,
  hasCustomization,
  simpleCartItem,
  handleAddToCart,
  handleIncrement,
  handleDecrement,
  handleCardClick,
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4 }}
      id={`menu-card-${item.id}`}
      onClick={handleCardClick}
      className={`bg-transparent overflow-hidden relative cursor-pointer flex flex-col select-none transition-opacity duration-150 ${
        !item.isAvailable ? "opacity-65 grayscale-40" : ""
      }`}
    >
      {/* Image Block */}
      <div className="relative w-full aspect-square bg-brand-primary/5 overflow-hidden rounded-2xl border border-brand-primary/10">
        {item.badge && <ItemBadge badge={item.badge} />}

        {item.imageUrl ? (
          <>
            <div
              className={`absolute inset-0 bg-gray-100 transition-opacity duration-300 z-0 ${
                imgLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            />
            <img
              src={item.imageUrl}
              alt={item.name}
              className={`w-full h-full object-cover select-none transition-all duration-500 hover:scale-105 ${
                imgLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              referrerPolicy="no-referrer"
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
              onError={(e) => {
                setImgLoaded(true);
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  const placeholderDiv = document.createElement("div");
                  placeholderDiv.className = "w-full h-full";
                  parent.appendChild(placeholderDiv);
                }
              }}
            />
          </>
        ) : (
          <ImagePlaceholder />
        )}

        {/* Unavailable overlay */}
        {!item.isAvailable && (
          <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
            <span className="bg-black/70 text-text-inverse font-extrabold text-[9px] tracking-widest px-2.5 py-1 rounded-md uppercase">
              Unavailable
            </span>
          </div>
        )}

        {/* Add to Cart Overlay Circle / Stepper */}
        {item.isAvailable && (
          <div className="absolute bottom-2.5 right-2.5 z-10">
            {hasCustomization ? (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (onCustomizeClick) onCustomizeClick(item);
                }}
                className="w-9 h-9 rounded-full bg-brand-primary text-text-inverse flex items-center justify-center shadow-md hover:bg-brand-primary-hover active:scale-95 transition-all cursor-pointer"
                aria-label="Customize"
              >
                <Plus size={18} strokeWidth={2.5} />
              </button>
            ) : simpleCartItem ? (
              <div className="flex items-center justify-between h-8 bg-brand-primary rounded-full text-text-inverse shadow-md px-1.5 gap-1.5">
                <button
                  onClick={handleDecrement}
                  className="w-5 h-5 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors cursor-pointer"
                  aria-label="Decrease"
                >
                  <Minus size={11} strokeWidth={3} />
                </button>
                <span className="font-extrabold text-[11px] min-w-2 text-center select-none">
                  {simpleCartItem.quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  className="w-5 h-5 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors cursor-pointer"
                  aria-label="Increase"
                >
                  <Plus size={11} strokeWidth={3} />
                </button>
              </div>
            ) : (
              <button
                onClick={handleAddToCart}
                className="w-9 h-9 rounded-full bg-brand-primary text-text-inverse flex items-center justify-center shadow-md hover:bg-brand-primary-hover active:scale-95 transition-all cursor-pointer"
                aria-label="Add to cart"
              >
                <Plus size={18} strokeWidth={2.5} />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Text Details Area below image */}
      <div className="pt-2 pb-1 px-1">
        <h3 className="text-xs md:text-sm font-bold text-text-primary leading-snug line-clamp-2">
          {item.name}
        </h3>

        {item.servingNote && (
          <p className="text-[10px] font-bold text-brand-primary uppercase tracking-wider mt-0.5 leading-none">
            {item.servingNote}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 mt-1">
          {item.pricePrefix && (
            <span className="text-[9px] md:text-[10px] text-text-secondary font-bold uppercase tracking-wider whitespace-nowrap">
              {item.pricePrefix}
            </span>
          )}
          <span className="text-xs md:text-sm font-black text-brand-primary whitespace-nowrap">
            {formatPrice(item.discountedPrice)}
          </span>
          {item.basePrice > item.discountedPrice && (
            <span className="text-[10px] md:text-[11px] text-text-secondary line-through font-semibold whitespace-nowrap">
              {formatPrice(item.basePrice)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MinimalCard;
