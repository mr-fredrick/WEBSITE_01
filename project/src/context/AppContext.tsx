import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Product, CartItem, User } from '../types';
import { mockProducts } from '../data/mockData';

interface AppState {
  products: Product[];
  cart: CartItem[];
  user: User | null;
  wishlist: string[];
  isCartOpen: boolean;
  isMenuOpen: boolean;
  searchQuery: string;
  selectedCategory: string;
  selectedFilters: {
    size: string[];
    color: string[];
    priceRange: [number, number];
  };
}

type AppAction = 
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_CART_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'TOGGLE_WISHLIST'; payload: string }
  | { type: 'SET_CART_OPEN'; payload: boolean }
  | { type: 'SET_MENU_OPEN'; payload: boolean }
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'SET_CATEGORY'; payload: string }
  | { type: 'SET_FILTERS'; payload: Partial<AppState['selectedFilters']> }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_USER'; payload: User };

const initialState: AppState = {
  products: mockProducts,
  cart: [],
  user: null,
  wishlist: [],
  isCartOpen: false,
  isMenuOpen: false,
  searchQuery: '',
  selectedCategory: 'all',
  selectedFilters: {
    size: [],
    color: [],
    priceRange: [0, 1000]
  }
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => 
        item.id === action.payload.id && 
        item.selectedSize === action.payload.selectedSize && 
        item.selectedColor === action.payload.selectedColor
      );
      
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id && 
            item.selectedSize === action.payload.selectedSize && 
            item.selectedColor === action.payload.selectedColor
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      }
      
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };

    case 'UPDATE_CART_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };

    case 'TOGGLE_WISHLIST':
      const isInWishlist = state.wishlist.includes(action.payload);
      return {
        ...state,
        wishlist: isInWishlist
          ? state.wishlist.filter(id => id !== action.payload)
          : [...state.wishlist, action.payload]
      };

    case 'SET_CART_OPEN':
      return { ...state, isCartOpen: action.payload };

    case 'SET_MENU_OPEN':
      return { ...state, isMenuOpen: action.payload };

    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };

    case 'SET_CATEGORY':
      return { ...state, selectedCategory: action.payload };

    case 'SET_FILTERS':
      return {
        ...state,
        selectedFilters: { ...state.selectedFilters, ...action.payload }
      };

    case 'CLEAR_CART':
      return { ...state, cart: [] };

    case 'SET_USER':
      return { ...state, user: action.payload, wishlist: action.payload.wishlist };

    default:
      return state;
  }
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load user data and cart from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('fashionUser');
    const savedCart = localStorage.getItem('fashionCart');
    
    if (savedUser) {
      dispatch({ type: 'SET_USER', payload: JSON.parse(savedUser) });
    }
    
    if (savedCart) {
      const cart = JSON.parse(savedCart);
      cart.forEach((item: CartItem) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
      });
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('fashionCart', JSON.stringify(state.cart));
  }, [state.cart]);

  // Save user to localStorage
  useEffect(() => {
    if (state.user) {
      localStorage.setItem('fashionUser', JSON.stringify(state.user));
    }
  }, [state.user]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};