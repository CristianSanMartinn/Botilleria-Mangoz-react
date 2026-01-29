import { useState } from "react";

export interface CartItem {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  cantidad: number;
}

export function useCartDate() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (
    producto: Omit<CartItem, "cantidad">,
    cantidad: number
  ) => {
    setCart((prev) => {
      const existe = prev.find((p) => p.id === producto.id);

      if (existe) {
        return prev.map((p) =>
          p.id === producto.id
            ? { ...p, cantidad: p.cantidad + cantidad }
            : p
        );
      }

      return [...prev, { ...producto, cantidad }];
    });
  };

  const removeFromCart = (id: number) =>
    setCart((prev) => prev.filter((p) => p.id !== id));

  const clearCart = () => setCart([]);

  const total = cart.reduce(
    (acc, p) => acc + p.precio * p.cantidad,
    0
  );

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    total,
  };
}
