import { useState } from "react";
import Styles from "./Navbar.module.css";
import { useNavbarData } from "../../hooks/navbar/useNavbarData";

export function Navbar() {
  const {
    logo,
    cart,
    openCart,
    setOpenCart,
    aumentar,
    disminuir,
    vaciarCarrito,
    total,
  } = useNavbarData();

  const [searchActive, setSearchActive] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className={Styles.header}>
        <nav className={Styles.nav}>

          {/* LOGO */}
          <div className={Styles.logo}>
            <img src={logo} alt="logo" className={Styles.logoImg} />
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
            <button
              className={Styles.cartBtn}
              onClick={() => setOpenCart(true)}
            >
              🛒 Carrito
              <span className={Styles.cartCount}>{cart.length}</span>
            </button>

          </div>
        </nav>
      </header>

      {/* FONDO OSCURO */}
      {openCart && (
        <div
          className={Styles.overlay}
          onClick={() => setOpenCart(false)}
        />
      )}

      {/* SIDEBAR DEL CARRITO */}
      <div className={`${Styles.sidebar} ${openCart ? Styles.open : ""}`}>
        <div className={Styles.sidebarHeader}>
          <h3>Tu Carrito</h3>
          <button onClick={() => setOpenCart(false)}>✖</button>
        </div>

        <div className={Styles.sidebarItems}>
          {cart.map((item) => (
            <div key={item.id} className={Styles.sidebarItem}>
              <img src={item.imagen} alt="" className={Styles.sidebarImage} />

              <div className={Styles.sidebarInfo}>
                <p>{item.nombre}</p>
                <p className={Styles.sidebarPrice}>
                  ${item.precio.toLocaleString()}
                </p>

                {/* CANTIDAD */}
                <div className={Styles.sidebarQuantity}>
                  <button
                    className={Styles.quantityButton}
                    onClick={() => disminuir(item.id)}
                  >
                    -
                  </button>

                  <span>{item.cantidad}</span>

                  <button
                    className={Styles.quantityButton}
                    onClick={() => aumentar(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TOTAL */}
        <div className={Styles.sidebarFooter}>
          <p><strong>Total:</strong> ${total.toLocaleString()}</p>

          <button className={Styles.clearButton} onClick={vaciarCarrito}>
            Vaciar Carrito
          </button>

          <button className={Styles.checkoutButton}>
            Finalizar Compra
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;