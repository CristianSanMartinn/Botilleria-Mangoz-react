import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* BRAND */}
        <div className={styles.brand}>
          <img src="/img/logon.jpg" alt="Botillería Mangoz logo" />
          <h3>Botillería Mangoz</h3>
          <p>Tu tienda de confianza para bebidas y más.</p>
        </div>

        {/* LINKS */}
        <div className={styles.links}>
          <h4>Enlaces rápidos</h4>
          <ul>
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#offers">Ofertas</a></li>
            <li><a href="#catalogo">Catálogo</a></li>
            <li><a href="#events">Eventos</a></li>
            <li><a href="#about">Sobre Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        {/* REDES */}
        <div className={styles.redes}>
          <h4>Síguenos</h4>
          <ul>
            <li><a href="#" aria-label="Facebook">Facebook</a></li>
            <li><a href="#" aria-label="Instagram">Instagram</a></li>
            <li><a href="#" aria-label="Twitter">Tik Tok</a></li>
          </ul>
        </div>

        {/* HISTORIA */}
        <div className={styles.historia}>
            <h4>Nuestra historia</h4>
            <p>
              Botillería Mangoz nació con el objetivo de convertirse en un punto de
              encuentro para la comunidad de Melipilla, ofreciendo no solo bebidas de
              calidad, sino también una experiencia cercana y confiable.
              <br /><br />
              Con más de 20 años de trayectoria, hemos crecido junto a nuestros clientes,
              adaptándonos a sus necesidades y manteniendo siempre precios justos,
              promociones exclusivas y una atención personalizada que nos distingue.
            </p>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className={styles.bottom}>
        <p>© 2024 Botillería Mangoz. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
