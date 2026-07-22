import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { formatPrice } from "../../../lib/price";
import { ImagePlaceholder } from "../../ui/ImagePlaceholder";
import { motion } from "motion/react";
import { CardStyleComponentProps } from "./MinimalCard";

const ListCard: React.FC<CardStyleComponentProps> = ({
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
      className={`bg-background-card rounded-xl border border-brand-primary/30 p-3 relative cursor-pointer flex items-center gap-3 select-none transition-shadow hover:shadow-md duration-150 ${
        !item.isAvailable ? "opacity-65 grayscale-40" : ""
      }`}
    >
      {/* Left: Compact Image */}
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-lg overflow-hidden bg-brand-primary/5 border border-brand-primary/10">
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
              className="w-full h-full object-cover select-none"
              referrerPolicy="no-referrer"
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
            />
          </>
        ) : (
          <ImagePlaceholder />
        )}

        {!item.isAvailable && (
          <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
            <span className="bg-black/70 text-text-inverse font-extrabold text-[8px] tracking-wider px-1 py-0.5 rounded uppercase">
              Empty
            </span>
          </div>
        )}
      </div>

      {/* Center: Details */}
      <div className="flex-1 min-w-0 pr-1 flex flex-col justify-between h-full">
        <div>
          {item.badge?.text && (
            <div className="mb-1.5 flex flex-wrap">
              <span
                className={`inline-block rounded px-2 py-0.5 text-[8px] font-black uppercase tracking-widest whitespace-nowrap shadow-sm ${
                  item.badge.color || "bg-brand-primary text-text-inverse"
                }`}
              >
                {item.badge.text}
              </span>
            </div>
          )}
          <h3 className="text-xs sm:text-sm font-bold text-text-primary leading-tight line-clamp-1">
            {item.name}
          </h3>

          {item.description && (
            <p className="text-[11px] text-text-secondary line-clamp-2 mt-0.5 leading-snug">
              {item.description}
            </p>
          )}

          {item.servingNote && (
            <p className="text-[9px] font-bold text-brand-primary uppercase tracking-wider mt-0.5">
              {item.servingNote}
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 mt-1.5">
          {item.pricePrefix && (
            <span className="text-[9px] sm:text-[10px] text-text-secondary font-bold uppercase tracking-wider whitespace-nowrap">
              {item.pricePrefix}
            </span>
          )}
          <span className="text-xs sm:text-sm font-black text-brand-primary whitespace-nowrap">
            {formatPrice(item.discountedPrice)}
          </span>
          {item.basePrice > item.discountedPrice && (
            <span className="text-[9px] sm:text-[10px] text-text-secondary line-through font-semibold whitespace-nowrap">
              {formatPrice(item.basePrice)}
            </span>
          )}
        </div>
      </div>

      {/* Right: Actions */}
      {item.isAvailable && (
        <div className="shrink-0 flex items-center justify-center">
          {hasCustomization ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onCustomizeClick) onCustomizeClick(item);
              }}
              className="w-9 h-9 rounded-full bg-brand-primary  text-text-inverse flex items-center justify-center shadow-md hover:bg-brand-primary-hover active:scale-95 transition-all cursor-pointer"
              aria-label="Customize"
            >
              <Plus size={18} strokeWidth={2.5} />
            </button>
          ) : simpleCartItem ? (
            <div className="flex flex-col items-center justify-between h-20 w-8 bg-brand-primary rounded-full text-text-inverse shadow-md py-1.5">
              <button
                onClick={handleIncrement}
                className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors cursor-pointer"
                aria-label="Increase"
              >
                <Plus size={12} strokeWidth={3} />
              </button>
              <span className="font-extrabold text-[11px] select-none">
                {simpleCartItem.quantity}
              </span>
              <button
                onClick={handleDecrement}
                className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors cursor-pointer"
                aria-label="Decrease"
              >
                <Minus size={12} strokeWidth={3} />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="w-9 h-9 rounded-full bg-brand-primary  text-text-inverse flex items-center justify-center shadow-md hover:bg-brand-primary-hover active:scale-95 transition-all cursor-pointer"
              aria-label="Add to cart"
            >
              <Plus size={18} strokeWidth={2.5} />
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default ListCard;
