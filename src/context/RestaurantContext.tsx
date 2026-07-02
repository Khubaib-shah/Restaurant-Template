import React, { createContext, useContext, useState, useEffect } from 'react';
import { RestaurantConfig } from '../types/restaurant';
import { restaurantConfig } from '../config/restaurant.config';

interface RestaurantContextType {
  config: RestaurantConfig;
  currentLocation: {
    city: string;
    area: string;
  };
  setLocation: (city: string, area: string) => void;
  isLocationModalOpen: boolean;
  setIsLocationModalOpen: (open: boolean) => void;
}

const RestaurantContext = createContext<RestaurantContextType | undefined>(undefined);

export const RestaurantProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config] = useState<RestaurantConfig>(restaurantConfig);
  const [currentLocation, setCurrentLocationState] = useState({
    city: restaurantConfig.location.city,
    area: restaurantConfig.location.area,
  });
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  const setLocation = (city: string, area: string) => {
    setCurrentLocationState({ city, area });
  };

  // Inject brand colors dynamically
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--brand-primary', config.brand.primaryColor);
    root.style.setProperty('--brand-accent', config.brand.accentColor);
    
    // Derived hover color (slightly darker for buttons)
    root.style.setProperty('--brand-primary-hover', config.slug === 'ghalib' ? '#142d22' : '#222222');
  }, [config]);

  return (
    <RestaurantContext.Provider
      value={{
        config,
        currentLocation,
        setLocation,
        isLocationModalOpen,
        setIsLocationModalOpen,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error('useRestaurant must be used within a RestaurantProvider');
  }
  return context;
};
