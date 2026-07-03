import React from 'react';
import { Minus, Plus, ShoppingCart, ArrowRight } from 'lucide-react';
import { MenuItem } from '../../types/menu';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/price';
import { ItemBadge } from './ItemBadge';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';
import { motion } from 'motion/react';
import { useRestaurant } from '../../context/RestaurantContext';

interface MenuCardProps {
  item: MenuItem;
  onCustomizeClick?: (item: MenuItem) => void;
  cardStyle?: 'default' | 'minimal' | 'list';
}

export const MenuCard: React.FC<MenuCardProps> = ({ item, onCustomizeClick, cardStyle: propCardStyle }) => {
  const { state: cartState, addItem, updateQuantity } = useCart();
  const { config } = useRestaurant();
  const cardStyle = propCardStyle || config.theme.cardStyle || 'default';

  // Check if item is in cart
  const cartItemsOfThisMenu = cartState.items.filter((i) => i.menuItemId === item.id);
  const totalQuantity = cartItemsOfThisMenu.reduce((sum, i) => sum + i.quantity, 0);

  // If non-variant item, we can grab the unique cart item
  const nonVariantCartItem = !item.hasVariants && cartItemsOfThisMenu.length > 0
    ? cartItemsOfThisMenu[0]
    : null;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!item.isAvailable) return;

    if (item.hasVariants) {
      if (onCustomizeClick) {
        onCustomizeClick(item);
      }
    } else {
      addItem({
        id: item.id,
        menuItemId: item.id,
        name: item.name,
        imageUrl: item.imageUrl,
        quantity: 1,
        unitPrice: item.discountedPrice,
        originalUnitPrice: item.basePrice,
      });
    }
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (nonVariantCartItem) {
      updateQuantity(nonVariantCartItem.id, nonVariantCartItem.quantity + 1);
    }
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (nonVariantCartItem) {
      updateQuantity(nonVariantCartItem.id, nonVariantCartItem.quantity - 1);
    }
  };

  const [imgLoaded, setImgLoaded] = React.useState(false);

  // Card click should open the details / customization modal for every card
  const handleCardClick = () => {
    if (!item.isAvailable) return;
    if (onCustomizeClick) {
      onCustomizeClick(item);
    }
  };

  // 1. MINIMAL STYLE: No background, image with bottom title/price, plus circle overlay
  if (cardStyle === 'minimal') {
    return (
      <motion.div
        id={`menu-card-${item.id}`}
        onClick={handleCardClick}
        className={`bg-transparent overflow-hidden relative cursor-pointer flex flex-col select-none transition-opacity duration-150 ${!item.isAvailable ? 'opacity-65 grayscale-[40%]' : ''
          }`}
      >
        {/* Image Block */}
        <div className="relative w-full aspect-square bg-brand-primary/5 overflow-hidden rounded-2xl border border-brand-primary/10">
          {item.badge && <ItemBadge type={item.badge} />}

          {item.imageUrl ? (
            <>
              <div
                className={`absolute inset-0 bg-gray-100 transition-opacity duration-300 z-0 ${imgLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
              />
              <img
                src={item.imageUrl}
                alt={item.name}
                className={`w-full h-full object-cover select-none transition-all duration-500 hover:scale-105 ${imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                referrerPolicy="no-referrer"
                loading="lazy"
                onLoad={() => setImgLoaded(true)}
                onError={(e) => {
                  setImgLoaded(true);
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const placeholderDiv = document.createElement('div');
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
              {item.hasVariants ? (
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
              ) : nonVariantCartItem ? (
                <div className="flex items-center justify-between h-8 bg-brand-primary rounded-full text-text-inverse shadow-md px-1.5 gap-1.5">
                  <button
                    onClick={handleDecrement}
                    className="w-5 h-5 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors cursor-pointer"
                    aria-label="Decrease"
                  >
                    <Minus size={11} strokeWidth={3} />
                  </button>
                  <span className="font-extrabold text-[11px] min-w-[8px] text-center select-none">
                    {nonVariantCartItem.quantity}
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
  }

  // 2. LIST STYLE: Horizontal layout with image on left, title/desc in center, plus/stepper on right
  if (cardStyle === 'list') {
    return (
      <motion.div
        id={`menu-card-${item.id}`}
        onClick={handleCardClick}
        className={`bg-background-card rounded-xl border border-brand-primary/30 p-3 relative cursor-pointer flex items-center gap-3 select-none transition-shadow hover:shadow-md duration-150 ${!item.isAvailable ? 'opacity-65 grayscale-[40%]' : ''
          }`}
      >
        {/* Left: Compact Image */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-lg overflow-hidden bg-brand-primary/5 border border-brand-primary/10">
          {item.imageUrl ? (
            <>
              <div
                className={`absolute inset-0 bg-gray-100 transition-opacity duration-300 z-0 ${imgLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
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
            {item.badge && (
              <div className="mb-1.5 flex flex-wrap">
                <span className={`inline-block rounded px-2 py-0.5 text-[8px] font-black uppercase tracking-widest whitespace-nowrap shadow-sm ${item.badge === 'BEST_SELLER' ? 'bg-amber-100 text-amber-800 border border-amber-200/60' :
                  item.badge === 'HOT_SELLING' ? 'bg-red-105 text-red-800 border border-red-200/60' :
                    item.badge === 'NEW_ARRIVAL' ? 'bg-green-100 text-green-800 border border-green-200/60' :
                      item.badge === 'TRENDING' ? 'bg-orange-100 text-orange-800 border border-orange-200/60' :
                        item.badge === 'POPULAR' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200/60' :
                          'bg-brand-primary/10 text-brand-primary border border-brand-primary/20'
                  }`}>
                  {item.badge.replace('_', ' ')}
                </span>
              </div>
            )}
            <h3 className="text-xs sm:text-sm font-bold text-text-primary leading-tight line-clamp-1">
              {item.name}
            </h3>

            {item.description && (
              <p className="text-[11px] text-text-secondary line-clamp-2-fixed mt-0.5 leading-snug">
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
            {item.hasVariants ? (
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
            ) : nonVariantCartItem ? (
              <div className="flex flex-col items-center justify-between h-20 w-8 bg-brand-primary rounded-full text-text-inverse shadow-md py-1.5">
                <button
                  onClick={handleIncrement}
                  className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors cursor-pointer"
                  aria-label="Increase"
                >
                  <Plus size={12} strokeWidth={3} />
                </button>
                <span className="font-extrabold text-[11px] select-none">
                  {nonVariantCartItem.quantity}
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
  }

  // 3. DEFAULT STYLE: Rounded box, full image inside, bottom action row buttons
  return (
    <motion.div
      id={`menu-card-${item.id}`}
      whileHover={item.isAvailable ? { boxShadow: '0 4px 12px rgba(0,0,0,0.12)' } : undefined}
      onClick={handleCardClick}
      className={`bg-background-card rounded-xl border border-brand-primary overflow-hidden relative cursor-pointer flex flex-col justify-between shadow-card select-none transition-opacity duration-150 ${!item.isAvailable ? 'opacity-65 grayscale-[40%]' : ''
        }`}
    >
      {/* Image Area */}
      <div className="relative w-full aspect-square bg-brand-primary/5 overflow-hidden">
        {item.badge && <ItemBadge type={item.badge} />}

        {item.imageUrl ? (
          <>
            {/* Non-pulsing placeholder while loading */}
            <div
              className={`absolute inset-0 bg-gray-100 transition-opacity duration-300 z-0 ${imgLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
            />
            <img
              src={item.imageUrl}
              alt={item.name}
              className={`w-full h-full object-cover select-none transition-all duration-500 hover:scale-105 ${imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              referrerPolicy="no-referrer"
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
              onError={(e) => {
                setImgLoaded(true);
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const placeholderDiv = document.createElement('div');
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
          <h3 className="text-xs md:text-[14px] font-bold text-text-primary leading-snug line-clamp-2">
            {item.name}
          </h3>

          {/* Servings note */}
          {item.servingNote && (
            <p className="text-[11px] font-semibold text-brand-primary uppercase tracking-wider leading-none">
              {item.servingNote}
            </p>
          )}

          {/* Description */}
          {item.description && (
            <p className="hidden md:block text-xs text-text-secondary leading-normal line-clamp-2-fixed mt-1">
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
          ) : item.hasVariants ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onCustomizeClick) onCustomizeClick(item);
              }}
              className="w-full h-9 bg-brand-primary hover:bg-brand-primary-hover text-text-inverse text-[11px] font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-1 transition-colors cursor-pointer"
            >
              {totalQuantity > 0 ? `In Cart (${totalQuantity})` : 'Add to Cart'}
            </button>
          ) : nonVariantCartItem ? (
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
                {nonVariantCartItem.quantity}
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
