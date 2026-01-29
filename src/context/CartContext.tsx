import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

// Define la estructura del producto en el carrito
export interface ProductoCarrito {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  cantidad: number;
}

interface CartContextProps {
  cartItems: ProductoCarrito[];
  addToCart: (producto: Omit<ProductoCarrito, "cantidad">, cantidad: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, cantidad: number) => void;
  total: number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<ProductoCarrito[]>([]);

  const addToCart = (producto: Omit<ProductoCarrito, "cantidad">, cantidad: number) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === producto.id);
      if (existing) {
        return prev.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + cantidad } : item
        );
      }
      return [...prev, { ...producto, cantidad }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, cantidad: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, cantidad } : item))
    );
  };

  const clearCart = () => setCartItems([]);

  const total = cartItems.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, total, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
