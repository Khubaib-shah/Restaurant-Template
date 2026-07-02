import React, { useEffect, useState } from 'react';
import { Search, ChevronUp, ArrowRight, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useRestaurant } from '../../context/RestaurantContext';
import { formatPrice } from '../../lib/price';
import { AnimatePresence, motion } from 'motion/react';

export const MobileBottomBar: React.FC = () => {
  const { total, itemCount, setIsCartOpen, isCheckoutActive } = useCart();
  const { config } = useRestaurant();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showFloatingCart, setShowFloatingCart] = useState(false);
  const [showFloatingSearch, setShowFloatingSearch] = useState(false);

  // Monitor scroll height to show/hide buttons
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      setShowFloatingCart(window.scrollY > 200);
      setShowFloatingSearch(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isCheckoutActive) {
    return null;
  }

  const handleSearchFocus = () => {
    const searchInput = document.getElementById('menu-search-input');
    if (searchInput) {
      searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Wait for scrolling to finish before focusing
      setTimeout(() => {
        searchInput.focus();
      }, 400);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const phone = config.contact.phone.replace(/[^0-9]/g, '') || '923111442542';
    const message = encodeURIComponent("Hi Ghalib, I'd like to make an inquiry about the menu!");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* FLOATING ACTION 1: LEFT BOTTOM SEARCH BUTTON (DESKTOP ONLY) */}
      <div className="hidden md:block fixed bottom-6 left-6 z-[120] pointer-events-auto select-none">
        <button
          onClick={handleSearchFocus}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-primary text-white flex items-center justify-center shadow-lg hover:bg-brand-primary-hover hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/20 group"
          aria-label="Focus search input"
        >
          <Search size={22} className="group-hover:rotate-12 transition-transform" />
        </button>
      </div>

      {/* Cart Fixed Side Tab (Bigger, Below Category Header) */}
      <AnimatePresence>
        {showFloatingCart && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="fixed top-14 right-0 z-[120] pointer-events-auto select-none"
          >
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white py-3 px-4 rounded-l-2xl shadow-xl transition-all duration-300 hover:-translate-x-1 border-l-2 border-y border-white/20 cursor-pointer transform hover:scale-105 active:scale-95 group font-bold text-xs uppercase tracking-wider"
              aria-label="Open Cart"
            >
              <ShoppingCart size={18} className="group-hover:scale-110 transition-transform" />
              <span className="hidden md:inline">My Cart</span>
              {itemCount > 0 && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-black text-white shadow-sm animate-pulse">
                  {itemCount}
                </span>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING ACTION 2: RIGHT BOTTOM BUTTONS (WHATSAPP + SCROLL TO TOP) (DESKTOP ONLY) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-[120] flex-col gap-3 items-center pointer-events-auto select-none">
        {/* WhatsApp Icon */}
        <button
          onClick={openWhatsApp}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/20"
          aria-label="Contact us on WhatsApp"
        >
          {/* Authentic WhatsApp SVG */}
          <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.806-9.799.002-2.618-1.016-5.079-2.869-6.93C16.305 2.021 13.854 1 11.998 1c-5.41 0-9.813 4.401-9.815 9.813-.001 1.76.46 3.477 1.336 4.995l-.974 3.565 3.651-.958zm13.125-6.52c-.11-.18-.4-.29-.88-.53s-2.84-1.4-3.28-1.56-.76-.24-1.08.24-.32 1.08-.4 1.32-.44.48-.76.12c-.32-.36-1.354-1.5-2.58-2.59-1-.89-1.67-1.99-1.87-2.33s-.02-.53.1-.71c.11-.16.24-.32.36-.48s.16-.24.24-.4.04-.32-.02-.48-.76-1.83-1.04-2.51c-.273-.656-.554-.648-.76-.648-.2-.01-.43-.01-.67-.01s-.63.09-.96.44c-.33.35-1.24 1.21-1.24 2.95s1.27 3.43 1.45 3.67c.18.24 2.5 3.82 6.06 5.35.85.36 1.5.58 2.01.74.86.27 1.64.23 2.25.14.68-.1 2.08-.85 2.38-1.67s.3-1.53.21-1.67z" />
          </svg>
        </button>

        {/* Scroll To Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2 }}
              onClick={scrollToTop}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-primary text-white flex items-center justify-center shadow-lg hover:bg-brand-primary-hover hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/20"
              aria-label="Scroll back to top"
            >
              <ChevronUp size={22} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* FLOATING ACTION 3: BOTTOM CENTER VIEW CART BAR (DESKTOP ONLY WHEN CART HAS ITEMS) */}
      <AnimatePresence>
        {itemCount > 0 && (
          <div className="hidden md:flex fixed bottom-6 inset-x-0 z-[120] px-4 pointer-events-none select-none justify-center">
            <motion.button
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ duration: 0.8,  ease: 'easeInOut', }}
              onClick={() => setIsCartOpen(true)}
              className="w-auto min-w-[280px] md:min-w-[320px] max-w-sm h-14 rounded-full bg-brand-primary text-white px-6 flex items-center justify-between shadow-2xl hover:bg-brand-primary-hover hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer pointer-events-auto border-2 border-white/10 shadow-brand-primary/30 group animate-flash"
            >
              {/* Left: Item Counter Bubble */}
              <div className="w-8 h-8 rounded-full bg-white text-brand-primary flex items-center justify-center text-sm font-extrabold shadow-sm select-none shrink-0">
                {itemCount}
              </div>

              {/* Center: View Cart Text */}
              <span className="text-sm font-extrabold uppercase tracking-[0.15em] mx-4 select-none text-white/95 truncate">
                View Cart
              </span>

              {/* Right: Price total and Chevron arrow */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[13px] md:text-[14px] font-bold tracking-wide select-none bg-white/15 px-2.5 py-0.5 rounded-full text-white">
                  {formatPrice(total)}
                </span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                  className="shrink-0 text-white"
                >
                  <ArrowRight size={16} strokeWidth={2.5} />
                </motion.span>
              </div>
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* MOBILE COMPACT FLOATING BAR (ONE LINE, DYNAMIC LAYOUT, TRANSPARENT WRAPPER) */}
      <AnimatePresence>
        {itemCount > 0 && (
          <div className="fixed bottom-4 inset-x-0 z-[120] px-4 md:hidden pointer-events-auto select-none flex justify-center">
            <div className="flex items-center justify-between gap-2.5 w-full max-w-sm bg-transparent">
              
              {/* Item 1: Search Button (only shown when scrolled past search bar) */}
              <AnimatePresence initial={false}>
                {showFloatingSearch && (
                  <motion.div
                    initial={{ width: 0, opacity: 0, scale: 0.5 }}
                    animate={{ width: 44, opacity: 1, scale: 1 }}
                    exit={{ width: 0, opacity: 0, scale: 0.5 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                    className="overflow-hidden shrink-0 flex items-center justify-center"
                  >
                    <button
                      onClick={handleSearchFocus}
                      className="w-11 h-11 rounded-full bg-brand-primary text-white flex items-center justify-center shadow-lg active:scale-95 transition-all cursor-pointer"
                      aria-label="Search items"
                    >
                      <Search size={18} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Item 2: View Cart Button (Always takes full remaining width) */}
              <motion.button
                layout
                onClick={() => setIsCartOpen(true)}
                transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                className="flex-1 h-11 rounded-full bg-brand-primary text-white px-4 flex items-center justify-between shadow-lg active:scale-95 transition-all cursor-pointer min-w-0 animate-flash relative overflow-hidden"
                aria-label="Open Cart"
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="w-5.5 h-5.5 rounded-full bg-white text-brand-primary flex items-center justify-center text-[10.5px] font-bold shrink-0">
                    {itemCount}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-wider truncate">View Cart</span>
                </div>
                
                <div className="flex items-center gap-1.5 shrink-0 min-w-0">
                  <span className="shrink-0 text-[10px] font-medium bg-white/15 px-2 py-0.5 rounded-full">
                    {formatPrice(total)}
                  </span>
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                    className="shrink-0 text-white"
                  >
                    <ArrowRight size={13} strokeWidth={2.5} />
                  </motion.span>
                </div>
                
              </motion.button>

              {/* Item 3: WhatsApp or Scroll to Top Button */}
              <div className="shrink-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {showScrollTop ? (
                    <motion.button
                      key="scroll-top"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={scrollToTop}
                      className="w-11 h-11 rounded-full bg-brand-primary text-white flex items-center justify-center shadow-lg active:scale-95 transition-all cursor-pointer"
                      aria-label="Scroll to top"
                    >
                      <ChevronUp size={18} />
                    </motion.button>
                  ) : (
                    <motion.button
                      key="whatsapp"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={openWhatsApp}
                      className="w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg active:scale-95 transition-all cursor-pointer"
                      aria-label="Contact us on WhatsApp"
                    >
                      <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.806-9.799.002-2.618-1.016-5.079-2.869-6.93C16.305 2.021 13.854 1 11.998 1c-5.41 0-9.813 4.401-9.815 9.813-.001 1.76.46 3.477 1.336 4.995l-.974 3.565 3.651-.958zm13.125-6.52c-.11-.18-.4-.29-.88-.53s-2.84-1.4-3.28-1.56-.76-.24-1.08.24-.32 1.08-.4 1.32-.44.48-.76.12c-.32-.36-1.354-1.5-2.58-2.59-1-.89-1.67-1.99-1.87-2.33s-.02-.53.1-.71c.11-.16.24-.32.36-.48s.16-.24.24-.4.04-.32-.02-.48-.76-1.83-1.04-2.51c-.273-.656-.554-.648-.76-.648-.2-.01-.43-.01-.67-.01s-.63.09-.96.44c-.33.35-1.24 1.21-1.24 2.95s1.27 3.43 1.45 3.67c.18.24 2.5 3.82 6.06 5.35.85.36 1.5.58 2.01.74.86.27 1.64.23 2.25.14.68-.1 2.08-.85 2.38-1.67s.3-1.53.21-1.67z" />
                      </svg>
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
