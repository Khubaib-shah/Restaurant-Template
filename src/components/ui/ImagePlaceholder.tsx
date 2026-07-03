import { useRestaurant } from '@/src/context/RestaurantContext';
import React from 'react';

interface ImagePlaceholderProps {
  className?: string;
  logoSize?: 'sm' | 'md' | 'lg';
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  className = '',
  logoSize = 'md'
}) => {
  const { config } = useRestaurant()
  const sizeClasses = {
    sm: 'w-16 h-16 text-[10px] p-1.5 inset-1.5',
    md: 'w-24 h-24 text-[13px] p-2 inset-2',
    lg: 'w-32 h-32 text-[16px] p-3 inset-3'
  };

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
