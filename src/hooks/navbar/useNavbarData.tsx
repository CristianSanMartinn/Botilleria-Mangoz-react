import { useState } from "react";

export function useNavbarData() {
  const navbarImagenes = {
    logo: "/img/logon.jpg",
  };

  const [openCart, setOpenCart] = useState(false);

  const [cart, setCart] = useState([
    {
      id: 1,
      nombre: "Pisco Mistral 35° 750ml",
      precio: 9990,
      cantidad: 1,
      imagen: "/img/logon.jpg",
    },
  ]);

  const aumentar = (id: number) =>
    setCart((cart) =>
      cart.map((p) =>
        p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p
      )
    );

  const disminuir = (id: number) =>
    setCart((cart) =>
      cart.map((p) =>
        p.id === id && p.cantidad > 1
          ? { ...p, cantidad: p.cantidad - 1 }
          : p
      )
    );

  const vaciarCarrito = () => setCart([]);

  const total = cart.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return {
    ...navbarImagenes,

    cart,
    openCart,
    total,

    setOpenCart,
    aumentar,
    disminuir,
    vaciarCarrito,
  };
}
