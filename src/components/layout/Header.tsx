import React from "react";
import { MapPin, Phone, ShoppingCart, ChevronDown } from "lucide-react";
import { useRestaurant } from "../../context/RestaurantContext";
import { useCart } from "../../context/CartContext";
import { motion } from "motion/react";

export const Header: React.FC = () => {
  const { config, currentLocation, setIsLocationModalOpen } = useRestaurant();
  const { itemCount, setIsCartOpen, setIsCheckoutActive } = useCart();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsCheckoutActive(false);
    setIsCartOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="main-header"
      className="relative bg-brand-primary  text-text-inverse h-12 lg:h-16 flex items-center justify-between px-4 md:px-8 z-[100] shadow-header"
    >
      {/* MOBILE LAYOUT */}
      <div className="flex lg:hidden items-center justify-between w-full h-full relative">
        {/* Left Side: Location Trigger */}
        <div className="flex items-center">
          <button
            id="mobile-location-trigger"
            onClick={() => setIsLocationModalOpen(true)}
            className="w-8 h-8 rounded-full bg-background-card text-text-primary flex items-center justify-center shadow-md active:scale-95 transition-all cursor-pointer hover:divide-brand-primary/5"
            aria-label="Select Location"
          >
            <MapPin size={14} className="text-gray-700" />
          </button>
        </div>

        {/* CENTER: Centered Logo (Absolute, overflowing) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1.5 flex items-center z-20">
          <button
            onClick={handleLogoClick}
            className="block cursor-pointer focus:outline-none"
            aria-label="Go to Home"
          >
            <div className="w-16 h-16 rounded-full bg-background-card shadow-xl border border-brand-primary/15 flex items-center justify-center p-1.5">
              <img
                id="header-logo-img-mobile"
                src={config.logo}
                alt={config.name}
                className="w-full h-full object-contain rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </button>
        </div>

        {/* Right Side: Action Buttons (Call, Cart) */}
        <div className="flex items-center gap-2">
          {/* Call Restaurant Icon */}
          <a
            id="mobile-phone-trigger"
            href={`tel:${config.contact.phone}`}
            className="w-8 h-8 rounded-full bg-background-card text-text-primary flex items-center justify-center shadow-md active:scale-95 transition-all hover:divide-brand-primary/5"
            aria-label="Call Restaurant"
          >
            <Phone size={14} className="text-gray-700" />
          </a>

          {/* Cart Trigger Icon */}
          <button
            id="mobile-cart-trigger"
            onClick={() => setIsCartOpen(true)}
            className="relative w-8 h-8 rounded-full bg-background-card text-text-primary flex items-center justify-center shadow-md active:scale-95 transition-all cursor-pointer hover:divide-brand-primary/5"
            aria-label="Open Cart"
          >
            <ShoppingCart size={14} className="text-gray-700" />
            {itemCount > 0 && (
              <div
                id="mobile-cart-badge"
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-brand-primary  text-text-inverse border border-white flex items-center justify-center text-[8px] font-black shadow-sm"
              >
                {itemCount}
              </div>
            )}
          </button>
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:flex items-center justify-between w-full h-full relative">
        {/* LEFT: Delivery Location and Contact */}
        <div className="flex items-center gap-6">
          {/* Desktop Location Selector */}
          <div className="flex items-center gap-4 border-r border-white/20 pr-6">
            <button
              id="location-selector"
              className="flex items-center gap-2 hover:opacity-80 text-left transition-opacity cursor-pointer group"
              onClick={() => setIsLocationModalOpen(true)}
            >
              <div className="bg-background-card/10 p-1.5 rounded-full  text-text-inverse">
                <MapPin size={16} />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest text-text-inverse/90 uppercase leading-none mb-1">
                  DELIVERY
                </p>
                <div className="flex items-center gap-1.5 text-sm font-semibold  text-text-inverse">
                  <span>{currentLocation.area}</span>
                  <ChevronDown
                    size={14}
                    className="text-text-inverse group-hover:translate-y-0.5 transition-transform"
                  />
                </div>
              </div>
            </button>
          </div>

          {/* Desktop Phone Contact */}
          <a
            id="phone-contact"
            href={`tel:${config.contact.phone}`}
            className="flex items-center gap-2 text-sm font-medium hover:text-gray-200 transition-colors"
          >
            <div className="bg-background-card/10 p-1.5 rounded-full  text-text-inverse">
              <Phone size={14} />
            </div>
            <span>{config.contact.phone}</span>
          </a>
        </div>

        {/* CENTER: Centered Logo (Absolute, 50% overflowing) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 flex items-center z-20">
          <button
            onClick={handleLogoClick}
            className="block cursor-pointer focus:outline-none"
            aria-label="Go to Home"
          >
            <div className="w-24 h-24 rounded-full bg-background-card shadow-xl border border-brand-primary/15 flex items-center justify-center p-2.5">
              <img
                id="header-logo-img"
                src={config.logo}
                alt={config.name}
                className="w-full h-full object-contain rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </button>
        </div>

        {/* RIGHT: Cart Icon / Trigger */}
        <div className="flex items-center gap-4">
          {/* Cart Icon Button */}
          <button
            id="header-cart-trigger"
            className="relative p-2 bg-background-card/10 hover:bg-background-card/15 rounded-full transition-colors cursor-pointer group"
            onClick={() => setIsCartOpen(true)}
            aria-label="Open Cart"
          >
            <ShoppingCart
              size={22}
              className="group-hover:scale-105 transition-transform"
            />
            {itemCount > 0 && (
              <div
                id="header-cart-badge"
                className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-background-card text-brand-primary flex items-center justify-center text-xs font-extrabold shadow-sm animate-pulse"
              >
                {itemCount}
              </div>
            )}
          </button>
        </div>
      </div>
    </motion.header>
  );
};
