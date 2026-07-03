import React from "react";
import { BadgePercent } from "lucide-react";
import { motion } from "motion/react";
import { useRestaurant } from "../../context/RestaurantContext";

export const PromoBanner = () => {
  const { config } = useRestaurant();
  const promo = config.activePromo;

  if (!promo) return null;

  const { colors } = config.theme;

  return (
    <div
      className="max-w-[1220px] container mx-2 sm:mx-4 lg:mx-auto relative overflow-hidden rounded-xl my-4 border px-3 sm:px-5 py-3.5 shadow-sm"
      style={{
        background: colors.background.card,
        borderColor: `${colors.primary}25`,
      }}
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl animate-pulse"
        style={{
          backgroundColor: colors.accent,
          opacity: 0.35,
          animationDuration: "2.8s",
        }}
      />

      <div
        className="pointer-events-none absolute -left-8 -bottom-8 h-24 w-24 rounded-full blur-2xl animate-pulse"
        style={{
          backgroundColor: colors.primary,
          opacity: 0.2,
          animationDuration: "3.2s",
          animationDelay: "500ms",
        }}
      />

      <div className="relative z-10">
        <p
          className="flex items-center gap-2 text-sm sm:text-base md:text-xl font-semibold tracking-wide"
          style={{ color: colors.text.primary }}
        >
          <BadgePercent
            size={30}
            style={{
              color: colors.primary,
            }}
          />

          <span className="text-base sm:text-xl md:text-2xl font-extrabold capitalize">
            {promo.type === "flat_percent"
              ? "Flat"
              : promo.type === "flat_amount"
                ? "Save"
                : "Free"}
          </span>

          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="inline-flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full text-base sm:text-xl md:text-2xl font-extrabold shadow-lg"
            style={{
              background: `linear-gradient(180deg, ${colors.accent}, ${colors.primary})`,
              color: colors.text.inverse,
            }}
          >
            {promo.type === "flat_amount"
              ? promo.value
              : promo.type === "flat_percent"
                ? `${promo.value}`
                : "🚚"}
          </motion.span>

          <span className="font-bold">
            {promo.type === "flat_percent"
              ? "% OFF"
              : promo.type === "flat_amount"
                ? "Rs OFF"
                : "DELIVERY"}
          </span>
        </p>
      </div>
    </div>
  );
};
