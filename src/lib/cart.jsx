import { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (product) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.name === product.name);
      if (existingItem) {
        return currentItems.map((item) => item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item);
      }
      return [...currentItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (name, quantity) => {
    setItems((currentItems) => quantity > 0
      ? currentItems.map((item) => item.name === name ? { ...item, quantity } : item)
      : currentItems.filter((item) => item.name !== name));
  };

  const clearCart = () => setItems([]);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.amount * item.quantity, 0);

  const value = useMemo(() => ({
    items,
    itemCount,
    total,
    addItem,
    updateQuantity,
    clearCart,
  }), [items, itemCount, total]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) {
    throw new Error('useCart must be used inside CartProvider');
  }
  return cart;
}

export function formatPrice(amount) {
  return `₹${amount.toLocaleString('en-IN')}`;
}
