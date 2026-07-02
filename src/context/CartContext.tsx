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
  subtotal: number;       // calculated on originalUnitPrice
  discount: number;       // total savings (original - discounted) + promoDiscount
  tax: number;            // tax calculated on original subtotal
  deliveryFee: number;
  total: number;          // grand total: subtotal + tax + deliveryFee - discount
  itemCount: number;      // total items in cart
  isCartOpen: boolean;    // cart drawer/sidebar state on mobile/desktop
  setIsCartOpen: (open: boolean) => void;
  isCheckoutActive: boolean;
  setIsCheckoutActive: (active: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'ghalib_cart_state';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { config } = useRestaurant();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutActive, setIsCheckoutActive] = useState(false);

  // Lazy initialize state from localStorage
  const [state, dispatch] = useReducer(cartReducer, initialCartState, () => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      return stored ? JSON.parse(stored) : initialCartState;
    } catch {
      return initialCartState;
    }
  });

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
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

  // --- Derived Calculations (Matching reference math perfectly) ---
  
  // subtotal is computed on the originalUnitPrice (basePrice equivalent)
  const subtotal = state.items.reduce((sum, item) => sum + item.originalUnitPrice * item.quantity, 0);

  // savings from item discounts: originalUnitPrice - unitPrice
  const itemDiscounts = state.items.reduce((sum, item) => sum + (item.originalUnitPrice - item.unitPrice) * item.quantity, 0);
  
  const discount = itemDiscounts + state.promoDiscount;

  // tax computed on original subtotal (as per screenshot: 15% of 1250 is 187.5 -> rounded to 188)
  const tax = Math.round(subtotal * (config.taxPercent / 100));

  const deliveryFee = state.items.length > 0 ? config.deliveryInfo.fee : 0;

  // grand total
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
        setIsCheckoutActive
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
