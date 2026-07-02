import React from 'react';
import { useRestaurant } from '../../context/RestaurantContext';
import { Percent } from 'lucide-react';

export const PromoBanner: React.FC = () => {
  const { config } = useRestaurant();
  const promo = config.activePromo;

  if (!promo) return null;

  return (
    <div id="promo-banner-strip" className="max-w-[480px] mx-auto bg-white border border-gray-200/80 rounded-xl p-3.5 my-1.5 flex items-center gap-3 shadow-sm select-none">
      {/* Dynamic percent circular background icon */}
      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
        <Percent size={16} strokeWidth={3} />
      </div>

      <div className="flex items-center gap-2 text-sm md:text-[15px] font-bold text-gray-800">
        <span className="text-gray-500 font-medium">Flat</span>
        
        {/* Yellow/Amber highlight badge pill */}
        <div className="px-3 py-1 bg-yellow-500 text-white rounded-full font-extrabold text-xs shadow-sm flex items-center justify-center shrink-0">
          {promo.value}% Off
        </div>
        
        <span className="text-gray-600 font-semibold">on your entire order!</span>
      </div>
    </div>
  );
};
