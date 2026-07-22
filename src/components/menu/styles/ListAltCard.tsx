import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { formatPrice } from "../../../lib/price";
import { ImagePlaceholder } from "../../ui/ImagePlaceholder";
import { motion } from "motion/react";
import { CardStyleComponentProps } from "./MinimalCard";

const ListAltCard: React.FC<CardStyleComponentProps> = ({
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
      className={`bg-background-card rounded-2xl border border-gray-100 p-4 relative cursor-pointer flex items-center justify-between gap-4 select-none hover:scale-[1.02] transition-transform duration-300 ${!item.isAvailable ? "opacity-65 grayscale-40" : ""
        }`}
    >
      {/* Left side: Text Details */}
      <div className="flex-1 min-w-0 flex flex-col justify-center py-1">
        {item.badge?.text && (
          <div className="mb-2 flex flex-wrap">
            <span
              className={`inline-block rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${item.badge.color || "bg-brand-primary text-text-inverse"
                }`}
            >
              {item.badge.text}
            </span>
          </div>
        )}
        <h3 className="text-sm md:text-base font-extrabold text-text-primary leading-tight mb-1">
          {item.name}
        </h3>

        {item.description && (
          <p className="text-xs text-text-secondary line-clamp-2 mt-1 leading-relaxed">
            {item.description}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-4">
          {item.pricePrefix && (
            <span className="text-[10px] text-text-secondary font-bold uppercase tracking-wider whitespace-nowrap">
              {item.pricePrefix}
            </span>
          )}
          {item.basePrice > item.discountedPrice && (
            <span className="text-sm text-text-secondary line-through font-semibold whitespace-nowrap">
              {formatPrice(item.basePrice)}
            </span>
          )}
          <span className="text-sm md:text-base font-black text-brand-primary whitespace-nowrap">
            {formatPrice(item.discountedPrice)}
          </span>
        </div>
      </div>

      {/* Right side: Image and Action */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-xl overflow-visible">
        {/* Image Container */}
        <div className="w-full h-full rounded-xl overflow-hidden bg-gray-50">
          {item.imageUrl ? (
            <>
              <div
                className={`absolute inset-0 bg-gray-100 transition-opacity duration-300 z-0 ${imgLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
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
              <span className="bg-black/70 text-text-inverse font-bold text-[10px] tracking-wider px-2 py-1 rounded uppercase">
                Sold Out
              </span>
            </div>
          )}
        </div>

        {/* Action Button Overlapping bottom right */}
        {item.isAvailable && (
          <div className="absolute -bottom-2 -right-2 z-10">
            {hasCustomization ? (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (onCustomizeClick) onCustomizeClick(item);
                }}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-primary text-text-inverse flex items-center justify-center shadow-lg hover:bg-brand-primary-hover active:scale-95 transition-all cursor-pointer border-2 border-background-card"
                aria-label="Customize"
              >
                <Plus size={20} strokeWidth={2.5} />
              </button>
            ) : simpleCartItem ? (
              <div className="flex items-center justify-between h-9 sm:h-10 w-24 bg-brand-primary rounded-full text-text-inverse shadow-lg px-2 border-2 border-background-card gap-2">
                <button
                  onClick={handleDecrement}
                  className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors cursor-pointer shrink-0"
                  aria-label="Decrease"
                >
                  <Minus size={14} strokeWidth={3} />
                </button>
                <span className="font-extrabold text-[12px] select-none text-center flex-1">
                  {simpleCartItem.quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors cursor-pointer shrink-0"
                  aria-label="Increase"
                >
                  <Plus size={14} strokeWidth={3} />
                </button>
              </div>
            ) : (
              <button
                onClick={handleAddToCart}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-primary text-text-inverse flex items-center justify-center shadow-lg hover:bg-brand-primary-hover active:scale-95 transition-all cursor-pointer border-2 border-background-card"
                aria-label="Add to cart"
              >
                <Plus size={20} strokeWidth={2.5} />
              </button>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ListAltCard;
