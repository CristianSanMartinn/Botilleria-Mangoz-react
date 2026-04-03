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
          <div className={styles.divider1}></div>

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
          <div className={styles.divider2}></div>

          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">TikTok</a></li>
          </ul>
        </div>

        {/* HISTORIA */}
        <div className={styles.historia}>
          <h4>Nuestra historia</h4>
          <div className={styles.divider3}></div>

          <p className={styles.textoHistoria}>
            Botillería Mangoz nació con el objetivo de convertirse en un punto
            de encuentro para la comunidad de Melipilla.
            <br /><br />
            Con más de 20 años de trayectoria seguimos ofreciendo precios justos,
            promociones exclusivas y una atención cercana que nos caracteriza.
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