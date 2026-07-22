import { useRestaurant } from '@/src/context/RestaurantContext';
import React from 'react';

export const ImagePlaceholder: React.FC = () => {
  const { config } = useRestaurant()


  return (
    <div className="w-full h-full flex items-center justify-center bg-background-card">
      <img
        src={config.logo}
        alt={config.name}
        className="w-40 h-40 object-contain opacity-100 blur-[1px] scale-90"
      />
    </div>
  );
};
