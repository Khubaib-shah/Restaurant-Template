import React, { useState } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { formatPrice } from "../../../lib/price";
import { ItemBadge } from "../ItemBadge";
import { ImagePlaceholder } from "../../ui/ImagePlaceholder";
import { motion } from "motion/react";
import { CardStyleComponentProps } from "./MinimalCard";

const DefaultCard: React.FC<CardStyleComponentProps> = ({
  item,
  onCustomizeClick,
  totalQuantity,
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
      whileHover={
        item.isAvailable
          ? { boxShadow: "0 4px 12px rgba(0,0,0,0.12)" }
          : undefined
      }
      onClick={handleCardClick}
      className={`bg-background-card rounded-xl border border-brand-primary overflow-hidden relative cursor-pointer flex flex-col justify-between shadow-card select-none transition-opacity duration-150 ${
        !item.isAvailable ? "opacity-65 grayscale-40" : ""
      }`}
    >
      {/* Image Area */}
      <div className="relative w-full aspect-square bg-brand-primary/5 overflow-hidden">
        {item.badge && <ItemBadge badge={item.badge} />}

        {item.imageUrl ? (
          <>
            {/* Non-pulsing placeholder while loading */}
            <div
              className={`absolute inset-0 bg-background-card/10 transition-opacity duration-300 z-0 ${
                imgLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            />
            <Image
              src={item.imageUrl}
              alt={item.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={`object-cover select-none transition-all duration-500 hover:scale-105 ${
                imgLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              referrerPolicy="no-referrer"
              onLoad={() => setImgLoaded(true)}
            />
          </>
        ) : (
          <ImagePlaceholder />
        )}

        {/* Unavailable overlay */}
        {!item.isAvailable && (
          <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
            <span className="bg-black/70 text-text-inverse font-extrabold text-[10px] tracking-widest px-3 py-1.5 rounded-md uppercase">
              Unavailable
            </span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-3 flex-1 flex flex-col justify-between">
        <div className="space-y-1">
          {/* Name */}
          <h3 className="text-xs md:text-[14px] font-semibold md:font-bold text-text-primary leading-snug line-clamp-2">
            {item.name}
          </h3>

          {/* Servings note */}
          {item.metaNote && (
            <p className="text-[11px] font-semibold text-brand-primary uppercase tracking-wider leading-none">
              {item.metaNote}
            </p>
          )}

          {/* Description */}
          {item.description && (
            <p className="hidden md:line-clamp-2 text-xs text-text-secondary leading-normal mt-1">
              {item.description}
            </p>
          )}
        </div>

        {/* Price & Action Row */}
        <div className="mt-3.5 space-y-2">
          {/* Pricing */}
          <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
            {item.pricePrefix && (
              <span className="text-[9px] sm:text-[10px] text-text-secondary font-bold uppercase tracking-wider whitespace-nowrap">
                {item.pricePrefix}
              </span>
            )}

            <span className="text-xs sm:text-sm md:text-[15px] font-extrabold text-text-primary whitespace-nowrap">
              {formatPrice(item.discountedPrice)}
            </span>

            {item.basePrice > item.discountedPrice && (
              <span className="text-[10px] sm:text-[11px] text-text-secondary line-through font-semibold whitespace-nowrap">
                {formatPrice(item.basePrice)}
              </span>
            )}
          </div>

          {/* Action Button / Stepper */}
          {!item.isAvailable ? (
            <button
              disabled
              className="w-full h-9 bg-gray-100 text-text-secondary text-[11px] font-bold uppercase tracking-wider rounded-lg cursor-not-allowed"
            >
              Unavailable
            </button>
          ) : hasCustomization ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onCustomizeClick) onCustomizeClick(item);
              }}
              className="w-full h-9 bg-brand-primary hover:bg-brand-primary-hover text-text-inverse text-[11px] font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-1 transition-colors cursor-pointer"
            >
              {totalQuantity > 0 ? `In Cart (${totalQuantity})` : "Add to Cart"}
            </button>
          ) : simpleCartItem ? (
            // Stepper style button for non-variant item already in cart
            <div className="flex items-center justify-between w-full h-9 bg-brand-primary rounded-lg overflow-hidden text-text-inverse">
              <button
                onClick={handleDecrement}
                className="w-10 h-full flex items-center justify-center hover:bg-brand-primary-hover active:bg-black/15 transition-colors cursor-pointer"
                aria-label="Decrease quantity"
              >
                <Minus size={14} strokeWidth={2.5} />
              </button>
              <span className="font-extrabold text-sm select-none">
                {simpleCartItem.quantity}
              </span>
              <button
                onClick={handleIncrement}
                className="w-10 h-full flex items-center justify-center hover:bg-brand-primary-hover active:bg-black/15 transition-colors cursor-pointer"
                aria-label="Increase quantity"
              >
                <Plus size={14} strokeWidth={2.5} />
              </button>
            </div>
          ) : (
            // Clean Add to Cart button
            <button
              onClick={handleAddToCart}
              className="w-full h-9 bg-brand-primary hover:bg-brand-primary-hover text-text-inverse text-[11px] font-medium md:font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-1 transition-colors active:scale-98 cursor-pointer"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DefaultCard;
