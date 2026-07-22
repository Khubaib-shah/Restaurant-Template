import React, { useState } from 'react';
import { ShoppingCart, ArrowRight, HelpCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/price';
import { CartItem } from './CartItem';
import { PopularWithOrder } from './PopularWithOrder';
import { PricingBreakdown } from './PricingBreakdown';
import { motion, AnimatePresence } from 'motion/react';
import { useRestaurant } from '@/context/RestaurantContext';

export const CartSidebar: React.FC = () => {
  const { config } = useRestaurant()
  const { state: cartState, itemCount, subtotal, total, clearCart, setIsCheckoutActive } = useCart();
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);

  const handleCheckout = () => {
    if (itemCount === 0) return;
    setIsCheckoutActive(true);
  };

  const getEstimatedDeliveryString = () => {
    const deliveryDate = new Date();
    deliveryDate.setMinutes(deliveryDate.getMinutes() + 40);

    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    const datePart = deliveryDate.toLocaleDateString('en-US', options);

    const hours = deliveryDate.getHours();
    const minutes = deliveryDate.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timePart = `${displayHours}:${displayMinutes} ${ampm}`;

    return { datePart, timePart };
  };

  const handleScrollToMenu = () => {
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  return (
    <div
      id="desktop-cart-sidebar"
      className="sticky w-[360px] max-h-[calc(100vh-160px)] flex flex-col bg-background-card rounded-2xl border border-brand-primary/20 shadow-card select-none shrink-0 overflow-hidden"
      style={{
        // header (64px) + category nav (48px) + offset gap (32px)
        top: '144px'
      }}
    >
      {/* Header */}
      <div className="bg-brand-primary  text-text-inverse px-5 py-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <ShoppingCart size={18} />
          <h3 className="text-sm font-bold uppercase tracking-wider">Your Cart</h3>
        </div>
      </div>

      {/* Cart Body */}
      <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col justify-between">
        <AnimatePresence mode="popLayout">
          {itemCount === 0 ? (
            /* Empty State */
            <motion.div
              key="empty-cart"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-16 px-6 text-center space-y-4 flex flex-col items-center justify-center flex-1"
            >
              <div className="w-16 h-16 rounded-full divide-brand-primary/5 flex items-center justify-center text-text-muted border border-brand-primary/15">
                <ShoppingCart size={28} />
              </div>
              <div className="space-y-1">
                <p className="text-[14px] font-bold text-text-primary">Your cart is empty</p>
                <p className="text-xs text-text-muted max-w-[200px] leading-relaxed mx-auto">
                  Add items from the menu to get started
                </p>
              </div>
            </motion.div>
          ) : (
            /* Cart Items & Sections */
            <motion.div
              key="cart-items-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1"
            >
              {/* Item Rows */}
              <div className="divide-y divide-brand-primary/5 max-h-[300px] overflow-y-auto no-scrollbar">
                {cartState.items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              {/* Add More Items Dashed Trigger */}
              <div className="p-4">
                <button
                  onClick={handleScrollToMenu}
                  className="w-full h-11 border-2 border-dashed border-brand-primary/25 hover:border-brand-primary rounded-lg text-[13px] font-bold text-text-secondary hover:text-brand-primary flex items-center justify-center gap-1.5 transition-all cursor-pointer hover:bg-brand-primary/5 active:scale-[0.99]"
                >
                  <span>+</span> Add more items
                </button>
              </div>

              {/* Upselling component */}
              <PopularWithOrder />

              {/* Breakdown details */}
              <PricingBreakdown />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Sticky Bottom checkout bar */}
      {itemCount > 0 && (
        <div className="border-t border-brand-primary/15 bg-background-card shrink-0">
          <button
            onClick={handleCheckout}
            id="checkout-trigger-btn"
            className="w-full h-[52px] bg-brand-primary hover:bg-brand-primary-hover  text-text-inverse flex items-center justify-center gap-1.5 font-bold text-sm uppercase tracking-widest cursor-pointer active:scale-[0.99] transition-all rounded-b-2xl"
          >
            checkout <ArrowRight size={16} className="mt-0.5" />
          </button>

          <div className="flex items-center justify-center gap-1.5 py-3 px-4 divide-brand-primary/5/50 text-xs text-brand-primary font-semibold border-t border-brand-primary/15 select-none">
            <span>{getEstimatedDeliveryString().datePart} at</span>
            <span className="bg-brand-primary/10 text-brand-primary px-2.5 py-0.5 rounded-full font-extrabold text-[11px] border border-brand-primary/15">
              {getEstimatedDeliveryString().timePart}
            </span>
          </div>
        </div>
      )}

      {/* Success Simulation Modal overlay */}
      <AnimatePresence>
        {showSuccessOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-brand-primary z-50 p-6 flex flex-col items-center justify-center text-center  text-text-inverse"
          >
            {/* Animated checkmark */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="w-16 h-16 rounded-full bg-background-card text-brand-primary flex items-center justify-center shadow-lg mb-6"
            >
              <span className="text-3xl font-extrabold mt-[-2px]">âœ“</span>
            </motion.div>

            <motion.h4
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg font-extrabold uppercase tracking-wide mb-2"
            >
              Order Placed!
            </motion.h4>

            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs text-text-muted max-w-[240px] leading-relaxed"
            >
              Your order is successfully received and is being prepared by {config.name}. Estimated delivery is 45 minutes.
            </motion.p>

            <div className="w-16 h-1 bg-background-card/20 rounded-full overflow-hidden mt-8">
              <motion.div
                initial={{ left: '-100%', width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 4, ease: 'linear' }}
                className="h-full bg-brand-accent"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

