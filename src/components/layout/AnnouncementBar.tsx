import React from 'react';
import { useRestaurant } from '../../context/RestaurantContext';

export const AnnouncementBar: React.FC = () => {
  const { config } = useRestaurant();

  if (!config.announcementText) return null;

  return (
    <div
      id="announcement-bar"
      className="hidden bg-brand-accent  text-text-inverse h-9 flex items-center justify-center px-4 text-[13px] font-medium tracking-wide text-center relative z-[110]"
    >
      <span>{config.announcementText}</span>
    </div>
  );
};
