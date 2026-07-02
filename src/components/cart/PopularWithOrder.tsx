import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Flame } from 'lucide-react';
import { menuItems } from '../../data/mock-menu';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/price';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';
import { motion } from 'motion/react';

export const PopularWithOrder: React.FC = () => {
  const { addItem, state: cartState } = useCart();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Focus on classic accompaniments: Naans, Parathas, Chapati
  const upsellIds = ['naan-cheese', 'paratha-lachha', 'paratha-puri', 'chapati', 'naan-garlic'];
  const upsellItems = menuItems.filter(
    (item) => upsellIds.includes(item.id) && !cartState.items.some((i) => i.menuItemId === item.id)
  );

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      checkScrollButtons();
      scrollEl.addEventListener('scroll', checkScrollButtons);
      
      const resizeObserver = new ResizeObserver(() => {
        checkScrollButtons();
      });
      resizeObserver.observe(scrollEl);

      return () => {
        if (scrollEl) {
          scrollEl.removeEventListener('scroll', checkScrollButtons);
        }
        resizeObserver.disconnect();
      };
    }
  }, [upsellItems.length]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 180 : scrollLeft + 180;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleAddUpsell = (itemId: string) => {
    const item = menuItems.find((i) => i.id === itemId);
    if (!item) return;

    addItem({
      id: item.id,
      menuItemId: item.id,
      name: item.name,
      imageUrl: item.imageUrl,
      quantity: 1,
      unitPrice: item.discountedPrice,
      originalUnitPrice: item.basePrice,
    });
  };

  if (upsellItems.length === 0) return null;

  return (
    <div id="upsell-container" className="py-4 border-t border-b border-gray-100 bg-gray-50/20 select-none">
      <div className="flex items-center justify-between px-4 mb-3">
        <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1.5 uppercase tracking-wide">
          <span className="text-base">🍳</span>
          Popular with your order
        </h4>
        
        {/* Scroll Controls with Dynamic Size and Smooth Animations */}
        <div className="flex items-center gap-2 h-11">
          <motion.button
            onClick={() => canScrollLeft && scroll('left')}
            animate={{
              width: canScrollLeft ? 40 : 30,
              height: canScrollLeft ? 40 : 30,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className={`rounded-full flex items-center justify-center transition-colors duration-300 select-none ${
              canScrollLeft
                ? 'bg-brand-primary text-white hover:bg-[#032110] active:scale-95 cursor-pointer shadow-md shadow-brand-primary/10'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-60'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={canScrollLeft ? 18 : 14} className="transition-all duration-300" />
          </motion.button>
          
          <motion.button
            onClick={() => canScrollRight && scroll('right')}
            animate={{
              width: canScrollRight ? 40 : 30,
              height: canScrollRight ? 40 : 30,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className={`rounded-full flex items-center justify-center transition-colors duration-300 select-none ${
              canScrollRight
                ? 'bg-brand-primary text-white hover:bg-[#032110] active:scale-95 cursor-pointer shadow-md shadow-brand-primary/10'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-60'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight size={canScrollRight ? 18 : 14} className="transition-all duration-300" />
          </motion.button>
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto px-4 no-scrollbar scroll-smooth"
      >
        {upsellItems.map((item) => {
          const isInCart = cartState.items.some((i) => i.menuItemId === item.id);
          
          return (
            <div
              key={item.id}
              id={`upsell-card-${item.id}`}
              className="w-[124px] shrink-0 bg-white border border-gray-100 rounded-lg p-2 flex flex-col justify-between shadow-sm relative group"
            >
              {/* Image box */}
              <div className="relative w-full aspect-square bg-gray-50 rounded-md overflow-hidden shrink-0">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <ImagePlaceholder logoSize="sm" />
                )}

                {/* Absolut Add Button */}
                <button
                  onClick={() => handleAddUpsell(item.id)}
                  className={`absolute bottom-1 right-1 w-7 h-7 rounded-full flex items-center justify-center shadow transition-all duration-150 cursor-pointer active:scale-90 ${
                    isInCart
                      ? 'bg-green-600 text-white'
                      : 'bg-brand-primary text-white hover:bg-brand-primary-hover'
                  }`}
                  aria-label="Quick add"
                >
                  <span className="font-extrabold text-sm mt-[-1px]">{isInCart ? '✓' : '+'}</span>
                </button>
              </div>

              {/* Item Info */}
              <div className="mt-2 space-y-0.5 min-w-0">
                {/* Pricing line */}
                <div className="flex flex-wrap items-baseline gap-1">
                  <span className="text-xs font-extrabold text-gray-900">
                    {formatPrice(item.discountedPrice)}
                  </span>
                  {item.basePrice > item.discountedPrice && (
                    <span className="text-[10px] text-gray-400 line-through">
                      {formatPrice(item.basePrice)}
                    </span>
                  )}
                </div>
                
                {/* Name */}
                <h5 className="text-[11px] font-semibold text-gray-700 leading-tight truncate">
                  {item.name}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
