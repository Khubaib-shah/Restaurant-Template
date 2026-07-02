import React, { createContext, useContext, useState, useEffect } from 'react';
import { RestaurantConfig } from '../types/restaurant';
import { restaurantConfig } from '../config/restaurant.config';
import { toKebabCase } from '../lib/toKebabCase';

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

  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (
      obj: Record<string, any>,
      prefix = ""
    ) => {
      Object.entries(obj).forEach(([key, value]) => {

        const variable = prefix ? `${toKebabCase(prefix)}-${toKebabCase(key)}` : toKebabCase(key);

        if (typeof value === "object" && value !== null) {
          applyTheme(value, variable);
        } else {
          root.style.setProperty(`--${variable}`, String(value));
        }
      });
    };

    // Apply all theme colors
    applyTheme(config.theme.colors);

    // Assets
    root.style.setProperty(
      "--page-background-image",
      config.theme.assets.background.image ?? ""
    );

    root.style.setProperty(
      "--category-background-image",
      config.theme.assets.categoryBackground ?? ""
    );

    // Card Style
    root.setAttribute(
      "data-card-style",
      config.theme.cardStyle ?? "default"
    );
  }, [config]);


  const setLocation = (city: string, area: string) => {
    setCurrentLocationState({ city, area });
  };

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
