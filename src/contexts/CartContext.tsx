import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { Product } from "@/types/product";

export type MlSize = "2ml" | "5ml" | "10ml";

export interface CartItem {
  productId: string;
  product: Product;
  size: MlSize;
  quantity: number;
  unitPrice: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, size: MlSize) => void;
  removeItem: (productId: string, size: MlSize) => void;
  updateQuantity: (productId: string, size: MlSize, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "lfclub-cart";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch (e) {
      console.error("Failed to load cart from localStorage", e);
    }
  }, []);

  // Persist cart to localStorage on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((product: Product, size: MlSize) => {
    const price = product.prices?.[size] ?? product.priceFrom;
    
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.productId === product.id && item.size === size
      );

      if (existingIndex >= 0) {
        // Item exists, increment quantity
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        };
        return updated;
      }

      // New item
      return [
        ...prev,
        {
          productId: product.id,
          product,
          size,
          quantity: 1,
          unitPrice: price,
        },
      ];
    });

    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId: string, size: MlSize) => {
    setItems((prev) =>
      prev.filter((item) => !(item.productId === productId && item.size === size))
    );
  }, []);

  const updateQuantity = useCallback(
    (productId: string, size: MlSize, quantity: number) => {
      if (quantity <= 0) {
        removeItem(productId, size);
        return;
      }

      setItems((prev) =>
        prev.map((item) =>
          item.productId === productId && item.size === size
            ? { ...item, quantity }
            : item
        )
      );
    },
    [removeItem]
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
