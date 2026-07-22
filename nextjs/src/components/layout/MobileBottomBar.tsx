import React, { useEffect, useState } from "react";
import { Search, ChevronUp, ArrowRight, ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useRestaurant } from "../../context/RestaurantContext";
import { formatPrice } from "../../lib/price";
import { AnimatePresence, motion } from "motion/react";
import { handleSearchFocus } from "@/lib/searchScroll";
import { useRouter } from "next/navigation";

export const MobileBottomBar: React.FC = () => {
  const { total, itemCount, setIsCartOpen, isCheckoutActive } = useCart();
  const { config } = useRestaurant();
  const router = useRouter();
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isCheckoutActive) {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const phone = config.contact.phone.replace(/[^0-9]/g, "") || "03149784156";
    const message = encodeURIComponent(
      `Hi ${config.name}, I'd like to make an inquiry about the menu!`,
    );
    window.open(
      `https://wa.me/${phone}?text=${message}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <>
      {/* FLOATING ACTION 1: LEFT BOTTOM SEARCH BUTTON (DESKTOP ONLY) */}
      <div className="hidden md:block fixed bottom-6 left-6 z-[120] pointer-events-auto select-none">
        <button
          onClick={() => handleSearchFocus(router.push)}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-primary text-text-inverse flex items-center justify-center shadow-lg hover:bg-brand-primary-hover hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/20 group"
          aria-label="Focus search input"
        >
          <Search
            size={22}
            className="group-hover:rotate-12 transition-transform"
          />
        </button>
      </div>

      {/* FLOATING ACTION 1b: LEFT BOTTOM SEARCH BUTTON (MOBILE COMPACT - WHEN NO ITEMS IN CART) */}
      <AnimatePresence>
        {itemCount === 0 && showFloatingSearch && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            className="md:hidden fixed bottom-4 left-4 z-[120] pointer-events-auto select-none"
          >
            <button
              onClick={() => handleSearchFocus(router.push)}
              className="w-11 h-11 rounded-full bg-brand-primary text-text-inverse flex items-center justify-center shadow-lg active:scale-95 transition-all cursor-pointer border border-white/20"
              aria-label="Focus search input"
            >
              <Search size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Fixed Side Tab (Bigger, Below Category Header) */}
      <AnimatePresence>
        {showFloatingCart && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed top-14 right-0 z-[120] pointer-events-auto select-none"
          >
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-text-inverse py-3 px-4 rounded-l-2xl shadow-xl transition-all duration-300 hover:-translate-x-1 border-l-2 border-y border-white/20 cursor-pointer transform hover:scale-105 active:scale-95 group font-bold text-xs uppercase tracking-wider"
              aria-label="Open Cart"
            >
              <ShoppingCart
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="hidden md:inline">My Cart</span>
              {itemCount > 0 && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-black text-text-inverse shadow-sm animate-pulse">
                  {itemCount}
                </span>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING ACTION 2: RIGHT BOTTOM BUTTONS (WHATSAPP + SCROLL TO TOP) */}
      <div
        className={`fixed bottom-4 md:bottom-6 right-4 md:right-6 z-[120] flex-col gap-3 items-center pointer-events-auto select-none ${itemCount === 0 ? "flex" : "hidden md:flex"}`}
      >
        {/* WhatsApp Icon */}
        <motion.button
          layout
          onClick={openWhatsApp}
          className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer select-none"
          aria-label="Contact us on WhatsApp"
        >
          {/* High-Fidelity WhatsApp SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fff"
              d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"
            ></path>
            <path
              fill="#fff"
              d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"
            ></path>
            <path
              fill="#cfd8dc"
              d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4,24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"
            ></path>
            <path
              fill="#40c351"
              d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"
            ></path>
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z"
              clipRule="evenodd"
            ></path>
          </svg>
        </motion.button>

        {/* Scroll To Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              layout
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2 }}
              onClick={scrollToTop}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-primary text-text-inverse flex items-center justify-center shadow-lg hover:bg-brand-primary-hover hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/20"
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
              transition={{ duration: 0.8, ease: "easeInOut" }}
              onClick={() => setIsCartOpen(true)}
              className="w-auto min-w-[280px] md:min-w-[320px] max-w-sm h-14 rounded-full bg-brand-primary text-text-inverse px-6 flex items-center justify-between shadow-2xl hover:bg-brand-primary-hover hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer pointer-events-auto border-2 border-white/10 shadow-brand-primary/30 group animate-flash"
            >
              {/* Left: Item Counter Bubble */}
              <div className="w-8 h-8 rounded-full bg-background-card/20 text-text-inverse flex items-center justify-center text-sm font-extrabold shadow-sm select-none shrink-0">
                {itemCount}
              </div>

              {/* Center: View Cart Text */}
              <span className="text-sm font-extrabold uppercase tracking-[0.15em] mx-4 select-none text-text-inverse/95 truncate">
                View Cart
              </span>

              {/* Right: Price total and Chevron arrow */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[13px] md:text-[14px] font-bold tracking-wide select-none bg-background-card/15 px-2.5 py-0.5 rounded-full text-text-inverse">
                  {formatPrice(total)}
                </span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "easeInOut",
                  }}
                  className="shrink-0 text-text-inverse"
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
                    transition={{ type: "spring", stiffness: 280, damping: 24 }}
                    className="overflow-hidden shrink-0 flex items-center justify-center"
                  >
                    <button
                      onClick={() => handleSearchFocus(router.push)}
                      className="w-11 h-11 rounded-full bg-brand-primary text-text-inverse flex items-center justify-center shadow-lg active:scale-95 transition-all cursor-pointer"
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
                transition={{ type: "spring", stiffness: 280, damping: 24 }}
                className="flex-1 h-11 rounded-full bg-brand-primary text-text-inverse px-4 flex items-center justify-between shadow-lg active:scale-95 transition-all cursor-pointer min-w-0 animate-flash relative overflow-hidden"
                aria-label="Open Cart"
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="w-5.5 h-5.5 rounded-full bg-background-card/15 text-text-inverse flex items-center justify-center text-[10.5px] font-bold shrink-0">
                    {itemCount}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-wider truncate">
                    View Cart
                  </span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 min-w-0">
                  <span className="shrink-0 text-[10px] md:font-medium bg-background-card/15 px-2 py-0.5 rounded-full">
                    {formatPrice(total)}
                  </span>
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.2,
                      ease: "easeInOut",
                    }}
                    className="shrink-0 text-text-inverse"
                  >
                    <ArrowRight size={13} strokeWidth={2.5} />
                  </motion.span>
                </div>
              </motion.button>

              {/* Item 3: WhatsApp + Scroll to Top Button (WhatsApp slides up cleanly on top of back-to-top button with a 10px gap) */}
              <div className="relative shrink-0 w-11 h-11 flex items-center justify-center">
                {/* Scroll To Top Button */}
                <AnimatePresence>
                  {showScrollTop && (
                    <motion.button
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.6, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                      onClick={scrollToTop}
                      className="absolute inset-0 w-11 h-11 rounded-full bg-brand-primary text-text-inverse flex items-center justify-center shadow-lg active:scale-95 transition-transform cursor-pointer z-10"
                      aria-label="Scroll to top"
                    >
                      <ChevronUp size={18} />
                    </motion.button>
                  )}
                </AnimatePresence>

                {/* WhatsApp Button */}
                <motion.button
                  animate={{ y: showScrollTop ? -54 : 0 }}
                  transition={{
                    duration: 0.25,
                    ease: "easeIn",
                  }}
                  onClick={openWhatsApp}
                  className="absolute inset-0 w-11 h-11 flex items-center justify-center active:scale-95 transition-transform cursor-pointer z-20"
                  aria-label="Contact us on WhatsApp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#fff"
                      d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"
                    ></path>
                    <path
                      fill="#cfd8dc"
                      d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4,24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"
                    ></path>
                    <path
                      fill="#40c351"
                      d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"
                    ></path>
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

