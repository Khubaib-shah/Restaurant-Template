import React from 'react';
import { useRestaurant } from '../../context/RestaurantContext';
import { Tag } from 'lucide-react';
import { motion } from 'motion/react';

export const PromoBanner: React.FC = () => {
  const { config } = useRestaurant();
  const promo = config.activePromo;

  if (!promo) return null;

  return (
    <div
      id="promo-banner-strip"
      className="max-w-[480px] mx-auto bg-gradient-to-r from-orange-500 via-orange-200 to-white border border-orange-100 rounded-xl p-2.5 my-2.5 flex items-center justify-between gap-3 shadow-md select-none overflow-hidden relative"
    >
      <div className="flex items-center gap-2.5">
        {/* Ticket/Tag Icon on the left (instead of percentage) */}
        <div className="w-8.5 h-8.5 rounded-full bg-background-card/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-text-inverse shrink-0 shadow-sm">
          <Tag size={16} strokeWidth={2.5} className="text-inverse" />
        </div>

        {/* Text and Value Details */}
        <div className="flex items-center gap-2 text-sm font-bold">
          <span className="text-inverse font-extrabold tracking-wide uppercase text-[11px] sm:text-xs">Flat</span>

          {/* Yellow Badge with value - Bouncing Animation */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "easeInOut"
            }}
            className="w-7.5 h-7.5 rounded-full bg-yellow-400 text-text-primary font-black text-xs sm:text-sm shadow-md flex items-center justify-center shrink-0"
          >
            {promo.value}
          </motion.div>

          <span className="text-gray-800 font-semibold md:font-black text-[11px] sm:text-xs tracking-tight">
            % Off on entire order!
          </span>
        </div>
      </div>

      {/* Elegant ticket edge indicator on the right */}
      <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-4 bg-brand-primary/5 rounded-l-full border border-gray-200/40" />
    </div>
  );
};

