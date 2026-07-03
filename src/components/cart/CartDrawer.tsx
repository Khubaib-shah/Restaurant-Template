import React, { useState } from 'react';
import { X, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/price';
import { CartItem } from './CartItem';
import { PopularWithOrder } from './PopularWithOrder';
import { PricingBreakdown } from './PricingBreakdown';
import { motion, AnimatePresence } from 'motion/react';
import { useRestaurant } from '@/src/context/RestaurantContext';

export const CartDrawer: React.FC = () => {
  const { config } = useRestaurant()
  const { isCartOpen, setIsCartOpen, state: cartState, itemCount, total, clearCart, setIsCheckoutActive } = useCart();
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);

  const handleClose = () => {
    setIsCartOpen(false);
  };

  const handleCheckout = () => {
    if (itemCount === 0) return;
    setIsCheckoutActive(true);
    setIsCartOpen(false);
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

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            id="cart-drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[140] bg-black/60 backdrop-blur-[1.5px]"
          />

          {/* 1. MOBILE BOTTOM SHEET (Hides on Desktop) */}
          <div className="fixed inset-0 z-[150] flex items-end justify-center pointer-events-none lg:hidden select-none">
            <motion.div
              id="mobile-cart-sheet"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="bg-background-card w-full h-full shadow-2xl flex flex-col pointer-events-auto overflow-hidden text-text-primary relative"
            >
              {/* Header */}
              <div className="px-5 py-4 bg-brand-primary  text-text-inverse flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <ShoppingBag size={18} />
                  <h3 className="text-sm font-extrabold uppercase tracking-wider">Your Cart</h3>
                  <span className="bg-background-card/20  text-text-inverse text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                    {itemCount} Items
                  </span>
                </div>
                <button
                  onClick={handleClose}
                  className="p-1.5 hover:bg-background-card/10 rounded-full  text-text-inverse/80 hover: text-text-inverse transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Content wrapper */}
              <div className="flex-1 overflow-y-auto no-scrollbar pb-3">
                {itemCount === 0 ? (
                  /* Empty State */
                  <div className="py-20 px-6 text-center space-y-4 flex flex-col items-center justify-center h-full">
                    <div className="w-16 h-16 rounded-full divide-brand-primary/5 flex items-center justify-center text-text-muted border border-brand-primary/15">
                      <ShoppingBag size={28} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[14px] font-bold text-text-primary">Your cart is empty</p>
                      <p className="text-xs text-text-muted max-w-[200px] leading-relaxed mx-auto">
                        Add delicious items from {config.name} to get started
                      </p>
                    </div>
                    <button
                      onClick={handleClose}
                      className="px-6 py-2 bg-brand-primary  text-text-inverse text-xs font-bold uppercase tracking-wider rounded-lg"
                    >
                      Browse Menu
                    </button>
                  </div>
                ) : (
                  /* Cart contents */
                  <div className="space-y-1">
                    {/* Items lines */}
                    <div className="divide-y divide-brand-primary/5 shrink-0">
                      {cartState.items.map((item) => (
                        <CartItem key={item.id} item={item} />
                      ))}
                    </div>

                    {/* "Add more items" trigger */}
                    <div className="p-4 shrink-0">
                      <button
                        onClick={handleClose}
                        className="w-full h-11 border-2 border-dashed border-brand-primary/25 hover:border-brand-primary rounded-lg text-[13px] font-bold text-text-secondary hover:text-brand-primary flex items-center justify-center gap-1.5 transition-all cursor-pointer hover:bg-brand-primary/5 active:scale-[0.99]"
                      >
                        <span>+</span> Add more items
                      </button>
                    </div>

                    {/* Up-selling row */}
                    <PopularWithOrder />

                    {/* Cost breakdown */}
                    <PricingBreakdown />
                  </div>
                )}
              </div>

              {/* Sticky bottom Action pill */}
              {itemCount > 0 && (
                <div className="border-t border-brand-primary/15 p-4 bg-background-card shrink-0 shadow-lg">
                  <button
                    onClick={handleCheckout}
                    id="mobile-drawer-checkout-btn"
                    className="w-full h-[52px] bg-brand-primary hover:bg-brand-primary-hover  text-text-inverse flex items-center justify-between px-5 font-bold cursor-pointer active:scale-[0.99] transition-all rounded-xl animate-flash"
                  >
                    <div className="flex flex-col items-start text-left select-none">
                      <span className="text-[10px] font-medium  text-text-inverse/70 tracking-wider">Grand Total</span>
                      <span className="text-[14px] font-bold  text-text-inverse leading-tight">{formatPrice(total)}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider  text-text-inverse">
                      <span>Checkout</span>
                      <ArrowRight size={15} strokeWidth={2.5} />
                    </div>
                  </button>

                  {/* Delivery Info Message */}
                  <div className="text-center text-[11px] text-text-secondary font-medium mt-3 select-none leading-tight">
                    Your order will be delivered approximately in 45 minutes on
                  </div>

                  <div className="flex items-center justify-center gap-1.5 mt-1.5 text-xs text-brand-primary font-semibold select-none">
                    <span>{getEstimatedDeliveryString().datePart} at</span>
                    <span className="bg-brand-primary/10 text-brand-primary px-2.5 py-0.5 rounded-full font-extrabold text-[11px] border border-brand-primary/15">
                      {getEstimatedDeliveryString().timePart}
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* 2. DESKTOP SLIDING SIDEBAR (Slides from Right, replaces static sidebars) */}
          <div className="fixed inset-y-0 right-0 z-[150] h-full flex justify-end pointer-events-none hidden lg:flex select-none">
            <motion.div
              id="desktop-cart-sidebar-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 220 }}
              className="bg-background-card w-[420px] h-full shadow-2xl flex flex-col pointer-events-auto overflow-hidden text-text-primary relative border-l border-brand-primary/15"
            >
              {/* Header */}
              <div className="px-6 py-5 flex items-center justify-between shrink-0 bg-brand-primary  text-text-inverse">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag size={20} />
                  <h3 className="text-sm font-extrabold uppercase tracking-widest">Your Cart</h3>
                  <span className="bg-background-card text-brand-primary text-[11px] font-black px-2.5 py-0.5 rounded-full shadow-sm">
                    {itemCount}
                  </span>
                </div>
                <button
                  onClick={handleClose}
                  className="p-1.5 hover:bg-background-card/10 rounded-full  text-text-inverse/80 hover: text-text-inverse transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Content wrapper */}
              <div className="flex-1 overflow-y-auto no-scrollbar pb-6">
                {itemCount === 0 ? (
                  /* Empty State */
                  <div className="py-24 px-6 text-center space-y-4 flex flex-col items-center justify-center h-full">
                    <div className="w-16 h-16 rounded-full divide-brand-primary/5 flex items-center justify-center text-text-muted border border-brand-primary/15">
                      <ShoppingBag size={28} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[15px] font-bold text-text-primary">Your cart is empty</p>
                      <p className="text-xs text-text-muted max-w-[200px] leading-relaxed mx-auto">
                        Add delicious items from {config.name} to get started
                      </p>
                    </div>
                    <button
                      onClick={handleClose}
                      className="px-6 py-2 bg-brand-primary  text-text-inverse text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-brand-primary-hover transition-colors cursor-pointer animate-fade-in"
                    >
                      Browse Menu
                    </button>
                  </div>
                ) : (
                  /* Cart contents */
                  <div className="space-y-1">
                    {/* Items lines */}
                    <div className="divide-y divide-brand-primary/5 shrink-0">
                      {cartState.items.map((item) => (
                        <CartItem key={item.id} item={item} />
                      ))}
                    </div>

                    {/* "Add more items" trigger */}
                    <div className="p-4 shrink-0">
                      <button
                        onClick={handleClose}
                        className="w-full h-11 border-2 border-dashed border-brand-primary/25 hover:border-brand-primary rounded-lg text-[13px] font-bold text-text-secondary hover:text-brand-primary flex items-center justify-center gap-1.5 transition-all cursor-pointer hover:bg-brand-primary/5 active:scale-[0.99]"
                      >
                        <span>+</span> Add more items
                      </button>
                    </div>

                    {/* Up-selling row */}
                    <PopularWithOrder />

                    {/* Cost breakdown */}
                    <PricingBreakdown />
                  </div>
                )}
              </div>

              {/* Sticky bottom Action panel */}
              {itemCount > 0 && (
                <div className="border-t border-brand-primary/15 p-5 bg-background-card shrink-0 shadow-lg">
                  <button
                    onClick={handleCheckout}
                    id="desktop-drawer-checkout-btn"
                    className="w-full h-[52px] bg-brand-primary hover:bg-brand-primary-hover  text-text-inverse flex items-center justify-between px-5 font-bold cursor-pointer active:scale-[0.99] transition-all rounded-xl shadow-md shadow-brand-primary/25 animate-flash"
                  >
                    <div className="flex flex-col items-start text-left select-none">
                      <span className="text-[10px] font-medium  text-text-inverse/70 tracking-wider">Grand Total</span>
                      <span className="text-[14px] font-bold  text-text-inverse leading-tight">{formatPrice(total)}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider  text-text-inverse">
                      <span>Checkout</span>
                      <ArrowRight size={15} strokeWidth={2.5} />
                    </div>
                  </button>

                  {/* Delivery Info Message */}
                  <div className="text-center text-[11px] text-text-secondary font-medium mt-3 select-none leading-tight">
                    Your order will be delivered approximately in 45 minutes on
                  </div>

                  <div className="flex items-center justify-center gap-1.5 mt-1.5 text-xs text-brand-primary font-semibold select-none">
                    <span>{getEstimatedDeliveryString().datePart} at</span>
                    <span className="bg-brand-primary/10 text-brand-primary px-2.5 py-0.5 rounded-full font-extrabold text-[11px] border border-brand-primary/15">
                      {getEstimatedDeliveryString().timePart}
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Success animation panel overlay (Unified) */}
          <AnimatePresence>
            {showSuccessOverlay && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-brand-primary z-[200] p-6 flex flex-col items-center justify-center text-center  text-text-inverse select-none"
              >
                {/* Animated checkmark */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  className="w-16 h-16 rounded-full bg-background-card text-brand-primary flex items-center justify-center shadow-lg mb-6"
                >
                  <span className="text-3xl font-extrabold mt-[-2px]">✓</span>
                </motion.div>

                <h4 className="text-lg font-extrabold uppercase tracking-wide mb-2">Order Placed!</h4>

                <p className="text-xs text-text-muted max-w-[240px] leading-relaxed">
                  Your order is successfully received and is being prepared by {config.name}. Estimated delivery is 45 minutes.
                </p>

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
        </>
      )}
    </AnimatePresence>
  );
};
