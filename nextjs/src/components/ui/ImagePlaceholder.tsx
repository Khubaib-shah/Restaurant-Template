import Image from "next/image";
import { useRestaurant } from '@/context/RestaurantContext';
import React from 'react';

interface ImagePlaceholderProps {
  className?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ className = "" }) => {
  const { config } = useRestaurant();

  return (
    <div className={`w-full h-full flex items-center justify-center bg-background-card ${className}`}>
      <Image
        src={config.logo}
        alt={config.name}
        width={160}
        height={160}
        className="object-contain opacity-100 blur-[1px] scale-90"
        unoptimized={config.logo.startsWith('data:')}
      />
    </div>
  );
};
