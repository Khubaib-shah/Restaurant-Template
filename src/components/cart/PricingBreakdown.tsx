import React from 'react';
import { Truck, Flame } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/price';

export const PricingBreakdown: React.FC = () => {
  const { subtotal, tax, deliveryFee, discount, total } = useCart();

  if (subtotal === 0) return null;

  return (
    <div id="pricing-breakdown-container" className="space-y-4 px-4 py-5 border-t border-gray-100 select-none">
      <div className="space-y-2.5 text-xs md:text-sm text-gray-600">
        
        {/* Subtotal */}
        <div className="flex justify-between items-center">
          <span className="font-medium">Total</span>
          <span className="font-extrabold text-gray-900">{formatPrice(subtotal)}</span>
        </div>

        {/* Tax */}
        <div className="flex justify-between items-center">
          <span className="font-medium">Tax (15%)</span>
          <span className="font-extrabold text-gray-900">{formatPrice(tax)}</span>
        </div>

        {/* Delivery Fee */}
        <div className="flex justify-between items-center">
          <span className="font-medium flex items-center gap-1.5">
            <Truck size={14} className="text-gray-400" />
            Delivery Fee
          </span>
          <span className="font-extrabold text-gray-900">{formatPrice(deliveryFee)}</span>
        </div>

        {/* Discount */}
        {discount > 0 && (
          <div className="flex justify-between items-center text-green-600 font-bold">
            <span>Discount</span>
            <span>- {formatPrice(discount)}</span>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      {/* Grand Total */}
      <div className="flex justify-between items-center text-gray-900">
        <span className="text-[15px] font-extrabold uppercase tracking-wide">Grand Total</span>
        <span className="text-lg md:text-xl font-extrabold text-gray-900">{formatPrice(total)}</span>
      </div>

      {/* Savings Banner */}
      {discount > 0 && (
        <div
          id="savings-success-banner"
          className="bg-[#F3FAF6] border border-[#D5ECD9] rounded-full py-2.5 px-4 flex items-center justify-center gap-2 text-xs md:text-[13px] text-[#1A4D2E] font-bold shadow-sm"
        >
          <Flame size={15} className="fill-[#22C55E] text-[#22C55E]" />
          <span>Yay! You have saved {formatPrice(discount)}</span>
        </div>
      )}
    </div>
  );
};
