import React from 'react';
import { Truck, Flame } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/price';

export const PricingBreakdown: React.FC = () => {
  const { subtotal, tax, deliveryFee, discount, total } = useCart();

  if (subtotal === 0) return null;

  return (
    <div id="pricing-breakdown-container" className="space-y-4 px-4 py-5 border-t border-brand-primary/10 select-none">
      <div className="space-y-2.5 text-xs md:text-sm text-gray-600">

        {/* Subtotal */}
        <div className="flex justify-between items-center">
          <span className="font-medium">Total</span>
          <span className="font-medium md:font-extrabold text-text-primary">{formatPrice(subtotal)}</span>
        </div>

        {/* Tax */}
        <div className="flex justify-between items-center">
          <span className="font-medium">Tax (15%)</span>
          <span className="font-medium md:font-extrabold text-text-primary">{formatPrice(tax)}</span>
        </div>

        {/* Delivery Fee */}
        <div className="flex justify-between items-center">
          <span className="font-medium flex items-center gap-1.5">
            <Truck size={14} className="text-text-secondary" />
            Delivery Fee
          </span>
          <span className="font-medium md:font-extrabold text-text-primary">{formatPrice(deliveryFee)}</span>
        </div>

        {/* Discount */}
        {discount > 0 && (
          <div className="flex justify-between items-center text-green-600 font-semibold md:font-bold">
            <span>Discount</span>
            <span>- {formatPrice(discount)}</span>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-brand-primary/10" />

      {/* Grand Total */}
      <div className="flex justify-between items-center text-text-primary">
        <span className="text-[15px] font-medium md:font-extrabold uppercase tracking-wide">Grand Total</span>
        <span className="text-lg md:text-xl font-medium md:font-extrabold text-text-primary">{formatPrice(total)}</span>
      </div>

      {/* Savings Banner */}
      {discount > 0 && (
        <div
          id="savings-success-banner"
          className="w-fit mx-auto bg-[#F3FAF6] border border-[#D5ECD9] rounded-full py-2.5 px-4 flex items-center justify-center gap-2 text-xs md:text-[13px] text-[#1A4D2E] font-bold shadow-sm"
        >
          <Flame size={15} className="fill-[#22C55E] text-[#22C55E]" />
          <span>Yay! You have saved {formatPrice(discount)}</span>
        </div>
      )}
    </div>
  );
};
