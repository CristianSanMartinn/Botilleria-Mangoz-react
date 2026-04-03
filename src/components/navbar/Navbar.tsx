import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        
        {/* LOGO */}
        <div className={styles.logo}>
          <img
            src="/img/logon.jpg"
            alt="Logo Barbería"
            className={styles.logoImg}
          />
          <h1 className={styles.logoTitle}>Botilleria Mangoz</h1>
        </div>

        {/* BOTÓN HAMBURGUESA */}
        <div
          className={`${styles.hamburguesa} ${menuOpen ? styles.activo : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* LINKS */}
        <ul
          className={`${styles.navLinks} ${
            menuOpen ? styles.menuAbierto : ""
          }`}
        >
          <li><a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a></li>
          <li><a href="#nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a></li>
          <li><a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a></li>
          <li><a href="#barberos" onClick={() => setMenuOpen(false)}>Barberos</a></li>
          <li><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a></li>
        </ul>

      </nav>
    </header>
  );
};

export default Navbar;
