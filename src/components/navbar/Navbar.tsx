import { useState } from "react";
import Styles from "./Navbar.module.css";
import { useCart } from "../../context/CartContext"; // Usamos el CartContext
import CartSidebar from "../cart/CartSidebar"; // Importamos el carrito lateral

export function Navbar() {
  const { cartItems, total } = useCart(); // Accedemos al carrito desde el contexto
  const [openCart, setOpenCart] = useState(false); // Controla si el carrito está abierto
  const [searchActive, setSearchActive] = useState(false); // Controla si el buscador está abierto

  return (
    <>
      <header className={Styles.header}>
        <nav className={Styles.nav}>
          {/* LOGO */}
          <div className={Styles.logo}>
            <img src="/img/logon.jpg" alt="logo" className={Styles.logoImg} />
            <div>
              <h1 className={Styles.logoTitle}>Botillería Premium</h1>
              <p className={Styles.logoSubtitle}>Los mejores precios de Melipilla</p>
            </div>
          </div>

          {/* LINKS */}
          <ul className={Styles.navLinks}>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#ofertas">Ofertas</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#eventos">Eventos</a></li>
            <li><a href="#ubicaciones">Ubicaciones</a></li>
          </ul>

          {/* SEARCH + CART */}
          <div className={Styles.headerActions}>
            {/* BUSCADOR */}
            <div className={Styles.searchContainer}>
              <input
                type="text"
                placeholder="Buscar productos..."
                className={`${Styles.searchInput} ${searchActive ? Styles.active : ""}`}
              />
              <button
                className={Styles.searchBtn}
                onClick={() => setSearchActive((prev) => !prev)}
              >
                🔍
              </button>
            </div>

            {/* CARRITO */}
            <button className={Styles.cartBtn} onClick={() => setOpenCart(true)}>
              🛒 Carrito
              <span className={Styles.cartCount}>{cartItems.length}</span> {/* Muestra la cantidad de productos en el carrito */}
            </button>
          </div>
        </nav>
      </header>

      {/* Carrito Lateral */}
      <CartSidebar isOpen={openCart} onClose={() => setOpenCart(false)} />
    </>
  );
}

export default Navbar;
