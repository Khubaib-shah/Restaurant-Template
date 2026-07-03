import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types/cart';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/price';
import { QuantityStepper } from './QuantityStepper';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';
import { AnimatePresence, motion } from 'motion/react';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity === 1) {
      setShowConfirm(true);
    } else {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleConfirmRemove = () => {
    removeItem(item.id);
    setShowConfirm(false);
  };

  return (
    <>
      <div
        id={`cart-item-row-${item.id}`}
        className="flex gap-4 p-4 border-b border-brand-primary/15 items-start select-none"
      >
        {/* Thumbnail */}
        <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 divide-brand-primary/5 border border-brand-primary/15">
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
        </div>

        {/* Item info */}
        <div className="flex-1 min-w-0 space-y-1">
          <h4 className="text-[13px] md:text-sm font-bold text-text-primary leading-snug truncate">
            {item.name}
          </h4>

          {/* Variant selections list */}
          {item.variantSelections && item.variantSelections.length > 0 && (
            <div className="text-[10px] text-text-muted font-medium leading-tight">
              {item.variantSelections.map((sel) => sel.optionName).join(', ')}
            </div>
          )}

          {/* Note */}
          {item.note && (
            <p className="text-[10px] text-brand-primary italic leading-tight">
              Note: "{item.note}"
            </p>
          )}

          {/* Pricing displays */}
          <div className="flex items-center gap-2 pt-0.5">
            <span className="text-[13px] font-extrabold text-text-primary">
              {formatPrice(item.unitPrice)}
            </span>
            {item.originalUnitPrice > item.unitPrice && (
              <span className="text-[10px] text-text-muted line-through font-semibold">
                {formatPrice(item.originalUnitPrice)}
              </span>
            )}
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex flex-col items-end justify-center self-stretch select-none">
          <QuantityStepper
            quantity={item.quantity}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            size="sm"
          />
        </div>
      </div>

      {/* Confirmation Modal overlay */}
      <AnimatePresence>
        {showConfirm && (
          <>
            {/* Backdrop */}
            <motion.div
              id={`remove-confirm-backdrop-${item.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowConfirm(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-[1.5px] z-[220] flex items-center justify-center p-4 pointer-events-auto"
            >
              {/* Card */}
              <motion.div
                id={`remove-confirm-card-${item.id}`}
                initial={{ scale: 0.92, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.92, opacity: 0, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-background-card rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-8 max-w-[400px] w-full shadow-2xl border border-brand-primary/15 flex flex-col items-center select-none"
              >
                {/* Header row with circled trash icon and title */}
                <div className="flex items-center justify-center gap-2.5 sm:gap-3 pb-2 sm:pb-3 w-full">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-brand-primary/10 border border-brand-primary/15 flex items-center justify-center text-brand-primary shrink-0">
                    <Trash2 className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-[22px] font-extrabold text-brand-primary tracking-tight">
                    Remove Item?
                  </h3>
                </div>

                {/* Centered description */}
                <p className="text-center text-brand-primary text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed font-medium px-2 sm:px-4 pb-5 sm:pb-6">
                  Are you sure you want to remove this product from your cart?
                </p>

                {/* Actions button group */}
                <div className="flex gap-2.5 sm:gap-4 w-full">
                  <button
                    onClick={handleConfirmRemove}
                    className="flex-1 h-11 sm:h-14 bg-[#052E16] hover:bg-[#032110]  text-text-inverse flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl font-bold text-[13px] sm:text-[14px] tracking-wide transition-all cursor-pointer shadow-lg shadow-[#052E16]/10 hover:scale-[1.01] active:scale-[0.99] animate-flash px-2"
                  >
                    <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" strokeWidth={2} />
                    <span className="truncate">Yes, Remove</span>
                  </button>
                  <button
                    onClick={() => setShowConfirm(false)}
                    className="flex-1 h-11 sm:h-14 bg-background-card hover:divide-brand-primary/5 border border-brand-primary/20 text-[#2D3E4D] flex items-center justify-center rounded-xl sm:rounded-2xl font-bold text-[13px] sm:text-[14px] tracking-wide transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99] px-2"
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

