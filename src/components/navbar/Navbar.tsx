"use client";
import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Franja promocional superior */}
      <div className={styles.promoStrip}>
        🍺 DESPACHO EXPRESS A DOMICILIO &nbsp;·&nbsp; ABIERTO HASTA LAS 2AM
        &nbsp;·&nbsp; PRECIOS ÚNICOS EN MELIPILLA
      </div>

      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <nav className={styles.nav}>
          {/* LOGO */}
          <div className={styles.logo}>
            <div className={styles.logoBox}>
              <img
                src="/img/logon.jpg"
                alt="Logo Botillería Mangoz"
                className={styles.logoImg}
              />
            </div>
            <div className={styles.logoTexts}>
              <h1 className={styles.logoTitle}>Mangoz</h1>
              <span className={styles.logoSub}>Botillería</span>
            </div>
          </div>

          {/* LINKS DESKTOP */}
          <ul className={`${styles.navLinks} ${menuOpen ? styles.menuAbierto : ""}`}>
            {[
              { href: "#inicio", label: "Inicio" },
              { href: "#productos", label: "Productos" },
              { href: "#ofertas", label: "Ofertas" },
              { href: "#ubicaciones", label: "Tiendas" },
              { href: "#contacto", label: "Contacto" },
            ].map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={() => setMenuOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + HAMBURGUESA */}
          <div className={styles.navRight}>
            <a href="#productos" className={styles.ctaBtn}>
              Pedir Ahora
            </a>
            <button
              className={`${styles.hamburguesa} ${menuOpen ? styles.activo : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;