import { CartState, CartItem } from '../types/cart';

export type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { id: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'APPLY_PROMO'; payload: { code: string; discount: number } }
  | { type: 'REMOVE_PROMO' }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_CART'; payload: CartState };

export const initialCartState: CartState = {
  items: [],
  promoCode: null,
  promoDiscount: 0
};

export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex > -1) {
        const newItems = [...state.items];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + action.payload.quantity
        };
        return { ...state, items: newItems };
      }
      return { ...state, items: [...state.items, action.payload] };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      };
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id)
        };
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    }
    case 'APPLY_PROMO':
      return {
        ...state,
        promoCode: action.payload.code,
        promoDiscount: action.payload.discount
      };
    case 'REMOVE_PROMO':
      return {
        ...state,
        promoCode: null,
        promoDiscount: 0
      };
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        promoCode: null,
        promoDiscount: 0
      };
    case 'SET_CART':
      return action.payload;
    default:
      return state;
  }
};
