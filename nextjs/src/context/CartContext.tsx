"use client";

import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';
import { CartState, CartItem } from '../types/cart';
import { cartReducer, initialCartState } from '../lib/cart';
import { useRestaurant } from './RestaurantContext';

interface CartContextType {
  state: CartState;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  applyPromo: (code: string, discount: number) => void;
  removePromo: () => void;
  clearCart: () => void;
  subtotal: number;
  discount: number;
  tax: number;
  deliveryFee: number;
  total: number;
  itemCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutActive: boolean;
  setIsCheckoutActive: (active: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'restaurant_cart_state';

// SSR-safe localStorage helper
const safeLocalStorage = {
  getItem: (key: string): string | null => {
    if (typeof window === "undefined") return null;
    try { return window.localStorage.getItem(key); } catch { return null; }
  },
  setItem: (key: string, value: string): void => {
    if (typeof window === "undefined") return;
    try { window.localStorage.setItem(key, value); } catch { /* ignore */ }
  },
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { config } = useRestaurant();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutActive, setIsCheckoutActive] = useState(false);

  // Lazy initialize state from localStorage (SSR-safe)
  const [state, dispatch] = useReducer(cartReducer, initialCartState, () => {
    const stored = safeLocalStorage.getItem(LOCAL_STORAGE_KEY);
    try {
      return stored ? JSON.parse(stored) : initialCartState;
    } catch {
      return initialCartState;
    }
  });

  // Save state to localStorage whenever it changes
  useEffect(() => {
    safeLocalStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const addItem = (item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const applyPromo = (code: string, discount: number) => {
    dispatch({ type: 'APPLY_PROMO', payload: { code, discount } });
  };

  const removePromo = () => {
    dispatch({ type: 'REMOVE_PROMO' });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const subtotal = state.items.reduce((sum, item) => sum + item.originalUnitPrice * item.quantity, 0);
  const itemDiscounts = state.items.reduce((sum, item) => sum + (item.originalUnitPrice - item.unitPrice) * item.quantity, 0);
  const discount = itemDiscounts + state.promoDiscount;
  const tax = Math.round(subtotal * (config.taxPercent / 100));
  const deliveryFee = state.items.length > 0 ? config.deliveryInfo.fee : 0;
  const total = Math.max(0, subtotal + tax + deliveryFee - discount);
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateQuantity,
        applyPromo,
        removePromo,
        clearCart,
        subtotal,
        discount,
        tax,
        deliveryFee,
        total,
        itemCount,
        isCartOpen,
        setIsCartOpen,
        isCheckoutActive,
        setIsCheckoutActive,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
