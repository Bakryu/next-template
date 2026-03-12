'use client';

import { useContext } from 'react';
import { CartContext } from '@/components/cart/CartProvider';
import type { CartContextType } from '@/types/cart.types';

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
